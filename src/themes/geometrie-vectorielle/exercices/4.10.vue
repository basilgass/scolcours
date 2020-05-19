<template>
    <section class="exercice-template">
        <h1>4 - Produit scalaire</h1>
        <h3 class="overline">Exercice 10</h3>

        <v-row justify="center">
            <sc-exercice-complexe
                    :generateur="generateur"
                    min-width="500px"
            >Entraînement</sc-exercice-complexe>
        </v-row>
    </section>
</template>

<script>
    import {Pi} from "../../../../public/js/pi"
    import ScExerciceComplexe from "@/components/Exercices/ScExerciceComplexe";
    import katex from "katex";

    export default {
        name: "ex4_10",
        components: {ScExerciceComplexe},
        layout: "exercice",
        methods: {
            generateur: function () {
                let A1 = Pi.Numeric.randomIntSym(10),
                    A2 = Pi.Numeric.randomIntSym(10),
                    B1 =  Pi.Numeric.randomIntSym(10),
                    B2 =  Pi.Numeric.randomIntSym(10),
                    C1 =  Pi.Numeric.randomIntSym(10),
                    C2 =  Pi.Numeric.randomIntSym(10),
                    reponse = Pi.Numeric.randomBool(),
                    D1,D2,
                    AB1 = B1-A1,
                    AB2 = B2-A2,
                    k = Pi.Numeric.randomIntSym(2, false),
                    etapes;

                etapes = [
                    {
                        donnee: 'Calculer le vecteur '  +katex.renderToString('\\overrightarrow{AB}'),
                        question: '\\overrightarrow{AB}',
                        reponse: '',
                        type: 'vector'
                    },
                    {
                        donnee: 'Calculer le vecteur '  +katex.renderToString('\\overrightarrow{CD}'),
                        question: '\\overrightarrow{CD}',
                        reponse: '',
                        type: 'vector'
                    },
                    {
                        donnee: 'Calculer le produit scalaire: ' + katex.renderToString('\\overrightarrow{AB}\\cdot\\overrightarrow{CD}'),
                        question: '',
                        condition: 2
                    },
                    {
                        donnee: 'Les droites sont-elles perpendiculaires ?',
                        question: '',
                        type: 'yesno',
                        condition: 3
                    }
                ];

                if(reponse){
                    D1 = C1 + k*AB2;
                    D2 = C2 - k*AB1;
                }else{
                    D1 = C1 + k*AB2 + Pi.Numeric.randomIntSym(2,false);
                    D2 = C2 - k*AB1 + Pi.Numeric.randomIntSym(2,false);
                    // On vérifie que ce n'est quand même pas perpendiculaire
                    reponse = ((B1-A1)*(D1-C1)+(B2-A2)*(D2-C2))===0
                }

                etapes[0].reponse = `${B1-A1} ${B2-A2}`;
                etapes[1].reponse = `${D1-C1} ${D2-C2}`;

                etapes[2].question = `
                \\begin{pmatrix}    ${B1-A1} \\\\\\ ${B2-A2} \\end{pmatrix}   \\cdot
                \\begin{pmatrix}    ${D1-C1} \\\\\\ ${D2-C2} \\end{pmatrix}`;
                etapes[2].reponse = `${(B1-A1)*(D1-C1)+(B2-A2)*(D2-C2)}`;
                etapes[3].reponse = reponse;

                return {
                    donnee: "Les droites AB et CD sont-elles perpendiculaires ?",
                    question: katex.renderToString(`
                        A(${A1};${A2}) \\quad
                        B(${B1};${B2}) \\quad
                        C(${C1};${C2}) \\quad
                        D(${D1};${D2})`),
                    reponse,
                    etapes
                }
            },
        }
    }
</script>

