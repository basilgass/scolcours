<template>
    <section>
        <ScTitreSection id="frequences-cumulees">Fréquences cumulées</ScTitreSection>

        <sc-titre-partie>Tableau de distribution par classes</sc-titre-partie>
        <sc-chart-distribution
                :chart-data=distributionContinue
                :edit-mode=editMode
                :fixed="1"
                :label-as-class=true
                :percent=true
                :showColors=true
                :stack=true
                :stack-decrease=true
                v-on:frequences="updateGraphiques"
        >Fréquences par classes
        </sc-chart-distribution>

        <v-row justify="center">
            <v-col cols="12" md="6">
                <sc-chart
                        chart-type="bar"
                        :chart-data="dataGraphiques.effectifs"
                        :chart-labels="dataGraphiques.labels"
                        :chart-colors="ccolor"
                ></sc-chart>
            </v-col>
            <v-col cols="12" md="5" xl="3">
                <sc-chart
                        chart-type="pie"
                        :chart-data="dataGraphiques.effectifs"
                        :chart-labels="dataGraphiques.labels"
                        :chart-colors="ccolor"
                        :tooltips="true"
                ></sc-chart>
            </v-col>
        </v-row>


        <sc-titre-partie>Tableau de distribution cumulées</sc-titre-partie>

        <sc-chart-distribution
                :chart-data="distributionContinueGraphique"
                :delta-frequencies=true
                :edit-mode=editMode
                :fixed="1"
                :percent=true
                :showColors=false
                :stack=true
                :stack-decrease=true
                v-on:frequences="updateFrequences"
        >Fréquences cumulées pour le graphique
            <ul class="caption mb-3">
                <li>Remarquez le décalage dans les deux dernières colonnes.</li>
                <li>Le nom pour la première ligne est le début de la première classe: [0;<span class="red--text">10</span>].</li>
                <li>Les noms de toutes les lignes suivantes est la fin des classes: [21;<span class="red--text">30</span>].</li>
            </ul>
        </sc-chart-distribution>


        <sc-chart
                :chart-colors="['red', 'blue']"
                :chart-data="[frequencesCalculees.croissantes, frequencesCalculees.decroissantes]"
                :chart-labels="frequencesCalculees.labels"
                :chart-names="['Fréquences cumulées croissantes', 'Fréquences cumulées décroissantes']"
                :lines="true"
                :max-value="100"
                :tick="10"
                chart-type="line"
        ></sc-chart>

    </section>

</template>


<script>
    import {Pi} from "../../../../public/js/pi"
    import ScTitreSection from "../../../components/Titles/ScTitre1Section";
    import ScChartDistribution from "../../../components/ScChartDistribution";
    import ScChart from "../../../components/ScChart";
    import ScTitrePartie from "../../../components/Titles/ScTitre2Partie";

    export default {
        name: "statistiqueVariableCumulee",
        components: {ScTitrePartie, ScChart, ScChartDistribution, ScTitreSection},
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

