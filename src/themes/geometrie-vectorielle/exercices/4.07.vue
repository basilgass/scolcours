<template>
    <section class="exercice-template">
        <h1>4 - Produit scalaire</h1>
        <h3 class="overline">Exercice 07</h3>

        <v-row justify="center">
            <ScExerciceSimple
                    :question="creerQuestion"
                    donnee="Calculer le produit scalaire"
            >Entraînement</ScExerciceSimple>
        </v-row>
    </section>
</template>

<script>
    import {Pi} from "../../../../public/js/pi"
    import ScExerciceSimple from "@/components/Exercices/ScExerciceSimple";

    export default {
        name: "ex4_07",
        components: {ScExerciceSimple},
        layout: "exercice",
        methods: {
            creerQuestion: function () {
                let A1 = Pi.Numeric.randomIntSym(10),
                    A2 = Pi.Numeric.randomIntSym(10),
                    B1 = Pi.Numeric.randomIntSym(10),
                    B2 =  Pi.Numeric.randomIntSym(10);

                return {
                    question: `\\begin{pmatrix} ${A1} \\\\\\ ${A2} \\end{pmatrix}
                            \\cdot
                            \\begin{pmatrix} ${B1} \\\\\\ ${B2} \\end{pmatrix}
                            =`,
                    reponse: A1*B1+A2*B2
                };
            },


        },
        mounted() {
            this.creerQuestion();
        }
    }
</script>

