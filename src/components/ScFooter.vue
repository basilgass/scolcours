<template>
    <v-footer
            color="light-green darken-4"
            padless
    >
        <v-row
                justify="center"
                no-gutters
        >
            <v-col
                    class="py-4 text-center white--text"
                    cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>Scolcours</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>
<script>
    export default {
        name: 'sc-footer'
    }
</script>