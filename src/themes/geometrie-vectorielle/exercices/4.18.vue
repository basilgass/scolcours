<template>
    <section class="exercice-template">
        <h1>4 - Produit scalaire</h1>
        <h3 class="overline">Exercice 18</h3>

        <sc-boite exemple max-width="800px" titre="Résolution de l'exercice 4.18 (1)">
            \( A(2;1) \quad B(3;-5) \)

            <v-sheet class="mx-auto" max-width="300px">
                <div ref="svg-1"></div>
            </v-sheet>

            <p class="katex-left">
                \[\overrightarrow{AB} = \begin{pmatrix}1\\-6\end{pmatrix}\]
            </p>

            <p class="katex-left">
                <span class="title">1ère solution</span>
                Calculer un vecteur perpendiculaire à \( \overrightarrow{AB} \)
                \[
                \textcolor{green}{\overrightarrow{AD_1}}
                = \textcolor{green}{\overrightarrow{BC_1}}
                = \overrightarrow{AB_\perp}
                = \begin{pmatrix} 6\\1\end{pmatrix}
                \]
                \[
                \implies \overrightarrow{OD_1} = \overrightarrow{OA} + \overrightarrow{AB_\perp}
                = \begin{pmatrix} 2 \\ 1 \end{pmatrix} + \begin{pmatrix} 6 \\ 1 \end{pmatrix}
                = \begin{pmatrix} 8 \\ 2 \end{pmatrix} \implies D_1(8;2)
                \]
                \[
                \implies \overrightarrow{OC_1} = \overrightarrow{OB} + \overrightarrow{AB_\perp}
                = \begin{pmatrix} 3 \\ -5 \end{pmatrix} + \begin{pmatrix} 6 \\ 1 \end{pmatrix}
                = \begin{pmatrix} 9 \\ -4 \end{pmatrix} \implies C_1(9;-4)
                \]
            </p>
            <p class="katex-left">
                <span class="title">2ème solution</span>
                On utilise l'opposé du vecteur perpendiculaire.
                \[
                \textcolor{red}{\overrightarrow{AD_1}}
                = \textcolor{red}{\overrightarrow{BC_1}}
                = \overrightarrow{AB_\perp}
                = \begin{pmatrix} -6\\-1\end{pmatrix}
                \]
                \[
                \implies \overrightarrow{OD_2} = \overrightarrow{OA} + \overrightarrow{AB\perp}
                = \begin{pmatrix} 2 \\ 1 \end{pmatrix} + \begin{pmatrix} -6 \\ -1 \end{pmatrix}
                = \begin{pmatrix} -4 \\ 0 \end{pmatrix} \implies D_2(-4;0)
                \]
                \[
                \implies \overrightarrow{OC_2} = \overrightarrow{OB} + \overrightarrow{AB\perp}
                = \begin{pmatrix} 3 \\ -5 \end{pmatrix} + \begin{pmatrix} -6 \\ -1 \end{pmatrix}
                = \begin{pmatrix} -3 \\ -6 \end{pmatrix} \implies C_2(-3;-6)
                \]
            </p>
        </sc-boite>

        <sc-boite exemple max-width="800px" titre="Résolution de l'exercice 4.18 (2)">
            \( A(2;1) \quad B(3;-5) \)

            <v-sheet class="mx-auto" max-width="300px">
                <div ref="svg-2"></div>
            </v-sheet>

            <p class="katex-left">
                \[\overrightarrow{AB} = \begin{pmatrix}1\\-6\end{pmatrix}\]
                Le milieu du segment \( [AB] \) est \( M\left(\dfrac{2+3}{2};\dfrac{1+(-5)}{2}\right)=(2.5;-2) \)
            </p>

            <p class="katex-left">
                \( \overrightarrow{MC} \) est une perpendiculaire à \( \overrightarrow{AB} \) deux fois plus petite.<br/>
                \( \overrightarrow{MD} \) est l'opposé de \( \overrightarrow{MC} \)
                \[
                \textcolor{green}{\overrightarrow{MC}} = \frac{1}{2}\overrightarrow{AB_\perp} = \frac{1}{2}\begin{pmatrix} 6 \\ 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 0.5 \end{pmatrix}
                \]
                \[
                \textcolor{red}{\overrightarrow{MD}} = -\overrightarrow{MC} = \begin{pmatrix} -3 \\ -0.5 \end{pmatrix}
                \]
                \[
                \implies \overrightarrow{OC} = \overrightarrow{OM} + \overrightarrow{MC_\perp}
                = \begin{pmatrix} 2.5 \\ -2 \end{pmatrix} + \begin{pmatrix} 3 \\ 0.5 \end{pmatrix}
                = \begin{pmatrix} 5.5 \\ -1.5 \end{pmatrix} \implies C(5.5;-1.5)
                \]
                \[
                \implies \overrightarrow{OC_1} = \overrightarrow{OM} + \overrightarrow{MD_\perp}
                = \begin{pmatrix} 2.5 \\ -2 \end{pmatrix} + \begin{pmatrix} -3 \\ -0.5 \end{pmatrix}
                = \begin{pmatrix} -0.5 \\ -2.5 \end{pmatrix} \implies D(-0.5;-2.5)
                \]
            </p>

        </sc-boite>

        <v-row justify="center">
            <sc-exercice-complexe
                    :generateur="generateur"
                    min-width="500px"
            >Entraînement
            </sc-exercice-complexe>
        </v-row>
    </section>
</template>

<script>
    import {Pi} from "../../../../public/js/pi"
    import ScExerciceComplexe from "@/components/Exercices/ScExerciceComplexe";
    import katex from "katex";
    import ScBoite from "@/components/Boxes/ScBoite";
    import {PiGeometry} from "../../../../public/js/pigeometry";


    export default {
        name: "ex4_10",
        components: {ScBoite, ScExerciceComplexe},
        layout: "exercice",
        methods: {
            generateur: function () {
                let A1 = Pi.Numeric.randomIntSym(10),
                    A2 = Pi.Numeric.randomIntSym(10),
                    B1 = Pi.Numeric.randomIntSym(10),
                    B2 = Pi.Numeric.randomIntSym(10),
                    etapes;

                etapes = [
                    {
                        donnee: 'Calculer le vecteur ' + katex.renderToString('\\overrightarrow{AB}'),
                        question: '\\overrightarrow{AB}',
                        reponse: '',
                        type: 'vector'
                    },
                    {
                        donnee: 'Calculer le vecteur perpendiculaire à ' + katex.renderToString('\\overrightarrow{AB}'),
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

                etapes[0].reponse = `${B1 - A1} ${B2 - A2}`;
                etapes[1].reponse = [`${B2 - A2} ${-(B1 - A1)}`, `${-(B2 - A2)} ${(B1 - A1)}`];
                etapes[2].reponse = [`${B1 + B2 - A2} ${B2 - (B1 - A1)}`, `${B1 - (B2 - A2)} ${B2 + (B1 - A1)}`];
                etapes[3].reponse = [`${A1 + B2 - A2} ${A2 - (B1 - A1)}`, `${A1 - (B2 - A2)} ${A2 + (B1 - A1)}`];

                /*for(let e of etapes){
                    console.log(e.reponse);
                }*/
                return {
                    donnee: "Calculer les coordonnées des sommets du carré dont on donne un côté.",
                    question: katex.renderToString(`
                        A(${A1};${A2}) \\quad
                        B(${B1};${B2}) \\quad`),
                    etapes
                }
            },
            draw1: function () {
                let geom = new PiGeometry.draw(this.$refs['svg-1'], 500, 500);
                geom.showGridOrthoN(20, 20);
                geom.mainGrid.color('rgba(0,0,0,0.2');
                geom.mainGrid.setOrigin(8, 10);
                let O = geom.addPoint(0, 0, 'O').showLabel(),
                    A = geom.addPoint(2, 1, 'A').showLabel().labelPos('tl'),
                    B = geom.addPoint(3, -5, 'B').showLabel(),
                    C1 = geom.addPoint(9, -4, 'C_1').showLabel().labelPos('br'),
                    D1 = geom.addPoint(8, 2, 'D_1').showLabel().labelPos('tr'),
                    C2 = geom.addPoint(-3, -6, 'C_2').showLabel().labelPos('bl'),
                    D2 = geom.addPoint(-4, 0, 'D_2').showLabel().labelPos('tl');

                geom.polygon(A, B, C1, D1).width(1).fill('rgba(48,255,0,0.16)')
                geom.polygon(A, B, C2, D2).width(1).fill('rgba(128,0,255,0.16)')

                let AB = geom.vector(A, B).width(2),
                    AD1 = geom.vector(A, D1).width(2).color('green'),
                    BC1 = geom.vector(B, C1).width(2).color('green'),
                    AD2 = geom.vector(A, D2).width(2).color('red'),
                    BC2 = geom.vector(B, C2).width(2).color('red');

            },
            draw2: function () {
                let geom = new PiGeometry.draw(this.$refs['svg-2'], 500, 500);
                geom.showGridOrthoN(10, 10);
                geom.mainGrid.color('rgba(0,0,0,0.2');
                geom.mainGrid.setOrigin(3, 7);
                let O = geom.addPoint(0, 0, 'O').showLabel(),
                    A = geom.addPoint(2, 1, 'A').showLabel().labelPos('tm'),
                    B = geom.addPoint(3, -5, 'B').showLabel().labelPos('bm'),
                    M = geom.addPoint('M').middle(A, B).showLabel(),
                    C = geom.addPoint('C').perpendicular(A, B, M, 0.5).showLabel().labelPos('cr'),
                    D = geom.addPoint('D').perpendicular(A, B, M, -0.5).showLabel().labelPos('cl');

                geom.polygon(A, D, B, C).width(1).fill('rgba(48,255,0,0.16)')

                let AB = geom.vector(A, B).width(2),
                    MC = geom.vector(M, C).width(4).color('green'),
                    MD = geom.vector(M, D).width(4).color('red');
            }
        },
        mounted() {
            this.draw1();
            this.draw2();
        }
    }
</script>

