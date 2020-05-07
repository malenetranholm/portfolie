<template>
  <v-app>
    <v-content>
      <router-view></router-view>
      <main></main>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
<style>
body {
  height: 100vh;
}
</style>
