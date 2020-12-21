<template>
  <v-navigation-drawer
    v-model="toggle"
    fixed app>
    <v-toolbar flat dark :color="$root.themeColor" class="toolbar">
      <router-link :to="{ name: 'HiPS' }">
        <v-btn v-on:click="data_id = 0" color="info" >专业版</v-btn>
      </router-link>
  
      <router-link :to="{ name: 'HiPS_2' }">
       <v-btn v-on:click="data_id = 1" color="error">体验版</v-btn>
      </router-link>
    </v-toolbar>
    <div v-if="data_id==0">
    <v-list>
      <v-list-tile @click="changeRoute('HiPS', 1)">
        <v-list-tile-action>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 1}, 'item-title' ]" >{{ $t('分层参数服务器架构') }}</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('BSC', 2)">
        <v-list-tile-action>
          
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 2}, 'item-title' ]"> {{ $t('双向稀疏梯度压缩') }}</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('DGT', 3)">
      <v-list-tile-action>
         
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 3}, 'item-title' ]">{{ $t('差异化梯度调度传输') }}</v-list-tile-title>
      </v-list-tile>

            <v-list-tile @click="changeRoute('TS', 4)">
      <v-list-tile-action>
        
        </v-list-tile-action> 
        <v-list-tile-title :class="[{'active': selectedIndex === 4}, 'item-title' ]">{{ $t('多播传输调度') }}</v-list-tile-title>
      </v-list-tile>

            <v-list-tile @click="changeRoute('P3', 5)">
      <v-list-tile-action>
        
        </v-list-tile-action> 
        <v-list-tile-title :class="[{'active': selectedIndex === 5}, 'item-title' ]">{{ $t('细粒度传输调度') }}</v-list-tile-title>
      </v-list-tile>
      </v-list>
    </div>
    <div v-else>
      <v-list>
      <v-list-tile @click="changeRoute('HiPS_2', 1)">
        <v-list-tile-action>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 1}, 'item-title' ]" >{{ $t('机器学习分布式聚合架构（含中继节点）') }}</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('BSC_2', 2)">
        <v-list-tile-action>
          
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 2}, 'item-title' ]"> {{ $t('双向稀疏梯度压缩') }}</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('DGT_2', 3)">
      <v-list-tile-action>
         
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 3}, 'item-title' ]">{{ $t('差异化梯度调度传输') }}</v-list-tile-title>
      </v-list-tile>

            <v-list-tile @click="changeRoute('TS_2', 4)">
      <v-list-tile-action>
        
        </v-list-tile-action> 
        <v-list-tile-title :class="[{'active': selectedIndex === 4}, 'item-title' ]">{{ $t('多播传输调度') }}</v-list-tile-title>
      </v-list-tile>

            <v-list-tile @click="changeRoute('P3_2', 5)">
      <v-list-tile-action>
        
        </v-list-tile-action> 
        <v-list-tile-title :class="[{'active': selectedIndex === 5}, 'item-title' ]">{{ $t('细粒度传输调度') }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
    </div>
 <!--
      <v-list-group
      prepend-icon="account_circle">
      <v-list-tile slot="activator">
        <v-list-tile-title class="item-title">{{ $t('users') }}</v-list-tile-title>
      </v-list-tile>
        <v-list-tile  @click="">
            <v-list-tile-action>
              <v-icon v-text="'people_outline'"></v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="'Management'"></v-list-tile-title>
      </v-list-tile>
      <v-list-tile  @click="">
          <v-list-tile-action>
            <v-icon v-text="'settings'"></v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="'Settings'"></v-list-tile-title>
      </v-list-tile>
    </v-list-group>-->

  </v-navigation-drawer>
</template>



<script>
import Child from '../core/Toolbar'
export default {
  components:{Child},
  mounted () {
      // 获取指定子组件中的指定数据
      console.log(this.$children[0].data_id)},
  props: {
    toggle: {
        type: Boolean,
        required: false,
        default: true
    }
  },

  data() {
    return {
      selectedIndex: 1,
      data_id: 0
    }
  },

  methods: {
    change(data) {
            this.newData = data;
    },
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    }
  }
}
</script>

<style>
  .toolbar {
    font-weight: bold;
    font-size: 24px;
  }

  .toolbar .text {
    padding-left: 15px;
    color: white;
    text-decoration:none;
  }

  .item-title {
    font-size: 20px;
    font-weight: 700;
  }
  .item-sub-title {
    font-size: 15px;
    font-weight: 500;
  }

  .active {
    font-weight: bold;
  }
</style>
