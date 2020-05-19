<template>
    <div ref="svg-output"></div>
</template>

<script>
    import {piSvg} from "../../mixins/pi-svg-mixins";
    import {PiGeometry} from "../../../public/js/pigeometry";

    export default {
        name: "pi-svg",
        mixins: [piSvg],
        props: {
            geomDraw: {
                type: Function,
                default: (geom) => {
                    console.log(geom);
                }
            },
            width: {type: Number, default: 500},
            height: {type: Number, default: 500},
            dimension: {type: Number, default: 0},
            transparent: {type: Boolean, default: true}
        },
        methods: {
            draw() {
                const geom = new PiGeometry.draw(this.$refs['svg-output'], this.width, this.height);
                geom.showGridOrthoN(this.dimension === 0 ? this.width / 20 : this.dimension);
                geom.mainGrid
                    .color('rgba(0, 0, 0, 0.2)')
                    .width(0.5)

                // Chargement du contenu
                this.geomDraw(geom);

                if (this.transparent) {
                    // Make the background transparent (should be by default in GeometryPi)

                }

                // Construction content.
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