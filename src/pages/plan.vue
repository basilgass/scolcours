<template>
    <v-container>
        <div v-if="connection">
            {{ user }} est connecté !
            <v-btn @click="deConnection">Déconnection</v-btn>

            <ScFeuilleDeRoute />

        </div>
        <div v-else>
            <v-row justify="center" class="align-content-center" height="100%">
                <v-col cols="12" sm="6" lg="4" xl="3">
                    <v-card elevation="12">
                        <v-form v-model="valid" @submit="validerConnection">
                            <v-card-title class="primary white--text" >Connection</v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-text-field v-model="model.username" label="Nom d'utilisateur" required :rules="nameRules" prepend-icon="mdi-account"></v-text-field>
                                    <v-text-field v-model="model.password" label="Mot de passe" required :rules="passwordRules" type="password" prepend-icon="mdi-key"></v-text-field>

                                    <div v-if="incorrectLogin" class="v-messages__message red--text text-center">
                                        Mot de passe ou nom d'utilisateur erroné !
                                    </div>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn :disabled="!valid" class="ml-auto" color="primary" @click="validerConnection">Connection</v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
    import axios from "axios";
    import ScFeuilleDeRoute from "../components/ScFeuilleDeRoute";

    export default {
        name: "plan",
        components: {ScFeuilleDeRoute},
        data: function() {
            return {
                valid: false,
                incorrectLogin: false,
                model: {
                    password: '',
                    username: ''
                },
                nameRules: [
                    v=>!!v || `Nom d'utilisateur obligatoire`,
                    v=> /.+\..+/.test(v) || `Le nom d'utilisateur n'est pas conforme: nom.prenom`
                ],
                passwordRules: [
                    v=>!!v || `Le mot de passe est obligatoire...`
                ],
                user: null,
            }
        },
        mounted() {
           this.user =  localStorage.getItem('ScolcoursGymnaseUserName');
        },
        computed: {
            connection: function(){
                return this.user!==null;
            },
        },
        methods: {
            validerConnection: function () {
                let that = this;
                axios({
                    method: 'post',
                    url: '/crud/login.php',
                    data: this.model
                }).then(response => {
                    console.log(response.data);

                    // Connection is a success
                    if(response.data.results!==false) {
                        localStorage.setItem('ScolcoursGymnaseUser', response.data.results.username);
                        localStorage.setItem('ScolcoursGymnaseUserName', response.data.results.nom);
                        that.user = response.data.results.nom;
                    }else{
                        // Connection failed.
                        localStorage.removeItem('ScolcoursGymnaseUser');
                        localStorage.removeItem('ScolcoursGymnaseUserName');
                        that.user = null;
                        that.incorrectLogin = true;
                    }
                }).catch(e => {
                    localStorage.removeItem('ScolcoursGymnaseUser');
                    localStorage.removeItem('ScolcoursGymnaseUserName');
                    that.user = null;
                });
            },
            deConnection: function(){
                localStorage.removeItem('ScolcoursGymnaseUser');
                localStorage.removeItem('ScolcoursGymnaseUserName');
                this.user = null;
            }
        }
    }
</script>

