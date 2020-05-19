<template>
    <div class="main-title-page-wrapper">
        <div class="display-3 mt-5 nav-toc-page">
            {{titre}}
        </div>
        <div class="overline nav-toc-page-subtitle">
            {{sousTitre}}
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ScTitrePage',
        props: {
            titre: {type: String, default: ''},
            sousTitre: {type: String, default: ''}
        }
    }
</script>