<template>
    <div>
        <sc-toc-drawer/>
        <v-container>
            <div class="display-3 mt-10">Equations du 2ème degré</div>
            <v-breadcrumbs :items="items"></v-breadcrumbs>


            <v-row>
                <v-col cols="12 mb-10">
                    <div class="headline ">Résolution sans la formule</div>
                    <v-btn small color="light-blue" @click="genererEquationsSansForumule">
                        <v-icon dense class="mr-2">mdi-refresh</v-icon>
                        Générer des questions
                    </v-btn>

                </v-col>

                <v-col cols="12" md="6" v-for="(tex, index) in equationsSansFormule" :key="index">
                    <katexQuestionReponse :afficher-sol="afficherSol" :tex="tex" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import ScTocDrawer from "../../../components/ScTocDrawer";
    import renderMathInElement from "katex/dist/contrib/auto-render.min";
    import {Pi} from "../../../../public/js/pi.js"
    import KatexQuestionReponse from "../../../components/KatexQuestionReponse";


    export default {
        name: "equations2eme",
        components: {KatexQuestionReponse, ScTocDrawer},
        data: function () {
            return {
                afficherSol: false,
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
                        text: '1ère année',
                        disabled: false,
                        href: '/ECG/1'
                    },
                    {
                        text: 'Equations 2ème degré',
                        disabled: true,
                        href: '/ECG/1/equations2eme'
                    }
                ],
                equationsSansFormule: {}

            }
        },
        mounted() {
            renderMathInElement(this.$el);
            this.genererEquationsSansForumule();
        },
        methods: {
            genererEquationsSansForumule: function() {
                let equationsSF = [];
                let e = new Pi.Equation(), p;

                // Par factorisation simple.
                for(let i=0; i<4; i++) {
                    e.left = new Pi.Polynom().rndFactorable(2, true);
                    e.right = new Pi.Polynom().zero();
                    e.solve()
                    equationsSF.push({
                        question: e.tex,
                        reponse: e.solution.replace('\\right}', '\\right\\}').replace('\\left{','\\left\\{')
                    });
                }

                // Par mise en évidence complexe.
                for(let i=0; i<4; i++){
                    p = new Pi.Polynom().rndSimple(1, false, false).display;
                    e.left = new Pi.Polynom(`${Pi.Numeric.randomIntSym(5, false)}x(${p})${new Pi.Monom().random('x', 0, false).displayWithSign}(${p})`)
                    e.right = new Pi.Polynom().zero();
                    e.solve()
                    equationsSF.push({
                        question: `${e.left.raw}=${0}`,
                        reponse: e.solution.replace('\\right}', '\\right\\}').replace('\\left{','\\left\\{')
                    });
                }

                // Simple version
                for(let i=0; i<4; i++){
                    e.left = new Pi.Polynom().parseByCoefficient('x', new Pi.Fraction().parseByInteger(1), new Pi.Fraction().zero(), new Pi.Fraction().parseByInteger(Pi.Numeric.randomIntSym(10)));
                    e.right = new Pi.Polynom(`${Pi.Numeric.randomIntSym(10)}`);
                    e.solve()
                    equationsSF.push({
                        question: e.tex,
                        reponse: e.solution.replace('\\right}', '\\right\\}').replace('\\left{','\\left\\{')
                    });
                }
                this.equationsSansFormule = equationsSF
            }
        }
    }
</script>

