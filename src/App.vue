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
      },
  };
</script>

<style>
    .katex-left .katex {
        text-align: left !important;
    }

    .scBoite .v-alert__content {
        width: 100% !important;
        overflow-x: auto;
    }

    .greek {
        font-family: 'GFS Didot', serif;
    }
</style>