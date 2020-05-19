<template>
    <section>
        <sc-titre-section id="sansformule">Résolution sans la formule</sc-titre-section>
        <p>Dans certains cas, il est possible de résoudre des équations du 2ème degré sans la formule en appliquant
            la racine carrée de part et d'autre du signe <kbd>
                <k-math>=</k-math>
            </kbd>.
        </p>
        <v-row align="baseline">
            <v-col align="center" align-sm="right" cols="12" lg="3" md="2" sm="1">
                <v-icon class="red--text" x-large>mdi-alert</v-icon>
            </v-col>

            <v-col align="center" cols="12" lg="3" md="4" sm="5">
                <v-chip color="green" outlined x-large>
                    <k-math>x^2=9\implies x=\pm 3</k-math>
                </v-chip>
            </v-col>
            <v-col align="center" cols="12" lg="3" md="4" sm="5">
                <v-chip color="red" outlined x-large>
                    <k-math>x^2=-9\implies S=\varnothing</k-math>
                </v-chip>
            </v-col>
            <v-col align="center" align-sm="left" cols="12" lg="3" md="2" sm="1">
                <v-icon class="red--text" x-large>mdi-alert</v-icon>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <div class="title mt-5 mb-5">Exemples</div>
            </v-col>

        </v-row>

        <v-row class="align-stretch" justify="space-around">
            <v-col
                    :key="idx" cols="12" lg="4"
                    md="6" v-for="(equ, idx) in equExamples">
                <sc-boite :titre="`Exemple ${idx+1}`"
                          class="fill-height"
                          exemple>
                    <katex-aligned-equation :equations=equ class="mr-5 ml-5 mb-5"></katex-aligned-equation>
                </sc-boite>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12 mb-10">
                <div class="title mt-5 mb-5">Exercices</div>
                <v-btn @click="genererEquationsSansForumule" color="light-blue" small>
                    <v-icon class="mr-2" dense>mdi-refresh</v-icon>
                    Générer des questions
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-space-around" justify="space-around">
            <v-col :key="index" cols="12" lg="4" md="6" v-for="(tex, index) in equationsSansFormule">
                <v-card>
                    <v-card-text class="text--primary body-1">
                        <katex-question-reponse :afficher-sol="afficherSol" :tex="tex" class="mr-5 ml-5"/>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>

<script>
    import ScTitreSection from "../../../components/Titles/ScTitre1Section";
    import KatexQuestionReponse from "../../../components/Pi/KatexQuestionReponse";
    import KatexAlignedEquation from "../../../components/Pi/KatexAlignedEquation";
    import {Pi} from "../../../../public/js/pi";
    import KMath from "../../../components/Pi/k-math";
    import ScBoite from "../../../components/Boxes/ScBoite";

    export default {
        name: "theorie",
        components: {ScBoite, KMath, KatexAlignedEquation, KatexQuestionReponse, ScTitreSection},
        data: function () {
            return {
                exNb: 1,
                afficherSol: false,
                equationsSansFormule: {},
                equExerciceJuste: true,
                equA: '',
                equB: '',
                equC: '',
                equD: '',
                equE: '',
            }
        },
        mounted() {
            this.genererEquationsSansForumule();
        },
        computed: {
            equExamples: function () {
                return [
                    this.equExemple1(),
                    this.equExemple2(),
                    this.equExemple3(),
                    this.equExemple4(),
                    this.equExemple5(),
                    this.equExemple6(),
                ]
            },
        },
        methods: {
            equExemple1: function () {
                let equs = [];
                equs.push({left: 'x^2-4', right: '5', op: '+4'});
                equs.push({left: 'x^2', right: '9', op: '\\sqrt{\\,}'});
                equs.push({left: 'x', right: '\\pm3', op: ''});
                return equs;
            },
            equExemple2: function () {
                let equs = [];
                equs.push({left: '9x^2+3', right: '7', op: '-3'});
                equs.push({left: '9x^2', right: '4', op: '\\sqrt{\\,}'});
                equs.push({left: '3x', right: '\\pm 2', op: '\\div 3'});
                equs.push({left: 'x', right: '\\pm \\dfrac{2}{3}', op: ''});
                return equs;
            },
            equExemple3: function () {
                let equs = [];
                equs.push({left: '(x-4)^2', right: '8', op: '\\sqrt{\\,}'});
                equs.push({left: 'x-4', right: '\\pm \\sqrt{8}', op: '+4'});
                equs.push({left: 'x', right: '4 \\pm \\sqrt{8}', op: ''});
                return equs;
            },
            equExemple4: function () {
                let equs = [];
                equs.push({left: '(x+5)^2-3', right: '1', op: '+3'});
                equs.push({left: '(x+5)^2', right: '4', op: '\\sqrt{\\,}'});
                equs.push({left: 'x+5', right: '\\pm 2', op: '-5'});
                equs.push({left: 'x_1', right: '-5-2=-7', op: ''});
                equs.push({left: 'x_2', right: '-5+2=-3', op: ''});
                return equs;
            },
            equExemple5: function () {
                let equs = [];
                equs.push({left: '(2x-4)^2+1', right: '4', op: '-1'});
                equs.push({left: '(2x-4)^2', right: '3', op: '\\sqrt{\\,}'});
                equs.push({left: '2x-4', right: '', op: '+4'});
                equs.push({left: '2x', right: '4 \\pm \\sqrt{3}', op: '\\div 2'});
                equs.push({left: 'x', right: '\\dfrac{4 \\pm \\sqrt{3}}{2}', op: ''});
                return equs;
            },
            equExemple6: function () {
                let equs = [];
                equs.push({left: '(2x+7)^2+5', right: '2', op: '-5'});
                equs.push({left: '(2x+7)^2', right: '-3', op: '\\sqrt{\\,}'});
                equs.push({left: '\\text{Impossible car } -3 < 0', right: '', op: '', noEqual: true});
                return equs;
            },
            genererEquationsSansForumule: function () {
                let equationsSF = [];
                let e = new Pi.Equation(), p;

                // Par factorisation simple.
                for (let i = 0; i < this.exNb; i++) {
                    e.left = new Pi.Polynom().rndFactorable(2, true);
                    e.right = new Pi.Polynom().zero();
                    e.solve();
                    equationsSF.push({
                        question: e.tex,
                        reponse: e.solution.replace('\\right}', '\\right\\}').replace('\\left{', '\\left\\{')
                    });
                }

                // Par mise en évidence complexe.
                for (let i = 0; i < this.exNb; i++) {
                    p = new Pi.Polynom().rndSimple(1, false, false).display;
                    e.left = new Pi.Polynom(`${Pi.Numeric.randomIntSym(5, false)}x(${p})${new Pi.Monom().random('x', 0, false).displayWithSign}(${p})`);
                    e.right = new Pi.Polynom().zero();
                    e.solve();
                    equationsSF.push({
                        question: `${e.left.raw}=${0}`,
                        reponse: e.solution.replace('\\right}', '\\right\\}').replace('\\left{', '\\left\\{')
                    });
                }

                // Simple version
                for (let i = 0; i < this.exNb; i++) {
                    e.left = new Pi.Polynom().parseByCoefficient('x', new Pi.Fraction().parseByInteger(1), new Pi.Fraction().zero(), new Pi.Fraction().parseByInteger(Pi.Numeric.randomIntSym(10)));
                    e.right = new Pi.Polynom(`${Pi.Numeric.randomIntSym(10)}`);
                    e.solve();
                    equationsSF.push({
                        question: e.tex,
                        reponse: e.solution.replace('\\right}', '\\right\\}').replace('\\left{', '\\left\\{')
                    });
                }
                this.equationsSansFormule = equationsSF
            }
        }
    }
</script>

<style scoped>

</style>