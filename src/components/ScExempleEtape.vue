<template>
    <div v-bind:class="{
            'mt-10': mt,
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
        name: 'ScExempleEtape',
        props: {
            mt: {type: Boolean, default: true},
            center: {type: Boolean, default: false}
        }
    }
</script>