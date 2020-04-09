<template>
    <v-btn
            small
            v-bind:class="{'ml-2':ml}"
            @click="btnClick()">
        <slot></slot>
    </v-btn>
</template>
<script>
    export default {
        name: 'ScBtnGoto',
        props: {
            ml: {type: Boolean, default: true},
            goto: {type: String, default: '#'},
        },
        methods: {
            btnClick: function(){
                this.$vuetify.goTo(this.goto);
            }
        }
    }
</script>