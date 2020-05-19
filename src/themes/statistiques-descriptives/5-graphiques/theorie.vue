<template>
    <section>
        <sc-titre-section>Autres graphiques</sc-titre-section>

        <v-row justify="center">

            <v-col cols="12" class="text-center">
                <sc-titre-partie>Histogramme empilé</sc-titre-partie>
            </v-col>

            <v-sheet width="450px">
                <div class="subtitle-1 mt-10 text-center">Tableau de distribution</div>
                <v-simple-table dense>
                    <thead>
                    <tr>
                        <th></th>
                        <th>2017</th>
                        <th>2018</th>
                        <th>2019</th>
                        <th>Couleur</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Primaire</td>
                        <td>30'000</td>
                        <td>20'000</td>
                        <td>50'000</td>
                        <td>
                            <v-btn :color=this.colors[0] block x-small></v-btn>
                        </td>
                    </tr>
                    <tr>
                        <td>Secondaire</td>
                        <td>14'000</td>
                        <td>25'000</td>
                        <td>12'000</td>
                        <td>
                            <v-btn :color=this.colors[1] block x-small></v-btn>
                        </td>
                    </tr>
                    <tr>
                        <td>Tertiaire</td>
                        <td>12'000</td>
                        <td>8'000</td>
                        <td>11'000</td>
                        <td>
                            <v-btn :color=this.colors[2] block x-small></v-btn>
                        </td>
                    </tr>

                    </tbody>
                    <tfoot>
                    <tr class="font-weight-medium">
                        <td>Totaux</td>
                        <td>56'000</td>
                        <td>53'000</td>
                        <td>73'000</td>
                        <td></td>
                    </tr>
                    </tfoot>
                </v-simple-table>
            </v-sheet>

            <v-col cols="12">
                <sc-chart
                        :chart-data="[[30000, 20000, 50000],[14000,25000,12000],[12000,8000,11000]]"
                        :chart-labels="['Primaire', 'Secondaire', 'Tertiaire']"
                        :max-value="75000"
                        :min-value="0"
                        :stacked="true"
                        chart-type="bar"
                ></sc-chart>
            </v-col>


            <v-col cols="12" class="text-center">
                <sc-titre-partie>Pyramide des âges (WIP)</sc-titre-partie>
            </v-col>
            <v-col cols="6" md="4">
                <sc-chart
                        chart-type="horizontalBar"
                        :max-value="0"
                        :min-value="-100"
                        :pyramid="true"
                        :chart-data="[[-8,-12,-20,-40,-52,-60,-64,-58,-60]]"
                        :chart-labels="['[0-10]','[11-20]','[21-30]','[31-40]','[41-50]','[51-60]','[61-70]','[71-80]','80+']"
                        :chart-names="['Hommes']"
                        :chart-colors="['blue']"
                        y-axis-pos="right"
                ></sc-chart>
            </v-col>
            <v-col cols="6" md="4">
                <sc-chart
                        chart-type="horizontalBar"
                        :min-value="0"
                        :max-value="100"
                        :pyramid="true"
                        :chart-data="[[12,16,23,43,57,62,67,60,63]]"
                        :chart-labels="['[0-10]','[11-20]','[21-30]','[31-40]','[41-50]','[51-60]','[61-70]','[71-80]','80+']"
                        :chart-names="['Femmes']"
                        :chart-colors="['red']"
                ></sc-chart>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols="12" class="text-center">
                <sc-titre-partie>Radar</sc-titre-partie>
            </v-col>
            <v-col cols="12" md="8">
                <sc-chart
                        chart-type="radar"
                        :max-value="20"
                        :chart-data="[[16, 9, 12, 4, 3], [10, 6, 4, 9, 12]]"
                        :chart-labels="['Mathématiques', 'Biologie', 'Chimie', 'Français', 'Allemand']"
                        :chart-names="['Scientifiques', 'Litéraires']"
                        :chart-colors="['rgba(255, 99, 132,0.25)', 'rgba(153, 102, 255,0.25)', 'rgba(8, 192, 61, 0.25)']"
                        :chart-border-colors="['rgba(255, 99, 132,0.75)', 'rgba(153, 102, 255,0.75)', 'rgba(8, 192, 61, 0.75)']"
                        y-axis-pos="right"
                ></sc-chart>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols="12">
                <sc-titre-partie>Création d'un graphique radar</sc-titre-partie>
                <div class="caption">L'office du tourisme désire déterminer l'évolution des nuitées dans une ville au cours des saisons.</div>
                <ul>
                    <li>Identifier la variable statistique que l'on veut mettre en évidence.
                        <p class="caption ml-5">Les saisons</p></li>
                    <li>
                        Préparer les effectifs en fonction des modalités.
                        <p class="caption ml-5">Si les données sont sur plusieurs années, on fait la moyenne des effectifs par mois, puis en regroupant par mois:</p>
                        <p class="caption ml-10">
                            été: juin, juillet, août<br/>
                            automne: septembre, octobre, novembre<br/>
                            hiver: décembre, janvier, février<br/>
                            printemps: mars, avril, mai
                        </p>

                    </li>
                    <li>Tracer les branches du radar de manière régulière:
                        <ul>
                            <li>Le nombre de branches correspond aux modalités de la variable statistique
                                <p class="caption ml-5">4 branches: été, automne, hiver, printemps</p></li>
                            <li>Choisir une échelle pour les branches, en fonction des valeurs données.<br/>
                                Il est souvent préférable de travailler avec des fréquences (en pourcent par exemple)
                                <p class="caption ml-5">En travaillant en pourcent, on peut choisir une unité = 5%</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </v-col>


            <v-sheet width="450px">
                <div class="subtitle-1 mt-10 text-center">Tableau de distribution et fréquences</div>
                <v-simple-table dense>
                    <thead>
                    <tr>
                        <th>Saison</th>
                        <th>Nuitées</th>
                        <th>Fréquence [%]</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Eté</td>
                        <td>52'000</td>
                        <td>26%</td>
                    </tr>
                    <tr>
                        <td>Automne</td>
                        <td>30'000</td>
                        <td>15%</td>
                    </tr>
                    <tr>
                        <td>Hiver</td>
                        <td>76'000</td>
                        <td>38%</td>
                    </tr>
                    <tr>
                        <td>Printemps</td>
                        <td>42'000</td>
                        <td>21%</td>
                    </tr>

                    </tbody>
                    <tfoot>
                    <tr class="font-weight-medium">
                        <td>Totaux</td>
                        <td>200'000</td>
                        <td>100%</td>
                    </tr>
                    </tfoot>
                </v-simple-table>
            </v-sheet>

            <v-col cols="12" class="mt-10">
                <h3 class="subtitle-1 text-center">Graphique</h3>
                <sc-chart
                        :chart-border-colors="['rgba(255, 99, 132,0.75)', 'rgba(153, 102, 255,0.75)', 'rgba(8, 192, 61, 0.75)']"
                        :chart-colors="['rgba(255, 99, 132,0.25)', 'rgba(153, 102, 255,0.25)', 'rgba(8, 192, 61, 0.25)']"
                        :chart-data="[[26, 15, 38, 21]]"
                        :chart-labels="['Eté', 'Automne', 'Hiver', 'Printemps']"
                        :chart-names="['Nuitées, moyenne 1998-2003']"
                        :max-value="40"
                        :min-value="0"
                        chart-type="radar"
                        y-axis-pos="right"
                ></sc-chart>
            </v-col>
        </v-row>
    </section>

</template>


<script>
    import {Pi} from "../../../../public/js/pi"
    import ScTitreSection from "../../../components/Titles/ScTitre1Section";
    import ScTitrePartie from "../../../components/Titles/ScTitre2Partie";
    import ScChart from "../../../components/ScChart";

    export default {
        name: "statistiqueAutresGraphiques",
        components: {ScChart, ScTitrePartie, ScTitreSection},
        props: {
            editMode: {type: Boolean, default: false},
            colors: {
                type: Array, default: function () {
                    return [
                        'rgba(255, 99, 132,0.75)',
                        'rgba(255, 159, 64,0.75)',
                        'rgba(255, 205, 86,0.75)',
                        'rgba(75, 192, 192,0.75)',
                        'rgba(54, 162, 235,0.75)',
                        'rgba(8, 192, 61, 0.75)',
                        'rgba(153, 102, 255,0.75)',
                        'rgba(201, 203, 207,0.75)'
                    ]
                }
            }
        },
        data: function () {
            return {
                distributionContinue: [
                    {nom: '0-10', effectif: 40, couleur: this.colors[0]},
                    {nom: '11-20', effectif: 80, couleur: this.colors[1]},
                    {nom: '21-30', effectif: 110, couleur: this.colors[2]},
                    {nom: '31-40', effectif: 140, couleur: this.colors[3]},
                    {nom: '41-50', effectif: 150, couleur: this.colors[4]},
                    {nom: '51-60', effectif: 130, couleur: this.colors[5]},
                    {nom: '61-70', effectif: 45, couleur: this.colors[6]},
                    {nom: '71-80', effectif: 35, couleur: this.colors[7]},
                ],
                distributionContinueGraphique: [],
                frequencesCalculees: {},
                dataGraphiques: {}
            };
        },
        computed: {
            clabel: function () {
                let d = [];
                this.distributionContinue.forEach(value => d.push(value.nom));
                return d;
            },
            ccolor: function () {
                let d = [];
                this.distributionContinue.forEach(value => d.push(value.couleur));
                return d;
            }
        },
        methods: {
            updateGraphiques: function(e){
                this.dataGraphiques = e;
            },
            updateFrequences: function(e){
                this.frequencesCalculees = e;
            }
        },
        mounted() {

            this.distributionContinueGraphique = [{nom: '0', effectif: 0, couleur: 'transparent'}];
            for(let distrib of this.distributionContinue){
                distrib.effectif = Pi.Numeric.randomInt(distrib.effectif-10, distrib.effectif+10);

                this.distributionContinueGraphique.push({
                    nom: distrib.nom.split('-')[1],
                    effectif: distrib.effectif,
                    couleur: distrib.couleur
                });

            }
        }
    }
</script>

