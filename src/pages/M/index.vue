<template>
    <v-container class="maths">
        <v-row>
            <v-col>Maturité</v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn to="1" append>1M</v-btn>
                <v-btn to="2" append>2M</v-btn>
                <v-btn to="3" append>3M</v-btn>
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