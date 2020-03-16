<template>
    <v-simple-table>
            <thead>
            <tr><!--@mouseenter="editMode=true" @mouseleave="editMode=false"-->
                <th class="text-left">Nom</th>
                <th class="text-left">Effectifs</th>
                <th class="text-left">Fréquence</th>
                <th>Couleur</th>
                <th v-if="editMode"><v-icon>mdi-pencil</v-icon></th>
            </tr>
            </thead>
            <tbody>
            <tr class="chart-distribution-data" v-for="(item, index) in chartData" :key="item.nom">
                <td>{{ item.nom }}</td>
                <td> {{item.effectif}}</td>
                <td>{{ tableFrequence[item.nom] }}</td>
                <td><v-btn x-small block :color="item.couleur?item.couleur:colors[index]"></v-btn></td>
                <td v-if="editMode"><v-icon @click="deleteTableRow(index)">mdi-delete</v-icon></td>
            </tr>

            <tr v-if="editMode">
                <td>
                    <v-text-field v-model="nouveauNom" dense placeholder="Nouvelle entrée"></v-text-field>
                </td>
                <td>
                    <v-text-field v-model="nouvelEffectif" dense value="10"></v-text-field>
                </td>
                <td></td>
                <td>
                    <v-menu offset-y
                            :close-on-content-click="false">
                        <template v-slot:activator="{ on }">
                            <v-btn
                                    :color=nouvelCouleur
                                    x-small
                                    block
                                    v-on="on"
                            >
                            </v-btn>
                        </template>
                        <v-color-picker v-model="nouvelCouleur" :swatches="swatches" show-swatches></v-color-picker>
                    </v-menu>

                <td><v-btn @click="addTableRow()">Ajouter</v-btn></td>
            </tr>

            <tr class="font-weight-bold">
                <td>Totaux</td>
                <td>{{ tableTotaux.effectifs }}</td>
                <td>{{ tableTotaux.frequences }}</td>
                <td></td>
                <td v-if="editMode"></td>
            </tr>
            </tbody>
    </v-simple-table>
</template>

<script>
    export default {
        name: 'ScChartDistribution',
        data: function(){
            return {
                nouveauNom: '',
                nouvelEffectif: 10,
                nouvelCouleur: 'red',
                swatches: [
                    ['#FF6384', '#FF9F40', '#FFCD56'],
                    ['#4BC0C0', '#6dc096','#36A2EB'],
                    ['#9966FF', '#C9CBCF', '#ffffff']
                ]
            }
        },
        props: {
            chartData: {type: Array, default: function(){return [];}},
            editMode: {type: Boolean, default: function(){return true;}},
        },
        computed: {
            tableFrequence: function() {
                const total = this.chartData.map(v => v.effectif).reduce((sum, el)=>sum+el);
                let freq = {};
                this.chartData.forEach(function(value){
                    freq[value.nom] = (value.effectif/total).toFixed(2);
                });
                return freq;
            },
            tableTotaux: function() {
                return {
                    effectifs: this.chartData.map(v => v.effectif).reduce((sum, el)=>sum+el),
                    frequences: Object.values(this.tableFrequence).reduce((sum, el)=>sum+parseFloat(el),0).toFixed(2),
                }
            },

        },
        methods: {
            deleteTableRow: function(idx){
                this.chartData.splice(idx, 1);
            },
            addTableRow: function(){
                this.chartData.push({
                    nom: this.nouveauNom,
                    effectif: +this.nouvelEffectif,
                    couleur: this.nouvelCouleur
                });

                this.nouveauNom = '';
                this.nouvelEffectif = 10;
            }
        }
    }
</script>
