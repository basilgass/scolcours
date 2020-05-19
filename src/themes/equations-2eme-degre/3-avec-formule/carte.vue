<template>
    <div>
        \[ Ax^2 + Bx + C = 0 \]

        <div class="subtitle-1">Discriminant</div>
        \[
        \Delta = B^2-4\cdot A\cdot C
        \]

        <div class="subtitle-1">Solutions</div>
        <v-simple-table dense>
            <caption class="caption text-center">Lien entre \( \Delta \) et les solutions</caption>
            <thead>
            <tr>
                <th>\( \Delta = B^2-4AC \)</th>
                <th text="Nombre de solution(s)">Nb. sol</th>
                <th class="text-center">Solution(s)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>\( \Delta>0 \)</td>
                <td>2</td>
                <td>\[
                    x_{1,2}=\frac{-B\pm\sqrt{\Delta}}{2\cdot A}
                    \]
                </td>
            </tr>
            <tr>
                <td>\(\Delta=0\)</td>
                <td>1</td>
                <td>
                    \[
                    x = \frac{-B}{2\cdot A}
                    \]
                </td>
            </tr>
            <tr>
                <td>\(\Delta &lt; 0\)</td>
                <td>0</td>
                <td>
                    \[
                    \varnothing
                    \]
                </td>
            </tr>
            </tbody>
        </v-simple-table>

    </div>
</template>

<script>
    export default {
        name: "carte"
    }
</script>

<style scoped>
    table > thead, tbody > tr > td:not(:first-child), th:not(:first-child) {
        text-align: center;
    }

    table > caption {
        caption-side: bottom;
    }
</style>