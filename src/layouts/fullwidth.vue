<template>
  <div id="scolcours-fullwidth-layout">
    <sc-navbar></sc-navbar>
    <v-content>
      <v-container id="scolcours-content" fluid>
            <router-view/>
      </v-container>
    </v-content>
    <sc-footer></sc-footer>
  </div>
</template>

<style>
  .mord.accent{
    background-color: transparent !important;
  }
  .container{
    max-width: 100% !important;
  }
</style>
<script>
  import ScNavbar from "../components/UserInterface/ScNavbar";
  import ScTocDrawer from "../components/UserInterface/ScTocDrawer";
  import ScFooter from "../components/UserInterface/ScFooter";
  export default {
    components: {ScFooter, ScNavbar}
  }
</script>