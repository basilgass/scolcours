<template>
    <v-container>
        <ScTocDrawer/>
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
    import ScTocDrawer from "../../../components/UserInterface/ScTocDrawer";
    import ScBreadcrumbs from "../../../components/UserInterface/ScBreadcrumbs";
    import renderMathInElement from "katex/dist/contrib/auto-render.min";
    import GeometrieVectorielleVecteurs from "./__geometrievectorielle__/GeometrieVectorielleVecteurs";
    import GeometrieVectorielleBase from "./__geometrievectorielle__/GeometrieVectorielleBase";
    import GeometrieVectorielleRepere from "./__geometrievectorielle__/GeometrieVectorielleRepere";
    import GeometrieVectorielleNorme from "./__geometrievectorielle__/GeometrieVectorielleNorme";

    export default {
        name: "geometrievectorielle",
        components: {
            ScBreadcrumbs,
            GeometrieVectorielleNorme,
            GeometrieVectorielleVecteurs,
            GeometrieVectorielleBase,
            GeometrieVectorielleRepere,
            ScTocDrawer},
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
