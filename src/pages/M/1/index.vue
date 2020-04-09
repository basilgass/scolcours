<template>
    <v-container class="1M">

        <sc-annee-titre></sc-annee-titre>

        <v-row>
            <v-col>
                <v-btn to="geometrievectorielle" append>Géométrie vectorielle (théorie)</v-btn><br/>
                <v-btn to="geometrievectorielle/exercice" append>Exercices</v-btn>
            </v-col>
        </v-row>

        <v-btn x-large class="mt-10 mb-10" href="https://moodle.gyyv.vd.ch/course/view.php?id=70"  color="primary">Planning du cours sur Moodle</v-btn>

    </v-container>
</template>

<script>

    import ScAnneeTitre from "../../../components/ScAnneeTitre";
    export default {
        name: "m-1",
        components: {ScAnneeTitre},
        data: function(){
            return {
                timeline: [
                    {
                        titre: 'Exercices',
                        icon: 'book-open-variant',
                        color: 'teal',
                        delai: '03.04.2020',
                        texte: `<p>4.1, 4.2, 4.3, 4.5, 4.6</p>`,
                        actions: false
                    },
                    {
                        titre: 'Norme',
                        icon: 'brain',
                        color: 'primary',
                        delai: '31.03.2020',
                        texte: `Lire la théorie sur la norme (chapitre 4, pages 4.1 et 4.2), ainsi qu'en naviguant dans la théorie.`,
                        actions: {label: 'Norme', to: 'geometrievectorielle#norme'}
                    },
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
                        actions: {label: 'Rapport de section', to: 'geometrievectorielle#reperes'}
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>