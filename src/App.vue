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

  import ScFooter from "./components/ScFooter";
  import ScNavbar from "./components/ScNavbar";

  export default {
  name: 'App',
  components: {ScNavbar, ScFooter},
  data: () => ({
    //
  }),
};
</script>
