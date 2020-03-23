<template>
    <table class="katex-table">
        <tr v-for="(equ, idx) in equations" :key="idx">
            <td v-if="!equ.noEqual" v-katex=equ.left ></td>
            <td v-else v-katex=equ.left colspan="2" ></td>

            <td v-if="!equ.noEqual" v-katex="'='"></td>
            <td v-katex=equ.right></td>
            <td v-katex=equ.op></td>
        </tr>
    </table>
</template>
<script>
    export default {
        name: 'KatexAlignedEquation',
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