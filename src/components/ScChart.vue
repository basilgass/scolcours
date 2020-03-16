<template>
    <canvas class="sc-histogram-chart" ref="chart">
    </canvas>
</template>

<script>
    import Chart from 'chart.js';
    export default {
        name: "ScChart",
        props: {
            chartType: {type: String, default: 'bar'},
            chartData: {type: Array, required: true},
            chartLabels: {type: Array, default: () => []},
            chartColors: {type: Array, default: () => []},
            borderWidth: {type: [Array,Number], default: () => 2},
            legend: {type: Boolean, default: ()=>false},
            legendFontColor: {type: String, default: 'black'},
            tooltips: {type: Boolean, default: ()=>false},
            pieAngle: {type: Number, default: 0},
            pieCutout: {type: Number, default: 0},
            pieCircumference: {type: Number, default: 360},
            barWidth: {type: Number, default: 0.75},
            barPolygon: {type: Boolean, default: ()=>false}
        },
        mounted() {
            let config = this.chartConfig();
            let options = {};

            if(this.chartType==='bar'){
                options = {
                    legend: {
                        display: false
                    },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    min: 0,
                                    max: this.maxChartValue()
                                }
                            }
                        ]
                    }
                };
            }else if(this.chartType==='pie'){
                options = {
                    responsive: true,
                        rotation: (-this.pieAngle-90)*Math.PI/180,
                        cutoutPercentage: this.pieCutout,
                        circumference: this.pieCircumference/360*2*Math.PI,
                        legend: {
                        display: this.legend,
                            labels: {
                            fontColor: this.legendFontColor
                        }
                    },
                    tooltips: {
                        enabled: this.tooltips
                    },
                    animation: {
                        animateRotate: true
                    }
                }
            }
            this.chart = new Chart(this.$refs.chart, {
                type: this.chartType,
                data: config,
                options: options
            });
        },
        methods: {
            chartConfig: function() {
                let ds = [{
                    data: this.chartData,
                    backgroundColor: this.chartColors,
                    borderWidth: this.borderWidth,
                    barPercentage: 1,
                    categoryPercentage: this.barWidth,
                    order: 2
                }];

                if(this.barPolygon) {
                    ds.push({
                        label: 'Line Dataset',
                        data: this.chartData,
                        type: 'line',
                        backgroundColor: 'transparent',
                        borderColor: 'black',
                        order: 1,
                        lineTension: 0
                    });
                }

                return  {
                    datasets: ds,
                    labels: this.chartLabels,
                }
            },
            maxChartValue: function() {
                let v = 0;
                this.chartData.forEach(function(value){
                    v = Math.max(value, v);
                });

                return Math.max(v*1.05, v+5)
            }
        },
        watch: {
            chartData: function() {
                this.chart.data = this.chartConfig();
                if(this.chartType==='bar') {
                    this.chart.options.scales.yAxes[0].ticks.max = this.maxChartValue();
                }
                this.chart.update();
            }
        }
    }
</script>

<style scoped>
</style>