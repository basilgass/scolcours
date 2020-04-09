<template>
    <section>
        <sc-titre-section id="variable-qualitative">Variable qualitative</sc-titre-section>

        <div class="mt-4">
            <sc-titre-sous-titre>Données brutes</sc-titre-sous-titre>
            <v-switch class="ml-5 d-inline-block" v-model="distributionRawDataAfficher" :label="`${distributionRawDataAfficher?'Cacher':'Afficher'} les données brutes`"></v-switch>
        </div>
        <v-slide-x-transition>
            <v-row v-show="distributionRawDataAfficher">
                <v-col cols="4" sm="3" md="2" v-for="(d,idx) in distributionRawData" :key="idx">
                    {{d}}
                </v-col>
            </v-row>
        </v-slide-x-transition>

        <sc-titre-partie>Tableau de distribution</sc-titre-partie>
        <sc-chart-distribution ref="chartQualitatif" :chart-data=distribution :edit-mode=editMode />

        <sc-titre-partie>Graphiques</sc-titre-partie>
        <v-row>
                <v-col cols="6" class="text-center">
                    <div class="subtitle-1">Histogramme</div>
                    <sc-chart
                            :chart-data="hdata"
                            :chart-labels="ldata"
                            :chart-colors="coldata"></sc-chart>
                </v-col>

                <v-col cols="6" class="text-center">
                    <div class="subtitle-1">Diagramme en secteurs circulaires</div>
                    <sc-chart
                            chart-type="pie"
                            :chart-data="hdata"
                            :chart-labels="ldata"
                            :chart-colors="coldata"
                    ></sc-chart>
                </v-col>
            </v-row>
    </section>
</template>


<script>
    import ScChartDistribution from "../../../../../components/ScChartDistribution";
    import ScChart from "../../../../../components/ScChart";
    import {Pi} from "../../../../../../public/js/pi"
    import ScTitreSection from "../../../../../components/Titles/ScTitre1Section";
    import ScTitreSousTitre from "../../../../../components/Titles/ScTitre3SousTitre";
    import ScTitrePartie from "../../../../../components/Titles/ScTitre2Partie";

    function shuffleArray(d){
        for (let i = d.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = d[i];
            d[i] = d[j];
            d[j] = temp;
        }
    }

     export default {
        name: "statistiqueVariableQualitative",
        components: {ScTitrePartie, ScTitreSousTitre, ScTitreSection, ScChartDistribution, ScChart},
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
                distributionRawDataAfficher: false,
                distributionRawData: [],
                distribution: [
                        {nom: 'Jaune', effectif: 8, couleur: this.colors[0]},
                        {nom: 'Rouge', effectif: 5, couleur: this.colors[1]},
                        {nom: 'Vert', effectif: 7, couleur: this.colors[2]},
                        {nom: 'Bleu', effectif: 4, couleur: this.colors[3]},
                ],
            };
        },
        computed: {
            hdata: function () {
                let d = [];
                this.distribution.forEach(value => d.push(value.effectif));
                return d;
            },
            ldata: function () {
                let d = [];
                this.distribution.forEach(value => d.push(value.nom));
                return d;
            },
            coldata: function () {
                let d = [];
                this.distribution.forEach(value => d.push(value.couleur));
                return d;
            },
        },
         mounted() {
             this.distributionRawData = [];

             for(const qualitatif of this.distribution){
                 qualitatif.effectif = Pi.Numeric.randomInt(1, 10);
                 for(let i=0; i<qualitatif.effectif; i++){
                     this.distributionRawData.push(qualitatif.nom);
                 }
             }
             shuffleArray(this.distributionRawData);
         }
     }
</script>

