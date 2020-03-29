<template>
    <v-container>
        <v-data-table
                dense
                fixed-header
                :headers="headers"
                :items="exercices"
                :items-per-page="50"
                class="elevation-2"
                :sort-by="['delai']"
                :sort-desc="[true]"
                multi-sort
        >
            <template v-slot:item.status="{ item }">
                <v-chip-group column :value="+item.status">
                    <v-chip
                            active-class="red darken-3"
                            outlined
                            @click="marquerStatus(item.id, 0)"
                            filter=true
                            filter-icon="mdi-alert-outline"
                    >
                        <span v-if="$vuetify.breakpoint.mdAndUp" class="ml-2"> Pas commencé</span>
                    </v-chip>
                    <v-chip
                            active-class="orange accent-3"
                            outlined
                            @click="marquerStatus(item.id, 1)"
                            filter=true
                            filter-icon="mdi-help-circle-outline"
                    >
                        <span v-if="$vuetify.breakpoint.mdAndUp" class="ml-2"> En cours</span>
                    </v-chip>
                    <v-chip
                            active-class="success"
                            outlined
                            @click="marquerStatus(item.id, 2)"
                            filter=true
                            filter-icon="mdi-check"
                    >
                        <span v-if="$vuetify.breakpoint.mdAndUp" class="ml-2"> Terminé</span>
                    </v-chip>
                </v-chip-group>
            </template>
        </v-data-table>
    </v-container>
</template>
<script>
    import axios from "axios";

    export default {
        name: 'ScFeuilleDeRoute',
        data: function() {
            return {
                headers: [
                    {
                        text: 'Chapitre',
                        align: 'start',
                        sortable: true,
                        value: 'chapitre'
                    },
                    {
                        text: 'Exercice',
                        align: 'start',
                        sortable: true,
                        value: 'exercice'
                    },
                    {
                        text: 'Status',
                        align: 'start',
                        sortable: false,
                        value: 'status'
                    },
                    {
                        text: 'Délai',
                        align: 'start',
                        sortable: true,
                        value: 'delai'
                    }
                ],
                selection: 1,
                exercices: [],
            }
        },
        mounted() {
            this.getExercices();
        },
        methods: {
            chipStatus: function(status){
                if(+status===0){
                    return null;
                }else {
                    return +status-1;
                }
            },
            getExercices: function(){
                let that = this;
                axios({
                    method: 'post',
                    url: './crud/post.php',
                    data: {
                        type: 'feuille-de-route',
                        username: localStorage.getItem('ScolcoursGymnaseUser')
                    }
                }).then(response => {
                    //console.log(response.data);
                    that.exercices = response.data.exercices;
                }).catch(e => {
                    console.log(e);
                    that.exercices = [
                        {id: 1, chapitre: '3', exercice: '3.4', status: 1, delai: '2020-03-20'},
                        {id: 2, chapitre: '3', exercice: '3.4', status: 1, delai: '2020-03-20'},
                        {id: 3, chapitre: '3', exercice: '3.4', status: 1, delai: '2020-03-20'},
                        {id: 4, chapitre: '3', exercice: '3.4', status: 1, delai: '2020-03-20'},
                        {id: 5, chapitre: '3', exercice: '3.4', status: 1, delai: '2020-03-20'},
                    ];
                });
            },
            marquerEnCours: function(id){
                this.marquerStatus(id, 1);
            },
            marquerTerminer: function(id){
                this.marquerStatus(id, 2);
            },
            marquerStatus: function(id, marque){
                console.log(id, marque);
                axios({
                    method: 'post',
                    url: './crud/post.php',
                    data: {
                        type: 'feuille-de-route-status',
                        id: id,
                        status: marque
                    }
                }).then(response => {
                    console.log(response.data);
                }).catch(e => {
                    console.log(e);
                });
            }
        }
    }
</script>