<template>
  <v-app-bar dark flat app :color="$root.themeColor">
    <v-app-bar-nav-icon @click="toggleNavigationBar"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <div class="text" style="font-size: 30px; font-weight: 700; text-align:center; transform: translate(-25%);">
      跨域多中心分布式机器学习
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>
<script>

export default {
  data() {
    return {

    }
  },

  computed: {
  },
  methods: {
    toggleNavigationBar() {
      const vm = this;
      vm.$emit('toggleNavigationBar');
    },
  }
};
</script>
<style>

</style>