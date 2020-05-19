<template>
    <v-container>
        <sc-titre-partie>Résolution de triangle</sc-titre-partie>
        <v-row justify="center">
            <v-col cols="12" lg="4" md="6">
                <v-text-field prefix="\(\alpha=\)"></v-text-field>
                <v-text-field prefix="\(\beta=\)"></v-text-field>
                <v-text-field prefix="\(\gamma=\)"></v-text-field>
            </v-col>
            <v-col cols="12" lg="4" md="6">
                <v-text-field prefix="\(a=\)"></v-text-field>
                <v-text-field prefix="\(b=\)"></v-text-field>
                <v-text-field prefix="\(c=\)"></v-text-field>
            </v-col>
        </v-row>

        <sc-titre-sous-titre>Formules à disposition</sc-titre-sous-titre>
        <v-tabs center-active centered show-arrows v-model="theoreme">
            <v-tab>Théorème du sinus</v-tab>
            <v-tab>Théorème du cosinus</v-tab>
            <v-tab>Théorème de l'aire</v-tab>
        </v-tabs>
        <v-tabs-items v-model="theoreme">
            <v-tab-item>
                <v-row justify="space-around">
                    <v-col class="caption font-weight-medium text-center" cols="12">Sélectionner les morceaux de la formule</v-col>
                </v-row>
                <v-row justify="space-around">
                    <table>
                        <tr>
                            <td>
                                <v-hover v-slot:default="{ hover }">
                                    <v-sheet :color="sinAselected?'light-green lighten-4':''"
                                             :elevation="hover?3:1"
                                             @click="sinAselected=!sinAselected"
                                             width="fit-content"
                                    >
                                        <v-container>
                                            <k-math inline>\dfrac{a}{\sin\alpha}</k-math>
                                        </v-container>
                                    </v-sheet>
                                </v-hover>
                            </td>
                            <td>
                                <k-math inline>=</k-math>
                            </td>
                            <td>
                                <v-hover v-slot:default="{ hover }">
                                    <v-sheet :color="sinBselected?'light-green lighten-4':''"
                                             :elevation="hover?3:1"
                                             @click="sinBselected=!sinBselected"
                                             width="fit-content"
                                    >
                                        <v-container>
                                            <k-math>\dfrac{b}{\sin\beta}</k-math>
                                        </v-container>
                                    </v-sheet>
                                </v-hover>
                            </td>
                            <td>
                                <k-math inline>=</k-math>
                            </td>
                            <td>
                                <v-hover v-slot:default="{ hover }">
                                    <v-sheet :color="sinCselected?'light-green lighten-4':''"
                                             :elevation="hover?3:1"
                                             @click="sinCselected=!sinCselected"
                                             width="fit-content"
                                    >
                                        <v-container>
                                            <k-math>\dfrac{c}{\sin\gamma}</k-math>
                                        </v-container>
                                    </v-sheet>
                                </v-hover>
                            </td>
                        </tr>
                    </table>
                </v-row>
            </v-tab-item>
            <v-tab-item>
                <v-row justify="space-around">
                    <v-col class="caption font-weight-medium text-center" cols="12">Sélectionner la formule à utiliser</v-col>
                    <v-col :key="'cosinus-' + a + n" v-for="(a, n) of cotes">
                        <v-hover v-slot:default="{ hover }">
                            <v-sheet :elevation="hover ? 3 : 1">
                                <v-container @click="alert()" class="my-2">
                                    <k-math>{{afficherCosinus(a)}}</k-math>
                                </v-container>
                            </v-sheet>
                        </v-hover>
                    </v-col>
                    <v-col :key="'cosinusMod-' + a + n" v-for="(a, n) of cotes">
                        <v-hover v-slot:default="{ hover }">
                            <v-sheet :elevation="hover ? 3 : 1">
                                <v-container @click="alert()" class="my-2">
                                    <k-math>{{afficherCosinusMod(a)}}</k-math>
                                </v-container>
                            </v-sheet>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-tab-item>
            <v-tab-item>AIRE</v-tab-item>
        </v-tabs-items>

    </v-container>
</template>
<script>
    import ScTitrePartie from "../../../components/Titles/ScTitre2Partie"
    import renderMathInElement from "katex/dist/contrib/auto-render.min";
    import ScTitreSousTitre from "../../../components/Titles/ScTitre3SousTitre";
    import KMath from "../../../components/Pi/k-math";


    export default {
        name: 'sc-trigo-resolution',
        components: {KMath, ScTitreSousTitre, ScTitrePartie},
        data() {
            return {
                sinAselected: false,
                sinBselected: false,
                sinCselected: false,
                theoreme: null,
                cotes: ['a', 'b', 'c'],
                angles: ['\\alpha', '\\beta', '\\gamma'],
                formules: [
                    {
                        nom: 'Théorème du cosinus',
                        formule: `a^2=b^2+c^2-2\\cdot b\\cdot c\\cdot \\cos \\alpha`,
                        reponse: 'a',
                        valeurs: ['b', 'c', '\\alpha']
                    },
                    {
                        nom: 'Théorème du cosinus',
                        formule: `b^2=c^2+a^2-2\\cdot c\\cdot a\\cdot \\cos \\beta`,
                        reponse: 'b',
                        valeurs: ['a', 'c', '\\beta']
                    },
                    {
                        nom: 'Théorème du cosinus',
                        formule: `c^2=a^2+b^2-2\\cdot a\\cdot c\\cdot \\cos \\gamma`,
                        reponse: 'c',
                        valeurs: ['a', 'b', '\\gamma']
                    }
                ]
            }
        },
        methods: {
            alert() {
                alert('clicked')
            },
            afficherCosinus(value) {
                let n = this.cotes.indexOf(value);

                if (n === -1) {
                    return '';
                }
                let b = this.cotes[(n + 1) % 3],
                    c = this.cotes[(n + 2) % 3];
                return `${value}^2=${b}^2+${c}^2-2\\cdot ${b}\\cdot ${c}\\cdot \\cos${this.angles[n]}`;
            },
            afficherCosinusMod(value) {
                let n = this.cotes.indexOf(value);

                if (n === -1) {
                    return '';
                }
                let b = this.cotes[(n + 1) % 3],
                    c = this.cotes[(n + 2) % 3];
                return `\\cos${this.angles[n]}=\\frac{${b}^2+${c}^2-${value}^2}{2\\cdot ${b}\\cdot ${c}}`;
            },
            afficherSinus(value, k = 1) {
                let n = this.cotes.indexOf(value);

                if (n === -1) {
                    return '';
                }
                return `\\frac{${value}}{\\sin${this.angles[n]}} =
                \\frac{ ${this.cotes[(n + k) % 3]} }{ \\sin${this.angles[(n + k) % 3]} }
                \\implies ${value} = \\frac{ ${this.cotes[(n + k) % 3]}\\cdot \\sin${this.angles[n]} }{ \\sin${this.angles[(n + k) % 3]} }`;
            },
            afficherSinusMod(value, k = 1) {
                let n = this.cotes.indexOf(value);

                if (n === -1) {
                    return '';
                }
                return `\\frac{${value}}{\\sin${this.angles[n]}} =
                \\frac{ ${this.cotes[(n + k) % 3]} }{ \\sin${this.angles[(n + k) % 3]} }
                \\implies \\sin${this.angles[n]} = \\frac{ ${this.cotes[n]}\\cdot \\sin${this.angles[(n + k) % 3]} }{ ${this.cotes[(n + k) % 3]} }`;
            }
        },
        mounted() {
            renderMathInElement(this.$el);
        }
    }
</script>