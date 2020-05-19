<template>
    <div>
        <sc-boite class="mt-10" theoreme>
            <sc-boite-titre>Théorème du cosinus</sc-boite-titre>
            \[
            a^2=b^2+c^2-2\cdot b\cdot c\cdot \cos(\alpha)
            \]

            <sc-boite-titre>Théorème du sinus</sc-boite-titre>
            \[
            \frac{a}{\sin(\alpha)}
            =\frac{b}{\sin(\beta)}
            =\frac{c}{\sin(\gamma)}
            =2\cdot r
            \]

            <sc-boite-titre>Théorème de l'aire</sc-boite-titre>
            \[
            \sigma = \frac{1}{2}\cdot b \cdot c \cdot \sin(\alpha)
            \]

            <template v-slot:footer>
                \( r = \) rayon du cercle circonscrit
                <br/>
                \( \sigma = \) aire du triangle
            </template>
        </sc-boite>
    </div>
</template>

<script>
    import ScBoite from "../../../components/Boxes/ScBoite";
    import ScBoiteTitre from "../../../components/Boxes/ScBoiteTitre";

    export default {
        name: "carte",
        components: {ScBoiteTitre, ScBoite}
    }
</script>

<style scoped>

</style>