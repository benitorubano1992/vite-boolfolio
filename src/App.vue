<script>
export default {
  name: "App",
  data() {
    return {
      title: "pagina vue con bootstrap and sass"
    }
  },
  methods: {},
  created() {

  }
}
</script>
<template>
  <h1>{{ title }}</h1>
</template>
<style  lang="scss">
@use "./styles/general.scss" as *;
</style>