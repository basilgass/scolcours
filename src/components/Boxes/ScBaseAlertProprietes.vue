<template>
    <base-alert color="deep-orange lighten-2" :width="width">
        <slot></slot>
    </base-alert>
</template>
<script>
    import BaseAlert from "./ScBaseAlert";
    export default {
        name: 'ScProprietes',
        components: {BaseAlert},
        props: {
            width: {type: [String, Number], default: 'auto'}
        }
    }
</script>