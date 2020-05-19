export const piSvg = {
    mounted() {
        this.geomWidth = this.$refs['svg-output'].offsetWidth;
    },
    watch: {

        $route() {
            if (this.geom !== undefined) {
                if (this.geomWidth === 0 && this.$refs['svg-output'].offsetWidth !== 0) {
                    this.geom.update();
                    this.geomWidth = this.$refs['svg-output'].offsetWidth;
                }
            }
        }
    }
}