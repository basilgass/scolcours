<template>
    <v-row justify="space-around" class="ma-10">
        <v-alert elevation="2" border="left" color="primary" text min-width="400px">
            <slot></slot>
        </v-alert>
    </v-row>
</template>
<script>
    export default {
        name: 'ScTheoreme',
    }
</script>