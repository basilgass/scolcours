<template>
    <div>
        <v-divider
                :class="{'mt-10':!dense}"
                v-if="divider"
        ></v-divider>
        <div :class="titleClass">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ScTitrePartie',
        props: {
            divider: {
                type: Boolean,
                default: false
            },
            dense: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            titleClass() {
                return 'headline nav-toc-2 ' + (this.dense ? '' : 'mt-10 mb-5');
            }
        },
    }
</script>