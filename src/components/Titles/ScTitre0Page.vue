<template>
    <div class="main-title-page-wrapper">
        <div class="display-3 mt-10 nav-toc-page">
            <slot></slot>
        </div>
        <div class="overline nav-toc-page-subtitle">
            <slot name="subtitle"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ScTitrePage',
    }
</script>