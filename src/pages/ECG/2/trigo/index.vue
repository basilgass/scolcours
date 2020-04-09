<template>
    <div>
        <v-container>
            <sc-titre-page>
                Trigonométrie
                <template v-slot:subtitle>Triangle quelconque</template>
            </sc-titre-page>
            <sc-breadcrumbs />

            <sc-theoreme>
                <sc-boite-titre>Théorèmes trigonométriques</sc-boite-titre>
                <sc-boite-etape>Théorème du cosinus</sc-boite-etape>
                \[ 
                    \begin{aligned}
                        a^2 &= b^2 + c^2 - 2\cdot b\cdot c\cdot \cos(\alpha)\\
                        b^2 &= c^2 + a^2 - 2\cdot c\cdot a\cdot \cos(\beta)\\
                        c^2 &= a^2 + b^2 - 2\cdot a\cdot b\cdot \cos(\gamma)\\
                \end{aligned}
                \]

                <sc-boite-etape>Théorème du sinus
                <template v-slot:commentaire>\( r \) est le rayon du cercle circonscrit </template>
                </sc-boite-etape>
                \[
                    \frac{a}{\sin(\alpha)}
                =\frac{b}{\sin(\beta)}
                =\frac{c}{\sin(\gamma)}
                =2\cdot r
                \]

                <sc-boite-etape>Théorème de l'aire
                <template v-slot:commentaire>\(\sigma\) est l'aire du triangle \(ABC\)</template>
                </sc-boite-etape>
                \[
                    \begin{aligned}
                \sigma &= \frac{1}{2}\cdot b \cdot c \cdot \sin(\alpha)\\
                 &= \frac{1}{2}\cdot c \cdot a \cdot \sin(\beta)\\
                 &= \frac{1}{2}\cdot a \cdot b \cdot \sin(\gamma)\\
                \end{aligned}
                \]
            </sc-theoreme>
        </v-container>
    </div>
</template>


<script>
    import ScBreadcrumbs from "../../../../components/UserInterface/ScBreadcrumbs";
    import ScTitrePage from "../../../../components/Titles/ScTitre0Page";
    import renderMathInElement from "katex/dist/contrib/auto-render.min";
    import ScTheoreme from "../../../../components/Boxes/ScBaseAlertTheoreme";
    import ScBoiteTitre from "../../../../components/Boxes/ScBoiteTitre";
    import ScBoiteEtape from "../../../../components/Boxes/ScBoiteEtape";

     export default {
        name: "statistiques",
         layout: 'theorie',
        components: {
            ScBoiteEtape,
            ScBoiteTitre,
            ScTheoreme,
            ScTitrePage,
            ScBreadcrumbs},
         data: function () {
            return {
            };
        },
        computed: {
        },
         mounted() {
             renderMathInElement(this.$el)
         }
     }
</script>

