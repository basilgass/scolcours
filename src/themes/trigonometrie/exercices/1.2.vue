<template>
    <exercice
            :questions="questions"
            :reponses="reponses"
            :titre="titre"
    >
        Convertir les angles suivants de degrés à radians.
    </exercice>
</template>

<script>
    import Exercice from "../../exercice";
    import {Pi} from "../../../../public/js/pi"

    export default {
        name: "ex1_2",
        components: {Exercice},
        data() {
            return {
                titre: '1.2',
                questions: ['7p/3', '11p/2', 'p/10', '8p/5', '3p', 'p']
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
                let r = q.split('/'), n, d, F;

                n = r[0].replace('p', '');
                n = (n === '') ? '1' : +n;
                d = (r.length > 1) ? +r[1] : 1;

                F = new Pi.Fraction().parseByInteger(n * 180, d).reduce();
                return F.display;
            }
        },
    }
</script>

<style scoped>

</style>