<template>
    <v-container>
        <sc-toc-drawer/>
        <div class="display-3 mt-10">Géométrie vectorielle</div>
        <v-breadcrumbs :items="items"></v-breadcrumbs>

        <section>
            <div class="headline mt-10-mb-5">Vecteurs</div>

            <div class="title mt-10 mb-5">Définitions</div>

            <scDefinitions :definitions="definitions"/>

            <div id="svgDefinitions"></div>

            <v-row>
                <v-col>\(\overrightarrow{a}\) et \(\overrightarrow{b}\) sont équipollents</v-col>
                <v-col>\(\overrightarrow{a}\) et \(\overrightarrow{c}\) sont opposés</v-col>
                <v-col>\(\overrightarrow{a},\,\overrightarrow{b},\,\overrightarrow{c},\,\overrightarrow{d},\,\overrightarrow{e}\) sont colinéaires</v-col>
            </v-row>

            <v-divider class="mt-5 mb-5"></v-divider>
            <div class="title">Somme de deux vecteurs</div>

            <p class="mb-0 text--disabled">Bouger les cercles pour modifier les vecteurs</p>
            <div id="svgSommeVecteurs"></div>

            <v-divider class="mt-5 mb-5"></v-divider>
            <div class="title">Combinaison linéaire</div>
            <p>Si un vecteur peut s'écrire comme la somme de deux autres, on dit qu'il s'agit d'une combinaison linéaire</p>
            <p>\(\overrightarrow{a} = x\cdot\overrightarrow{b} + y\cdot\overrightarrow{c}\), où \(x,y \in \mathbb{R} \)</p>

            <v-divider class="mt-5 mb-5"></v-divider>
            <div class="title">Relation de Chasles</div>
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
        </section>




        <section>
            <div class="headline mt-10-mb-5">Bases</div>
            <p>
                Une base est un couple de vecteur non colinéaires, notée \( \mathcal{B} = \left( \overrightarrow{e_1};\,\overrightarrow{e_2} \right) \)
            </p>
            <p>
                Un vecteur dans une base se note \(\overrightarrow{v}=\begin{pmatrix}a_1\\a_2\end{pmatrix}\).
                \(a_1\) et \(a_2\) sont appelés des composantes et correspondent.
            </p>
            <p>
                \(\overrightarrow{v}=\begin{pmatrix}a_1\\a_2\end{pmatrix} \Longleftrightarrow \overrightarrow{v} = a_1 \cdot \overrightarrow{e_1} + a_2 \cdot \overrightarrow{e_2}\)
            </p>
        </section>

        <section>
            <div class="headline mt-10-mb-5">Repères</div>
            <p>
                Un repère est un triplet \( \mathcal{R} = \left( O;\,\overrightarrow{e_1};\,\overrightarrow{e_2} \right) \) composé
                d'un point d'origine \( O \) et de deux axes \(\overrightarrow{e_1}\) et \(\overrightarrow{e_2}\).
            </p>
            <p>
                \(\overrightarrow{OA}=\begin{pmatrix}a_1\\a_2\end{pmatrix}
                \Longleftrightarrow
                A \left( a_1;\,a_2\right)\)
            </p>

            <div class="title mt-10 mb-5">Rapport de section</div>
            <p>
                Soient trois points alignés A, B et P, distincts deux à deux. Les vecteurs \(\overrightarrow{AP}\) et \(\overrightarrow{BP}\) sont colinéaires.<br>
                Il existe donc un nombre réél \(\lambda\) tel que \( \overrightarrow{AP} = \lambda\cdot\overrightarrow{BP} \)
            </p>
            <p class="mb-0 text--disabled">Bouger les points pour modifier le rapport de section</p>
            <div id="svg-rapport-section"></div>

            <div class="mt-5">Rapport de section: <span class="ml-3" id="rapportSection"></span></div>
        </section>
    </v-container>
</template>

<script>
    import ScTocDrawer from "../../../components/ScTocDrawer";
    import ScDefinitions from "../../../components/ScDefinitions";
    import katex from "katex";
    import renderMathInElement from "katex/dist/contrib/auto-render.min"

    import { SVG } from '@svgdotjs/svg.js'
    import '@svgdotjs/svg.draggable.js'
    import {Pi} from "../../../../public/js/pi.js"
    import {GeomPi} from "../../../../public/js/geompi.js"

    function rapportSectionFN() {
        function calculer(){
            let dAP = P.cx()-A.cx(),
                dBP = P.cx()-B.cx(),
                F = new Pi.Fraction().parseByInteger(dAP, dBP).reduce();

            if(dBP!=0){
                document.getElementById('rapportSection').innerHTML = katex.renderToString(`\\lambda = \\dfrac{AP}{BP} = ${F.dfrac}`)
            }else{
                document.getElementById('rapportSection').innerHTML = 'Impossible'
            }
        }
        function hMove(e){
            const {handler, box} = e.detail;
            e.preventDefault();
            let {x, y} = box;
            y = oy;

            if(x<20){x = 20;}
            if(x>ow-5){ x = ow-5;}

            x = x - x%20;
            handler.move(x-5, y-5);

            AB.plot(A.cx(), A.cy(), B.cx(), B.cy());
            AP.plot(A.cx(), A.cy(), P.cx(), P.cy());
            AT.move(A.cx()-5, oy+10)
            BT.move(B.cx()-5, oy+10)
            CT.move(P.cx()-5, oy+10)

            calculer();
        }
        var ow = 500, oy = 40;
        var draw = SVG().addTo('#svg-rapport-section').size(ow,100);

        draw.node.style.border = 'thin solid lightgrey'
        let A = draw.circle(10).cx(30).cy(oy).fill('#000'),
            B = draw.circle(10).cx(90).cy(oy).fill('#000'),
            P = draw.circle(10).cx(140).cy(oy).fill('#000'),
            AT = draw.text('A').move(25, oy+10),
            BT = draw.text('B').move(85, oy+10),
            CT = draw.text('P').move(135, oy+10),
            AB = draw.line(30,oy,90,oy).stroke({width: 1, color: 'black'}),
            AP = draw.line(30,oy,140,oy).stroke({width: 1, color: 'black'})

        A.draggable();
        B.draggable();
        P.draggable();

        AB.stroke('black')


        A.on('dragmove', e=>hMove(e));
        B.on('dragmove', e=>hMove(e));
        P.on('dragmove', e=>hMove(e));

        calculer();
    }

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
    export default {
        name: "geometrievectorielle",
        components: {ScTocDrawer,ScDefinitions},
        data: function () {
            return {
                rapportsection: 0,
                items: [
                    {
                        text: 'Accueil',
                        disabled: false,
                        href: '/'
                    },
                    {
                        text: 'Maturité',
                        disabled: false,
                        href: '/M'
                    },
                    {
                        text: '1ère année',
                        disabled: false,
                        href: '/M/1'
                    },
                    {
                        text: 'Géométrie vectorielle',
                        disabled: true,
                        href: '/M/1/geometrievectorielle'
                    }

                ],
                definitions: [
                    {nom: 'Vecteur', definition: `Un vecteur est un objet défini par une direction, un sens et une norme. On le note \\( \\overrightarrow{a} \\). La norme du vecteur est notée \\( \\left\\Vert \\overrightarrow{a} \\right\\Vert \\) ou \\( \\left\\Vert a \\right\\Vert\\)`},
                    {nom: 'Equipollent', definition: `Se dit de deux vecteurs qui ont la même direction, le même sens et la même norme.`},
                    {nom: 'Opposé', definition: `Se dit de deux vecteurs qui ont la même direction, la même norme mais des sens opposés.`},
                    {nom: 'Colinéaire', definition: `Se dit de deux vecteurs qui ont la même direction dans un plan.`},
                    {nom: 'Coplanaire', definition: `Se dit de deux vecteurs (en 3 dimensions) qui partagent le même plan.`},
                ],
            }
        },
        mounted() {
            this.rapportsection = rapportSectionFN();
            svgDefinitions();
            svgSommeVecteurs();

            renderMathInElement(this.$el)
        }
    }
</script>
