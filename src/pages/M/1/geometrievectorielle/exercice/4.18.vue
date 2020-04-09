<template>
    <section class="exercice-template">
        <h1>4 - Produit scalaire</h1>
        <h3 class="overline">Exercice 18</h3>

        <v-row justify="center">
            <sc-exercice-complexe
                    :generateur="generateur"
                    min-width="500px"
            >Entraînement</sc-exercice-complexe>
        </v-row>
    </section>
</template>

<script>
    import {Pi} from "../../../../../../public/js/pi"
    import ScExerciceComplexe from "../../../../../components/Exercices/ScExerciceComplexe";
    import katex from "katex";

    export default {
        name: "ex4_10",
        components: {ScExerciceComplexe},
        layout: "exercice",
        methods: {
            generateur: function(){
                let A1 = Pi.Numeric.randomIntSym(10),
                    A2 =  Pi.Numeric.randomIntSym(10),
                    B1 =  Pi.Numeric.randomIntSym(10),
                    B2 =  Pi.Numeric.randomIntSym(10),
                    etapes;

                etapes = [
                    {
                        donnee: 'Calculer le vecteur '  +katex.renderToString('\\overrightarrow{AB}'),
                        question: '\\overrightarrow{AB}',
                        reponse: '',
                        type: 'vector'
                    },
                    {
                        donnee: 'Calculer le vecteur perpendiculaire à '  +katex.renderToString('\\overrightarrow{AB}'),
                        question: '\\overrightarrow{AB_\\perp}',
                        reponse: '',
                        type: 'vector'
                    },
                    {
                        donnee: 'Calculer les coordonnées du point ' + katex.renderToString('C'),
                        question: 'C',
                        reponse: '',
                        type: 'point',
                        multiple: true,
                        condition: 2
                    },
                    {
                        donnee: 'Calculer les coordonnées du point ' + katex.renderToString('D'),
                        question: 'D',
                        reponse: '',
                        type: 'point',
                        multiple: true,
                        condition: 2
                    },
                ];

                etapes[0].reponse = `${B1-A1} ${B2-A2}`;
                etapes[1].reponse = [`${B2-A2} ${-(B1-A1)}`, `${-(B2-A2)} ${(B1-A1)}`];
                etapes[2].reponse = [`${B1 + B2-A2} ${B2 -(B1-A1)}`, `${B1 - (B2-A2)} ${B2 + (B1-A1)}`];
                etapes[3].reponse = [`${A1 + B2-A2} ${A2 -(B1-A1)}`, `${A1 - (B2-A2)} ${A2 + (B1-A1)}`];

                /*for(let e of etapes){
                    console.log(e.reponse);
                }*/
                return {
                    donnee: "Calculer les coordonnées des sommets du carré",
                    question: katex.renderToString(`
                        A(${A1};${A2}) \\quad
                        B(${B1};${B2}) \\quad`),
                    etapes
                }
            },
        }
    }
</script>

