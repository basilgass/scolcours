<template>
    <section>
        <sc-titre-section id="avecformule">Résolution avec la formule</sc-titre-section>
        <p>La résolution par la formule commence par ordonnée l'équation sous une de ses forme canonique:

            <sc-boite>
                \[ Ax^2 + Bx + C = 0 \]
            </sc-boite>

            Les valeurs \(A,\,B\) et \(C\) sont des coefficients. Ce sont des nombres réels et ils peuvent
            être nuls.
        </p>

        <sc-titre-partie divider>Processus</sc-titre-partie>
        <sc-boite processus titre="Processus de résolution">
            \[ Ax^2+Bx+C=0 \]
            \[ \Downarrow \]
            \[ \Delta = B^2-4\cdot A \cdot C \]
            \[ \Downarrow \]

            <v-row>
                <v-col>
                    \[\Delta > 0 \implies 2 \text{ solutions}\]
                    \[ \Downarrow\]
                    \[ S = \left\{ \frac{-B\pm\sqrt{\Delta}}{2A} \right\}\]
                </v-col>
                <v-col>
                    \[\Delta = 0\implies 1 \text{ solution}\]
                    \[ \Downarrow\]
                    \[ S = \left\{ \frac{-B}{2A} \right\} \]
                </v-col>
                <v-col>
                    \[\Delta &lt; 0 \implies 0 \text{ solution}\]
                    \[ \Downarrow\]
                    \[ S = \varnothing \]
                </v-col>
            </v-row>
        </sc-boite>

        <sc-titre-partie divider>Exemples</sc-titre-partie>
        <sc-boite exemple titre>
            \[ 3x^2+5x-2=0 \]
            \[\Downarrow\]
            \[
            \begin{matrix}
            A&=&3\\
            B&=&5\\
            C&=&-2
            \end{matrix}
            \]
            \[\Downarrow\]
            \[ \Delta = B^2-4AC = 5^2 - 4 \cdot 3 \cdot (-2) = 49 \]
            \[\Downarrow\]
            \[ \Delta > 0 \implies \text{ 2 solutions } \]
            \[\Downarrow\]
            \[ x_{12}=\frac{-B\pm\sqrt{\Delta}}{2\cdot A}=\frac{-5\pm\sqrt{49}}{2\cdot 3} \]
            \[ \Downarrow \]
            \[
            \begin{aligned}
            x_1 &=& \frac{-5-7}{6}=\frac{-12}{6}=-2\\
            x_2 &=& \frac{-5+7}{6}=\frac{2}{6}=\frac{1}{3}
            \end{aligned}
            \]
            \[ \Downarrow \]
            \[ S=\left\{-2; \frac{1}{3} \right\} \]
        </sc-boite>

        <sc-boite exemple titre>
            \[ 2x^2-x-4=0 \]
            \[\Downarrow\]
            \[
            \begin{matrix}
            A&=&2\\
            B&=&-1\\
            C&=&-4
            \end{matrix}
            \]
            \[\Downarrow\]
            \[ \Delta = B^2-4AC = (-1)^2 - 4 \cdot 2 \cdot (-4) = 33 \]
            \[\Downarrow\]
            \[ \Delta > 0 \implies \text{ 2 solutions } \]
            \[\Downarrow\]
            \[ x_{12}=\frac{-B\pm\sqrt{\Delta}}{2\cdot A}=\frac{-(-1)\pm\sqrt{33}}{2\cdot 2} \]
            \[ \Downarrow \]
            \[
            \begin{aligned}
            x_1 &=& \frac{1-\sqrt{33}}{4}\\
            x_2 &=& \frac{1+\sqrt{33}}{4}
            \end{aligned}
            \]
            \[ \Downarrow \]
            \[ S=\left\{\frac{1-\sqrt{33}}{4}; \frac{1+\sqrt{33}}{4} \right\} \]
        </sc-boite>

        <sc-boite exemple titre>
            \[ 9x^2+30x+25=0 \]
            \[\Downarrow\]
            \[
            \begin{matrix}
            A&=&9\\
            B&=&30\\
            C&=&25
            \end{matrix}
            \]
            \[\Downarrow\]
            \[ \Delta = B^2-4AC = (30)^2 - 4 \cdot 9 \cdot 25 = 0 \]
            \[\Downarrow \]
            \[ \Delta = 0 \implies \text{ 1 solution } \]
            \[\Downarrow\]
            \[ x=\frac{-B}{2\cdot A}=\frac{-30}{2\cdot 9}=-\frac{5}{3} \]
            \[ \Downarrow \]
            \[ S=\left\{ -\frac{5}{3} \right\} \]
        </sc-boite>

        <sc-boite exemple titre>
            \[ 4x^2-2x+3=0 \]
            \[\Downarrow\]
            \[
            \begin{matrix}
            A&=&4\\
            B&=&-2\\
            C&=&3
            \end{matrix}
            \]
            \[\Downarrow\]
            \[ \Delta = B^2-4AC = (-2)^2 - 4 \cdot 4 \cdot 3 = -44 \]
            \[\Downarrow\]
            \[ \Delta &lt; 0 \implies \text{ 0 solution } \]
            \[\Downarrow\]
            \[ S=\varnothing \]
        </sc-boite>

        <v-row justify="center">
            <v-col cols="12" lg="4" sm="6" xl="3">
                <v-card class="flex">
                    <v-card-title>S'entraîner</v-card-title>
                    <v-card-subtitle>Pour l'équation ci-dessous, déterminer les coefficients \(A,\,B,\,C\), le discriminent \(\Delta\) ainsi que le nombre de solutions.
                    </v-card-subtitle>
                    <v-card-text class="body-1 text--primary">
                        <k-math display v-bind:class="{'green--text': equExerciceJuste}">{{equDonneeComputed}}</k-math>

                        <div>\(A=\)
                            <v-text-field @input="equCheck" @keyup.enter="exerciceNouveau(true)" class="d-inline-block" ref="equA" style="width: 100px;" v-model="equA"></v-text-field>
                        </div>
                        <div>\(B=\)
                            <v-text-field @input="equCheck" @keyup.enter="exerciceNouveau(true)" class="d-inline-block" style="width: 100px;" v-model="equB"></v-text-field>
                        </div>
                        <div>\(C=\)
                            <v-text-field @input="equCheck" @keyup.enter="exerciceNouveau(true)" class="d-inline-block" style="width: 100px;" v-model="equC"></v-text-field>
                        </div>
                        <div>\(\Delta=\)
                            <v-text-field @input="equCheck" @keyup.enter="exerciceNouveau(true)" class="d-inline-block" style="width: 100px;" v-model="equD"></v-text-field>
                        </div>
                        <div>Nb solutions \(=\)
                            <v-text-field @input="equCheck" @keyup.enter="exerciceNouveau(true)" class="d-inline-block " style="width: 100px;" v-model="equE"></v-text-field>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn :disabled="!equExerciceJuste" @click="exerciceNouveau(true)">Nouveau</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>

<script>
    import {Pi} from "../../../../public/js/pi";
    import ScTitreSection from "../../../components/Titles/ScTitre1Section";
    import ScBoite from "../../../components/Boxes/ScBoite";
    import ScTitrePartie from "../../../components/Titles/ScTitre2Partie";
    import KMath from "../../../components/Pi/k-math";

    export default {
        name: "theorie",
        components: {KMath, ScTitrePartie, ScBoite, ScTitreSection},
        data: function () {
            return {
                exNb: 1,
                afficherSol: false,
                equDonnee: {question: '', reponse: {A: 'UNDEFINED', B: 'UNDEFINED', C: 'UNDEFINED'}},
                equExerciceJuste: true,
                equA: '',
                equB: '',
                equC: '',
                equD: '',
                equE: '',
            }
        },
        mounted() {
            this.exerciceNouveau();
        },
        computed: {
            equDonneeComputed: function () {
                return this.equDonnee.question;
            }
        },
        methods: {
            exerciceNouveau: function (doFocus) {
                if (this.equExerciceJuste === false) {
                    return;
                }

                let A = Pi.Numeric.randomIntSym(10, true),
                    B = Pi.Numeric.randomIntSym(10, true),
                    C = Pi.Numeric.randomIntSym(10, true),
                    D = B * B - 4 * A * C,
                    equ = new Pi.Equation(),
                    E = (D > 0) ? 2 : (D === 1) ? 1 : 0;

                equ.left = new Pi.Polynom().parseByCoefficient(
                    'x',
                    new Pi.Fraction().parseByInteger(A),
                    new Pi.Fraction().parseByInteger(B),
                    new Pi.Fraction().parseByInteger(C),
                );
                equ.right = new Pi.Polynom().zero();

                this.equDonnee = {
                    question: equ.tex,
                    reponse: {A, B, C, D, E}
                };

                this.equA = '';
                this.equB = '';
                this.equC = '';
                this.equD = '';
                this.equE = '';
                this.equExerciceJuste = false;

                if (doFocus === true) {
                    this.$refs.equA.focus();
                }
            },
            equCheck: function () {
                if (+this.equA !== this.equDonnee.reponse.A) {
                    console.log('A')
                    this.equExerciceJuste = false;
                    return;
                }
                if (+this.equB !== this.equDonnee.reponse.B) {
                    console.log('B')
                    this.equExerciceJuste = false;
                    return;
                }
                if (+this.equC !== this.equDonnee.reponse.C) {
                    console.log('C')
                    this.equExerciceJuste = false;
                    return;
                }
                if (+this.equD !== this.equDonnee.reponse.D) {
                    console.log('D', this.equDonnee.reponse.D)
                    this.equExerciceJuste = false;
                    return;
                }
                if (+this.equE !== this.equDonnee.reponse.E) {
                    console.log('E', this.equE, this.equDonnee.reponse.E)
                    this.equExerciceJuste = false;
                    return;
                }

                this.equExerciceJuste = true;
            }
        }
    }
</script>

<style scoped>

</style>