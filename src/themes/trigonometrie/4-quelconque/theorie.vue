<template>
    <section>
        <sc-titre-section>Trigonométrie dans le triangle quelconque</sc-titre-section>

        <sc-titre-partie>Théorèmes cycliques</sc-titre-partie>
        <v-row justify="space-between">
            <v-col cols="12" lg="5" md="6">
                Chacun des 3 théorèmes de la trigonométrie dans le triangle quelconque sont des théorèmes <strong>cycliques</strong>,
                c'est-à-dire qu'on a trois fois la même formule.

                <sc-boite class="mt-10" theoreme>
                    <sc-boite-titre>Théorème du cosinus</sc-boite-titre>
                    \[
                    a^2=b^2+c^2-2\cdot b\cdot c\cdot \cos(\alpha)
                    \]

                    <sc-boite-titre>Théorème du sinus</sc-boite-titre>
                    \[
                    \frac{a}{\sin(\alpha)}
                    =\frac{b}{\sin(\beta)}
                    =\frac{c}{\sin(\gamma)}
                    =2\cdot r
                    \]

                    <sc-boite-titre>Théorème de l'aire</sc-boite-titre>
                    \[
                    \sigma = \frac{1}{2}\cdot b \cdot c \cdot \sin(\alpha)
                    \]

                    <template v-slot:footer>
                        \( r = \) rayon du cercle circonscrit
                        <br/>
                        \( \sigma = \) aire du triangle
                    </template>
                </sc-boite>
            </v-col>
            <v-col cols="12" lg="5" md="6">
                <v-card>
                    <ScTrigoCyclique/>
                </v-card>
            </v-col>
        </v-row>


        <sc-trigo-10-cosinus/>

        <sc-trigo-11-sinus/>

        <sc-trigo-12-aire/>

        <!--<sc-titre-partie >Cheminement de résolution</sc-titre-partie>
        <sc-trigo-determination/>
        <sc-trigo-resolution/>-->


    </section>
</template>


<script>
    import ScTrigo10Cosinus from "./ScTrigo10Cosinus";
    import ScTrigo11Sinus from "./ScTrigo11Sinus";
    import ScTrigo12Aire from "./ScTrigo12Aire";
    import ScTitreSection from "../../../components/Titles/ScTitre1Section";
    import ScTitrePartie from "../../../components/Titles/ScTitre2Partie";
    import ScBoite from "../../../components/Boxes/ScBoite";
    import ScBoiteTitre from "../../../components/Boxes/ScBoiteTitre";
    import ScTrigoCyclique from "./ScTrigoCyclique";
    import ScTrigoDetermination from "./ScTrigoDetermination";
    import ScTrigoResolution from "./ScTrigoResolution";

    export default {
        name: "statistiques",
        components: {
            ScTrigoResolution,
            ScTrigoDetermination,
            ScTrigoCyclique,
            ScBoiteTitre,
            ScBoite,
            ScTitrePartie,
            ScTitreSection,
            ScTrigo12Aire,
            ScTrigo11Sinus,
            ScTrigo10Cosinus,
        },
        data: function () {
            return {};
        },
        computed: {},
        mounted() {
        }
    }
</script>

