<template>
    <v-container class="text-center">
        <div>


            <div ref="formule-trigo" style="position:relative;">

                \[
                \textcolor{white}{a}^2=b^2+c^2-2\cdot b\cdot c\cdot \cos(\alpha)
                \]
            </div>
        </div>
        \[
        \Large\Downarrow
        \]
        <pi-trigo-theoreme-cyclique class="mx-auto"/>
        <p>La lettre \( a \) devient \( b \)</p>
        <p>Les lettres \( b \) deviennent \( c \) </p>
        <p>Les lettres \( c \) deviennent \( a \) </p>
        <p>L'angle \(\alpha\) devient \(\beta\)</p>
        \[
        \Large\Downarrow
        \]
        \[
        b^2=c^2+a^2-2\cdot c\cdot a\cdot \cos(\beta)
        \]
    </v-container>
</template>
<script>
    import PiTrigoTheoremeCyclique from "../../../components/Pi/pi-trigo-theoreme-cyclique"
    import renderMathInElement from "katex/dist/contrib/auto-render.min";

    export default {
        name: 'ScTrigoCyclique',
        components: {PiTrigoTheoremeCyclique},
        mounted() {
            renderMathInElement(this.$el);
        }
    }
</script>