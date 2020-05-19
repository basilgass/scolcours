<template>
    <section>
        <sc-titre-section id="reperes">Repères</sc-titre-section>
        <p>
            Un repère est un triplet \( \mathcal{R} = \left( O;\,\overrightarrow{e_1};\,\overrightarrow{e_2} \right) \)
            composé
            d'un point d'origine \( O \) et de deux vecteurs \(\overrightarrow{e_1}\) et \(\overrightarrow{e_2}\).
        </p>
        <div>
            <p>
                Les vecteurs \(\overrightarrow{e_1}\) et \(\overrightarrow{e_2}\) définissent deux points
                \(E_1 \text{ et } E_2\) tel que \(\overrightarrow{e_1}=\overrightarrow{OE_1}\) et
                \(\overrightarrow{e_2}=\overrightarrow{OE_2}\).
            </p>
            <p>A l'aide d'un repère, on définit donc trois points particuliers: \(\quad O(0;0) \qquad E_1(1;0) \qquad
                E_2(0;1)\)
            </p>

            <p>Dans un repère, on peut avoir des points avec des coordonnées.
                Les coordonnées d'un point \(A\) correspondent aux composantes du vecteur \(\overrightarrow{OA}\)</p>
        </div>

        <sc-boite theoreme>
            \[\overrightarrow{OA}=\begin{pmatrix}a_1\\a_2\end{pmatrix}
            \Longleftrightarrow
            A \left( a_1;\,a_2\right)\]
        </sc-boite>

        <sc-titre-partie divider>Rapport de section</sc-titre-partie>
        <p>
            Soient trois points alignés A, B et P, distincts deux à deux. Les vecteurs \(\overrightarrow{AP}\) et
            \(\overrightarrow{BP}\) sont colinéaires.<br>
            Il existe donc un nombre réél \(\lambda\) tel que \( \overrightarrow{AP} = \lambda\cdot\overrightarrow{BP}
            \)
        </p>

        <sc-boite exemple width="550px">
            <sc-boite-texte>
                <p class="mb-0 mt-5 text--disabled">Bouger les points pour modifier le rapport de section</p>
                <div id="svg-rapport-section"></div>
                <v-card tile>
                    <pi-svg
                            :dimension="30"
                            :geom-draw="rapportSectionGeom"
                            :height="80"
                            :width="600"
                    />
                </v-card>
                <div class="mt-5 mb-5">Rapport de section:
                    <k-math>{{rapportSectionValeur}}</k-math>
                </div>
            </sc-boite-texte>
        </sc-boite>


        <div>
            <sc-titre-partie divider>Processus</sc-titre-partie>
            <sc-boite processus>
                <div class="subtitle-1">
                    1. Calculer les vecteurs \( \overrightarrow{AP} \) et \( \overrightarrow{BP} \)
                </div>
                \[A(4;2),\,B(7;-3)\text{ et } P(-2;12) \]
                \[\overrightarrow{AP}=\begin{pmatrix}-2-4\\12-2\end{pmatrix}=\begin{pmatrix}-6\\10\end{pmatrix}\]
                \[\overrightarrow{BP}=\begin{pmatrix}-2-7\\12-(-3)\end{pmatrix}=\begin{pmatrix}-9\\15\end{pmatrix}\]

                <div class="subtitle-1 mt-10">
                    2. Les trois points sont-ils alignés ?
                    <v-btn class="float-right" x-small @click="$vuetify.goTo('#colinearite-vecteurs')">Méthode alternative</v-btn>
                    <div class="caption ml-5">
                        Trois points alignés revient à montrer que les deux vecteurs sont colinéaires !
                    </div>
                    <div class="caption mb-5 ml-5">
                        <v-icon small class="mr-3">mdi-alert</v-icon>
                        S'ils ne le sont pas, on ne peut pas calculer le rapport de section
                    </div>
                </div>
                \[ \begin{vmatrix}-6&-9\\10&15\end{vmatrix} = (-6)\cdot 15 - 10\cdot(-9)=0\]

                <div class="subtitle-1 mt-10">
                    3. Calculer le rapport de section
                    <div class="caption mb-5 ml-5">Utiliser soit les 1<sup>ères</sup> compposantes, soit les
                        2<sup>èmes</sup></div>
                </div>
                \[ \overrightarrow{AP} = \lambda\cdot\overrightarrow{BP} \]
                \[ \Downarrow \]
                \[ \lambda = \frac{(AP)_1}{(BP)_1}= \frac{-6}{-9} = \frac{2}{3}\]
                \[ \lambda = \frac{(AP)_2}{(BP)_2}= \frac{10}{15} = \frac{2}{3} \]
            </sc-boite>
        </div>

        <v-row class="justify-center">
            <v-col cols="12" sm="8" lg="6" xl="4">
                <sc-exercice-simple
                        :question="rapportSectionQuestions"
                        donnee="Réponse sous forme de fraction réduite."
                        exemple="Exemple: 3/7"
                        formatage
                        titre="Calcul d'un rapport de section"

                >
                </sc-exercice-simple>


            </v-col>
        </v-row>

    </section>
</template>
<script>
    import scBoite from "../../../components/Boxes/ScBoite";
    import {Pi} from "../../../../public/js/pi";
    import ScBoiteTexte from "../../../components/Boxes/ScBoiteTexte";
    import ScTitreSection from "../../../components/Titles/ScTitre1Section";
    import ScTitrePartie from "../../../components/Titles/ScTitre2Partie";
    import PiSvg from "../../../components/Pi/pi-svg";
    import KMath from "../../../components/Pi/k-math";
    import ScExerciceSimple from "../../../components/Exercices/ScExerciceSimple";

    export default {
        name: 'GeometrieVectorielleRepere',
        components: {ScExerciceSimple, KMath, PiSvg, ScTitrePartie, ScTitreSection, ScBoiteTexte, scBoite},
        data: function () {
            return {
                rapportsection: 0,
                rapportSectionValeur: '\\lambda=\\dfrac{AP}{BP}'
            }
        },
        computed: {},
        methods: {
            rapportSectionCalculs: function (geom) {
                let AP = geom.getPoint('P').x - geom.getPoint('A').x,
                    BP = geom.getPoint('P').x - geom.getPoint('B').x;

                if (BP === 0) {
                    this.rapportSectionValeur = `\\text{Impossible car }BP=0`;
                } else {
                    let F = new Pi.Fraction().parseByInteger(AP, BP).reduce();
                    this.rapportSectionValeur = `\\lambda=\\dfrac{AP}{BP}=${F.dfrac}`;
                }
            },
            rapportSectionGeom: function (geom) {
                geom.defaultFontSize = '12pt'
                let A = geom.addPoint(2, 2, 'A').showLabel().labelPos('bm'),
                    B = geom.addPoint(6, 2, 'B').showLabel().labelPos('bm'),
                    P = geom.addPoint(9, 2, 'P').showLabel().labelPos('bm');

                geom.segment('A', 'P').width(3);
                geom.segment('B', 'P').width(3);

                A.makeDraggable({
                    fn: (geom, point, box, handler) => {
                        return handler.move(handler.el.cx() - box.width / 2, 40 - box.height / 2);
                    }
                }).setDragGrid(geom.mainGrid).afterDrag(this.rapportSectionCalculs);
                B.makeDraggable({
                    fn: (geom, point, box, handler) => {
                        return handler.move(handler.el.cx() - box.width / 2, 40 - box.height / 2);
                    }
                }).setDragGrid(geom.mainGrid).afterDrag(this.rapportSectionCalculs);
                P.makeDraggable({
                    fn: (geom, point, box, handler) => {
                        return handler.move(handler.el.cx() - box.width / 2, 40 - box.height / 2);
                    }
                }).setDragGrid(geom.mainGrid).afterDrag(this.rapportSectionCalculs);

                this.rapportSectionCalculs(geom);
            },
            rapportSectionQuestions() {
                let A = [
                        Pi.Numeric.randomIntSym(10, false),
                        Pi.Numeric.randomIntSym(10, false)
                    ],
                    B = [
                        Pi.Numeric.randomIntSym(10, false),
                        Pi.Numeric.randomIntSym(10, false)
                    ],
                    n = Pi.Numeric.randomIntSym(10, false),
                    g = Pi.Numeric.gcd(B[0] - A[0], B[1] - A[1]),
                    P;

                // Avoid unit value.
                if (n === 1) {
                    n = Pi.Numeric.randomInt(1, 10);
                }
                P = [
                    A[0] + (B[0] - A[0]) * n / g,
                    A[1] + (B[1] - A[1]) * n / g,
                ];

                return {
                    complement: `A(${A[0]};${A[1]}) \\quad B(${B[0]};${B[1]}) \\quad P(${P[0]};${P[1]})`,
                    question: '\\lambda=',
                    reponse: new Pi.Fraction().parseByInteger(P[0] - A[0], P[0] - B[0]).reduce().display
                }
            }
        },
        mounted() {
        }
    }
</script>