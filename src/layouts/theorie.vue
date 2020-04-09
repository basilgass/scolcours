<template>
  <div id="scolcours-theorie-layout">
    <sc-navbar></sc-navbar>
    <sc-toc-drawer></sc-toc-drawer>
    <v-content>
      <v-container id="scolcours-content">
        <v-row justify="center">
          <v-col cols="12" lg="10" xl="8">
            <router-view/>
          </v-col>
        </v-row>
      </v-container>

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
  import ScNavbar from "../components/UserInterface/ScNavbar";
  import ScFooter from "../components/UserInterface/ScFooter";
  import ScTocDrawer from "../components/UserInterface/ScTocDrawer";
  export default {
    components: {ScTocDrawer, ScFooter, ScNavbar},
    data: function(){
      return {
      }
    }
  }
</script>