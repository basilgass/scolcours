<template>
    <v-card :min-width="minWidth">
        <v-card-title><slot>Exercice</slot></v-card-title>
        <v-card-subtitle v-html="donnee"></v-card-subtitle>
        <v-card-text class="body-1 text--primary">

            <div v-html="question"></div>

            <div v-for="(item, id) in etapes" :key="id" class="mt-4">
                <sc-exercice-complexe-item
                        :id="id"
                        :autofocus="id===0&&autofocus"
                        :donnee="item.donnee"
                        :question="item.question"
                        :reponse="item.reponse"
                        :format="item.type"
                        :multiple="item.multiple"
                        :ordre="ordre"
                        @valider-resultat="resultatDecompte"
                        @update-ordre="updateOrdre"
                        v-show="afficherSi(item.condition)"
                ></sc-exercice-complexe-item>
            </div>
        </v-card-text>

        <v-card-actions>
            <v-btn
                    block
                    small
                    outlined
                    @click="nouvelleQuestion()"
                    :disabled="total!=etapes.length"
            >Nouvelle question
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
    import ScExerciceComplexeItem from "./ScExerciceComplexeItem";

    export default {
        name: 'ScExerciceComplexe',
        components: {ScExerciceComplexeItem},
        props: {
            autofocus: {type: Boolean, default: false},
            generateur: {
                type: Function, default: () => {
                    return [];
                }
            },
            minWidth: {
                type: [String, Boolean], default: () => {
                    return false
                }
            },
            maxWidth: {
                type: [String, Boolean], default: () => {
                    return false
                }
            },
            width: {
                type: [String, Boolean], default: () => {
                    return false
                }
            }
        },
        data: function(){
            return {
                resultats: [],
                total: 0,
                donnee: '',
                question: '',
                etapes: [],
                ordre: []
            }
        },
        methods: {
            nouvelleQuestion: function(){
                // Création de la nouvelle question.
                let qData = this.generateur();

                this.donnee = qData.donnee;
                this.question = qData.question;
                this.etapes = qData.etapes;

                // Initialise la variable résultats.
                this.resultats = [];
                for(let i=0; i<this.etapes.length; i++){
                    this.resultats.push(0);
                }
                this.total = 0;

                this.$children.forEach(v=>v.$emit('resetQuestion'));
            },
            resultatDecompte: function(resultat){
                this.resultats[resultat.id] = resultat.value;

                let total = 0;
                for(let i=0; i<this.resultats.length; i++){
                    total += +this.resultats[i]
                }

                this.total = total;
                return total
            },
            afficherSi: function(condition){
                return (condition===undefined) || (this.total>=condition)
            },
            updateOrdre: function(ordre){
                this.ordre = ordre;
            }
        },
        mounted() {
            this.nouvelleQuestion();
        }
    }
</script>
