<template>
    <div class="katex-question-reponse">
        <div class="mb-5">
            <k-math>{{tex.question}}</k-math>
        </div>

        <div class="mb-3">
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-switch v-on="on" class="d-inline-flex mr-3" dense
                              v-model="afficherSol1"
                    ></v-switch>
                </template>
                <span>{{ solLabel }}</span>
            </v-tooltip>
            <k-math v-show="afficherSol1">{{tex.reponse}}</k-math>
        </div>
    </div>
</template>
<script>
    import KMath from "./k-math";

    export default {
        name: 'katexQuestionReponse',
        components: {KMath},
        props: {
            afficherSol: {},
            tex: {},
            width: {type: Number},
            solLabel: {type: String, default: 'Afficher la solution'}
        },
        data: function () {
            return {
                afficherSol1: this.afficherSol
            }
        }
    }
</script>
