<template>
    <v-row>
        <v-col class="mt-5"
               cols="12"
               lg="6" style="min-height: 3em"
               v-html="afficherQuestionReponse()"></v-col>

        <v-col cols="12" lg="6">
            <v-text-field
                    :label="label"
                    :success="verifierReponse()"
                    autocomplete="off"
                    clearable
                    hint="Seul ce qui est après le dernier signe = est testé!"
                    v-model="userInput"
                    v-on:blur="$emit('inputFocus', false)"
                    v-on:focus="$emit('inputFocus', true)"
            >
            </v-text-field>
        </v-col>
    </v-row>
</template>

<script>
    import katex from "katex";

    export default {
        name: "exerciceQuestion",
        props: {
            question: {
                type: String,
                default: ''
            },
            reponse: {
                type: String,
                default: ''
            },
            ouinon: {type: Boolean, default: false},
            formatage: {type: Boolean, default: false},
            formatageFn: {type: Function, default: null},
            exemple: {type: String, default: ''},
            egalite: {type: Boolean, default: true}

        },
        data: function () {
            return {
                qr: {question: '', reponse: ''},
                userInput: '',
                hasFocus: false
            }
        },
        computed: {
            label() {
                return this.exemple === '' ? 'Réponse' : this.exemple;
            }
        },
        methods: {
            formatageEgalites(txt) {
                let parties = txt.split('='),
                    texteFormate = [];

                for (let p of parties) {
                    texteFormate.push(this.formatageUnePartie(p))
                }

                return texteFormate.join('=');

            },
            formatageUnePartie(txt) {
                if (this.formatageFn !== null) {
                    return this.formatageFn(txt);
                }

                let t = txt.replace(/p/g, '\\pi').replace(/\*/g, '\\cdot');

                // Ajout de la fraction
                t = t.split('/')
                if (t.length === 1) {
                    t = t[0];
                } else if (t.length === 2) {
                    t = `\\dfrac{${t[0]}}{${t[1]}}`;
                } else {
                    // Trop de fraction.
                    t = t.join('/');
                }

                return t;
            },
            afficherQuestionReponse: function () {
                // On vérifie si la réponse est juste.
                if (this.userInput === null) {
                    this.userInput = '';
                }

                // Formatage si nécessaire
                let txt = this.userInput + '';

                if (this.formatage) {
                    txt = this.formatageEgalites(this.userInput);
                }

                // On déterminer s'il faut ajouter une égalité.
                if (this.egalite && this.qr.question[this.qr.question.length - 1] !== '=') {
                    return katex.renderToString(this.qr.question + '=' + txt);
                } else {
                    return katex.renderToString(this.qr.question + txt);
                }
            },
            verifierReponse: function () {
                let resultat = false;

                if (this.formatage) {
                    let reponse = this.userInput.split('=');
                    resultat = reponse[reponse.length - 1].toUpperCase() === this.qr.reponse.toUpperCase();
                } else {
                    resultat = +this.userInput === this.qr.reponse;
                }

                this.$emit('resultat', resultat);
                return resultat;
            },
        },
        mounted() {
            if (this.question.indexOf('\\') !== -1 || !this.formatage) {
                // C'est déjà formaté
                this.qr.question = this.question;
            } else {
                this.qr.question = this.formatageEgalites(this.question);
            }

            this.qr.reponse = this.reponse;
        }
    }
</script>

<style scoped>

</style>