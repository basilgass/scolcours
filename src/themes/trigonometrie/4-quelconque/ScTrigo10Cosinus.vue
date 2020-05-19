<template>
    <section>
        <sc-titre-partie>Théorème du cosinus</sc-titre-partie>

        <sc-boite class="mx-auto" max-width="600px" min-width="350px" theoreme width="auto">
            \[
            \begin{aligned}
            a^2 &= b^2 + c^2 - 2\cdot b\cdot c\cdot \cos(\alpha)\\
            b^2 &= c^2 + a^2 - 2\cdot c\cdot a\cdot \cos(\beta)\\
            c^2 &= a^2 + b^2 - 2\cdot a\cdot b\cdot \cos(\gamma)\\
            \end{aligned}
            \]
        </sc-boite>

        <sc-boite closed collapse exemple titre="Un angle et ses deux côtés adjacents sont connus">
            <v-row>
                <v-col cols="12" md="6">
                    <v-sheet class="mx-auto" max-width="300px">
                        <pi-triangle alpha="42" b="8" c="6" label-alpha="\\a=42°"/>
                    </v-sheet>
                </v-col>
                <v-col cols="12" md="6">
                    <h4>Calcul du côté manquant.</h4>
                    <p class="katex-left ml-5">
                        \[
                        \begin{aligned}
                        a^2 &= b^2+c^2-2\cdot b\cdot c\cdot \cos(\alpha)\\
                        &= 8^2+6^2-2\cdot 8\cdot 6\cdot \cos(42)\\
                        &\approx 171.34\\[1.3em]
                        a &\approx 13.09
                        \end{aligned}
                        \]
                    </p>

                    <h4>Calcul d'un angle manquant
                        <br/><span class="caption">Pour cela, on utilise une version modifiée du théorème.</span>
                    </h4>
                    <p class="katex-left ml-5">
                        \[
                        \begin{aligned}
                        \cos(\beta) &= \frac{c^2+a^2-b^2}{2\cdot c \cdot a}\\
                        &= \frac{6^2+13.09^2-8^2}{2\cdot 6\cdot 13.09}\\
                        &= 0.9126 \\[1.3em]
                        \beta &= \cos^{-1}(0.9126) = 24.13°
                        \end{aligned}
                        \]
                    </p>

                    <h4>Calcul du troisième angle
                        <br/><span class="caption">La somme des angles d'un triangle vaut 180°</span>
                    </h4>

                    <p class="katex-left ml-5">
                        \[
                        \begin{aligned}
                        \gamma &= 180 - \alpha - \beta\\
                        &= 180 - 42 - 24.13 \\
                        &= 113.87°
                        \end{aligned}
                        \]
                    </p>
                </v-col>
            </v-row>
        </sc-boite>
    </section>
</template>
<script>
    import PiTriangle from "../../../components/Pi/pi-triangle"
    import ScBoite from "../../../components/Boxes/ScBoite"
    import ScTitreSection from "../../../components/Titles/ScTitre1Section"
    import ScTitrePartie from "../../../components/Titles/ScTitre2Partie";

    export default {
        name: 'sc-trigo-10-cosinus',
        components: {ScTitrePartie, PiTriangle, ScBoite, ScTitreSection}
    }
</script>