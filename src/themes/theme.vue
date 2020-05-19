<template>
    <div id="scolcours-theme-layout">
        <!-- Titre de la page -->
        <sc-theorie-header
                :sous-titre="chapitre||'Résumé'"
                :titre="titre"
        ></sc-theorie-header>

        <!-- Table des matières du haut, visible que pour les parties théories -->

        <v-tabs center-active centered show-arrows v-model="tab">
            <v-tab exact key="resume">Résumé</v-tab>
            <v-tab :key="item.code" v-for="(item, idx) in chapitres">{{item.titre}}</v-tab>
        </v-tabs>
        <v-tabs-items touchless v-model="tab">
            <v-tab-item>
                <v-container fluid>
                    <v-row key="resume">
                        <v-col :key="'carte-'+comp.code" cols="12" lg="4"
                               md="6"
                               v-for="comp in chapitres">
                            <v-card style="height:100%;position: relative;padding-bottom: 70px;">
                                <v-card-title>{{comp.titre}}</v-card-title>
                                <v-card-text class="text--primary body-1">
                                    <component
                                            v-bind:is="'carte-'+comp.code"
                                    ></component>

                                </v-card-text>

                                <v-card-text style="position: absolute;bottom: 0px; left: 0px">
                                    <v-divider class="mb-2"></v-divider>
                                    <v-btn :to="`${comp.code}`" append>
                                        <v-icon>mdi-arrow-right</v-icon>
                                        Aller à la page
                                    </v-btn>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-tab-item>
            <v-tab-item :key="item.code" v-for="(item) in chapitres">
                <v-container>
                    <component v-bind:is="'page-'+item.code"/>
                </v-container>
            </v-tab-item>
        </v-tabs-items>
        <!--<v-tabs centered center-active show-arrows v-model="tab">
            <v-tab exact key="resume">Résumé</v-tab>
            <v-tab v-for="(item, idx) in chapitres" :key="item.code">{{item.titre}}</v-tab>
        </v-tabs>-->
    </div>
</template>

<style>
    .mord.accent {
        background-color: transparent !important;
    }
</style>
<script>
    import ScNavbar from "../components/UserInterface/ScNavbar";
    import ScFooter from "../components/UserInterface/ScFooter";
    import renderMathInElement from "katex/dist/contrib/auto-render.min";
    import ScTheorieHeader from "../components/en-tete";

    export default {
        name: 'scolcours-theorie',
        layout: 'layout-theme',
        components: {ScTheorieHeader, ScFooter, ScNavbar},
        props: {
            titre: {
                type: String,
                default: ''
            },
            chapitres: {
                type: Array,
                default: () => []
            },
            theme: {
                type: String,
                default: ''
            },
            exercices: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                code: null,
                tab: null
            }
        },
        computed: {
            chapitre() {
                for (let p of this.chapitres) {
                    if (p.code === this.code) {
                        return p.titre;
                    }
                }

                return this.code;
            },
            pageId() {
                if (this.code === 'exercices') {
                    return this.chapitres.length;
                } else if (this.code === '') {
                    return -1;
                } else {
                    let n = 0;
                    for (let p of this.chapitres) {
                        if (p.code === this.code) {
                            return n;
                        }
                        n++;
                    }
                    return -1;
                }
            }
        },
        methods: {
            loadComponents() {
                // this.code = '4-norme';
                // Load dynamically all the props.
                for (let p of this.chapitres) {
                    this.$options.components['carte-' + p.code] = () => import(`@/themes/${this.theme}/${p.code}/carte`);
                    this.$options.components['page-' + p.code] = () => import(`@/themes/${this.theme}/${p.code}/theorie`);
                }
                // Ajouter la page des exercices.
                this.$options.components['exercices-liste'] = () => import(`@/themes/exercices`);
            },
            updateTab() {
                for (let i in this.chapitres) {
                    if (this.chapitres[i].code === this.code) {
                        this.tab = +i + 1;
                        return i;
                    }
                }
                return 0;
            }
        },
        created() {
            this.loadComponents();
        },
        mounted() {
            this.code = this.$route.params.code === undefined ? '' : this.$route.params.code;
            this.updateTab();
            renderMathInElement(this.$el);
        },
        updated() {
            renderMathInElement(this.$el);
            if (this.tab !== null) {
                let newCode = this.tab === 0 ? '' : this.chapitres[this.tab - 1].code;

                // C'est un nouveau chemin
                if (this.$route.path !== `/${this.theme}/${newCode}`) {
                    if (this.tab === 0) {
                        this.$router.push(`/${this.theme}/`);
                    } else {
                        this.$router.push(`/${this.theme}/${newCode}`)
                    }
                }

            }

        },
        watch: {
            $route() {
                // react to route changes...
                if (!(`code` in this.$route.params)) {
                    this.code = null;
                } else if (this.$route.params.code === undefined) {
                    this.code = null;
                } else {
                    this.code = this.$route.params.code;
                }

                this.updateTab()
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.25s ease-out;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>