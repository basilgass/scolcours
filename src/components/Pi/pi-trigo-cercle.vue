<template>
    <div ref="svg-output"></div>
</template>

<script>
    import {PiGeometry} from "../../../public/js/pigeometry";
    import {piSvg} from "../../mixins/pi-svg-mixins";

    export default {
        name: "pi-trigo-cercle",
        mixins: [piSvg],
        props: {
            drag: {
                type: Boolean,
                default: false
            },
        },
        methods: {
            draw() {
                const gridN = 28;
                const geom = new PiGeometry.draw(this.$refs['svg-output'], 880, 880);
                geom.defaultFontSize = '120%'
                geom.showGridOrthoN(gridN);

                geom.mainGrid
                    .color('rgba(0,0,0,0.4)')
                    .width(0.5)
                    .setOrigin(gridN / 2 - 2, gridN / 2)
                    .showAxis();

                let O = geom.addPoint(0, 0, 'O').showLabel(),
                    P = geom.addPoint(10 * Math.cos(35 / 180 * Math.PI), 10 * Math.sin(35 / 180 * Math.PI), 'P')
                        .labelTop().labelRight().labelCoordinate(2, 0.1),
                    c = geom.circle(O, 880 / gridN * 10),

                    Pcos = geom.addPoint('cos').projectionX('P').labelMiddle(),
                    Psin = geom.addPoint('sin').projectionY('P').labelCenter(),

                    angle = geom.arc('O', 80, ['OxMax', O, P], '\\a').marker().showLabel(),
                    Ptan = geom.addPoint('tan').fromFunction(
                        (pt, options) => {
                            return {
                                x: O.x + 880 / gridN * 10,
                                y: O.y - Math.tan(angle.angle * Math.PI / 180) * 880 / gridN * 10
                            }
                        },
                    ),
                    sin2 = geom.segment('P', 'cos').width(2).color('green').dash(20),
                    cos2 = geom.segment('P', 'sin').width(2).color('orange').dash(20),
                    cos = geom.segment('O', 'cos').width(4).color('orange'),
                    sin = geom.segment(O, Psin).width(4).color('green'),

                    hyp = geom.segment(O, P).width(2),

                    tanHelper = geom.segment('O', 'tan').dash(4),
                    A = geom.addPoint(10, 0, 'A'),
                    tan = geom.segment(A, 'tan').width(4).color('purple');


                geom.perpendicular(O, A, A)


                P.showLabel();
                let displayText = (label, data) => {
                    let p1 = data.p1.coord, p2 = data.p2.coord;
                    return `${data.trigo}(\\a ) = ${((data.trigo === 'cos' ? (p2.x - p1.x) : (p2.y - p1.y)) / 10).toFixed(2)}`;
                }
                cos.showLabel().labelMiddle()
                    .labelFunction(displayText, {p1: O, p2: Pcos, trigo: 'cos'});
                sin.showLabel().labelLeft().labelCenter()
                    .labelFunction(displayText, {p1: O, p2: Psin, trigo: 'sin'});
                tan.showLabel().labelRight().labelCenter()
                    .labelFunction((label, data) => {
                            let p1 = data.p1.coord, p2 = data.p2.coord;
                            return `${data.trigo}(\\a ) = ${((p2.y - p1.y) / 10).toFixed(2)}`
                        },
                        {p1: O, p2: Ptan, trigo: 'tan'}
                    );

                if (this.drag) {
                    P.makeDraggable({
                        fn: function (geom, point, box) {
                            if (box.x >= 440) {
                                P.labelRight();
                            } else {
                                P.labelLeft();
                            }
                            if (box.y >= 440) {
                                P.labelBottom();
                            } else {
                                P.labelTop();
                            }
                        },
                        args: ''
                    }).setDistanceTo(O);

                }
                this.geom = geom;
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>

<style scoped>

</style>