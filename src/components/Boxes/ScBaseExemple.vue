<template>
    <v-row justify="space-around" class="mt-10">
        <v-hover v-slot:default="{ hover }">
            <v-sheet :elevation="hover ? 16 : 2" :width=width>
                <v-container>
                    <slot></slot>
                </v-container>
            </v-sheet>
        </v-hover>
    </v-row>
</template>
<script>
    export default {
        name: 'scExemple',
        props: {
            'width': {type: String, default: "75vw"}
        }
    }
</script>