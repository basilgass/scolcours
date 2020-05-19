<template>
    <div ref="svg-output"></div>
</template>

<script>
    import {PiGeometry} from "../../../public/js/pigeometry";
    import {piSvg} from "../../mixins/pi-svg-mixins";

    export default {
        name: "pi-triangle",
        props: {
            dimension: {type: Number, default: 10},
            a: {type: String, default: null},
            b: {type: String, default: null},
            c: {type: String, default: null},
            alpha: {type: String, default: null},
            beta: {type: String, default: null},
            gamma: {type: String, default: null},
            solution: {type: String, default: '1'},

            labelA: {type: String, default: 'A'},
            labelB: {type: String, default: 'B'},
            labelC: {type: String, default: 'C'},
            labelAlpha: {type: String, default: ''},
            labelBeta: {type: String, default: ''},
            labelGamma: {type: String, default: ''},
            labelCoteA: {type: String, default: ''},
            labelCoteB: {type: String, default: ''},
            labelCoteC: {type: String, default: ''},

            afficherDonnee: {type: Boolean, default: true},

            pointA: {
                type: Object, default: function () {
                    return {x: 1, y: 1}
                }
            },
            pointB: {
                type: Object, default: function () {
                    return {x: 8, y: 2}
                }
            },

            coteA: {type: Object, default: null},
            coteB: {type: Object, default: null},
            coteC: {type: Object, default: null}
        },
        mixins: [piSvg],
        computed: {
            triDefine() {
                return {
                    a: this.a === null ? this.a : +this.a,
                    b: this.b === null ? this.b : +this.b,
                    c: this.c === null ? this.c : +this.c,
                    alpha: this.alpha === null ? this.alpha : +this.alpha,
                    beta: this.beta === null ? this.beta : +this.beta,
                    gamme: this.gamma === null ? this.gamma : +this.gamma,
                    solution: +this.solution
                };
            }
        },
        methods: {
            drawLoad() {
                const geom = new PiGeometry.draw(this.$refs['svg-output'], 500, 500);
                geom.showGridOrthoN(this.dimension, this.dimension);
                geom.mainGrid
                    .color('white')
                    .width(0)


                // TODO: Calculs des coordonnées des sommets en fonction des informations données!
                let A = geom.addPoint(+this.pointA.x, +this.pointA.y, this.labelA).showLabel().labelBottom().labelLeft(),
                    B = geom.addPoint(+this.pointB.x, +this.pointB.y, this.labelB).showLabel().labelCenter().labelRight();
                //C = geom.addPoint(5, 8, 'C').showLabel().labelTop().labelMiddle();
                geom.triangle('ABC').define(this.triDefine).base(A, B);

                this.geom = geom;
            },
            draw() {
                let t = this.geom.getFigure('ABC');

                t.define(this.triDefine);
                t.C().labelText(this.labelC, true).labelTop().labelMiddle();
                t.CA().labelPos('tl')
                t.BC().labelPos('cr')

                t.CBA().labelText(this.labelBeta, true)
                t.BAC().labelText(this.labelAlpha, true)
                t.ACB().labelText(this.labelGamma, true)

                t.AB().labelText(this.labelCoteC, true);
                t.BC().labelText(this.labelCoteA, true);
                t.CA().labelText(this.labelCoteB, true);

                if (this.afficherDonnee) {
                    t.showLabelData(false);
                }

                // Affichage des côtés selon la demande.
                if (this.coteA !== null) {
                    t.BC().show().shape.stroke(this.coteA);
                } else {
                    t.BC().hideShape()
                }
                if (this.coteB !== null) {
                    t.CA().show().shape.stroke(this.coteB);
                } else {
                    t.CA().hideShape();
                }
                if (this.coteC !== null) {
                    t.AB().show().shape.stroke(this.coteC);
                } else {
                    t.AB().hideShape();
                }
            }
        },
        mounted() {
            this.drawLoad();
            this.draw();
        },
        watch: {
            /*a() {this.draw();},
            b() {this.draw();},
            c() {this.draw();},
            alpha() {this.draw();},
            beta() {this.draw();},
            gamma() {this.draw();},*/
            labelCoteA() {
                this.geom.getFigure('ABC').BC().labelText(this.labelCoteA);
            },
            labelCoteB() {
                this.geom.getFigure('ABC').CA().labelText(this.labelCoteB);
            },
            labelCoteC() {
                this.geom.getFigure('ABC').AB().labelText(this.labelCoteC);
            },
            labelAlpha() {
                this.geom.getFigure('ABC').BAC().labelText(this.labelAlpha);
            },
            labelBeta() {
                this.geom.getFigure('ABC').CBA().labelText(this.labelBeta);
            },
            labelGamma() {
                this.geom.getFigure('ABC').ACB().labelText(this.labelGamma);
            }
        },
    }
</script>

<style scoped>

</style>