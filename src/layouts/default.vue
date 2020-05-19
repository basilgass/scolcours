<template>
  <div id="scolcours-default-layout">
    <sc-navbar></sc-navbar>
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
  import ScNavbar from "../components/UserInterface/ScNavbar";
  import ScFooter from "../components/UserInterface/ScFooter";
  //import renderMathInElement from "katex/dist/contrib/auto-render.min";
  export default {
    components: {ScFooter, ScNavbar},
    /*updated() {
      renderMathInElement(this.$el);
    }*/
  }
</script>