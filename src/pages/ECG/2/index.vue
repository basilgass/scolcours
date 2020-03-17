<template>
    <v-container class="2C">
        <v-row class="row">
            <v-col><h2>2ème ECG</h2></v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn to="statistiques" append>Statistiques</v-btn>
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
            icon="mdi-brain"
            >
                <v-card class="elevation-2">
                    <v-card-title>
                        <h2 class="headline">Variables statistiques quantitatives discrètes</h2>
                    </v-card-title>
                    <v-card-subtitle> <v-icon>mdi-alert</v-icon> A faire jusqu'au 19.03.2020</v-card-subtitle>
                    <v-card-text>
                        <p>Lire la théorie 8.3 du fasciule, pages 8.3 à 8.13.</p>
                        <p>La grande différence par rapport aux variables qualitatives est qu'il faut
                            souvent regrouper les modalités par classes.</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn to="statistiques" append>Théorie</v-btn>
                    </v-card-actions>
                </v-card>
            </v-timeline-item>
            <v-timeline-item
            icon="mdi-book-open-variant"
            color="teal"
            >
                <v-card class="elevation-2">
                    <v-card-title class="headline">Exercices</v-card-title>
                    <v-card-subtitle > <v-icon>mdi-alert</v-icon> A faire jusqu'au 20.03.2020</v-card-subtitle>
                    <v-card-text>
                        Faire les exercices 8.5, 8.6 et 8.7
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-container>
</template>

<script>
    export default {
        name: "c-2"
    }
</script>

<style scoped>

</style>