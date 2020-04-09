<template>
    <v-container class="1C">
        <sc-annee-titre ecg></sc-annee-titre>


        <v-row>
            <v-col>
                <v-btn to="equations2eme" append>Equations du 2ème degré</v-btn>
                <v-btn to="equations2eme/exercice" append>Exercices</v-btn>
            </v-col>
        </v-row>

        <v-btn x-large class="mt-10 mb-10" href="https://moodle.gyyv.vd.ch/course/view.php?id=298" color="primary">Planning du cours sur Moodle</v-btn>
    </v-container>
</template>

<script>
    import ScAnneeTitre from "../../../components/ScAnneeTitre";

    export default {
        name: "c-1",
        components: {ScAnneeTitre},
        data: function(){
            return {
            timeline: [
                {
                    titre: 'Exercice 6.4',
                    icon: 'book-open-variant',
                    color: 'teal',
                    delai: '02.04.2020',
                    texte: `<p>
                                Commencer par supprimer les fractions, réordonner sous la forme <i>canonnique</i>: \\(Ax^2+Bx+C=0\\)
                            </p>
                            <p>Exemple avec le 6.4 (1)</p>
                            \\[
                             \\begin{aligned}
                             \\frac{x-8}{5} + \\frac{x^2}{3} &= 1 & \\vert & \\cdot 15 \\\\
                             3(x-8) + 5 x^2 &= 15 & \\vert & \\text{ calculs} & \\\\
                             3x -24 + 5x^2 &= 15 & \\vert & -15 & \\\\
                             5x^2 + 3x -39 &= 0 & & &
                             \\end{aligned}
                             \\]`,
                    actions: {label: 'Résolution avec la formule', to: 'equations2eme'}
                },
                {
                    titre: 'Exercice 6.3',
                    icon: 'book-open-variant',
                    color: 'teal',
                    delai: '27.03.2020',
                    texte: `Faire au minimum la première colonne.`,
                    actions: {label: 'Résolution avec la formule', to: 'equations2eme'}
                },
                {
                    titre: `Fromule du deuxième degré`,
                    icon: 'brain',
                    color: 'primary',
                    delai: '26.03.2020',
                    texte: `Apprendre la formule, lire la théorie (page 6.2, 6.3) et compléter avec la thérie du site.`,
                    actions: {label: 'Résolution avec la formule', to: 'equations2eme'}
                },
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
                }
            ]
        }}
    }
</script>

