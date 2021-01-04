<template>
  <v-app>
    <div class="app-container">
      <toolbar @toggleNavigationBar="drawer = !drawer"/>
      <navigation :toggle="drawer"/>
      <v-main>
        <router-view/>
      </v-main>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: true
    }
  }
}
</script>

<style>
.v-btn:hover:before{
  color: transparent !important;
}

#app {
  font-family: "Fira Code", "Sarasa Mono SC Nerd", "Glow Sans SC", "PingFang SC", "Helvetica Neue", "微软雅黑", sans-serif;
}
</style>
