<template>
    <v-container class="maths">
        <v-row>
            <v-col><h1 class="display-1">Ecole de maturité</h1></v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn to="1" append class="mr-5">1M</v-btn>
                <v-btn v-if="false" to="2" append class="mr-5">2M</v-btn>
                <v-btn v-if="false" to="3" append class="mr-5">3M</v-btn>
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