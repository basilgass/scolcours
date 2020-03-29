<template>
    <v-container class="maths">
        <v-row>
            <v-col><h1 class="display-1">Ecole de culture générale</h1></v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-btn to="1" append class="mr-5">1C</v-btn>
                <v-btn to="2" append class="mr-5">2C</v-btn>
                <v-btn v-if="false" to="3" append class="mr-5">3C</v-btn>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    export default {
        name: "maths"
    }
</script>

<style scoped>

</style>