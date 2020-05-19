<template>
    <v-sheet class="text-center d-flex align-center" height="80vh">
        <v-row>
            <v-col cols="12">
                <div class="display-4">Oups</div>
            </v-col>
            <v-col class="col-12">
                Apparemment, l'adresse <code>{{$route.path}}</code> n'existe pas.
            </v-col>
            <v-col cols="12">
                <v-btn color="primary" href="/" x-large>Retour à l'accueil</v-btn>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
    export default {
        name: "oups"
    }
</script>

<style scoped>

</style>