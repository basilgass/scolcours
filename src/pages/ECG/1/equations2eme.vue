<template>
    <div>
        <v-container >
            <div class="display-3 mt-10">Equations du 2ème degré</div>
            <sc-breadcrumbs />

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
                <v-row class="d-flex justify-space-around">
                    <v-col cols="12" lg="4" class="flex-grow-1" v-for="(tex, index) in equationsSansFormule" :key="index" >
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

                <p>La résolution par la formule commence par ordonnée l'équation sous une de ses forme canonique:

                <BaseAlert>
                    \[ Ax^2 + BX + C = 0 \]
                </BaseAlert>

                    Les valeurs \(A,\,B\) et \(C\) sont des coefficients. Ce sont des nombres réels et ils peuvent
                    être nuls.
                </p>

                <div class="title mt-5 mb-5">Processus</div>
                <v-row justify="space-around">
                    <v-hover v-slot:default="{ hover }">
                        <v-sheet width="70vw" :elevation="hover ? 16:2" class="pt-5 pb-5 mt-10 mb-10">
                            \[                    Ax^2+Bx+C=0                    \]
                            \[ \Downarrow \]
                            \[  \Delta = B^2-4\cdot A \cdot C \]
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
                        </v-sheet>
                    </v-hover>
                </v-row>

                <div class="title">Exemples</div>
                <v-row justify="space-around">
                    <v-hover v-slot:default="{ hover }">
                        <v-sheet :elevation="hover ? 16 : 2" width="500px">
                            <v-container>
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
                            </v-container>
                        </v-sheet>
                    </v-hover>
                </v-row>

                <v-row justify="space-around mt-10">
                    <v-hover v-slot:default="{ hover }">
                        <v-sheet :elevation="hover ? 16 : 2" width="500px">
                            <v-container>
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
                            </v-container>
                        </v-sheet>
                    </v-hover>
                </v-row>

                <v-row justify="space-around mt-10">
                    <v-hover v-slot:default="{ hover }">
                        <v-sheet :elevation="hover ? 16 : 2" width="500px">
                            <v-container>
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
                            </v-container>
                        </v-sheet>
                    </v-hover>
                </v-row>

                <v-row justify="space-around mt-10">
                    <v-hover v-slot:default="{ hover }">
                        <v-sheet :elevation="hover ? 16 : 2" width="500px">
                            <v-container>
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
                            </v-container>
                        </v-sheet>
                    </v-hover>
                </v-row>

                <v-row class="justify-center">
                    <v-col cols="12" sm="6" lg="4" xl="3">
                        <v-card class="flex">
                            <v-card-title>S'entraîner</v-card-title>
                            <v-card-subtitle>Pour l'équation ci-dessous, déterminer les coefficients \(A,\,B,\,C\), le discriminent \(\Delta\) ainsi que le nombre de solutions.</v-card-subtitle>
                            <v-card-text class="body-1 text--primary" >
                                <div v-katex="equDonneeComputed" v-bind:class="{'green--text': equExerciceJuste}"></div>

                                <div>\(A=\) <v-text-field ref="equA" @keyup.enter="exerciceNouveau(true)" @input="equCheck" v-model="equA" class="d-inline-block" style="width: 100px;"></v-text-field></div>
                                <div>\(B=\) <v-text-field @keyup.enter="exerciceNouveau(true)" @input="equCheck" v-model="equB" class="d-inline-block" style="width: 100px;"></v-text-field></div>
                                <div>\(C=\) <v-text-field @keyup.enter="exerciceNouveau(true)" @input="equCheck" v-model="equC" class="d-inline-block" style="width: 100px;"></v-text-field></div>
                                <div>\(\Delta=\) <v-text-field @keyup.enter="exerciceNouveau(true)" @input="equCheck" v-model="equD" class="d-inline-block" style="width: 100px;"></v-text-field></div>
                                <div>Nb solutions \(=\) <v-text-field @keyup.enter="exerciceNouveau(true)" @input="equCheck" v-model="equE" class="d-inline-block " style="width: 100px;"></v-text-field></div>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn :disabled="!equExerciceJuste" @click="exerciceNouveau(true)">Nouveau</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </section>
        </v-container>
    </div>
</template>

<script>
    import ScTocDrawer from "../../../components/UserInterface/ScTocDrawer";
    import renderMathInElement from "katex/dist/contrib/auto-render.min";
    import {Pi} from "../../../../public/js/pi.js"
    import KatexQuestionReponse from "../../../components/KatexQuestionReponse";
    import KatexAlignedEquation from "../../../components/KatexAlignedEquation";
    import BaseAlert from "../../../components/BaseAlert";
    import ScBreadcrumbs from "../../../components/UserInterface/ScBreadcrumbs";


    export default {
        name: "equations2eme",
        layout: 'theorie',
        components: {ScBreadcrumbs, BaseAlert, KatexAlignedEquation, KatexQuestionReponse, ScTocDrawer},
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
                equationsSansFormule: {},
                equDonnee: {question: '', reponse: {A:'UNDEFINED', B: 'UNDEFINED', C:'UNDEFINED'}},
                equExerciceJuste: true,
                equA: '',
                equB: '',
                equC: '',
                equD: '',
                equE: '',
            }
        },
        mounted() {
            renderMathInElement(this.$el);
            this.genererEquationsSansForumule();
            this.exerciceNouveau();
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
            equDonneeComputed: function(){
                return this.equDonnee.question;
            }
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
                    e.solve();
                    equationsSF.push({
                        question: e.tex,
                        reponse: e.solution.replace('\\right}', '\\right\\}').replace('\\left{','\\left\\{')
                    });
                }

                // Par mise en évidence complexe.
                for(let i=0; i<this.exNb; i++){
                    p = new Pi.Polynom().rndSimple(1, false, false).display;
                    e.left = new Pi.Polynom(`${Pi.Numeric.randomIntSym(5, false)}x(${p})${new Pi.Monom().random('x', 0, false).displayWithSign}(${p})`);
                    e.right = new Pi.Polynom().zero();
                    e.solve();
                    equationsSF.push({
                        question: `${e.left.raw}=${0}`,
                        reponse: e.solution.replace('\\right}', '\\right\\}').replace('\\left{','\\left\\{')
                    });
                }

                // Simple version
                for(let i=0; i<this.exNb; i++){
                    e.left = new Pi.Polynom().parseByCoefficient('x', new Pi.Fraction().parseByInteger(1), new Pi.Fraction().zero(), new Pi.Fraction().parseByInteger(Pi.Numeric.randomIntSym(10)));
                    e.right = new Pi.Polynom(`${Pi.Numeric.randomIntSym(10)}`);
                    e.solve();
                    equationsSF.push({
                        question: e.tex,
                        reponse: e.solution.replace('\\right}', '\\right\\}').replace('\\left{','\\left\\{')
                    });
                }
                this.equationsSansFormule = equationsSF
            },
            exerciceNouveau: function(doFocus) {
                if(this.equExerciceJuste===false){return;}

                let A = Pi.Numeric.randomIntSym(10, true),
                    B = Pi.Numeric.randomIntSym(10, true),
                    C = Pi.Numeric.randomIntSym(10, true),
                    D = B*B-4*A*C,
                    e = new Pi.Equation();

                e.left = new Pi.Polynom().parseByCoefficient(
                    'x',
                    new Pi.Fraction().parseByInteger(A),
                    new Pi.Fraction().parseByInteger(B),
                    new Pi.Fraction().parseByInteger(C),
                );
                e.right = new Pi.Polynom().zero();

                this.equDonnee = {
                    question: e.tex,
                    reponse: {A, B, C, D}
                };

                this.equA = '';
                this.equB = '';
                this.equC = '';
                this.equD = '';
                this.equE = '';
                this.equExerciceJuste = false;

                if(doFocus===true){
                    this.$refs.equA.focus();
                }
            },
            equCheck: function() {
                if(+this.equA!==this.equDonnee.reponse.A){
                    this.equExerciceJuste = false;
                    return;
                }
                if(+this.equB!==this.equDonnee.reponse.B){
                    this.equExerciceJuste = false;
                    return;
                }
                if(+this.equC!==this.equDonnee.reponse.C){
                    this.equExerciceJuste = false;
                    return;
                }
                if(+this.equD!==this.equDonnee.reponse.D){
                    this.equExerciceJuste = false;
                    return;
                }
                if(+this.equE!==this.equDonnee.reponse.E){
                    this.equExerciceJuste = false;
                    return;
                }


                this.equExerciceJuste = true;
            }
        }
    }
</script>
