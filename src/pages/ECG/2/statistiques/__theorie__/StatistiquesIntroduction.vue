<template>
    <section>
        <sc-titre-section class="headline mt-10 mb-5">Introduction</sc-titre-section>

        <sc-titre-partie>Définitions</sc-titre-partie>
        <scDefinitions :definitions="definitions"/>
        <div class="headline mt-10 mb-5">Introduction</div>

        <sc-titre-partie>Fréquence</sc-titre-partie>
        La <strong>fréquence</strong> est le rapport entre l'effectif d'une modalité et le nombre total des individus dans la population.
        Cette valeur est un pourcentage et peut donc s'écrire \( 0.75 \) ou \( 75\% \)

        <base-alert>
            \[
            \text{Fréquence}=\frac{\text{Effectif}}{\text{Population totale}}
            \]
        </base-alert>

    </section>
</template>
<script>
    import BaseAlert from "../../../../../components/Boxes/ScBaseAlert"
    import ScDefinitions from "../../../../../components/ScDefinitions"
    import ScTitreSection from "../../../../../components/Titles/ScTitre1Section";
    import ScTitrePartie from "../../../../../components/Titles/ScTitre2Partie";

    export default {
        name: 'StatistiquesIntroduction',
        components: {ScTitrePartie, ScTitreSection, BaseAlert, ScDefinitions},
        data: function() {
            return {
                definitions: [
                    {nom: 'Population', definition: `Ensemble des éléments qui font partie de l'étude. Un élément de la population est un individu ou une unité statistique`},
                    {nom: 'Variable statistique', definition: `La question que l'on pose`},
                    {nom: 'Qualitative', definition: `Se dit d'une variable statistique dont les modalités ne sont pas des nombres.`},
                    {
                        nom: 'Quantitative discrète',
                        definition: `<p>Se dit d'une variable statistique dont les modalités sont des nombres finis, que l'on peut donc compter facilement.</p><p class="caption">Par exemple: le nombre de réponses correctes d'un test de math est une variable discrète.</p>`
                    },
                    {
                        nom: 'Quantitative continue',
                        definition: `<p>Se dit d'une variable statistique dont les modalités sont des nombres continus. On ne peut pas (ou difficilement) toutes les compter.</p><p class="caption">Par exemple: le rapport entre la longueur et la largeur d'un rectangle est une variable continue.</p>`
                    },
                    {nom: 'Modalités', definition: `Ensemble des réponses possibles pour une variable statistique donnée.`},
                    {nom: 'Effectifs', definition: `Nombre de fois qu'une modalité a été observée.`},
                    {nom: 'Classes', definition: `Une classe est un intervalle semi-ouvert qui regroupe plusieurs modalités, afin de synthétiser l'information des données brutes `}
                ]
            }
        }
    }
</script>