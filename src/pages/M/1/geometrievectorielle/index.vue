<template>
    <v-container>
        <sc-titre-page>Géométrie vectorielle</sc-titre-page>
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

        <GeometrieVectorielleScalaire :vital="resume" />

    </v-container>
</template>

<script>
    import ScBreadcrumbs from "../../../../components/UserInterface/ScBreadcrumbs";
    import renderMathInElement from "katex/dist/contrib/auto-render.min";
    import GeometrieVectorielleVecteurs from "./__theorie__/GeometrieVectorielle1Vecteurs";
    import GeometrieVectorielleBase from "./__theorie__/GeometrieVectorielle2Base";
    import GeometrieVectorielleRepere from "./__theorie__/GeometrieVectorielle3Repere";
    import GeometrieVectorielleNorme from "./__theorie__/GeometrieVectorielle4Norme";
    import GeometrieVectorielleScalaire from "./__theorie__/GeometrieVectorielle5Scalaire";
    import ScTitrePage from "../../../../components/Titles/ScTitre0Page";

    export default {
        name: "geometrievectorielle",
        layout: 'theorie',
        components: {
            ScTitrePage,
            GeometrieVectorielleScalaire,
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
