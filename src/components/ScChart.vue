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
            chartData: {type: Array, required: true, default: ()=>[]},
            chartNames: {type: Array, default: ()=>[]},
            chartLabels: {type: Array, default: () => []},
            chartColors: {type: Array, default: () => []},
            chartBorderColors: {type: Array, default: () => []},
            borderWidth: {type: [Array,Number], default: () => 2},
            legend: {type: Boolean, default: ()=>false},
            legendFontColor: {type: String, default: 'black'},
            tooltips: {type: Boolean, default: ()=>false},
            pieAngle: {type: Number, default: 0},
            pieCutout: {type: Number, default: 0},
            pieCircumference: {type: Number, default: 360},
            barWidth: {type: Number, default: 0.75},
            barPolygon: {type: Boolean, default: ()=>false},
            lines: {type: Boolean, default: false},
            maxValue: {type: Number, default: -1},
            minValue: {type: Number, default: 0},
            tick: {type: Number, default: -1},
            pyramid: {type: Boolean, default: false},
            xAxisPos: {type: String, default: 'bottom'},
            yAxisPos: {type: String, default: 'left'}
        },
        data: function(){
            return {}
        },
        mounted() {
            this.chart = new Chart(this.$refs.chart, {
                type: this.chartType,
                data: this.chartConfig(),
                options: this.chartOptions()
            });
        },
        methods: {
            chartConfig: function() {
                let ds = [],
                    dlabel = this.chartLabels;

                if(this.chartType==='bar' || this.chartType==='horizontalBar') {
                    if(this.pyramid){
                        for (let i = 0; i < this.chartData.length; i++) {
                            ds.push({
                                label: this.chartNames[i],
                                data: this.chartData[i],
                                backgroundColor: this.chartColors[i],
                                borderColor: this.chartColors[i],
                                borderWidth: this.borderWidth,
                                categoryPercentage: this.barWidth,
                                barPercentage: 1,
                                order: 2
                            });
                        }
                    }else {
                        ds = [{
                            data: this.chartData,
                            backgroundColor: this.chartColors,
                            borderWidth: this.borderWidth,
                            barPercentage: 1,
                            categoryPercentage: this.barWidth,
                            order: 2
                        }];

                        if (this.barPolygon) {
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
                    }
                }else if(this.chartType==='pie'){
                    ds = [{
                        data: this.chartData,
                        backgroundColor: this.chartColors,
                        borderWidth: this.borderWidth,
                        barPercentage: 1,
                        categoryPercentage: this.barWidth,
                        order: 2
                    }];
                }else if(this.chartType==='line') {
                    if (this.lines) {
                        for (let i = 0; i < this.chartData.length; i++) {
                            ds.push({
                                label: this.chartNames[i],
                                data: this.chartData[i],
                                backgroundColor: 'transparent',
                                borderColor: this.chartColors[i],
                                lineTension: 0
                            });
                        }

                    } else {
                        ds = [{
                            data: this.chartData,
                            backgroundColor: 'transparent',
                            borderColor: 'black',
                            lineTension: 0
                        }];
                    }
                }else if(this.chartType==='radar'){
                    for (let i = 0; i < this.chartData.length; i++) {
                        ds.push({
                            label: this.chartNames[i],
                            data: this.chartData[i],
                            backgroundColor: this.chartColors[i],
                            borderColor: this.chartBorderColors[i]!==undefined?this.chartBorderColors[i]:this.chartColors[i],
                            borderWidth: this.borderWidth,
                            lineTension: 0
                        });
                    }
                }else{
                    console.log('NOT FOUND', this.chartType);
                }
                return  {
                    datasets: ds,
                    labels: dlabel,
                }
            },
            chartOptions: function(){
                let options = {};
                if(this.chartType==='bar') {
                    options = {
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        min: this.minChartValue(),
                                        max: this.maxChartValue()
                                    }
                                }
                            ]
                        }
                    };
                }else if(this.chartType==='horizontalBar'){
                    options = {
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [
                                {

                                    stacked: true,
                                    ticks: {
                                        min: this.minChartValue(),
                                        max: this.maxChartValue()
                                    }
                                }
                            ],
                            yAxes: [
                                {
                                    display: false,
                                    position: this.yAxisPos,
                                    stacked: true,
                                    rtl: true
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
                }else if(this.chartType==='line'){
                    options = {
                        legend: {
                            display: true
                        },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        min: 0,
                                        max: this.maxChartValue(),
                                    }
                                }
                            ]
                        }
                    };
                    if(this.tick!==-1){
                        options.scales.yAxes[0].ticks.stepSize = this.tick;
                    }
                }else if(this.chartType==='radar'){
                    options = {
                        legend: {
                            display: true
                        },
                    }
                }
                return options;
            },
            maxChartValue: function() {
                if(this.maxValue!==-1) {
                    return this.maxValue;
                }else{
                    let v = 0;
                    this.chartData.forEach(function (value) {
                        v = Math.max(value, v);
                    });

                    return Math.max(v * 1.05, v + 5)
                }
            },
            minChartValue: function(){
                if(this.minValue!==-1) {
                    return this.minValue;
                }else{
                    let v = 0;
                    this.chartData.forEach(function (value) {
                        v = Math.min(value, v);
                    });

                    return Math.max(v * 1.05, v + 5)
                }
            }
        },
        watch: {
            chartData: function() {
                this.chart.data = this.chartConfig();

                if(this.chartType==='bar' && this.chart.options!==undefined) {
                    this.chart.options.scales.yAxes[0].ticks.max = this.maxChartValue();
                }
                this.chart.update();
            }
        }
    }
</script>

<style scoped>
</style>