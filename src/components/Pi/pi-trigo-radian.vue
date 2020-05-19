<template>
    <v-sheet :width="width" class="mx-auto" max-width="300">
        <div ref="svg-output"></div>
    </v-sheet>
</template>
<script>
    import {PiGeometry} from "../../../public/js/pigeometry";
    import {piSvg} from "../../mixins/pi-svg-mixins";

    export default {
        name: 'pi-trigo-radian',
        mixins: [piSvg],
        props: {
            width: {type: String, default: 'auto'}
        },
        methods: {
            draw() {
                const geom = new PiGeometry.draw(this.$refs['svg-output'], 500, 500);
                geom.showGridOrthoN(2);
                geom.mainGrid
                    .color('rgba(0,0,0,0.4)')
                    .width(0.5)
                    .setOrigin(1, 1);

                let r = 0.95;
                let O = geom.addPoint(0, 0, 'O').showLabel(),
                    A = geom.addPoint(r, 0, 'A').hideShape(),
                    B = geom.addPoint(r * Math.cos(1), r * Math.sin(1), 'B').hideShape();

                geom.circle(O, [O, A])
                geom.segment(O, A).width(4).color('red')
                geom.segment(O, B)
                geom.arc(O, [O, A], [A, O, B]).width(4).color('green');
                geom.arc(O, 50, [A, O, B]).labelText('\\a', true).marker();

                this.geom = geom;
            }
        },
        mounted() {
            this.draw();
        }
    }
</script>