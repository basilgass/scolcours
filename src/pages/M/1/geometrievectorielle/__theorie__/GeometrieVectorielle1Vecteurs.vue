<template>
    <section>
        <sc-titre-section id="vecteurs">Vecteurs</sc-titre-section>

        <sc-titre-partie vital>Définitions</sc-titre-partie>
        <scDefinitions :definitions="definitions"/>

        <div v-show="!vital">
            <div id="svgDefinitions"></div>
            <v-row>
                <v-col>\(\overrightarrow{a}\) et \(\overrightarrow{b}\) sont équipollents</v-col>
                <v-col>\(\overrightarrow{a}\) et \(\overrightarrow{c}\) sont opposés</v-col>
                <v-col>
                    \(\overrightarrow{a},\,\overrightarrow{b},\,\overrightarrow{c},\,\overrightarrow{d},\,\overrightarrow{e}\)
                    sont colinéaires
                </v-col>
            </v-row>
        </div>

        <div v-show="!vital">
            <v-divider class="mt-5 mb-5"></v-divider>
            <sc-titre-partie>Somme de deux vecteurs</sc-titre-partie>

            <p class="mb-0 text--disabled">Bouger les cercles pour modifier les vecteurs</p>
            <div id="svgSommeVecteurs"></div>
        </div>

        <v-divider class="mt-5 mb-5"></v-divider>

        <sc-titre-partie>Combinaison linéaire</sc-titre-partie>
        <div>
            <p>Si un vecteur peut s'écrire comme la somme de deux autres, on dit qu'il s'agit d'une
            combinaison linéaire</p>
            <p>\(\overrightarrow{a} = x\cdot\overrightarrow{b} + y\cdot\overrightarrow{c}\), où \(x,y \in \mathbb{R}
                \)</p>
        </div>

        <sc-titre-partie>Relation de Chasles</sc-titre-partie>
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

        <div v-show="!vital">
            <v-row class="justify-center">
                <v-col cols="12" sm="6" lg="4" xl="3">
                    <v-card>
                        <v-card-title>S'entraîner</v-card-title>
                        <v-card-text class="body-1 text--primary">
                            <div v-katex="reponseChaslesComputed" v-bind:class="{'green--text': chaslesCheck()}"></div>
                            <v-input messages="Ecrire les deux lettres" :success="chaslesCheck()">
                                <v-text-field v-on:keyup.enter="chaslesNouveau"
                                              :success="chaslesCheck()"
                                              class="d-inline-block headline no-toc font-weight-thin"
                                              v-model="reponseChasles"></v-text-field>
                            </v-input>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn :disabled="!chaslesCheck" @click="chaslesNouveau">Nouveau</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </section>
</template>
<script>
    import ScDefinitions from "../../../../../components/ScDefinitions"
    import {Pi} from "../../../../../../public/js/pi";
    import {GeomPi} from "../../../../../../public/js/geompi";
    import katex from "katex";
    import ScTitreSection from "../../../../../components/Titles/ScTitre1Section";
    import ScTitrePartie from "../../../../../components/Titles/ScTitre2Partie";

    function svgDefinitions() {
        // Ajout des vecteurs
        let geom = new GeomPi.GeometryDraw('#svgDefinitions', 800, 400);
        geom.xAxis = {x:50, y:0};
        geom.yAxis = {x:0, y:50};
        geom.origin = {x:0, y:0};
        geom.showGrid();

        geom.addVector(geom.addPoint(1,1), geom.addPoint(4,7)).showLabel(katex.renderToString('\\vec{a}'), );
        geom.addVector(geom.addPoint(3,0), geom.addPoint(6,6)).showLabel(katex.renderToString('\\vec{b}'), );
        geom.addVector(geom.addPoint(9,8), geom.addPoint(6,2)).showLabel(katex.renderToString('\\vec{c}'));
        geom.addVector(geom.addPoint(7,1), geom.addPoint(8,3)).showLabel(katex.renderToString('\\vec{d}'));
        geom.addVector(geom.addPoint(11,6), geom.addPoint(9,2)).showLabel(katex.renderToString('\\vec{e}'));
        geom.addVector(geom.addPoint(12,2), geom.addPoint(15,5)).showLabel(katex.renderToString('\\vec{f}'));
    }

    function svgSommeVecteurs() {
        let geom = new GeomPi.GeometryDraw('#svgSommeVecteurs',800, 400);
        geom.xAxis = {x:20, y:0};
        geom.yAxis = {x:0, y:20};
        geom.origin = {x:0, y:0};
        geom.showGrid();


        let A = geom.addPoint(1,1),
            B = geom.addPoint(4, 6),
            C = geom.addPoint(8, 3),
            D = geom.addPoint(B.realX+ C.realX-A.realX, B.realY+C.realY-A.realY),
            AB = geom.addVector(A, B),
            AC = geom.addVector(A, C),
            AD = geom.addVector(A, D),
            BD = geom.addSegment(B, D),
            CD = geom.addSegment(C, D);

        BD.svg.attr({'stroke-dasharray': '5,5'});
        CD.svg.attr({'stroke-dasharray': '5,5'});
        function dragCB(){
            D.realXY = {x: B.realX+ C.realX-A.realX, y: B.realY+C.realY-A.realY};
            AB.update();
            AC.update();
            AD.update();
            BD.update();
            CD.update();
        }
        A.showDraggable(true, dragCB);
        B.showDraggable(true, dragCB);
        C.showDraggable(true, dragCB);
    }

    function shuffleArray(d){
        for (var i = d.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = d[i];
            d[i] = d[j];
            d[j] = temp;
        }
    }

    function chasles(){
        let s = 'ABCDEFGH'.split(''),
            n = 3,
            a = [],
            r;
        shuffleArray(s);

        for(let i=0; i<n; i++){
            if(Pi.Numeric.randomBool()) {
                a.push(`+\\overrightarrow{${s[i]}${s[i + 1]}}`);
            }else{
                a.push(`-\\overrightarrow{${s[i+1]}${s[i]}}`);
            }
        }

        r = s[0]+s[3];

        shuffleArray(a);
        a = a.join('');
        if(a[0]==='+'){a = a.substr(1);}
        return {
            question: a,
            reponse: r
        };
    }

    export default {
        name: 'GeometrieVectorielleVecteurs',
        components: {ScTitrePartie, ScTitreSection, ScDefinitions},
        props: {
            vital: {type: Boolean, default: true}
        },
        data: function(){
            return {
                definitions: [
                {nom: 'Vecteur', definition: `Un vecteur est un objet défini par une direction, un sens et une norme. On le note \\( \\overrightarrow{a} \\). La norme du vecteur est notée \\( \\Vert \\overrightarrow{a} \\Vert \\) ou \\( \\Vert a \\Vert\\)`},
                {nom: 'Equipollent', definition: `Se dit de deux vecteurs qui ont la même direction, le même sens et la même norme.`},
                {nom: 'Opposé', definition: `Se dit de deux vecteurs qui ont la même direction, la même norme mais des sens opposés.`},
                {nom: 'Colinéaire', definition: `Se dit de deux vecteurs qui ont la même direction dans un plan.`},
                {nom: 'Coplanaire', definition: `Se dit de deux vecteurs (en 3 dimensions) qui partagent le même plan.`},
            ],
                exerciceChasles: {question: '', reponse: ''},
                reponseChasles: ''
            }
        },
        computed: {
            reponseChaslesComputed: function() {
                return `${this.exerciceChasles.question}=${this.reponseChasles!==''?'\\overrightarrow{'+this.reponseChasles.toUpperCase()+'}':''}`
            },
        },
        methods: {
            chaslesCheck: function(){
                if(this.exerciceChasles.reponse===undefined){return false;}
                return this.reponseChasles.toUpperCase()===this.exerciceChasles.reponse;
            },
            chaslesNouveau: function(){
                if(this.chaslesCheck()) {
                    this.exerciceChasles = chasles();
                    this.reponseChasles = '';
                }
            },
        },
        mounted() {
            svgDefinitions();
            svgSommeVecteurs();
            this.exerciceChasles = chasles();
        }
    }
</script>