<template>
    <v-container>
        <div class="display-3 mt-10">Géométrie vectorielle</div>
        <sc-breadcrumbs />
        <v-switch
                class="mt-0"
                dense
                v-model=resume
        >
            <template v-slot:label>
                <span class="caption">N'afficher qu'un résumé (permet une lecture rapide)</span>
            </template>
        </v-switch>
        <v-divider class="mb-5"></v-divider>

        <GeometrieVectorielleVecteurs :vital="resume" />

        <GeometrieVectorielleBase :vital="resume" />

        <GeometrieVectorielleRepere :vital="resume" />

        <GeometrieVectorielleNorme :vital="resume" />

    </v-container>
</template>

<script>
    import ScBreadcrumbs from "../../../../components/UserInterface/ScBreadcrumbs";
    import renderMathInElement from "katex/dist/contrib/auto-render.min";
    import GeometrieVectorielleVecteurs from "./__theorie__/GeometrieVectorielleVecteurs";
    import GeometrieVectorielleBase from "./__theorie__/GeometrieVectorielleBase";
    import GeometrieVectorielleRepere from "./__theorie__/GeometrieVectorielleRepere";
    import GeometrieVectorielleNorme from "./__theorie__/GeometrieVectorielleNorme";

    export default {
        name: "geometrievectorielle",
        layout: 'theorie',
        components: {
            ScBreadcrumbs,
            GeometrieVectorielleNorme,
            GeometrieVectorielleVecteurs,
            GeometrieVectorielleBase,
            GeometrieVectorielleRepere},
        data: function() {
            return {
                resume: false,
            }
        },
        mounted() {
            renderMathInElement(this.$el)
        }
    }
</script>
