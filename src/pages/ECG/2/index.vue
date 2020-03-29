<template>
    <v-container class="2C">
        <ScAnneeTitre ecg annee="2"></ScAnneeTitre>

        <v-row>
            <v-col>
                <v-btn to="statistiques" append>Statistiques</v-btn>
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
    import ScAnneeTitre from "../../../components/ScAnneeTitre";

    export default {
        name: "c-2",
        components: {ScAnneeTitre, ScPlanningTimeLine},
        data: function(){
            return {
                timeline: [
                    {
                        titre: 'Exercice',
                        icon: 'book-open-variant',
                        color: 'teal',
                        delai: '02.04.2020',
                        texte: `Faire les exercices 8.15, 8.16 et 8.17`
                    },
                    {
                        titre: 'Fréquences cumulées des variables statistiques quantitatives',
                        icon: 'brain',
                        color: 'primary',
                        delai: '27.03.2020',
                        texte: `<p class="red--text">Pour celles et ceux qui ne l'ont pas encore fait, merci de m'envoyer une ou deux photos de vos graphiques, pour que je puisse les corriger!</p>
                                <p>Lire la <strong>théorie</strong> pages 8.15 et 8.16.</p>
                                <p>Je modifierai la théorie en ligne durant la semaine.</p>`
                    },
                    {
                        titre: 'Exercice',
                        icon: 'book-open-variant',
                        color: 'teal',
                        delai: '26.03.2020',
                        texte: `Faire l'exercice 8.9`
                    },
                    {
                        titre: 'Exercices',
                        icon: 'book-open-variant',
                        color: 'teal',
                        delai: '23.03.2020',
                        texte: `Faire les exercices 8.5, 8.6 et 8.7`,
                        actions: false
                    },
                    {
                        titre: 'Variables statistiques quantitatives discrètes',
                        icon: 'brain',
                        color: 'primary',
                        delai: '19.03.2020',
                        texte: `<p>Lire la théorie 8.3 du fasciule, pages 8.3 à 8.13.</p>
                        <p>La grande différence par rapport aux variables qualitatives est qu'il faut
                            souvent regrouper les modalités par classes.</p>`,
                        actions: {label: 'Théorie', to: 'statistiques'}
                    }
                ]
            }
        }
    }
</script>

