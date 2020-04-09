<template>
    <div>
        <v-divider class="mt-8 mb-5"></v-divider>
        <div
                class="font-weight-medium"
                v-if="this.donnee!==''"
                v-html="this.donnee"
            ></div>


        <div class="pl-10 pr-10 pt-5">
            <div ref="question" class="mb-5"
                 v-html="afficherQuestionReponse()"></div>
            <v-text-field
                    v-if="format!=='yesno'"
                    v-model="userInput"
                    :autofocus="autofocus"
                    :success="resultat"
                    v-on:input="verifierReponse()"
                    label="Réponse"
            ></v-text-field>
            <v-btn-toggle
                    v-else
                    :color="resultat?'success':'warning'"
                    v-model="userInput"
                    block
                    style="width: 100%"
                    v-on:change="verifierReponse()"
            >
                <v-btn value="0" width="50%">
                    Non
                </v-btn>
                <v-btn value="1" width="50%">
                    Oui
                </v-btn>
            </v-btn-toggle>
        </div>
    </div>
</template>
<script>
    import katex from "katex";

    export default {
        name: 'ScExerciceComplexeItem',
        props: {
            id: {type: Number, default: 0},
            donnee: {type: String, default: 'Calculer...'},
            question: {type: String, default: ''},
            reponse: {type: [String, Boolean,Array], default: null},
            format: {type: String, default: 'Number'},
            autofocus:{type: Boolean, default: false},
            multiple: {type: Boolean, default: false},
            ordre: {type: Array, default: ()=>[]}
        },
        data: function(){
            return {
                userInput: '',
                resultat: null
            }
        },
        methods: {
            afficherQuestionReponse: function(){
                // Aucune réponse donnée
                if(this.userInput===null){this.userInput='';}

                // On transforme tout sous forme de tableau.
                let strData = this.userInput.split(',').map(v=>v.trim()),
                    strArray = [],
                    idx = this.multiple?1:undefined;

                if(!this.multiple){
                    // TODO: Display message trop de réponses.
                    strData = strData.slice(0, 1);
                }

                // Format par défaut.
                for(let str of strData) {
                    if (this.format === undefined || this.format === 'Number') {
                        strArray.push(this._afficherNombre(str, idx))
                    } else if (this.format === 'vector') {
                        strArray.push(this._afficherVecteur(str, idx));
                    } else if (this.format === 'point') {
                        strArray.push(this._afficherPoint(str, idx));
                    } else {
                        // La réponse donnée n'est pas un userInput, mais un bouton / toggle
                        strArray.push(this.question);
                    }
                    idx++;
                }
                return katex.renderToString(strArray.join('\\qquad '));
            },
            verifierReponse: function(){
                // Aucune réponse donnée -> c'est donc faux !
                if(this.userInput==='' || this.userInput===null){
                    this.resultat = false;
                    this.emettreResultat();
                    return;
                }

                // On coupe les réponses donnes en plusieurs morceaux:
                let repDonneeArray,
                    repArray = (!Array.isArray(this.reponse))?[this.reponse]:this.reponse;

                if(this.format==='yesno'){
                    repDonneeArray = [+this.userInput===1];
                }else{
                    repDonneeArray = this.userInput.split(',');
                }
                if(!this.multiple && repDonneeArray.length>1){
                    this.resultat = false;
                    this.emettreResultat();
                    return;
                }
                // Le nombre de réponse donnée ne correspond pas au nombre de réponses reçues.
                // Uniquement valable si on a affaire à plusieurs solutions
                if(this.multiple){
                    if(repArray.length!==repDonneeArray.length){
                        this.resultat = false;
                        this.emettreResultat();
                        return;
                    }

                    // On a une certain ordre à respecter, pour autant que c'est une solution multiple
                    if(this.ordre.length>0){
                        for(let i in this.ordre){
                            if(repArray[this.ordre[i]]!==repDonneeArray[i]){
                                this.resultat = false;
                                this.emettreResultat();
                                return;
                            }
                        }
                        // Tous les tests sont passés. On a donc les bons résultats !
                        this.resultat = true;
                        this.emettreResultat();
                        return;
                    }
                }


                // On est dans les cas où il n'y a pas de solutions multiples ou alors que l'ordre n'a pas encore été créé
                let ordre = [], k, nbReponse = 0;
                for(let r of repDonneeArray){
                    // On détermine si l'élément est dans le tableau
                    k = repArray.indexOf(r);

                    // La réponse donnée ne se trouve pas dans les réponses.
                    if(k===-1){
                        continue;
                    }else{
                        nbReponse++;
                    }

                    // Dans le cas de solutions mulitples, on créé le tableau ordre.
                    ordre.push(k);
                }

                // Cas des solutions multiples
                if(this.multiple && nbReponse===repArray.length){
                    this.resultat = true;

                    if(this.ordre.length===0){
                        // Mise à jour de l'ordre des solutions
                        this.$emit('update-ordre', ordre);
                    }
                    this.emettreResultat();
                    return;
                }

                if(!this.multiple && nbReponse===1){
                    this.resultat = true;
                    this.emettreResultat();
                    return;
                }


                this.resultat = false;
                this.emettreResultat();

                /*
                if(this.format===undefined || this.format==='Number') {
                    this.resultat = +this.userInput === +this.reponse;
                }else if(this.format==='vector') {
                    if(Array.isArray(this.reponse)){
                        this.resultat = this.reponse.includes(this.userInput)
                    }else {
                        this.resultat = this.userInput === this.reponse;
                    }
                }else if(this.format==='point'){
                    if(this.multiple){
                        let rArray = [...new Set(this.userInput.split(','))];

                        if(rArray.length!==this.reponse.length){
                            this.resultat = false;
                            return;
                        }
                        for(let rep of rArray){
                            // Une des valeurs n'est pas juste.
                            if(!this.reponse.includes(rep)){
                                this.resultat = false;
                                return;
                            }
                        }

                        this.$emit('update-ordre', this.resultat);

                        this.resultat = true;
                    }else {
                        if (Array.isArray(this.reponse)) {
                            this.resultat = this.reponse.includes(this.userInput)
                        } else {
                            this.resultat = this.userInput === this.reponse;
                        }
                    }
                }else if(this.format==='yesno'){
                    this.resultat = (+this.userInput === 1)===this.reponse;
                }

                // emit result.
                */
            },
            emettreResultat: function(){
                this.$emit('valider-resultat', {
                    id: this.id,
                    value: this.resultat?1:0
                });
            },
            resetQuestion: function(){
                this.userInput=null;
                this.resultat=false;
            },

            // Private methodes.
            _afficherNombre: function(str, index){
                return `${this.question}${index!==undefined?'_'+index:''} = ${str}`;
            },
            _afficherVecteur: function(str, index){
                let v = str.split(' ');

                if (v.length === 1) {
                    return `${this.question}${index!==undefined?'_'+index:''} = \\begin{pmatrix} ${v[0]} \\\\\\ \\end{pmatrix}`;
                } else {
                    return `${this.question}${index!==undefined?'_'+index:''} = \\begin{pmatrix} ${v[0]} \\\\\\ ${v[1]} \\end{pmatrix}`;
                }
            },
            _afficherPoint: function(str, index){
                let v = str.split(/[ ;]/g);

                if (v.length === 1) {
                    return this.question + `${index!==undefined?'_'+index:''}(${v[0]};\\qquad)`;
                } else {
                    return this.question + `${index!==undefined?'_'+index:''}(${v[0]};${v[1]})`;
                }
            }
        },
        mounted() {
            // Listen to events.
            this.$parent.$on('resetQuestion', ()=>{
                this.resetQuestion();
            });
        }
    }
</script>
