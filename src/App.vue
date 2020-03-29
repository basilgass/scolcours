<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>

  export default {
  name: 'App',
  data: () => ({
    //
  }),
    mounted() {
    }
  };
</script>

<style>
  .katex-left .katex{
    text-align: left !important;
  }
</style>