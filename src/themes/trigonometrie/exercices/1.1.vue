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
        name: "ex1_1",
        components: {Exercice},
        data() {
            return {
                titre: "1.1",
                questions: ['35', '75', '120', '350']
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
                let F = new Pi.Fraction(q).divide(new Pi.Fraction('180')).reduce();
                let t = F.numerator === 1 ? '' : `${F.numerator}`;
                t += 'p'
                t += F.denominator === 1 ? '' : `/${F.denominator}`;
                return t;
            }
        },
    }
</script>

<style scoped>

</style>