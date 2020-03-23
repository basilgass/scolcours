<template>
    <v-container class="1M">
        <v-row>
            <v-col><h2 class="display-1">Ecole de maturité, 1ère année</h2></v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn to="geometrievectorielle" append>Géométrie vectorielle (théorie)</v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col><h1 class="display-1 text-center ma-10">Programme en cours</h1></v-col>
        </v-row>
        <ScPlanningTimeLine :timeline="timeline"/>
    </v-container>
</template>

<script>

    import ScPlanningTimeLine from "../../../components/ScPlanningTimeLine";
    export default {
        name: "m-1",
        components: {ScPlanningTimeLine},
        data: function(){
            return {
                timeline: [
                    {
                        titre: 'Exercices',
                        icon: 'book-open-variant',
                        color: 'teal',
                        delai: '27.03.2020',
                        texte: `<p>3.1, 3.3, 3.4, 3.5, 3.7, 3.8*, 3.9 (1 et 3), 3.10, 3.14 et 3.16</p>
                                <p>En utilisant les rapports de section: 3.11, 3.12, 3.15 et 3.18</p>
                                <p><strong>Je fournirai quelques pistes et corrigés détaillés dans les jours qui suivent.
                                Entre temps, s'il vous faut des indices ou de l'aide, vous pouvez m'envoyer un message.</strong></p>`,
                        actions: false
                    },
                    {
                        titre: 'Rapport de section',
                        icon: 'brain',
                        color: 'primary',
                        delai: '20.03.2020',
                        texte: `Lire la théorie sur les rapports de section (pages 3.6, paragraphe 5) et tester avec le lien ci-dessous`,
                        actions: {label: 'Rapport de section', to: 'geometrievectorielle'}
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>