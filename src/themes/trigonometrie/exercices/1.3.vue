<template>
    <exercice
            :questions="questions"
            :reponses="reponses"
            :titre="titre"
    >
        Convertir les angles suivants en unité sexagésimal.<br>
        Les secondes sont arrondies à l'unité.
    </exercice>
</template>

<script>
    import Exercice from "../../exercice";

    export default {
        name: "ex1_3",
        components: {Exercice},
        data() {
            return {
                titre: '1.3',
                questions: [`35.1234`, `74.6531`, `12.6543`]
            }
        },
        computed: {
            reponses() {
                let r = [];
                for (let q of this.questions) {
                    r.push(this.reponse(q));
                }
                return r;
            }
        },
        methods: {
            reponse(q) {
                let n = Number(q),
                    d = Math.trunc(n),
                    m = Math.trunc((n - d) * 60),
                    s = Math.round(((n - d) * 60 - m) * 60)
                return `${d}°${m}'${s}''`
            }
        },
    }
</script>

<style scoped>

</style>