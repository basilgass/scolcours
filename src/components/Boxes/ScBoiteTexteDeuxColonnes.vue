<template>
    <v-row justify="center" class="text-center">
        <v-col cols="12" sm="6">
            <slot name="col1"></slot>
        </v-col>
        <v-col cols="12" sm="6">
            <slot name="col2"></slot>
        </v-col>
    </v-row>
</template>
<script>
    export default {
        name: 'ScBoiteDeuxColonnes'
    }
</script>