<template>
  <div id="scolcours-minimal-layout">
    <v-content>
        <router-view/>
    </v-content>
    <sc-footer></sc-footer>
  </div>
</template>

<style>
  .mord.accent{
    background-color: transparent !important;
  }
</style>
<script>
    import ScFooter from "../components/UserInterface/ScFooter";

    export default {
    components: {ScFooter},
  }
</script>