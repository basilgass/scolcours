<template>
    <section>
        <div class="headline mt-10 mb-5">Autres graphiques</div>

        <v-row justify="center">
            <v-col cols="12" class="text-center">
                <div class="title mt-4">Pyramide des âges (WIP)</div>
            </v-col>
            <v-col cols="6" md="4">
                <sc-chart
                        chart-type="horizontalBar"
                        :max-value="0"
                        :min-value="-100"
                        :pyramid="true"
                        :chart-data="[[-8,-12,-20,-40,-52,-60,-64,-58,-60]]"
                        :chart-labels="['[0-10]','[11-20]','[21-30]','[31-40]','[41-50]','[51-60]','[61-70]','[71-80]','80+']"
                        :chart-names="['Hommes']"
                        :chart-colors="['blue']"
                        y-axis-pos="right"
                ></sc-chart>
            </v-col>
            <v-col cols="6" md="4">
                <sc-chart
                        chart-type="horizontalBar"
                        :min-value="0"
                        :max-value="100"
                        :pyramid="true"
                        :chart-data="[[12,16,23,43,57,62,67,60,63]]"
                        :chart-labels="['[0-10]','[11-20]','[21-30]','[31-40]','[41-50]','[51-60]','[61-70]','[71-80]','80+']"
                        :chart-names="['Femmes']"
                        :chart-colors="['red']"
                ></sc-chart>
            </v-col>

        </v-row>

        <v-row justify="center">
            <v-col cols="12" class="text-center">
                <div class="title mt-4">Radar</div>
            </v-col>
            <v-col cols="12" md="8">
                <sc-chart
                        chart-type="radar"
                        :pyramid="true"
                        :chart-data="[[16, 9, 12, 4, 3], [10, 6, 4, 9, 12]]"
                        :chart-labels="['Mathématiques', 'Biologie', 'Chimie', 'Français', 'Allemand']"
                        :chart-names="['Scientifiques', 'Litéraires']"
                        :chart-colors="['rgba(255, 99, 132,0.25)', 'rgba(153, 102, 255,0.25)', 'rgba(8, 192, 61, 0.25)']"
                        :chart-border-colors="['rgba(255, 99, 132,0.75)', 'rgba(153, 102, 255,0.75)', 'rgba(8, 192, 61, 0.75)']"
                        y-axis-pos="right"
                ></sc-chart>
            </v-col>
        </v-row>
    </section>

</template>


<script>
    import ScChart from "../../../../../components/ScChart";
    import {Pi} from "../../../../../../public/js/pi"

    export default {
        name: "statistiqueAutresGraphiques",
        components: {ScChart},
        props: {
            editMode: {type: Boolean, default: false},
            colors: {type: Array, default: function(){
                    return [
                        'rgba(255, 99, 132,0.75)',
                        'rgba(255, 159, 64,0.75)',
                        'rgba(255, 205, 86,0.75)',
                        'rgba(75, 192, 192,0.75)',
                        'rgba(54, 162, 235,0.75)',
                        'rgba(8, 192, 61, 0.75)',
                        'rgba(153, 102, 255,0.75)',
                        'rgba(201, 203, 207,0.75)'
                    ]
                }
            }
        },
        data: function () {
            return {
                distributionContinue: [
                    {nom: '0-10', effectif: 40, couleur: this.colors[0]},
                    {nom: '11-20', effectif: 80, couleur: this.colors[1]},
                    {nom: '21-30', effectif: 110, couleur: this.colors[2]},
                    {nom: '31-40', effectif: 140, couleur: this.colors[3]},
                    {nom: '41-50', effectif: 150, couleur: this.colors[4]},
                    {nom: '51-60', effectif: 130, couleur: this.colors[5]},
                    {nom: '61-70', effectif: 45, couleur: this.colors[6]},
                    {nom: '71-80', effectif: 35, couleur: this.colors[7]},
                ],
                distributionContinueGraphique: [],
                frequencesCalculees: {},
                dataGraphiques: {}
            };
        },
        computed: {
            clabel: function () {
                let d = [];
                this.distributionContinue.forEach(value => d.push(value.nom));
                return d;
            },
            ccolor: function () {
                let d = [];
                this.distributionContinue.forEach(value => d.push(value.couleur));
                return d;
            }
        },
        methods: {
            updateGraphiques: function(e){
                this.dataGraphiques = e;
            },
            updateFrequences: function(e){
                this.frequencesCalculees = e;
            }
        },
        mounted() {

            this.distributionContinueGraphique = [{nom: '0', effectif: 0, couleur: 'transparent'}];
            for(let distrib of this.distributionContinue){
                distrib.effectif = Pi.Numeric.randomInt(distrib.effectif-10, distrib.effectif+10);

                this.distributionContinueGraphique.push({
                    nom: distrib.nom.split('-')[1],
                    effectif: distrib.effectif,
                    couleur: distrib.couleur
                });

            }
        }
    }
</script>

