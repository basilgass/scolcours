<template>
    <v-app-bar
            app
            color="light-green"
            dark
            clipped-right
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
                        :key="link.id"
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
                to="Outils"
                color="white"
                text
                rounded
                class="my-2"
        >
            Outils <v-icon class="ml-2">mdi-toolbox</v-icon>
        </v-btn>
        <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mdAndDown"></v-app-bar-nav-icon>
    </v-app-bar>
</template>
<script>
    export default {
        name: 'ScNavbar',
        data: () => ({
            links: [
                {id: 1, text: 'Accueil', link:'/'},
                {id: 2, text: 'Maturité', link:'/M'},
                {id: 3, text: 'ECG', link:'/ECG'},
            ],
        }),
    }
</script>