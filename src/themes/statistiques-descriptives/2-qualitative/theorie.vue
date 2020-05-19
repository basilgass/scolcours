<template>
    <section>
        <sc-titre-section id="variable-qualitative">Variable qualitative</sc-titre-section>

        <div class="mt-4">
            <sc-titre-sous-titre>Données brutes</sc-titre-sous-titre>
            <v-switch :label="`${distributionRawDataAfficher?'Cacher':'Afficher'} les données brutes`" class="ml-5 d-inline-block" v-model="distributionRawDataAfficher"></v-switch>
        </div>
        <v-slide-x-transition>
            <v-row v-show="distributionRawDataAfficher">
                <v-col :key="idx" cols="4" md="2" sm="3" v-for="(d,idx) in distributionRawData">
                    {{d}}
                </v-col>
            </v-row>
        </v-slide-x-transition>

        <sc-titre-partie>Tableau de distribution</sc-titre-partie>
        <sc-chart-distribution :chart-data=distribution :edit-mode=editMode ref="chartQualitatif"/>

        <sc-titre-partie>Graphiques</sc-titre-partie>
        <v-row>
            <v-col class="text-center" cols="6">
                <div class="subtitle-1">Histogramme</div>
                <sc-chart
                        :chart-colors="coldata"
                        :chart-data="hdata"
                        :chart-labels="ldata"></sc-chart>
            </v-col>

            <v-col class="text-center" cols="6">
                <div class="subtitle-1">Diagramme en secteurs circulaires</div>
                <sc-chart
                        :chart-colors="coldata"
                        :chart-data="hdata"
                        :chart-labels="ldata"
                        chart-type="pie"
                ></sc-chart>
            </v-col>
        </v-row>
    </section>
</template>


<script>
    import {Pi} from "../../../../public/js/pi"
    import ScTitreSection from "../../../components/Titles/ScTitre1Section";
    import ScTitrePartie from "../../../components/Titles/ScTitre2Partie";
    import ScChartDistribution from "../../../components/ScChartDistribution";
    import ScChart from "../../../components/ScChart";
    import ScTitreSousTitre from "../../../components/Titles/ScTitre3SousTitre";

    function shuffleArray(d) {
        for (let i = d.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = d[i];
            d[i] = d[j];
            d[j] = temp;
        }
    }

    export default {
        name: "statistiqueVariableQualitative",
        components: {ScTitreSousTitre, ScChart, ScChartDistribution, ScTitrePartie, ScTitreSection},
        props: {
            editMode: {type: Boolean, default: false},
            colors: {
                type: Array, default: function () {
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

            for (const qualitatif of this.distribution) {
                qualitatif.effectif = Pi.Numeric.randomInt(1, 10);
                for (let i = 0; i < qualitatif.effectif; i++) {
                    this.distributionRawData.push(qualitatif.nom);
                }
            }
            shuffleArray(this.distributionRawData);
        }
    }
</script>

