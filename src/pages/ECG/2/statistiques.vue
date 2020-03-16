<template>
    <div>
        <v-navigation-drawer
                right
                app
                clipped
        >

            <v-list>
                <v-list-item><a href="#definitions">Définitions</a></v-list-item>
                <v-list-item><a href="#graphiques">Graphiques</a></v-list-item>
            </v-list>

        </v-navigation-drawer>

        <div class="display-3 text-center">Statistiques</div>

        <v-container>
            <section>
                <div class="headline" id="definitions">Définitions</div>
                <v-list>
                    <v-list-item-group color="primary">
                        <v-list-item
                                v-for="(def, i) in definitions"
                                :key="i">
                            <v-list-item-content>
                                <v-list-item-title>{{ def.nom }}</v-list-item-title>
                                <v-list-item-subtitle>{{ def.definition }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </section>

            <v-divider></v-divider>
            <section>
                <div class="headline mt-5">Variable qualitative</div>

                <div class="title mt-4" id="tableau">Tableau de distribution</div>

                    <sc-chart-distribution ref="chartQualitatif" :chart-data=distribution />

                    <div class="title mt-4" id="graphiques">Graphiques</div>

                <v-row>
                        <v-col cols="6" class="text-center">
                            <div class="subtitle-1">Histogramme</div>
                            <sc-chart :chart-data=hdata :chart-labels="ldata" :chart-colors="coldata"></sc-chart>
                        </v-col>

                        <v-col cols="6" class="text-center">
                            <div class="subtitle-1">Diagramme en secteurs circulaires</div>
                            <sc-chart chart-type="pie" :chart-data=hdata :chart-labels="ldata" :chart-colors="coldata"></sc-chart>
                        </v-col>
                    </v-row>

            </section>

            <v-divider></v-divider>
            <section>
                <div class="headline mt-5">Variable quantitative</div>

                <p class=""></p>

                <div class="title mt-4">Tableau de distribution par classes</div>
                <sc-chart-distribution :chart-data=distributionContinue></sc-chart-distribution>

                <div class="title mt-4">Histogramme et polygone de fréquence</div>
                <sc-chart :chart-data=cdata :chart-labels="clabel" :chart-colors="ccolor" :bar-width="1" :bar-polygon="true"></sc-chart>
            </section>

        </v-container>

        <section>

        </section>

    </div>
</template>


<script>

    //import ScPie from "../../../components/ScPie";
    //import ScHistogram from "../../../components/ScHistogram";
    import ScChartDistribution from "../../../components/ScChartDistribution";
    import ScChart from "../../../components/ScChart";

    let colors = [
        'rgba(255, 99, 132,0.75)',
        'rgba(255, 159, 64,0.75)',
        'rgba(255, 205, 86,0.75)',
        'rgba(75, 192, 192,0.75)',
        'rgba(54, 162, 235,0.75)',
        'rgba(8, 192, 61, 0.75)',
        'rgba(153, 102, 255,0.75)',
        'rgba(201, 203, 207,0.75)'
    ];
    export default {
        name: "statistiques",
        components: {ScChartDistribution, ScChart},
        data: function(){
                return {
                    definitions: [
                        {nom: 'Population', definition: `L'ensemble des éléments qui font partie de l'étude`},
                        {nom: 'Variable statistique', definition: `La question que l'on pose`},
                        {nom: 'Modalités', definition: `Les réponses possibles`},
                        {nom: 'Qualitative', definition: `Se dit d'une variable statistique dont les modalités ne sont pas des nombres.`},
                        {nom: 'Quantitative discrète', definition: `Se dit d'une variable statistique dont les modalités sont des nombres finis`},
                        {nom: 'Quantitative continue', definition: `Se dit d'une variable statistique dont les modalités sont des nombres continus`},
                    ],
                    distribution: [
                        {nom: 'Jaune', effectif: 25, couleur: colors[0]},
                        {nom: 'Rouge', effectif: 30, couleur: colors[1]},
                        {nom: 'Vert', effectif: 7, couleur: colors[2]},
                        {nom: 'Bleu', effectif: 42, couleur: colors[3]},
                    ],
                    distributionContinue: [
                        {nom: '', effectif: 0, couleur: 'white'},
                        {nom: '0-10', effectif: 5, couleur: colors[0]},
                        {nom: '11-20', effectif: 8, couleur: colors[1]},
                        {nom: '21-30', effectif: 12, couleur: colors[2]},
                        {nom: '31-40', effectif: 15, couleur: colors[3]},
                        {nom: '41-50', effectif: 25, couleur: colors[4]},
                        {nom: '51-60', effectif: 19, couleur: colors[5]},
                        {nom: '61-70', effectif: 16, couleur: colors[6]},
                        {nom: '71-80', effectif: 8, couleur: colors[7]},
                        {nom: ' ', effectif: 0, couleur: 'white'}
                    ]
                };
            },
        computed: {
            pdata: function() {
                let d = [];
                this.distribution.forEach(value => d.push(value.effectif));
                return d;
            },
            hdata: function() {
                let d = [];
                this.distribution.forEach(value => d.push(value.effectif));
                return d;
            },
            ldata: function() {
                let d = [];
                this.distribution.forEach(value => d.push(value.nom));
                return d;
            },
            coldata: function() {
                let d = [];
                this.distribution.forEach(value => d.push(value.couleur));
                return d;
            },

            cdata: function() {
                let d = [];
                this.distributionContinue.forEach(value => d.push(value.effectif));
                return d;
            },
            clabel: function() {
                let d = [];
                this.distributionContinue.forEach(value => d.push(value.nom));
                return d;
            },
            ccolor: function() {
                let d = [];
                this.distributionContinue.forEach(value => d.push(value.couleur));
                return d;
            }
        }
    }
</script>

