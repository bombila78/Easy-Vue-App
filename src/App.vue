<template>
  <div id="app">
    <Header />
    <keep-alive :exclude="['SiteCardPage']">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>

import Header from "@/components/Header";
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
