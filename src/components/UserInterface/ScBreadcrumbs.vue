<template>
    <v-breadcrumbs :items="items" class="ml-0 pl-0">
        <template v-slot:item="{ item }">
            <v-breadcrumbs-item
                    :href="item.href"
                    :disabled="item.disabled"
            >
                <span v-html="item.text"></span>
            </v-breadcrumbs-item>
        </template>
    </v-breadcrumbs>
</template>
<script>
    export default {
        name: 'sc-breadcrumbs',
        props: {
            items: {type: Array, default: () => []}
        }
    }
</script>