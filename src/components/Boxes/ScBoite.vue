<template>
    <v-alert
            :border="border"
            :class="'nav-toc-3 scBoite ' + calculatedClass + calculatedAlignementClass"
            :color="calculatedColor"
            :colored-border="coloredBorder"
            :dense="dense"
            :elevation="(!flat&&!exemple)?elevation:0"
            :max-width="maxWidth"
            :min-width="minWidth"
            :text="!coloredBorder"
            :width="width"
            outlined
    >
        <v-container class="pb-0 pt-0">
            <v-btn
                    @click="open=!open"
                    block
                    class="subtitle-1 text-uppercase nav-toc-title justify-start overflow-x-hidden"
                    text
                    v-html="this.calculatedTitle"
                    v-show="this.titre || collapse"
            ></v-btn>

            <v-expand-transition>
                <div v-show="open || collapse===false">
                    <slot></slot>

                    <v-divider
                            class="mt-5 mb-3"
                            v-if="$slots.footer"
                    ></v-divider>
                    <div class="text-center caption">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </v-expand-transition>
        </v-container>
    </v-alert>
</template>
<script>
    export default {
        name: 'scBoite',
        props: {
            dense: {type: Boolean, default: false},
            flat: {type: Boolean, default: false},
            elevation: {type: Number, default: 2},
            border: {type: String, default: 'left'},
            color: {type: String, default: ''},
            full: {type: Boolean, default: false},
            width: {type: [String, Number], default: 'auto'},
            minWidth: {type: [String, Number], default: 'auto'},
            maxWidth: {type: [String, Number], default: 'auto'},
            center: {type: Boolean, default: false},
            definition: {type: Boolean, default: false},
            propriete: {type: Boolean, default: false},
            theoreme: {type: Boolean, default: false},
            processus: {type: Boolean, default: false},
            exemple: {type: Boolean, default: false},
            titre: {type: [Boolean, String], default: false},
            collapse: {type: Boolean, default: false},
            closed: {type: Boolean, default: false}
        },
        data() {
            return {
                open: true
            }
        },
        computed: {
            coloredBorder: function () {
                return this.exemple === true;
            },
            calculatedColor: function () {
                if (this.color !== '') {
                    return this.color;
                }
                if (this.definition) {
                    return 'purple';
                }
                if (this.theoreme) {
                    return 'blue';
                }
                if (this.propriete) {
                    return 'deep-orange lighten-2';
                }
                if (this.processus) {
                    return 'green';
                }
                if (this.exemple) {
                    return 'yellow lighten-3';
                }
                return 'pink darken-4';
            },
            calculatedTitle: function () {
                if (typeof this.titre === 'string') {
                    return this.titre;
                }
                if (this.definition) {
                    return 'Définition';
                }
                if (this.propriete) {
                    return 'Propriété';
                }
                if (this.theoreme) {
                    return 'Théorème';
                }
                if (this.processus) {
                    return 'Processus';
                }
                if (this.exemple) {
                    return 'Exemple';
                }

                return '';
            },
            calculatedClass: function () {
                /*if (typeof this.titre === 'string') {
                    return this.titre;
                }*/
                if (this.definition) {
                    return 'scBoite-alert-definitiion';
                }
                if (this.propriete) {
                    return 'scBoite-alert-propriete';
                }
                if (this.theoreme) {
                    return 'scBoite-alert-theoreme';
                }
                if (this.processus) {
                    return 'scBoite-alert-processus';
                }
                if (this.exemple) {
                    return 'scBoite-alert-exemple';
                }

                return `scBoite-alert-default`
            },
            calculatedAlignementClass: function () {
                return this.center ? ' mx-auto' : ''
            }
        },
        mounted() {
            this.open = !this.closed;
        }
    }
</script>

<style scoped>
    .scBoite-alert-exemple {
        border-color: palegoldenrod !important;
        /*background-color: #f8f8ee !important;*/
    }
</style>
