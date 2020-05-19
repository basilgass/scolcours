<template>
    <div>
        <sc-boite definition titre="Relations trigonométriques">
            \[
            \begin{matrix}
            \sin&=&\dfrac{\text{opposé}}{\text{hypothénuse}}\\[1.5em]

            \cos&=&\dfrac{\text{adjacent}}{\text{hypothénuse}}\\[1.5em]

            \tan&=&\dfrac{\text{opposé}}{\text{adjacent}}

            \end{matrix}
            \]
        </sc-boite>

        <sc-trigo-rectangle></sc-trigo-rectangle>
    </div>
</template>

<script>
    import ScTrigoRectangle from "../../../components/Pi/pi-triangle-rectangle";
    import ScBoite from "../../../components/Boxes/ScBoite";

    export default {
        name: "carte",
        components: {ScBoite, ScTrigoRectangle}
    }
</script>

<style scoped>

</style>