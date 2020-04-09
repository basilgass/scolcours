<template>
    <section>
        <sc-titre-section id="reperes">Repères</sc-titre-section>
        <p>
            Un repère est un triplet \( \mathcal{R} = \left( O;\,\overrightarrow{e_1};\,\overrightarrow{e_2} \right) \)
            composé
            d'un point d'origine \( O \) et de deux vecteurs \(\overrightarrow{e_1}\) et \(\overrightarrow{e_2}\).
        </p>
        <div v-show="!vital">
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

        <sc-theoreme>
            \[\overrightarrow{OA}=\begin{pmatrix}a_1\\a_2\end{pmatrix}
            \Longleftrightarrow
            A \left( a_1;\,a_2\right)\]
        </sc-theoreme>

        <sc-titre-partie>Rapport de section</sc-titre-partie>
        <p>
            Soient trois points alignés A, B et P, distincts deux à deux. Les vecteurs \(\overrightarrow{AP}\) et
            \(\overrightarrow{BP}\) sont colinéaires.<br>
            Il existe donc un nombre réél \(\lambda\) tel que \( \overrightarrow{AP} = \lambda\cdot\overrightarrow{BP}
            \)
        </p>

        <sc-exemple v-show="!vital" width="550px">
            <sc-boite-texte>
                <p class="mb-0 mt-5 text--disabled">Bouger les points pour modifier le rapport de section</p>
                <div id="svg-rapport-section"></div>
                <div class="mt-5 mb-5">Rapport de section: <span class="ml-3" id="rapportSection"></span></div>
            </sc-boite-texte>
        </sc-exemple>


        <div v-show="!vital">
            <sc-titre-partie>Processus</sc-titre-partie>
            <sc-processus v-show="!vital" width="70vw">
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
                    <div class="caption mb-5 ml-5">utiliser soit les 1<sup>ères</sup> compposantes, soit les
                        2<sup>èmes</sup></div>
                </div>
                \[ \overrightarrow{AP} = \lambda\cdot\overrightarrow{BP} \]
                \[ \Downarrow \]
                \[ \lambda = \frac{(AP)_1}{(BP)_1}= \frac{-6}{-9} = \frac{2}{3}\]
                \[ \lambda = \frac{(AP)_2}{(BP)_2}= \frac{10}{15} = \frac{2}{3} \]
            </sc-processus>
        </div>

        <v-row v-show="!vital" class="justify-center">
            <v-col cols="12" sm="8" lg="6" xl="4">
                <v-card>
                    <v-card-title>S'entraîner</v-card-title>
                    <v-card-text class="body-1 text--primary">
                        <div class="mb-6">
                            <div v-katex="exerciceRS.question"></div>
                            <p class="mt-5">Calculer le rapport de section</p>
                        </div>
                        <div v-katex="responseRSComputed" v-bind:class="{'green--text': rsCheck()}"></div>
                        <v-input messages="Ecrire la fraction réduite" :success="rsCheck()">
                            <v-text-field v-on:keyup.enter="rsNouveau" :success="rsCheck()"
                                          class="d-inline-block headline font-weight-thin"
                                          v-model="reponseRS"></v-text-field>
                        </v-input>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn :disabled="!rsCheck()" @click="rsNouveau">Nouveau</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

    </section>
</template>
<script>
    import BaseAlert from "../../../../../components/Boxes/ScBaseAlert"
    import {Pi} from "../../../../../../public/js/pi";
    import katex from "katex";
    import {SVG} from "@svgdotjs/svg.js";
    import ScExemple from "../../../../../components/Boxes/ScBaseExemple";
    import ScBoiteTexte from "../../../../../components/Boxes/ScBoiteTexte";
    import ScProcessus from "../../../../../components/Boxes/ScBaseAlertProcessus";
    import ScTheoreme from "../../../../../components/Boxes/ScBaseAlertTheoreme";
    import ScTitreSection from "../../../../../components/Titles/ScTitre1Section";
    import ScTitrePartie from "../../../../../components/Titles/ScTitre2Partie";

    function rapportSectionFN() {
        function calculer(){
            let dAP = P.cx()-A.cx(),
                dBP = P.cx()-B.cx(),
                F = new Pi.Fraction().parseByInteger(dAP, dBP).reduce();

            if(dBP!==0){
                document.getElementById('rapportSection').innerHTML = katex.renderToString(`\\lambda = \\dfrac{AP}{BP} = ${F.dfrac}`)
            }else{
                document.getElementById('rapportSection').innerHTML = 'Impossible'
            }
        }
        function hMove(e){
            const {handler, box} = e.detail;
            e.preventDefault();
            let {x} = box,
               y = oy;

            if(x<20){x = 20;}
            if(x>ow-5){ x = ow-5;}

            x = x - x%20;
            handler.move(x-5, y-5);

            AB.plot(A.cx(), A.cy(), B.cx(), B.cy());
            AP.plot(A.cx(), A.cy(), P.cx(), P.cy());
            AT.move(A.cx()-5, oy+10);
            BT.move(B.cx()-5, oy+10);
            CT.move(P.cx()-5, oy+10);

            calculer();
        }
        let ow = 500, oy = 40,
            draw = SVG().addTo('#svg-rapport-section').size(ow,100);

        draw.node.style.border = 'thin solid lightgrey';
        let A = draw.circle(10).cx(30).cy(oy).fill('#000'),
            B = draw.circle(10).cx(90).cy(oy).fill('#000'),
            P = draw.circle(10).cx(140).cy(oy).fill('#000'),
            AT = draw.text('A').move(25, oy+10),
            BT = draw.text('B').move(85, oy+10),
            CT = draw.text('P').move(135, oy+10),
            AB = draw.line(30,oy,90,oy).stroke({width: 1, color: 'black'}),
            AP = draw.line(30,oy,140,oy).stroke({width: 1, color: 'black'});

        A.draggable();
        B.draggable();
        P.draggable();

        AB.stroke('black');


        A.on('dragmove', e=>hMove(e));
        B.on('dragmove', e=>hMove(e));
        P.on('dragmove', e=>hMove(e));

        calculer();
    }

    function rapportSectionExercice() {
        let A = [
                Pi.Numeric.randomIntSym(10, false),
                Pi.Numeric.randomIntSym(10, false)
            ],
            B = [
                Pi.Numeric.randomIntSym(10, false),
                Pi.Numeric.randomIntSym(10, false)
            ],
            n = Pi.Numeric.randomIntSym(10, false),
            g = Pi.Numeric.gcd(B[0]-A[0], B[1]-A[1]),
            P;

        // Avoid unit value.
        if(n===1){n = Pi.Numeric.randomInt(1,10);}
        P = [
            A[0] + (B[0]-A[0])*n/g,
            A[1] + (B[1]-A[1])*n/g,
        ];

        return {
            question: `A(${A[0]};${A[1]}) \\quad B(${B[0]};${B[1]}) \\quad P(${P[0]};${P[1]})`,
            reponse: new Pi.Fraction().parseByInteger(P[0]-A[0], P[0]-B[0]).reduce().display
        }
    }

    export default {
        name: 'GeometrieVectorielleRepere',
        components: {ScTitrePartie, ScTitreSection, ScTheoreme, ScProcessus, ScBoiteTexte, ScExemple, BaseAlert},
        props: {
            vital: {type: Boolean, default: true}
        },
        data: function(){
            return {
                rapportsection: 0,
                exerciceRS: {question: '', reponse: ''},
                reponseRS: ''
            }
        },
        computed: {
            responseRSComputed: function() {
                let resultat = this.reponseRS;

                if(resultat.includes('/')){
                    resultat = resultat.split('/');
                    resultat = `\\dfrac{${resultat[0]}}{${resultat[1]}}`;
                }

                return `\\dfrac{AP}{BP}=${resultat}`;
            }
        },
        methods: {
            rsCheck: function(){
                let f = new Pi.Fraction(this.reponseRS).display;
                if(this.exerciceRS.reponse!==undefined) {
                    return f === this.exerciceRS.reponse;
                }else{
                    return false;
                }
            },
            rsNouveau: function(){
                if(this.rsCheck()) {
                    this.exerciceRS = rapportSectionExercice();
                    this.reponseRS = '';
                }
            }
        },
        mounted() {
            this.rapportsection = rapportSectionFN();
            this.exerciceRS = rapportSectionExercice();
        }
    }
</script>