<template>
    <v-container class="1C">
        <v-row class="row">
            <v-col><h2 class="display-1">Ecole de culture générale, 1ère année</h2></v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn to="equations2eme" append>Equations du 2ème degré</v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col><h1 class="display-1 text-center ma-10">Programme en cours</h1></v-col>
        </v-row>
        <v-timeline
                align-top
                :dense=$vuetify.breakpoint.smAndDown
        >
            <v-timeline-item
                    v-for="(T,id) in timeline" :key="id"
                    :icon="`mdi-${T.icon}`"
                    :color=T.color
            >
                <v-card class="elevation-2">
                    <v-card-title>
                        <h2 class="headline">{{T.titre}}</h2>
                    </v-card-title>
                    <v-card-subtitle> <v-icon>mdi-alert</v-icon> A faire jusqu'au {{T.delai}}</v-card-subtitle>
                    <v-card-text v-html="T.texte"></v-card-text>
                    <v-card-actions v-if="T.actions">
                        <v-btn :to="T.actions.to" append>{{T.actions.label}}</v-btn>
                    </v-card-actions>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-container>
</template>

<script>
    export default {
        name: "c-1",
        data: function(){
            return {
            timeline: [
                {
                    titre: 'Exercices',
                    icon: 'book-open-variant',
                    color: 'teal',
                    delai: '20.03.2020',
                    texte: `<ul><li>6.1<br>utiliser la factorisation (produits remarquables, mise en évidence, etc...)</li>
                            <li>6.2<br>Résolution en utilisant la méthode vue en théorie (bientôt en ligne aussi )</li></ul>`,
                    actions: false
                },
                {
                    titre: `Résolution d'équations sans la formule`,
                    icon: 'brain',
                    color: 'primary',
                    delai: '20.03.2020',
                    texte: `Revoir la théorie vue en classe vendredi 13 et répétée dans le fascicule, page 6.1.`,
                    actions: {label: 'Résolution sans la formule', to: 'equations2eme'}
                },

            ]
        }}
    }
</script>

<style scoped>

</style>