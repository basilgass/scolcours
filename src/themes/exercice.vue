<template>
    <div>
        <div class="exercice-titre title">{{titre}}</div>
        <div class="exercice-points" v-html="ptsDisplay"></div>

        <div class="exercice-donnee">
            <slot></slot>
        </div>

        <v-container class="exercice-questions">
            <exercice-question
                    :key="`${titre}-${n}`" :question="el"
                    :reponse="reponses[n]"
                    formatage
                    v-for="(el, n) of questions"
                    v-on:inputFocus="focusUpdate"
                    v-on:resultat="resultat($event, n)"
            ></exercice-question>
        </v-container>

    </div>
</template>

<script>
    import renderMathInElement from "katex/dist/contrib/auto-render.min";
    import ExerciceQuestion from "./exerciceQuestion";

    export default {
        name: "exercice",
        components: {ExerciceQuestion},
        props: {
            titre: {
                type: String,
                default: 'titre...'
            },
            questions: {
                type: Array,
                default: () => []
            },
            reponses: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                resultats: [],
                pts: 0
            }
        },
        computed: {
            ptsDisplay() {
                return `${this.pts} / ${this.questions.length}`;
            }
        },
        methods: {
            resultat(value, n) {
                this.resultats[n] = value;
                this.pts = this.resultats.filter(v => v === true).length;

                this.$parent.$emit('resultat-exercice', this.pts === this.questions.length);
            },

            focusUpdate(value) {
                // console.log(value)
            }
        },
        mounted() {
            this.resultats = [];
            for (let k in this.question) {
                this.resultats.push(false);
            }
        },
        updated() {
            renderMathInElement(this.$el)
        }
    }
</script>

<style scoped>

</style>