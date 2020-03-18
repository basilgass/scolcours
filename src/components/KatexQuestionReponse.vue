<template>
    <div class="katex-question-reponse">
        <div v-katex=tex.question></div>

        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-switch v-on="on" class="d-inline-flex mr-3" dense
                          v-model="afficherSol1"
                ></v-switch>
            </template>
            <span>{{ solLabel }}</span>
        </v-tooltip>
        <span v-katex=tex.reponse v-if="afficherSol1"></span>
    </div>
</template>
<script>
    export default {
        name: 'katexQuestionReponse',
        props: {
            afficherSol: {},
            tex: {},
            width: {type: Number},
            solLabel: {type: String, default: 'Afficher la solution'}
        },
        data: function() {
            return {
                afficherSol1: this.afficherSol
            }
        }
    }
</script>
