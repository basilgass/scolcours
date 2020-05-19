<template>
    <section>
        <sc-titre-section id="vecteurs">Vecteurs</sc-titre-section>

        <sc-titre-partie>Définitions</sc-titre-partie>
        <scDefinitions :definitions="definitions"/>

        <sc-titre-partie divider>Exemple</sc-titre-partie>
        <v-row>
            <v-col cols="12" md="8">
                <pi-svg
                        :dimension="18"
                        :geom-draw="SvgTypeVecteurs"
                        :height="300"
                        :width="600"
                ></pi-svg>
            </v-col>
            <v-col cols="12" md="4">
                <sc-boite>
                    <div>Les vecteurs sont <strong v-html="comparaisonDesVecteurs"></strong></div>

                    <template slot="footer">
                        Déplacer les points pour rendre le vecteur équipollent, colinéaire, opposé ou perpendiculaire au vecteur de référence.
                    </template>
                </sc-boite>

            </v-col>

        </v-row>

        <v-divider class="mt-5 mb-5"></v-divider>
        <div>
            <sc-titre-partie>Somme de deux vecteurs</sc-titre-partie>

            <p class="mb-0 text--disabled">Bouger les cercles pour modifier les vecteurs</p>
            <pi-svg
                    :dimension="18"
                    :geom-draw="SvgSommeVecteurs"
                    :height="300"
                    :width="600"
            />
        </div>

        <sc-titre-partie divider>Combinaison linéaire</sc-titre-partie>
        <div>
            <p>Si un vecteur peut s'écrire comme la somme de deux autres, on dit qu'il s'agit d'une
                combinaison linéaire</p>
            <p>\(\overrightarrow{a} = x\cdot\overrightarrow{b} + y\cdot\overrightarrow{c}\), où \(x,y \in \mathbb{R}
                \)</p>
        </div>

        <sc-titre-partie divider>Relation de Chasles</sc-titre-partie>
        <p>
            \(
            \overrightarrow{A\textcolor{red}{B}}+\overrightarrow{\textcolor{red}{B}C}=\overrightarrow{AC}
            \)
        </p>
        <p>
            \(
            \overrightarrow{CD}-\overrightarrow{ED}=
            \overrightarrow{CD}+\overrightarrow{DE}=
            \overrightarrow{C\textcolor{red}{D}}+\overrightarrow{\textcolor{red}{D}E}=\overrightarrow{CE}
            \)
        </p>

        <v-row>
            <v-col class="mx-auto" cols="12" lg="6" md="8">
                <app-chasles></app-chasles>
            </v-col>
        </v-row>
    </section>
</template>
<script>
    import ScDefinitions from "../../../components/ScDefinitions"
    import ScTitreSection from "../../../components/Titles/ScTitre1Section";
    import ScTitrePartie from "../../../components/Titles/ScTitre2Partie";
    import AppChasles from "./appChasles";
    import PiSvg from "../../../components/Pi/pi-svg";
    import ScBoite from "../../../components/Boxes/ScBoite";

    export default {
        name: 'GeometrieVectorielleVecteurs',
        components: {ScBoite, PiSvg, AppChasles, ScTitrePartie, ScTitreSection, ScDefinitions},
        data: function () {
            return {
                definitions: [
                    {
                        nom: 'Vecteur',
                        definition: `Un vecteur est un objet défini par une direction, un sens et une norme. On le note \\( \\overrightarrow{a} \\). La norme du vecteur est notée \\( \\Vert \\overrightarrow{a} \\Vert \\) ou \\( \\Vert a \\Vert\\)`
                    },
                    {nom: 'Equipollent', definition: `Se dit de deux vecteurs qui ont la même direction, le même sens et la même norme.`},
                    {nom: 'Opposé', definition: `Se dit de deux vecteurs qui ont la même direction, la même norme mais des sens opposés.`},
                    {nom: 'Colinéaire', definition: `Se dit de deux vecteurs qui ont la même direction dans un plan.`},
                    {nom: 'Coplanaire', definition: `Se dit de deux vecteurs (en 3 dimensions) qui partagent le même plan.`},
                ],
                comparaisonDesVecteurs: 'quelconques',
            }
        },
        methods: {
            dragFN(geom) {
                let vAB = geom.getFigure('vAB'),
                    vCD = geom.getFigure('vXY');

                if (vAB.isColinar(vCD)) {
                    if (vAB.isSame(vCD)) {
                        this.comparaisonDesVecteurs = 'équipollents';
                    } else if (vAB.isOpposed(vCD)) {
                        this.comparaisonDesVecteurs = 'opposés';
                    } else {
                        this.comparaisonDesVecteurs = 'colinéaires'
                    }
                } else if (vAB.isPerpendicular(vCD)) {
                    this.comparaisonDesVecteurs = 'perpendiculaires'
                } else {
                    this.comparaisonDesVecteurs = 'quelconques'
                }
            },
            SvgTypeVecteurs(geom) {
                geom.defaultFontSize = '8pt';
                // Draw the reference vector
                geom.vector(
                    geom.addPoint(9, 4, 'A').hideShape(),
                    geom.addPoint(15, 7, 'B').hideShape()
                ).width(2)


                // On ajoute quelques exemples de vecteurs
                geom.vector(
                    geom.addPoint(1, 5, 'E').hideShape(),
                    geom.addPoint('F').colinear('A', 'B', 'E').hideShape()
                )
                    .color('green')
                    .labelText('équipollent', true)
                    .labelPos('tl')
                    .labelOffset(15, 15);
                geom.vector(
                    geom.addPoint(9, 7, 'G').hideShape(),
                    geom.addPoint('H').colinear('A', 'B', 'G', -1).hideShape()
                )
                    .color('red')
                    .labelText('opposé', true)
                    .labelPos('tl')
                    .labelOffset(15, 15);
                geom.vector(
                    geom.addPoint(1, 1, 'I').hideShape(),
                    geom.addPoint('J').colinear('A', 'B', 'I', 0.7).hideShape()
                )
                    .color('blue')
                    .labelText('colinéaire', true)
                    .labelPos('tl')
                    .labelOffset(15, 15)
                geom.vector(
                    geom.addPoint(6, 2, 'K').hideShape(),
                    geom.addPoint('J').colinear('A', 'B', 'K', -0.4).hideShape()
                )
                    .color('blue')
                    .labelText('colinéaire', true)
                    .labelPos('tl')
                    .labelOffset(15, 15)

                // On rajoute un vecteur qu'on peut bouger.
                geom.vector(
                    geom.addPoint(8, 2, 'X').hideShape().makeDraggable({
                        fn: this.dragFN,
                        args: null
                    }).setDragGrid(geom.mainGrid),
                    geom.addPoint(12, 2, 'Y').hideShape().makeDraggable({
                        fn: this.dragFN,
                        args: null
                    }).setDragGrid(geom.mainGrid)
                );

                // Debug part

                // geom.showLabels();
            },

            SvgSommeVecteurs(geom) {
                geom.vector(
                    geom.addPoint(1, 1, 'O').hideShape(),
                    geom.addPoint(4, 6, 'A').hideShape()
                );
                geom.vector(
                    'O',
                    geom.addPoint(9, 3, 'B').hideShape()
                );

                geom.segment(
                    'A',
                    geom.addPoint('C').colinear('O', 'B', 'A').hideShape()
                ).dash(5);

                geom.segment(
                    'B',
                    'C'
                ).dash(5);

                geom.vector('O', 'C').color('green')

                geom.getPoint('A').makeDraggable();
                geom.getPoint('B').makeDraggable();
            }
        },
    }
</script>