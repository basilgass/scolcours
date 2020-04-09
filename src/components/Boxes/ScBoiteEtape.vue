<template>
    <div v-bind:class="{
            'mt-10': mt,
            'mb-10': mb,
            'text-center': center
        }">
        <div v-bind:class="{'no-toc subtitle-1': true}">
            <slot></slot>
        </div>
        <div class="caption">
            <slot name="commentaire"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ScBoiteEtape',
        props: {
            mt: {type: Boolean, default: true},
            mb: {type: Boolean, default: false},
            center: {type: Boolean, default: false}
        }
    }
</script>