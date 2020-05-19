<template>
    <div ref="svg-output"></div>
</template>
<script>
    import {PiGeometry} from "../../../public/js/pigeometry";
    import {piSvg} from "../../mixins/pi-svg-mixins";

    export default {
        name: 'pi-trigo-conversion',
        mixins: [piSvg],
        data: function () {
            return {
                angle: 30
            }
        },
        methods: {
            updateAngle: function (geom) {
                let f = geom.getFigure('\\a');
                this.angle = Math.round(f.angle);
                this.$emit('angleUpdated', this.angle);
            },
            draw() {
                const geom = new PiGeometry.draw(this.$refs['svg-output'], 880, 880);
                geom.defaultFontSize = '120%'
                geom.showGridOrthoN(22);
                geom.mainGrid
                    .color('rgba(0,0,0,0.4)')
                    .width(0.5)
                    .setOrigin(11, 11);

                let O = geom.addPoint(0, 0, 'O'),
                    A = geom.addPoint(10, 0, 'A'),
                    B = geom.addPoint(10 * Math.cos(this.angle / 180 * Math.PI), 10 * Math.sin(this.angle / 180 * Math.PI), 'B');

                geom.segment(O, A),
                    geom.segment(O, B),
                    geom.arc('O', 80, [A, O, B], '\\a').marker().showLabel(true),
                    geom.arc('O', 400, [A, O, B]);

                this.updateAngle(geom)

                B.makeDraggable({
                    fn: this.updateAngle,
                    args: ''
                }).setDistanceTo(O, null, 5)
                geom.showPointsLabel()

                // Store the geometry
                this.scGeom = geom;
                this.scB = B;

                this.geom = geom;
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>