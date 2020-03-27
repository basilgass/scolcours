<template>
    <div class="chart-distribution-container">
        <div><slot></slot></div>
        <v-simple-table dense>
            <thead>
            <tr><!--@mouseenter="editMode=true" @mouseleave="editMode=false"-->
                <th class="text-left">Nom</th>
                <th class="text-left">Effectifs</th>
                <th class="text-left">Fréquence<span v-if="percent"> [%]</span></th>
                <th v-if="stack">Cumulée<span v-if="percent"> [%]</span><br>croissante</th>
                <th v-if="stackDecrease">Cumulée<span v-if="percent"> [%]</span><br>décroissante</th>
                <th v-if="showColors || editMode">Couleur</th>
                <th v-if="editMode"><v-icon>mdi-pencil</v-icon></th>
            </tr>
            </thead>
            <tbody>
            <tr class="chart-distribution-data" v-for="(item, index) in chartData" :key="item.nom">
                <td>{{ labelClass(item.nom) }}</td>
                <td> {{item.effectif}}</td>
                <td>{{ tableFrequence[item.nom] }}</td>
                <td v-if="stack">{{ tableCumulee.increase[item.nom] }}</td>
                <td v-if="stackDecrease">{{tableCumulee.decrease[item.nom]}}</td>
                <td v-if="showColors || editMode"><v-btn x-small block :color="item.couleur?item.couleur:colors[index]"></v-btn></td>
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
                <th v-if="stack"></th>
                <th v-if="stackDecrease"></th>
                <td v-if="showColors || editMode"></td>
                <td v-if="editMode"></td>
            </tr>
            </tbody>
        </v-simple-table>
    </div>
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
                ],
            }
        },
        props: {
            chartData: {type: Array, default: function(){return [];}},
            editMode: {type: Boolean, default: function(){return true;}},
            showColors: {type: Boolean, default: true},
            stack: {type: Boolean, default: false},
            stackDecrease: {type: Boolean, default: false},
            labelAsClass: {type: Boolean, default: false},
            deltaFrequencies: {type: Boolean, default: false},
            percent: {type: Boolean, default: false},
            fixed: {type: Number, default: 2},
            normalize: {type: Boolean, default: false}
        },
        computed: {
            tableFrequence: function() {
                if(this.chartData===undefined || this.chartData.length===0){return {};}
                const total = this.chartData.map(v => v.effectif).reduce((sum, el)=>sum+el),
                    percent = this.percent,
                    fixed=this.fixed;
                let freq = {};
                this.chartData.forEach(function(value){
                    freq[value.nom] = (value.effectif/total*(percent?100:1)).toFixed(fixed);
                });

                return freq;
            },
            tableCumulee: function(){
                let cumul = {},
                    decumul = {},
                    sum1 = 0,
                    sum2 = this.percent?100:1,
                    df = this.deltaFrequencies,
                    percent = this.percent,
                    fixed = this.fixed;

                const F = this.tableFrequence;

                this.chartData.forEach(function(value){
                    const v1 = parseFloat(F[value.nom]);
                    cumul[value.nom] = (sum1 + v1).toFixed(fixed);

                    decumul[value.nom] = df?((percent?100:1.0) - (sum1 + v1)).toFixed(fixed):(sum2).toFixed(fixed);

                    sum1 += v1;
                    sum2 -= v1;
                });

                return {
                    increase: cumul,
                    decrease: decumul
                };
            },
            tableTotaux: function() {
                if(this.tableFrequence===undefined || this.tableFrequence.length===0){return 1;}
                if(this.chartData===undefined || this.chartData.length===0){return 1;}
                return {
                    effectifs: this.chartData.map(v => v.effectif).reduce((sum, el)=>sum+el),
                    frequences: Object.values(this.tableFrequence).reduce((sum, el)=>sum+parseFloat(el),0).toFixed(this.percent?0:2),
                }
            },

        },
        methods: {
            labelClass: function(label){
                if(this.labelAsClass){
                    let sp = label.split('-');
                    if(sp.length!==2){
                        return `[${label}]`;
                    }else{
                        return `[${sp[0]};${sp[1]}]`
                    }
                }else{
                    return label
                }
            },
            deleteTableRow: function(idx){
                this.chartData.splice(idx, 1);
                this.updateChartData();
            },
            addTableRow: function(){
                this.chartData.push({
                    nom: this.nouveauNom,
                    effectif: +this.nouvelEffectif,
                    couleur: this.nouvelCouleur
                });

                this.nouveauNom = '';
                this.nouvelEffectif = 10;
                this.updateChartData();
            },
            updateChartData: function(){
                const output = {
                    labels: this.chartData.map(x=>this.labelClass(x.nom)),
                    effectifs: Object.values(this.chartData).map(x=>x.effectif),
                    frequences: Object.values(this.tableFrequence).map(x=>parseFloat(x)),
                    croissantes: Object.values(this.tableCumulee.increase).map(x=>parseFloat(x)),
                    decroissantes: Object.values(this.tableCumulee.decrease).map(x=>parseFloat(x))
                };
                if(this.normalize){
                    output.labels.push('');
                    output.labels.unshift('');
                    output.effectifs.push('');
                    output.effectifs.unshift('');
                    output.frequences.push('');
                    output.frequences.unshift('');
                    output.croissantes.push('');
                    output.croissantes.unshift('');
                    output.decroissantes.push('');
                    output.decroissantes.unshift('');
                }
                this.$emit('frequences', output);
            }
        },
        watch: {
            tableFrequence: function(){
                this.updateChartData();
            },
            tableCumulee: function(){
                this.updateChartData();
            },
        },
        created() {
            this.updateChartData();
        }
    }
</script>
