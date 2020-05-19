<template>
    <div>
        <p>Un vecteur est défini par sa <u>direction</u>, son <u>sens</u> et sa <u
        >norme</u>.</p>

        <p>On ne dessine par un vecteur, mais un <u>représentant</u></p>

        <v-simple-table dense>
            <thead>
            <tr>
                <th></th>
                <th>Direction</th>
                <th>Sens</th>
                <th>Norme</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>équipollents</td>
                <td>\( = \)</td>
                <td>\( = \)</td>
                <td>\( = \)</td>
            </tr>
            <tr>
                <td>colinéaires</td>
                <td>\( = \)</td>
                <td>\( = \)</td>
                <td>\( \neq \)</td>
            </tr>
            <tr>
                <td>opposés</td>
                <td>\( = \)</td>
                <td>\( \neq \)</td>
                <td>\( = \)</td>
            </tr>
            </tbody>
        </v-simple-table>
        <div class="caption text-center">Comparaison de deux vecteurs \( \overrightarrow{a} \) et \( \overrightarrow{b} \)</div>

        <p class="mt-5">Relation de Chasles</p>
        \[ \overrightarrow{AB} \underbrace{- \overrightarrow{CB}}_{=+\overrightarrow{BC}} = \overrightarrow{A\textcolor{red}{B}} + \overrightarrow{\textcolor{red}{B}C} = \overrightarrow{AC}\]
    </div>
</template>
<script>
    export default {
        name: 'Gv01Vecteurs',
    }
</script>

<style scoped>
    table > tbody > tr > :not(:first-child), table > thead > tr > :not(:first-child) {
        text-align: center;
    }
</style>