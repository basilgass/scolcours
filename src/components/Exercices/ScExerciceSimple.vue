<template>
    <div>
        <v-overlay
                :opacity="opacity"
                :value="showOverlay"
                z-index="10"
        >
        </v-overlay>
        <v-card
                :min-width="minWidth===false?0:minWidth"
                v-bind:style="{ zIndex: zIndex}"
        >
            <v-card-title>
                <slot>{{titre}}</slot>
            </v-card-title>
            <v-card-subtitle v-html="donnee"/>

            <v-card-text class="body-1 text--primary">
                <slot name="complement"></slot>

                <div v-html="afficherQuestionStatique()"></div>

                <div class="mt-5 mb-10"
                     ref="question"
                     style="min-height: 3em"
                     v-html="afficherQuestionReponse()"></div>

                <v-text-field
                        :label="label"
                        :success="verifierReponse()"
                        autocomplete="off"
                        clearable
                        hint="Seul ce qui est après le dernier signe = est testé!"
                        v-model="userInput"
                        v-on:blur="hasFocus=!hasFocus"
                        v-on:focus="hasFocus=!hasFocus"
                        v-on:keyup.enter="nouvelleQuestion()"
                >
                </v-text-field>
            </v-card-text>
            <v-card-text class="pt-0" v-show="showOverlay && formatage">
                <v-row>
                    <v-col class="mb-0 pb-0" cols="12">Caractères spéciaux:</v-col>
                    <v-col><code>p</code> \( = \pi \),</v-col>
                    <v-col><code>*</code> \( = \cdot \)</v-col>
                    <v-col><code>/</code> \( = \frac{a}{b} \)</v-col>
                    <v-col><code>=</code> égalité (!)</v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-btn
                        :disabled="!verifierReponse()"
                        @click="nouvelleQuestion()"
                        block
                        outlined
                        small
                >Nouvelle question
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
    import katex from "katex";

    export default {
        name: 'ScExerciceSimple',
        props: {
            titre: {type: String, default: 'Exercice'},
            donnee: {type: String, default: 'Calculer...'},
            question: {
                type: Function, default: () => {
                    return 'Créer la fonction !';
                }
            },
            exemple: {type: String, default: ''},
            ouinon: {type: Boolean, default: false},
            formatage: {type: Boolean, default: false},
            formatageFn: {type: Function, default: null},
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
            },
            overlay: {type: Boolean, default: true},
            opacity: {type: Number, default: 0.9}
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
            },
            showOverlay() {
                return this.hasFocus && this.overlay;
            },
            zIndex() {
                return this.showOverlay ? 10 : 1;
            }
        },
        methods: {
            nouvelleQuestion: function () {
                if (!this.verifierReponse()) {
                    return;
                }
                this.qr = this.question();
                this.userInput = '';
            },
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
            afficherQuestionStatique: function () {
                return (this.qr.complement === undefined) ? '' : katex.renderToString(this.qr.complement)
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

                return katex.renderToString(this.qr.question + txt);
            },
            verifierReponse: function() {
                if (this.formatage) {
                    let reponse = this.userInput.split('=');
                    return reponse[reponse.length - 1].toUpperCase() === this.qr.reponse.toUpperCase();
                } else {
                    return this.userInput.toString() === this.qr.reponse.toString();
                }
            },
        },
        mounted() {
            this.qr = this.question();
        }
    }
</script>

<style scoped>
    overlayIndexForward {
        z-index: 10;
    }
</style>