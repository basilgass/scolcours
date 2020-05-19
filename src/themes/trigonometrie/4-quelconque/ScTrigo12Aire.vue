<template>
    <section>
        <sc-titre-partie>Théorème de l'aire</sc-titre-partie>
        <sc-boite class="mx-auto" max-width="600px" min-width="350px" theoreme width="auto">
            \[
            \begin{aligned}
            \sigma &= \frac{1}{2}\cdot b \cdot c \cdot \sin(\alpha)\\
            &= \frac{1}{2}\cdot c \cdot a \cdot \sin(\beta)\\
            &= \frac{1}{2}\cdot a \cdot b \cdot \sin(\gamma)\\
            \end{aligned}
            \]

            <template v-slot:footer>\(\sigma\) est l'aire du triangle \(ABC\)</template>
        </sc-boite>

        <sc-boite closed collapse exemple titre>
            <v-row>
                <v-col cols="12" md="6">
                    <v-sheet class="mx-auto" max-width="300px">
                        <pi-triangle alpha="48" b="5" c="4" label-alpha="\\a=48°"/>
                    </v-sheet>
                </v-col>
                <v-col cols="12" md="6">
                    <h4>Calcul de l'aire</h4>
                    <p class="katex-left ml-5">
                        \[
                        \begin{aligned}
                        \sigma &= \frac{1}{2}\cdot b\cdot c\cdot \sin\alpha\\
                        &= \frac{1}{2}\cdot 5\cdot 4 \cdot \sin(48)\\
                        &= 7.43 cm^2
                        \end{aligned}
                        \]
                    </p>
                </v-col>
            </v-row>
        </sc-boite>
    </section>
</template>
<script>
    import ScBoite from "../../../components/Boxes/ScBoite"
    import ScTitreSection from "../../../components/Titles/ScTitre1Section";
    import PiTriangle from "../../../components/Pi/pi-triangle";
    import ScTitrePartie from "../../../components/Titles/ScTitre2Partie";

    export default {
        name: 'sc-trigo-12-aire',
        components: {ScTitrePartie, PiTriangle, ScTitreSection, ScBoite}
    }
</script>