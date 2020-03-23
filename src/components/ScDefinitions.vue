<template>
    <v-list>
        <v-list-item-group color="primary">
            <v-list-item
                    v-for="(def, i) in definitions"
                    :key="i">
                <v-list-item-content>
                    <v-list-item-title>{{ def.nom }}</v-list-item-title>
                    <v-list-item-subtitle>{{ def.definition }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>
<script>
    export default {
        name: 'scDefinitions',
        props: {
            definitions: {}
        }
    }
</script>