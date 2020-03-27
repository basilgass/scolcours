<template>
  <v-app>
    <ScNavbar/>
    <v-content>
      <router-view/>
    </v-content>
    <sc-footer/>
  </v-app>
</template>

<script>

  import ScFooter from "./components/UserInterface/ScFooter";
  import ScNavbar from "./components/UserInterface/ScNavbar";

  export default {
  name: 'App',
  components: {ScNavbar, ScFooter},
  data: () => ({
    //
  }),
    mounted() {
    }
  };
</script>

<style>
</style>