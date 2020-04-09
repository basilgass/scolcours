<template>
    <v-row justify="space-around" class="mt-10 mb-10">
        <v-alert
                text
                min-width="400px"
                :elevation="elevation"
                :border="border"
                :color="color"
                :width="width">
            <slot></slot>
        </v-alert>
    </v-row>
</template>
<script>
    export default {
        name: 'baseAlert',
        props: {
            elevation: {type: Number, default: 2},
            border: {type: String, default: 'left'},
            color: {type: String, default: 'green'},
            width: {type: [String, Number], default: 'auto'}
        }
    }
</script>