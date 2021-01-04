<template>
  <v-container>
    <h1>This is a homepage</h1>
    <p>
      联合多个数据中心拥有的数据进行跨域分布式机器学习任务训练，能够显著提升人工智能应用性能。
    </p>
    <v-container class="d-flex flex-column">
      <v-row>
        <v-col class="d-flex flex-column">
          <h2>多数据中心框架</h2>
          <h3>分层参数服务器架构</h3>
          <router-link to="/HiPS/trial">Go to HiPS 体验版</router-link>
          <router-link to="/HiPS/pro">Go to HiPS 专业版</router-link>
        </v-col>
        <v-col class="d-flex flex-column">
          <h2>轻量分布式</h2>
          <h3>轻量级数据传输技术</h3>
          <router-link to="/BSC/trial">Go to BSC 体验版</router-link>
          <router-link to="/BSC/pro">Go to BSC 专业版</router-link>
        </v-col>
        <v-col class="d-flex flex-column">
          <h2>高效分布式</h2>
          <h3>协议差异化数据传输技术</h3>
          <router-link to="/DGT/trial">Go to DGT 体验版</router-link>
          <router-link to="/DGT/pro">Go to DGT 专业版</router-link>
          <h3>多播数据传输技术</h3>
          <router-link to="/TS/trial">Go to TS 体验版</router-link>
          <router-link to="/TS/pro">Go to TS 专业版</router-link>
          <h3>细粒度模型传输调度技术</h3>
          <router-link to="/P3/trial">Go to P3 体验版</router-link>
          <router-link to="/P3/pro">Go to P3 专业版</router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "homepage"
}
</script>

<style scoped>

</style>