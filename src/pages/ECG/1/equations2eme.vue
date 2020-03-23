<template>
    <div>
        <sc-toc-drawer/>
        <v-container >
            <div class="display-3 mt-10">Equations du 2ème degré</div>
            <v-breadcrumbs :items="items"></v-breadcrumbs>

            <section>
                <div class="headline ">Résolution sans la formule</div>
                <p>Dans certains cas, il est possible de résoudre des équations du 2ème degré sans la formule en appliquant
                la racine carrée de part et d'autre du signe <kbd><span v-katex="'='"></span></kbd>.</p>
                <p class="text-center">
                    <v-icon class="red--text" x-large>mdi-alert</v-icon>
                    <v-chip x-large color="green" outlined class="ml-5" v-katex="'x^2=9\\implies x=\\pm 3'"></v-chip>
                    <v-chip x-large color="red" outlined class="ml-5 mr-5" v-katex="'x^2=-9\\implies S=\\varnothing'"></v-chip>
                    <v-icon class="red--text" x-large>mdi-alert</v-icon>
                </p>

                <v-row>
                    <v-col cols="12">
                        <div class="title mt-5 mb-5">Exemples</div>
                    </v-col>

                </v-row>

                <div class="d-flex justify-space-around flex-wrap flex-column flex-md-row">
                   <v-hover  v-for="(equ, idx) in equExamples" :key="idx" v-slot:default="{ hover }">
                       <v-card tile class="ma-10" :elevation="hover ? 16 : 2">
                           <v-card-title>Exemple {{idx+1}}</v-card-title>
                           <KatexAlignedEquation class="mr-5 ml-5 mb-5" :equations=equ />
                       </v-card>
                   </v-hover>

                </div>

                <v-row>
                    <v-col cols="12 mb-10">
                        <div class="title mt-5 mb-5">Exercices</div>
                        <v-btn small color="light-blue" @click="genererEquationsSansForumule">
                            <v-icon dense class="mr-2">mdi-refresh</v-icon>
                            Générer des questions
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row class="d-flex jus">
                    <v-col cols="4" class="flex-grow-1" v-for="(tex, index) in equationsSansFormule" :key="index" >
                    <v-hover v-slot:default="{ hover }">
                        <v-card :elevation="hover ? 16:2" class=" pl-5 pa-5 flex-grow-1">
                            <katexQuestionReponse class="mr-5 ml-5" :afficher-sol="afficherSol" :tex="tex" />
                        </v-card>
                    </v-hover>
                    </v-col>
                </v-row>
            </section>
            <v-divider class="mb-10"></v-divider>

            <section>
                <div class="headline">Résolution avec la formule</div>
            </section>
        </v-container>
    </div>
</template>

<script>
    import ScTocDrawer from "../../../components/ScTocDrawer";
    import renderMathInElement from "katex/dist/contrib/auto-render.min";
    import {Pi} from "../../../../public/js/pi.js"
    import KatexQuestionReponse from "../../../components/KatexQuestionReponse";
    import KatexAlignedEquation from "../../../components/KatexAlignedEquation";


    export default {
        name: "equations2eme",
        components: {KatexAlignedEquation, KatexQuestionReponse, ScTocDrawer},
        data: function () {
            return {
                exNb: 1,
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
        computed: {
            equExamples: function(){
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
            equExemple1: function(){
                let equs = [];
                equs.push({left: 'x^2-4', right: '5', op: '+4'});
                equs.push({left: 'x^2', right: '9', op: '\\sqrt{\\,}'});
                equs.push({left: 'x', right: '\\pm3', op: ''});
                return equs;
            },
            equExemple2: function(){
                let equs = [];
                equs.push({left: '9x^2+3', right: '7', op: '-3'});
                equs.push({left: '9x^2', right: '4', op: '\\sqrt{\\,}'});
                equs.push({left: '3x', right: '\\pm 2', op: '\\div 3'});
                equs.push({left: 'x', right: '\\pm \\dfrac{2}{3}', op: ''});
                return equs;
            },
            equExemple3: function(){
                let equs = [];
                equs.push({left: '(x-4)^2', right: '8', op: '\\sqrt{\\,}'});
                equs.push({left: 'x-4', right: '\\pm \\sqrt{8}', op: '+4'});
                equs.push({left: 'x', right: '4 \\pm \\sqrt{8}', op: ''});
                return equs;
            },
            equExemple4: function(){
                let equs = [];
                equs.push({left: '(x+5)^2-3', right: '1', op: '+3'});
                equs.push({left: '(x+5)^2', right: '4', op: '\\sqrt{\\,}'});
                equs.push({left: 'x+5', right: '\\pm 2', op: '-5'});
                equs.push({left: 'x_1', right: '-5-2=-7', op: ''});
                equs.push({left: 'x_2', right: '-5+2=-3', op: ''});
                return equs;
            },
            equExemple5: function(){
                let equs = [];
                equs.push({left: '(2x-4)^2+1', right: '4', op: '-1'});
                equs.push({left: '(2x-4)^2', right: '3', op: '\\sqrt{\\,}'});
                equs.push({left: '2x-4', right: '', op: '+4'});
                equs.push({left: '2x', right: '4 \\pm \\sqrt{3}', op: '\\div 2'});
                equs.push({left: 'x', right: '\\dfrac{4 \\pm \\sqrt{3}}{2}', op: ''});
                return equs;
            },
            equExemple6: function(){
                let equs = [];
                equs.push({left: '(2x+7)^2+5', right: '2', op: '-5'});
                equs.push({left: '(2x+7)^2', right: '-3', op: '\\sqrt{\\,}'});
                equs.push({left: '\\text{Impossible car } -3 < 0', right: '', op: '', noEqual: true});
                return equs;
            },
            genererEquationsSansForumule: function() {
                let equationsSF = [];
                let e = new Pi.Equation(), p;

                // Par factorisation simple.
                for(let i=0; i<this.exNb; i++) {
                    e.left = new Pi.Polynom().rndFactorable(2, true);
                    e.right = new Pi.Polynom().zero();
                    e.solve()
                    equationsSF.push({
                        question: e.tex,
                        reponse: e.solution.replace('\\right}', '\\right\\}').replace('\\left{','\\left\\{')
                    });
                }

                // Par mise en évidence complexe.
                for(let i=0; i<this.exNb; i++){
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
                for(let i=0; i<this.exNb; i++){
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
