<template>
    <div>
        L'angle au centre qui intercepte <span class="green--text">un arc de cercle</span> de longueur égale au <span class="red--text">rayon</span> mesure <strong>1 radian</strong>
        <pi-trigo-radian width="200"></pi-trigo-radian>

        <p>Radian à degré</p>
        \[
        \frac{\pi}{5}[\text{rad}]\implies \frac{\pi}{5}\cdot \textcolor{green}{\frac{180}{\pi}}=36°
        \]

        <p>Degré à radian</p>
        \[
        144°\implies 144\cdot \textcolor{green}{\frac{\pi}{180}}=\frac{4\pi}{5}[\text{rad}]
        \]
    </div>
</template>

<script>
    import PiTrigoRadian from "../../../components/Pi/pi-trigo-radian";

    export default {
        name: "carte",
        components: {PiTrigoRadian}
    }
</script>

<style scoped>

</style>