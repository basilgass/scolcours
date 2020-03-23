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
        <ScPlanningTimeLine :timeline="timeline"/>
    </v-container>
</template>

<script>
    import ScPlanningTimeLine from "../../../components/ScPlanningTimeLine";

    export default {
        name: "c-1",
        components: {ScPlanningTimeLine},
        data: function(){
            return {
            timeline: [
                {
                    titre: `Résolution d'équations sans la formule`,
                    icon: 'brain',
                    color: 'primary',
                    delai: '20.03.2020',
                    texte: `Revoir la théorie vue en classe vendredi 13 et répétée dans le fascicule, page 6.1.`,
                    actions: {label: 'Résolution sans la formule', to: 'equations2eme'}
                },
                {
                    titre: 'Exercices',
                    icon: 'book-open-variant',
                    color: 'teal',
                    delai: '20.03.2020',
                    texte: `<ul><li>6.1<br>utiliser la factorisation (produits remarquables, mise en évidence, etc...)</li>
                            <li>6.2<br>Résolution en utilisant la méthode vue en théorie (bientôt en ligne aussi )</li></ul>`,
                    actions: false
                }
            ]
        }}
    }
</script>

