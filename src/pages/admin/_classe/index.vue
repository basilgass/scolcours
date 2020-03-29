<template>
    <v-container>
        <h1>Admin</h1>

        <v-simple-table dense height="90vh">
        <template v-slot:default>
            <thead>
            <tr>
                <th v-for="(item, id) in headers" :key="id">
                    {{item.text}}
                </th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in exercices" :key="item.nom">
                    <td v-for="key in headers" :key="key.value">
                        <span v-if="key.value==='nom' || key.value==='modification'">{{item[key.value]}}</span>
                        <v-icon v-else-if="item[key.value]==='0'" color="red">mdi-alert-outline</v-icon>
                        <v-icon v-else-if="item[key.value]==='1'" color="orange">mdi-help-circle-outline</v-icon>
                        <v-icon v-else-if="item[key.value]==='2'" color="green">mdi-check</v-icon>
                    </td>
                </tr>
            </tbody>
        </template>
        </v-simple-table>
    </v-container>
</template>

<script>
    import axios from "axios";

    export default {
        name: "index",
        layout: 'fullwidth',
        data: function(){
            return {
                exercices: [],
                headers: []
            }
        },
        methods: {
            isStatus: function(slot){
                console.log( slot );
                return true;
            },
            updateTable: function(data){
                /*if(data===undefined){
                    // Use cdefault data for local testing.
                    data = JSON.parse('[{"nom":"Basil Gass","modification":"2020-03-22 14:57:29","status":"1;2;0;0;0;0;0;1;1;2;2;2;0;0;0;0;0;0;0","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18;4.1;4.2;4.3;4.5;4.6"},{"nom":"Gabriel Agosta","modification":"2020-03-24 09:26:06","status":"2;2;2;2;2;2;2;2;2;2;2;2;2;2","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Chloe Buchler","modification":"2020-03-24 10:27:53","status":"2;2;2;2;2;2;2;2;2;0;2;1;0;0","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Lara Caria","modification":"2020-03-24 09:22:54","status":"2;2;2;2;2;2;2;2;0;0;1;0;0;0;0;0;0;0;0","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18;4.1;4.2;4.3;4.5;4.6"},{"nom":"Alessio Cecchini","modification":"2020-03-24 11:12:22","status":"2;2;2;2;2;2;2;2;2;2;2;2;1;0","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Leandro Cerqueira","modification":"2020-03-24 10:56:01","status":"2;2;2;2;2;2;0;0;0;0;0;0;0;0","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Mederic Depury","modification":"2020-03-23 17:02:42","status":"2;2;2;2;2;2;2;2;2;2;2;2;2;2","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Coralie Duruz","modification":"2020-03-27 10:30:23","status":"2;2;2;2;2;2;2;2;2;2;2;2;1;2","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Rafael Esteves","modification":"2020-03-26 16:43:08","status":"0;0;0;0;0;0;0;0;0;0;0;0;0;0","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Stan Hirsbrunner","modification":"2020-03-24 10:40:17","status":"2;2;2;2;2;2;2;2;0;0;0;0;0;0","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Soraya Hurtado","modification":"2020-03-24 14:05:26","status":"2;2;2;2;2;2;2;2;2;2;0;0;0;0","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Dara Husser","modification":"2020-03-24 12:12:11","status":"2;2;2;2;2;2;2;2;2;2;2;2;1;0","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Matteo Jotterand","modification":"2020-03-27 11:20:35","status":"2;2;2;2;1;0;0;0;0;0;0;0;0;0","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Victoria Landert","modification":"2020-03-24 09:39:16","status":"2;2;2;2;2;2;2;2;2;2;2;2;2;2","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Marine Maillefer","modification":"2020-03-24 10:56:37","status":"2;2;2;2;2;2;2;2;2;2;2;2;2;2","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Clemence Michoud","modification":"2020-03-24 09:37:15","status":"2;2;2;2;2;2;2;2;2;2;2;1;0;0","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Sofia Misita","modification":"2020-03-24 09:23:00","status":"2;2;2;2;2;2;2;2;2;2;1;0;0;0","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Dorian Mollard","modification":"2020-03-24 11:02:04","status":"2;2;2;2;2;2;2;2;2;2;2;2;2;2","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Sophie Rabiev","modification":"2020-03-24 09:25:40","status":"2;2;2;2;2;2;2;2;2;0;0;0;0;0","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Joana Teixeira","modification":"2020-03-24 11:02:07","status":"2;2;2;2;2;2;2;2;2;2;0;0;0;0","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"},{"nom":"Julia Wieczorek","modification":"2020-03-24 14:59:38","status":"0;2;2;2;2;2;2;2;0;0;0;0;0;0","exercices":"1;3;4;5;7;8;9 (1 et 3);10;14;16;11;12;15;18"}]');
                }*/

                // On réarrange les données pour la table.
                let statusExercices = [], etudiant, headers, headersExercices = [];

                headers = [
                    {
                        text: 'Nom',
                        value: 'nom'
                    },
                    {
                        text: 'Modification',
                        value: 'modification'
                    }
                ];

                //console.log(JSON.stringify(response.data.fetch));
                for(let row of data){
                    etudiant = {
                        nom: row.nom,
                        modification: row.modification
                    };
                    let exercices = row.exercices===null?[]:row.exercices.split(';'),
                        status = row.status===null?[]:row.status.split(';');

                    for(let i=0; i<exercices.length; i++){
                        etudiant[exercices[i]] = status[i];

                        // Mise à jour du header.
                        if(!headersExercices.includes(exercices[i])){
                            headersExercices.push(exercices[i]);
                            headers.push({
                                text: exercices[i],
                                value: exercices[i]
                            })
                        }

                    }
                    statusExercices.push(etudiant);
                }


                this.headers = headers;
                this.exercices = statusExercices;
            },
            resumeClasse: function () {
                let that = this, classe = this.$route.params.classe;
                axios({
                    method: 'post',
                    url: '/crud/post.php',
                    data: {
                        type: 'admin-feuille-de-route',
                        //chapitre: '3 - Géométrie vectorielle',
                        classe: classe
                    }
                }).then(response => {
                    console.log(response);
                    that.updateTable(response.data.fetch);
                }).catch(e => {
                    console.log('Error dans le CRUD');
                    console.log(e);
                    that.updateTable();
                });
            },
        },
        mounted() {
            //this.updateTable();
            this.resumeClasse();
        }
    }
</script>

<style scoped>
</style>