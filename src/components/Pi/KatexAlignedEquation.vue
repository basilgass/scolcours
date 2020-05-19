<template>
    <table class="katex-table">
        <tr v-for="(equ, idx) in equations" :key="idx">
            <td v-if="!equ.noEqual">
                <k-math>{{equ.left}}</k-math>
            </td>
            <td colspan="2" v-else>
                <k-math>{{equ.left}}</k-math>
            </td>

            <td v-if="!equ.noEqual">
                <k-math>=</k-math>
            </td>
            <td>
                <k-math>{{equ.right}}</k-math>
            </td>
            <td>
                <k-math>{{equ.op}}</k-math>
            </td>
        </tr>
    </table>
</template>
<script>
    import KMath from "./k-math";

    export default {
        name: 'KatexAlignedEquation',
        components: {KMath},
        props: ['equations']
    }
</script>

<style scoped>
    .katex-table {
        border-collapse: collapse;
    }

    .katex-table td {
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .katex-table td:last-child {
        padding-left: 5px;
        border-left: thin solid grey;
    }

    .katex-table td:nth-last-child(2) {
        padding-right: 30px;
    }
</style>