<template>
    <div>
        <v-container>
            <sc-titre-page>Statistiques</sc-titre-page>
            <sc-breadcrumbs />

            <statistiques-introduction></statistiques-introduction>

            <v-divider></v-divider>
            <statistique-variable-qualitative></statistique-variable-qualitative>

            <v-divider></v-divider>
            <statistique-variable-quantitative></statistique-variable-quantitative>

            <v-divider></v-divider>
            <statistique-variable-cumulee></statistique-variable-cumulee>

            <v-divider></v-divider>
            <statistique-autres-graphiques></statistique-autres-graphiques>
        </v-container>
    </div>
</template>


<script>
    import StatistiqueVariableQuantitative from "./__theorie__/StatistiqueVariableQuantitative";
    import StatistiqueVariableQualitative from "./__theorie__/StatistiqueVariableQualitative";
    import StatistiqueVariableCumulee from "./__theorie__/StatistiqueVariableCumulee";
    import StatistiqueAutresGraphiques from "./__theorie__/StatistiqueAutresGraphiques";
    import renderMathInElement from "katex/dist/contrib/auto-render.min";
    import ScBreadcrumbs from "../../../../components/UserInterface/ScBreadcrumbs";
    import StatistiquesIntroduction from "./__theorie__/StatistiquesIntroduction";
    import ScTitrePage from "../../../../components/Titles/ScTitre0Page";

    function shuffleArray(d){
        for (let i = d.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = d[i];
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

    for(const qualitatif of qualitatifData){
        qualitatif.effectif = getRandomInt(1, 10);
        for(let i=0; i<qualitatif.effectif; i++){
            qualitatifDataRaw.push(qualitatif.nom);
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

     export default {
        name: "statistiques",
         layout: 'theorie',
        components: {
            ScTitrePage,
            StatistiquesIntroduction,
            ScBreadcrumbs,
            StatistiqueAutresGraphiques,
            StatistiqueVariableCumulee,
            StatistiqueVariableQualitative,
            StatistiqueVariableQuantitative},
        data: function () {
            return {
                distributionRawDataAfficher: false,
                distributionRawData: qualitatifDataRaw,
                distribution: qualitatifData,
                distributionContinueRawDataAfficher: false,
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
         mounted() {
             renderMathInElement(this.$el);
         }
     }
</script>

