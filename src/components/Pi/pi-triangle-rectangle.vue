<template>
    <div ref="svg-output"></div>
</template>
<script>
    import {PiGeometry} from "../../../public/js/pigeometry";
    import {piSvg} from "../../mixins/pi-svg-mixins";

    /*<div ref="svgOutput" class="svg-tri-rectangle" width="100%"></div>*/
    export default {
        name: 'pi-trigo-rectangle',
        mixins: [piSvg],
        props: {
            'A': {type: Boolean, default: true},
            'opp': {type: Boolean, default: false},
            'adj': {type: Boolean, default: false},
            'hyp': {type: Boolean, default: false},
        },
        methods: {
            highlights: function () {
                this.geom.getFigure(this.A ? 'AC' : 'CB').width(this.adj ? 5 : 2);
                this.geom.getFigure(this.A ? 'CB' : 'AC').width(this.opp ? 5 : 2);
                this.geom.getFigure('AB').width(this.hyp ? 5 : 2);
            },
            draw: function () {
                const geom = new PiGeometry.draw(this.$refs['svg-output'], 800, 400);
                geom.showGridOrthoN(20);
                geom.mainGrid.color('rgba(0,0,0,0.4)').width(0.5);

                let A = geom.addPoint(4, 2, 'A'),
                    B = geom.addPoint(18, 5, 'B').labelRight().labelCenter(),
                    C = geom.addPoint('C').rectangle(A, B, 2).labelTop().labelMiddle(),
                    poly = geom.polygon(A, B, C).width(0).rectangleMark();
                // poly.logAngles();

                geom.addPoint('hypothénuse').middle(A, B).labelBottom().labelMiddle().hideShape();

                if (this.A) {
                    geom.arc(A, 80, [B, A, C]).sector().fill('rgba(174,252,153,0.3)')
                    geom.arc(A, 80, [B, A, C]).width(4).color('rgb(95,156,79)')
                    geom.addPoint('opposé').middle(B, C).labelTop().labelRight().hideShape();
                    geom.addPoint('adjacent').middle(A, C).labelCenter().labelLeft().hideShape();
                    geom.segment(A, C).color('red').width(2);
                    geom.segment(C, B).color('green').width(2);

                } else {
                    geom.arc(B, 80, [C, B, A]).sector().fill('rgba(174,252,153,0.3)')
                    geom.arc(B, 80, [C, B, A]).width(4).color('rgb(95,156,79)')
                    geom.addPoint('adjacent').middle(B, C).labelTop().labelRight().hideShape();
                    geom.addPoint('opposé').middle(A, C).labelCenter().labelLeft().hideShape();
                    geom.segment(A, C).color('green').width(2);
                    geom.segment(C, B).color('red').width(2);
                }
                geom.segment(A, B).color('blue').width(2);
                geom.showPointsLabel();

                this.geom = geom;
            }
        },
        watch: {
            /*$route: function(){
                this.geom.update();
            },*/
            opp: function () {
                this.highlights();
            },
            adj: function () {
                this.highlights();
            },
            hyp: function () {
                this.highlights();
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>