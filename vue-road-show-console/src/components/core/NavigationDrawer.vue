<template>
  <v-navigation-drawer v-model="toggle" fixed app>
    <v-toolbar flat dark :color="$root.themeColor" class="toolbar">
      <v-btn v-bind:plain="cur_routeName.indexOf('pro') === -1" v-on:click="toggleRoute(true)" color="info" :class="[{'active': cur_routeName.indexOf('pro') !== -1}]">专业版</v-btn>
      <v-btn v-bind:plain="cur_routeName.indexOf('trial') === -1" v-on:click="toggleRoute(false)" color="error" :class="[{'active': cur_routeName.indexOf('trial') !== -1}]">体验版</v-btn>
    </v-toolbar>
    <v-list>
      <v-list-item @click="changeRoute('HiPS_' + (cur_routeName.indexOf('pro') !== -1 ? 'pro' : 'trial'))">
        <v-list-item-title :class="[{'active': cur_routeName.indexOf('HiPS') !== -1}, 'item-title' ]">含中继节点分布式聚合架构</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('BSC_' + (cur_routeName.indexOf('pro') !== -1 ? 'pro' : 'trial'))">
        <v-list-item-title :class="[{'active': cur_routeName.indexOf('BSC') !== -1}, 'item-title' ]">轻量级数据传输技术</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('DGT_' + (cur_routeName.indexOf('pro') !== -1 ? 'pro' : 'trial'))">
        <v-list-item-title :class="[{'active': cur_routeName.indexOf('DGT') !== -1}, 'item-title' ]">协议差异化数据传输技术</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('TS_' + (cur_routeName.indexOf('pro') !== -1 ? 'pro' : 'trial'))">
        <v-list-item-title :class="[{'active': cur_routeName.indexOf('TS') !== -1}, 'item-title' ]">多播数据传输调度技术</v-list-item-title>
      </v-list-item>
      <v-list-item @click="changeRoute('P3_' + (cur_routeName.indexOf('pro') !== -1 ? 'pro' : 'trial'))">
        <v-list-item-title :class="[{'active': cur_routeName.indexOf('P3') !== -1}, 'item-title' ]">细粒度模型传输调度技术</v-list-item-title>
      </v-list-item>
    </v-list>
    <div class="d-flex flex-column align-center" style="position:fixed; bottom: 3%;">
      <img src="@/static/logo.png" width="60%">
      <div class="ma-3" style="font-size: 28px; font-weight: 500;">
        电子科技大学
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  mounted () {
    this.onRouteChanged();
  },
  props: {
    toggle: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  data() {
    return {
      data_id: 0,
      cur_routeName: ''
    }
  },

  watch: {
    '$route': 'onRouteChanged'
  },

  methods: {
    onRouteChanged(){
      this.cur_routeName = this.$route.name;
      let bus_ = this.bus
      this.$nextTick(() => {
        bus_.$emit("routeChange", this.cur_routeName);
      })
    },
    changeRoute(routeName) {
      const vm = this;
      return vm.$router.push({ name: routeName });
    },
    toggleRoute(type) {
      const vm = this;
      let routeName = ''
      if (type) {
        routeName = this.cur_routeName.replace("_trial","_pro")
        this.data_id = 0;
      } else {
        routeName =  this.cur_routeName.replace("_pro","_trial");
        this.data_id = 1;
      }
      return vm.$router.push({ name: routeName });
    }
  }
}
</script>

<style>
.toolbar {
  font-size: 24px;
}

.v-toolbar__content {
  justify-content: space-around;
}

.item-title {
  font-size: 18px;
  font-weight: normal;
  word-break: break-all;
  text-align: center;
}

.v-list-item {
  height: 50px;
}

.v-list-item__title {
  height: 24px;
  line-height: 24px;
  position: relative;
  word-break:break-all;
  white-space: normal;
  overflow: visible;
}

.active {
  font-weight: bolder;
}
</style>
