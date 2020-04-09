<template>
    <base-alert color="blue" :width="width">
        <slot></slot>
    </base-alert>
</template>
<script>
    import BaseAlert from "./ScBaseAlert";
    export default {
        name: 'ScTheoreme',
        components: {BaseAlert},
        props: {
            width: {type: [String, Number], default: 'auto'}
        }
    }
</script>