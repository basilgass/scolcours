<template>
    <div>
        <ScTocDrawer></ScTocDrawer>
        <v-container>
            <div class="display-3 mt-10">Statistiques</div>
            <sc-breadcrumbs />

            <section>
                <div class="headline mt-10 mb-5">Définitions</div>
                <scDefinitions :definitions="definitions"/>
            </section>

            <section>
                <div class="headline mt-10 mb-5">Introduction</div>

                <div class="title mt-4">Fréquence</div>
                La <strong>fréquence</strong> est le rapport entre l'effectif d'une modalité et le nombre total des individus dans la population.
                Cette valeur est un pourcentage et peut donc s'écrire \( 0.75 \) ou \( 75\% \)

                <base-alert>
                    \[
                    \text{Fréquence}=\frac{\text{Effectif}}{\text{Population totale}}
                    \]
                </base-alert>

            </section>
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
    import ScTocDrawer from "../../../components/UserInterface/ScTocDrawer";
    import ScDefinitions from "../../../components/ScDefinitions";
    import StatistiqueVariableQuantitative from "./__statistiques__/statistiqueVariableQuantitative";
    import StatistiqueVariableQualitative from "./__statistiques__/statistiqueVariableQualitative";
    import StatistiqueVariableCumulee from "./__statistiques__/statistiqueVariableCumulee";
    import StatistiqueAutresGraphiques from "./__statistiques__/statistiqueAutresGraphiques";
    import BaseAlert from "../../../components/BaseAlert";
    import renderMathInElement from "katex/dist/contrib/auto-render.min";
    import ScBreadcrumbs from "../../../components/UserInterface/ScBreadcrumbs";

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
        components: {
            ScBreadcrumbs,
            BaseAlert,
            StatistiqueAutresGraphiques,
            StatistiqueVariableCumulee,
            StatistiqueVariableQualitative,
            StatistiqueVariableQuantitative, ScDefinitions, ScTocDrawer},
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
                    {nom: 'Qualitative', definition: `Se dit d'une variable statistique dont les modalités ne sont pas des nombres.`},
                    {nom: 'Quantitative discrète', definition: `<p>Se dit d'une variable statistique dont les modalités sont des nombres finis, que l'on peut donc compter facilement.</p><p class="caption">Par exemple: le nombre de réponses correctes d'un test de math est une variable discrète.</p>`},
                    {nom: 'Quantitative continue', definition: `<p>Se dit d'une variable statistique dont les modalités sont des nombres continus. On ne peut pas (ou difficilement) toutes les compter.</p><p class="caption">Par exemple: le rapport entre la longueur et la largeur d'un rectangle est une variable continue.</p>`},
                    {nom: 'Modalités', definition: `Ensemble des réponses possibles pour une variable statistique donnée.`},
                    {nom: 'Effectifs', definition: `Nombre de fois qu'une modalité a été observée.`},
                    {nom: 'Classes', definition: `Une classe est un intervalle semi-ouvert qui regroupe plusieurs modalités, afin de synthétiser l'information des données brutes `}
                ],
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

