<template>

    <div class="sc-definitions">
        <v-row v-for="(def, i) in definitions"
        :key="i"
        >
            <v-col cols="12" md="3" lg="2" class="text-left text-md-right"><h4>{{def.nom}}</h4></v-col>
            <v-col cols="12" md="9" lg="10" v-bind:class="{'pl-10': true, 'mt-n5': $vuetify.breakpoint.smAndDown }" v-html="def.definition"></v-col>
        </v-row>

    </div>
</template>
<script>
    export default {
        name: 'scDefinitions',
        props: {
            definitions: {},
        },
        data: function(){
            return {
            }
        },
        mounted() {
            if(this.expand){
                this.panel = [...Array(this.definitions.length).keys()].map((k,i)=>i);
            }
        }
    }
</script>