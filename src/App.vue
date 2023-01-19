<script>

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {

  name: "App",
  components: { AppHeader, AppMain },
  data() {
    return {
      title: "pagina vue con bootstrap and sass",
      projects: []
    }
  },
  methods: {},
  created() {

  }
}
</script>
<template>
  <AppHeader />
  <main>
    <AppMain />
  </main>

</template>
<style  lang="scss">
@use "./styles/general.scss" as *;
</style>