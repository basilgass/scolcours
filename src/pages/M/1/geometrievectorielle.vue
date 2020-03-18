<template>
    <div>
        <sc-toc-drawer/>
        <v-container>
            <div class="display-3 mt-10">Géométrie vectorielle</div>
            <v-breadcrumbs :items="items"></v-breadcrumbs>

            <section>
                <div class="headline mt-10 mb-5">Rapport de section</div>
                <p>
                    Soient trois points alignés A, B et P, distincts deux à deux. Les vecteurs \(\overrightarrow{AP}\) et \(\overrightarrow{BP}\) sont colinéaires.<br>
                    Il existe donc un nombre réél \(\lambda\) tel que \( \overrightarrow{AP} = \lambda\cdot\overrightarrow{BP} \)
                </p>
                <p class="mb-0 text--disabled">Bouger les points pour modifier le rapport de section</p>
                <div id="svg-rapport-section"></div>

                <div class="mt-5">Rapport de section: <span class="ml-3" id="rapportSection"></span></div>
            </section>

        </v-container>
    </div>
</template>

<script>
    import ScTocDrawer from "../../../components/ScTocDrawer";
    import katex from "katex";
    import renderMathInElement from "katex/dist/contrib/auto-render.min"
    import { SVG } from '@svgdotjs/svg.js'
    import '@svgdotjs/svg.draggable.js'
    import {Pi} from "../../../../public/js/pi.js"

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

        A.draggable()
        B.draggable()
        P.draggable()

        AB.stroke('black')


        A.on('dragmove', e=>hMove(e));
        B.on('dragmove', e=>hMove(e));
        P.on('dragmove', e=>hMove(e));

        calculer();
    }
    export default {
        name: "geometrievectorielle",
        components: {ScTocDrawer},
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
            }
        },
        mounted() {
            this.rapportsection = rapportSectionFN()
            renderMathInElement(this.$el)
        }
    }
</script>
