<template>
    <sc-exercice-simple
            :formatage-fn="chaslesFormatage"
            :question="chasles"
            donnee="Simplifier la somme de vecteurs suivante"
            exemple="Exemple: EF"
            formatage
            titre="Relation de Chasles"

    >
    </sc-exercice-simple>
</template>

<script>
    import {Pi} from "../../../../public/js/pi";
    import ScExerciceSimple from "../../../components/Exercices/ScExerciceSimple";

    function shuffleArray(d) {
        for (var i = d.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = d[i];
            d[i] = d[j];
            d[j] = temp;
        }
    }

    export default {
        name: "appChasles",
        components: {ScExerciceSimple},
        mounted() {
            this.exerciceChasles = this.chasles();
        },
        data: function () {
            return {
                exerciceChasles: {question: '', reponse: ''},
                reponseChasles: ''
            }
        },
        computed: {
            reponseChaslesComputed: function () {
                let reponse = this.reponseChasles.toUpperCase();

                reponse = reponse.replace(/([A-Z]+)/g, '\\overrightarrow{$1}')
                return `${this.exerciceChasles.question}=${this.reponseChasles !== '' ? reponse : ''}`
                //return `${this.exerciceChasles.question}=${this.reponseChasles!==''?'\\overrightarrow{'+this.reponseChasles.toUpperCase()+'}':''}`
            },
        },
        methods: {
            chasles: function () {
                let s = 'ABCDEFGH'.split(''),
                    n = 3,
                    a = [],
                    r;
                shuffleArray(s);

                for (let i = 0; i < n; i++) {
                    if (Pi.Numeric.randomBool()) {
                        a.push(`+\\overrightarrow{${s[i]}${s[i + 1]}}`);
                    } else {
                        a.push(`-\\overrightarrow{${s[i + 1]}${s[i]}}`);
                    }
                }

                r = s[0] + s[3];

                shuffleArray(a);
                a = a.join('');
                if (a[0] === '+') {
                    a = a.substr(1);
                }
                return {
                    question: a + '=',
                    reponse: r
                };
            },
            chaslesFormatage: function (txt) {
                return txt.toUpperCase().replace(/([A-Z]+)/g, '\\overrightarrow{$1}')
            },
            chaslesCheck: function () {
                if (this.exerciceChasles.reponse === undefined) {
                    return false;
                }

                let reponse = this.reponseChasles.toUpperCase().split('=');

                reponse = reponse[reponse.length - 1];
                return reponse === this.exerciceChasles.reponse;
            },
            chaslesNouveau: function () {
                if (this.chaslesCheck()) {
                    this.exerciceChasles = this.chasles();
                    this.reponseChasles = '';
                }
            },
        },
    }
</script>

<style scoped>

</style>