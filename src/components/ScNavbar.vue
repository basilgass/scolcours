<template>
    <v-app-bar
            app
            color="primary"
            dark
    >
        <div class="d-flex align-center">
            <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                    transition="scale-transition"
                    width="40"
            />
                <v-btn
                        v-for="link in links"
                        :key="link"
                        :to="link.link"
                        color="white"
                        text
                        rounded
                        class="my-2 mr-2"
                >
                    {{ link.text }}
                </v-btn>
        </div>

        <v-spacer></v-spacer>
        <v-btn
                to="/outils"
                color="white"
                text
                rounded
                class="my-2"
        >
            Outils <v-icon class="ml-2">mdi-toolbox</v-icon>
        </v-btn>
    </v-app-bar>
</template>
<script>
    export default {
        name: 'ScNavbar',
        data: () => ({
            links: [
                {text: 'Accueil', link:'/'},
                {text: 'Maturité', link:'/M'},
                {text: 'ECG', link:'/ECG'},
            ],
        }),
    }
</script>