<template>
    <div class="home">

        <v-sheet color="light-green" height="50vh" tile>
            <v-row class="d-flex align-center" justify="space-around" style="height: 100% !important;">
                <div class="display-3">
                    Gymnase<br>
                    <div class="overline text-right">Powered by Scolcours
                    </div>
                </div>
            </v-row>
        </v-sheet>

        <v-container fluid id="tous-les-themes">
            <v-row class="align-start" justify="space-around">
                <v-col color="blue lighten-4" cols="12" lg="4" md="6">
                    <div class="title">Ecole de maturité</div>
                    <div class="subtitle-1">1<sup>ère</sup> année</div>
                    <v-simple-table>
                        <tbody>
                        <tr :key="idx" v-for="(tr, idx) of maturite">
                            <td>{{tr.name}}</td>
                            <td>
                                <v-btn :to="tr.path" append block color="primary" outlined>
                                    <v-icon>mdi-arrow-right</v-icon>
                                </v-btn>
                            </td>
                        </tr>
                        </tbody>
                    </v-simple-table>
                </v-col>

                <v-col color="deep-purple lighten-4" cols="12" lg="4" md="6">
                    <div class="title">Ecole de culture générale</div>
                    <div class="subtitle-1">1<sup>ère</sup> année</div>
                    <v-simple-table>
                        <tbody>
                        <tr :key="idx" v-for="(tr, idx) of ecg_filter(1)">
                            <td>{{tr.name}}</td>
                            <td>
                                <v-btn :to="tr.path" append block color="primary" outlined>
                                    <v-icon>mdi-arrow-right</v-icon>
                                </v-btn>
                            </td>
                        </tr>
                        </tbody>
                    </v-simple-table>

                    <div class="subtitle-1 mt-10">2<sup>ème</sup> année</div>
                    <v-simple-table>
                        <tbody>
                        <tr :key="idx" v-for="(tr, idx) of ecg_filter(2)">
                            <td>{{tr.name}}</td>
                            <td>
                                <v-btn :to="tr.path" append block color="primary" outlined>
                                    <v-icon>mdi-arrow-right</v-icon>
                                </v-btn>
                            </td>
                        </tr>
                        </tbody>
                    </v-simple-table>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
    // @ is an alias to /src
    export default {
        name: 'home',
        layout: 'layout-minimal',
        data: function () {
            return {
                maturite: [
                    {name: 'Géométrie vectorielle', path: 'gv', annee: 1},
                    {name: 'Trigonométrie', path: 'trigo', annee: 1},
                ],
                ecg: [
                    {name: 'Equations du 2ème degré', path: 'equ2', annee: 1},
                    {name: 'Trigonométrie dans le triangle rectangle', path: 'trigonometrie/2-rectangle', annee: 1},
                    {name: 'Statistiques descriptives', path: 'stats', annee: 2},
                    {name: 'Trigonométrie dans le triangle quelconque', path: 'trigonometrie/4-quelconque', annee: 2},
                ],
                carousel: [
                    {
                        name: "Gymnase<div class='overline mt-1 text-right'>Powered by Scolcours</div>",
                        buttons: [
                            {name: "Maturité", link: "M"},
                            {name: "Ecole de culture générale", link: "ECG"}
                        ],
                        color: "light-green"
                    },
                    {
                        name: "Outils",
                        buttons: [
                            {name: "Boîte à outils", link: "outils"}
                        ],
                        color: "teal"
                    }
                ]
            }
        },
        methods: {
            ecg_filter(annee) {
                return this.ecg.filter(e => e.annee === annee);
            }
        }
    }
</script>

<style scoped>
    #tous-les-themes table tbody tr td:last-child {
        width: 100px;
    }
</style>
