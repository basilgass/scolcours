<template>
    <div v-bind:class="{
            'mt-10': mt,
            'text-center': center
        }">
        <div class="subtitle-1 font-weight-medium">
            <slot></slot>
        </div>
        <div class="caption">
            <slot name="commentaire"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ScBoiteTitre',
        props: {
            mt: {type: Boolean, default: false},
            center: {type: Boolean, default: false}
        }
    }
</script>