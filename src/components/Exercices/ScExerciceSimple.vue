<template>
    <v-card :min-width="minWidth">
        <v-card-title><slot>Exercice</slot></v-card-title>
        <v-card-subtitle v-html="donnee"></v-card-subtitle>
        <v-card-text class="body-1 text--primary">

            <div ref="question"
                 class="mt-5 mb-10"
                 v-html="afficherQuestionReponse()"></div>

            <v-text-field
                    autofocus
                    clearable
                    :success="verifierReponse()"
                    v-model.number="userInput"
                    v-on:keyup.enter="nouvelleQuestion()"
                    label="Réponse"
            ></v-text-field>
        </v-card-text>

        <v-card-actions>
            <v-btn
                    block
                    small
                    outlined
                    @click="nouvelleQuestion()"
                    :disabled="!verifierReponse()"
            >Nouvelle question
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
    import katex from "katex";

    export default {
        name: 'ScExerciceSimple',
        props: {
            donnee: {type: String, default: 'Calculer...'},
            question: {type: Function, default: ()=>{return 'Créer la fonction !';}},
            ouinon: {type: Boolean, default: false},
            minWidth: {type: [String,Boolean], default: ()=>{return false}},
            maxWidth: {type: [String,Boolean], default: ()=>{return false}},
            width: {type: [String,Boolean], default: ()=>{return false}}
        },
        data: function(){
            return {
                qr: {question: '', reponse: ''},
                userInput: ''
            }
        },
        methods: {
            nouvelleQuestion: function(){
                if(!this.verifierReponse()){return;}
                this.qr = this.question();
                this.userInput = '';
            },
            afficherQuestionReponse: function(){
                // On vérifie si la réponse est juste.
                if(this.userInput===null){this.userInput='';}
                return katex.renderToString(this.qr.question + this.userInput);
            },
            verifierReponse: function(){
                return +this.userInput===this.qr.reponse;
            },
        },
        mounted() {
            this.qr = this.question();
        }
    }
</script>
