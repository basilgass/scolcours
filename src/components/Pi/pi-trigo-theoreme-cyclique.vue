<template>
    <div ref="svg-output" style="width: 150px"></div>
</template>

<script>
    import {PiGeometry} from "../../../public/js/pigeometry";
    import {piSvg} from "../../mixins/pi-svg-mixins";

    export default {
        name: "pi-trigo-theoreme-cyclique",
        mixins: [piSvg],
        methods: {
            draw() {
                const geom = new PiGeometry.draw(this.$refs['svg-output'], 250, 250);

                geom.showGridOrthoN(2);
                geom.mainGrid
                    .color('rgba(0,0,0,0)')
                    .setOrigin(1, 1);

                const O = geom.addPoint(0, 0, 'O').hideShape();
                geom.addPoint('a').polar(O, 90, 100).showLabel().hideShape().labelReset().labelPolar('20', 270)
                geom.addPoint('\\a').polar(O, 90, 100).showLabel().hideShape().labelReset().labelPolar('20', 90)

                geom.addPoint('b').polar(O, 210, 100).showLabel().hideShape().labelReset().labelPolar('20', 30)
                geom.addPoint('\\b').polar(O, 210, 100).showLabel().hideShape().labelReset().labelPolar('20', 210)

                geom.addPoint('c').polar(O, 330, 100).showLabel().hideShape().labelReset().labelPolar('20', 150)
                geom.addPoint('\\g').polar(O, 330, 100).showLabel().hideShape().labelReset().labelPolar('20', 330)

                geom.arc(O, 100, [-25, 80]).width(1).marker();
                geom.arc(O, 100, [100, 205]).width(1).marker();
                geom.arc(O, 100, [220, 315]).width(1).marker();

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