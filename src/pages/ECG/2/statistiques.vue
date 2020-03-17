<template>
    <div>
        <sc-toc-drawer/>
        <v-container>
            <div class="display-3 mt-10">Statistiques</div>
            <v-breadcrumbs :items="items"></v-breadcrumbs>

            <section>
                <div class="headline mt-10 mb-5">Définitions</div>
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
                <div class="headline mt-10 mb-5">Variable qualitative</div>

                <div class="title mt-4">Données brutes</div>
                <v-row>
                    <v-col cols="4" sm="3" md="2" v-for="(d,idx) in distributionRawData" :key="idx">
                        {{d}}
                    </v-col>
                </v-row>

                <div class="title mt-4">Tableau de distribution</div>
                <sc-chart-distribution ref="chartQualitatif" :chart-data=distribution :edit-mode=editMode />



                <div class="title mt-4">Graphiques</div>
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
                <div class="headline mt-10 mb-5">Variable quantitative</div>

                <div class="title mt-4">Données brutes</div>
                <v-row>
                    <v-col cols="4" sm="3" md="2" v-for="(d,idx) in distributionContinueRawData" :key="idx">
                        {{d}}
                    </v-col>
                </v-row>

                <div class="title mt-4">Tableau de distribution par classes</div>
                <sc-chart-distribution :chart-data=distributionContinue :edit-mode=editMode ></sc-chart-distribution>

                <div class="title mt-4">Histogramme et polygone de fréquence</div>
                <sc-chart :chart-data=cdata :chart-labels="clabel" :chart-colors="ccolor" :bar-width="1" :bar-polygon="true"></sc-chart>
            </section>

        </v-container>
    </div>
</template>


<script>
    import ScChartDistribution from "../../../components/ScChartDistribution";
    import ScChart from "../../../components/ScChart";
    import ScTocDrawer from "../../../components/ScTocDrawer";

    function shuffleArray(d){
        for (var i = d.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = d[i];
            d[i] = d[j];
            d[j] = temp;
        }
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
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

    let qualitatifData = [
        {nom: 'Jaune', effectif: 8, couleur: colors[0]},
        {nom: 'Rouge', effectif: 5, couleur: colors[1]},
        {nom: 'Vert', effectif: 7, couleur: colors[2]},
        {nom: 'Bleu', effectif: 4, couleur: colors[3]},
    ], qualitatifDataRaw = [];

    for(let c in qualitatifData){
        qualitatifData[c].effectif = getRandomInt(1, 10);
        for(let i=0; i<qualitatifData[c].effectif; i++){
            qualitatifDataRaw.push(qualitatifData[c].nom);
        }
    }
    shuffleArray(qualitatifDataRaw);


    let quantitatifData = [
        {nom: '0-10', effectif: 5, couleur: colors[0]},
        {nom: '11-20', effectif: 8, couleur: colors[1]},
        {nom: '21-30', effectif: 10, couleur: colors[2]},
        {nom: '31-40', effectif: 12, couleur: colors[3]},
        {nom: '41-50', effectif: 17, couleur: colors[4]},
        {nom: '51-60', effectif: 11, couleur: colors[5]},
        {nom: '61-70', effectif: 9, couleur: colors[6]},
        {nom: '71-80', effectif: 6, couleur: colors[7]},
    ],
        quantitatifRawData = [];
    for(let c in quantitatifData){
        quantitatifData[c].effectif = getRandomInt(quantitatifData[c].effectif-3, quantitatifData[c].effectif+3);

        for(let i=0; i<quantitatifData[c].effectif; i++){
            let minmax = quantitatifData[c].nom.split('-');

            quantitatifRawData.push(getRandomInt(...minmax));
        }
    }
    shuffleArray(quantitatifRawData);

    /*
    : function(){
        let d = [];

        for(let i=0; i<100; i++){
            d.push(getRandomInt(1,30)+getRandomInt(1,30)+getRandomInt(1,20))
        }

        shuffleArray(d)
        return d;
    },
    */

    export default {
        name: "statistiques",
        components: {ScTocDrawer, ScChartDistribution, ScChart},
        data: function () {
            return {
                items: [
                    {
                        text: 'Accueil',
                        disabled: false,
                        href: '/'
                    },
                    {
                        text: 'ECG',
                        disabled: false,
                        href: '/ECG'
                    },
                    {
                        text: '2ème année',
                        disabled: false,
                        href: '/ECG/2'
                    },
                    {
                        text: 'Statistiques',
                        disabled: true,
                        href: '/ECG/2/Statistiques'
                    }

                ],
                editMode: false,
                definitions: [
                    {nom: 'Population', definition: `Ensemble des éléments qui font partie de l'étude. Un élément de la population est un individu ou une unité statistique`},
                    {nom: 'Variable statistique', definition: `La question que l'on pose`},
                    {nom: 'Modalités', definition: `Ensemble des réponses possibles pour une variable statistique donnée.`},
                    {nom: 'Qualitative', definition: `Se dit d'une variable statistique dont les modalités ne sont pas des nombres.`},
                    {nom: 'Quantitative discrète', definition: `Se dit d'une variable statistique dont les modalités sont des nombres finis`},
                    {nom: 'Quantitative continue', definition: `Se dit d'une variable statistique dont les modalités sont des nombres continus`},
                    {nom: 'Classes', definition: `Une classe est un intervalle semi-ouvert qui regroupe plusieurs modalités, afin de synthétiser l'information des données brutes `}
                ],
                distributionRawData: qualitatifDataRaw,
                distribution: qualitatifData,
                distributionContinue: quantitatifData,
                distributionContinueRawData: quantitatifRawData
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
            }
        },
    }
</script>

