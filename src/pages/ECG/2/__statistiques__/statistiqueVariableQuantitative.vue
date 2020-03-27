<template>
    <section>
        <div class="headline mt-10 mb-5">Variable quantitative</div>

        <div>
            Avec des variables quantitatives, on regroupe les modalités (valeurs possibles) par <strong>classes</strong>.
            En principe, on essaie de regouper ces nombres en respectant les rêgles suivantes:

            <ul class="mt-5 mb-5 ml-10">
                <li>Entre 8 et 10 classes différentes</li>
                <li>Chaque classe à la même taille</li>
                <li>La taille d'une classe doit être un mulitiple de 5</li>
            </ul>

            Une classe est notée <strong>[ 10 ; 15 ]</strong>. Cela veut dire que l'on comptabilise toutes les
            modalités de 10 à 15.
        </div>

        <div class="mt-4">
            <span class="title">Données brutes</span>
            <v-switch class="ml-5 d-inline-block" v-model="distributionContinueRawDataAfficher" :label="`${distributionContinueRawDataAfficher?'Cacher':'Afficher'} les données brutes`"></v-switch>
        </div>
        <v-slide-x-transition>
            <v-row v-show="distributionContinueRawDataAfficher">
                <v-col cols="4" sm="3" md="2" v-for="(d,idx) in distributionContinueRawData" :key="idx">
                    {{d}}
                </v-col>
            </v-row>
        </v-slide-x-transition>

        <div class="title mt-4">Tableau de distribution par classes</div>
        <sc-chart-distribution
                :chart-data=distributionContinue
                :edit-mode=editMode
                :label-as-class=true
                :normalize=true
                v-on:frequences="updateGraphiques"
        ></sc-chart-distribution>

        <div class="title mt-4">Histogramme et polygone de fréquence</div>
        <sc-chart
                chart-type="bar"
                :chart-data="dataGraphiques.effectifs"
                :chart-labels="dataGraphiques.labels"
                :chart-colors="ccolor"
                :bar-width="1"
                :bar-polygon="true"
                ></sc-chart>
    </section>

</template>


<script>
    import ScChartDistribution from "../../../../components/ScChartDistribution";
    import ScChart from "../../../../components/ScChart";
    import {Pi} from "../../../../../public/js/pi"

    function shuffleArray(d){
        for (let i = d.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = d[i];
            d[i] = d[j];
            d[j] = temp;
        }
    }

    export default {
        name: "statistiqueVariableQuantitative",
        components: {ScChartDistribution, ScChart},
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
                distributionContinueRawDataAfficher: false,
                distributionContinueRawData: [],
                distributionContinue: [
                    {nom: '0-10', effectif: 5, couleur: this.colors[0]},
                    {nom: '11-20', effectif: 8, couleur: this.colors[1]},
                    {nom: '21-30', effectif: 10, couleur: this.colors[2]},
                    {nom: '31-40', effectif: 12, couleur: this.colors[3]},
                    {nom: '41-50', effectif: 17, couleur: this.colors[4]},
                    {nom: '51-60', effectif: 11, couleur: this.colors[5]},
                    {nom: '61-70', effectif: 9, couleur: this.colors[6]},
                    {nom: '71-80', effectif: 6, couleur: this.colors[7]},
                ],
                dataGraphiques: {}
            };
        },
        computed: {
            cdata: function () {
                let d = [];
                this.distributionContinue.forEach(value => d.push(value.effectif));
                return d;
            },
            clabel: function () {
                let d = [];
                this.distributionContinue.forEach(value => d.push(value.nom));
                return d;
            },
            ccolor: function () {
                let d = [];
                this.distributionContinue.forEach(value => d.push(value.couleur));
                return d;
            },
        },
        methods: {
            updateGraphiques: function(e){
                this.dataGraphiques = e;
            },
        },
        mounted() {
            this.distributionContinueRawData = [];
            for(let distrib of this.distributionContinue){
                distrib.effectif = Pi.Numeric.randomInt(distrib.effectif-3, distrib.effectif+3);

                for(let i=0; i<distrib.effectif; i++){
                    let minmax = distrib.nom.split('-').map(x=>parseInt(x));
                    this.distributionContinueRawData.push(Pi.Numeric.randomInt(...minmax));
                }
            }

            shuffleArray(this.distributionContinueRawData);
        }
    }
</script>

