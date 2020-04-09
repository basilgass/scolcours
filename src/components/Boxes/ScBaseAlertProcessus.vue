<template>
    <base-alert color="green" :width="width">
        <slot></slot>
    </base-alert>
</template>
<script>
    import BaseAlert from "./ScBaseAlert";
    export default {
        name: 'ScProcessus',
        components: {BaseAlert},
        props: {
            width: {type: [String, Number], default: 'auto'}
        }
    }
</script>