<template>
    <v-sheet color="light-green lighten-5" elevation="2" tile>
        <v-container fluid>
            <v-row justify="space-around">
                <div>
                    <sc-titre-page
                            :key="componentKey"
                            :sous-titre="sousTitre"
                            :titre="titre">
                    </sc-titre-page>

                    <sc-breadcrumbs
                            :items="items"
                            :key="breadCrumbKey"
                    ></sc-breadcrumbs>
                </div>
            </v-row>
        </v-container>
    </v-sheet>
</template>
<script>

    import ScBreadcrumbs from "./UserInterface/ScBreadcrumbs";
    import ScTitrePage from "./Titles/ScTitre0Page";

    export default {
        name: 'sc-theorie-header',
        components: {ScTitrePage, ScBreadcrumbs},
        props: {
            titre: {type: String, default: ''},
            sousTitre: {type: String, default: ''},
            items: {type: Array, default: () => []}
        },
        data() {
            return {
                leSousTitre: '',
                componentKey: 0,
                breadCrumbKey: 1000,
            }
        },
        watch: {
            sousTitre() {
                this.componentKey++;
                this.breadCrumbKey++;
            }
        },
    }
</script>