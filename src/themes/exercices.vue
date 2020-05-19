<template>
    <v-tabs
            background-color="teal darken-5"
            dark
            vertical
    >
        <v-tabs-slider color="black"/>
        <v-tab :key="e" v-for="(e, n) of exercices">
            <v-icon left>{{resultats[n]}}</v-icon>
            {{e}}
        </v-tab>

        <v-tab-item :key="'content-'+e"
                    v-for="(e, n) of exercices">
            <v-container>
                <component
                        @resultat-exercice="exereciceUpdate($event, n)"
                        v-bind:is="`ex-${e}`"
                />
            </v-container>
        </v-tab-item>
    </v-tabs>
    <!--<v-expansion-panels id="scolcours-themes-exercices">
        <v-expansion-panel
                v-for="(e, n) of exercices"
                :key="e"
        >
            <v-expansion-panel-header :color="resultats[n]">{{e}}</v-expansion-panel-header>
            <v-expansion-panel-content>
            <component
                    v-bind:is="`ex-${e}`"
                    @resultat-exercice="exereciceUpdate($event, n)"
            />
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>-->
</template>

<script>
    import renderMathInElement from "katex/dist/contrib/auto-render.min";
    import Ex11 from "./trigonometrie/exercices/1.1";

    import axios from "axios";


    export default {
        name: "exercices-liste",
        components: {Ex11},
        props: {
            theme: {type: String, default: ''},
            //exercices: {type: Array, default: () => []}
        },
        data() {
            return {
                afficher: false,
                resultats: [],
                exercices: []
            }
        },
        methods: {
            loadExercices() {
                // Devra se faire de manière asynchrone.
                for (let e of this.exercices) {
                    this.$options.components[`ex-${e}`] = () => import(`@/themes/${this.theme}/exercices/${e}`)
                }
            },
            displayExercices() {
                for (let i = 0; i < this.exercices.length; i++) {
                    this.resultats.push('mdi-head-question');
                }
                this.afficher = true;
            },
            exereciceUpdate(value, n) {
                /*if(this.resultats[n]!==(value?'green':'')) {
                    this.$set(this.resultats, n, value ? 'green' : '');
                }*/
                if (this.resultats[n] !== (value ? 'mdi-check' : 'mdi-head-question')) {
                    this.$set(this.resultats, n, value ? 'mdi-check' : 'mdi-head-question');
                }
            }
        },
        created() {
            // On vérifie que les exercices chargés sont dans la base de donnée.
            /*axios({
                method: 'post',
                url: '/crud/exercices.php',
                data: {
                    'crud': 'c',
                    'exercices': this.exercices,
                    'theme': this.theme
                }
            }).then(response => {
                console.log(response.data);
            }).catch(e => {
                console.log('Erreur dans les exercices')
                console.log(e);
            });*/

            axios({
                method: 'get',
                url: `/crud/${this.theme}.json`,
                data: {
                    'crud': 'r',
                    'theme': this.theme
                }
            }).then(response => {
                this.exercices = [];
                this.resultats = [];

                for (let ex of response.data) {
                    this.exercices.push(ex.exercice);
                    this.resultats.push('mdi-head-question')
                }
                this.loadExercices();
            }).catch(e => {
                console.log('Erreur dans les exercices')
                console.log(e);
            });

        },
        mounted() {
            this.displayExercices();
        },
        updated() {
            renderMathInElement(this.$el);
        },
    }
</script>

<style scoped>

</style>