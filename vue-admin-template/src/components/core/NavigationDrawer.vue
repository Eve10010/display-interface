<template>
  <v-navigation-drawer
    v-model="toggle"
    fixed app>
    <v-toolbar flat dark :color="$root.themeColor" class="toolbar">
      <router-link :to="{ name: 'Dashboard' }">
        <img src="static/logo.png" width="46px"></img>
      </router-link>
      <router-link :to="{ name: 'Dashboard' }" class="text">
        电子科技大学
      </router-link>
    </v-toolbar>
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
        <v-list-tile-title :class="[{'active': selectedIndex === 3}, 'item-title' ]">{{ $t('差异化梯度传输') }}</v-list-tile-title>
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

 <!--
      <v-list-group
        prepend-icon="pageview">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">{{ $t('widgets') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Social', 4)">
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 4}, 'item-title' ]">{{ $t('social') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Chart', 5)">
          <v-list-tile-action>
            <v-icon>bar_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 5}, 'item-title' ]">{{ $t('charts') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Media', 6)">
          <v-list-tile-action>
            <v-icon>perm_media</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 6}, 'item-title' ]">{{ $t('media') }}</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

      <v-list-group
        prepend-icon="select_all">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">{{ $t('overlays') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Snackbar', 7)">
          <v-list-tile-action>
            <v-icon>event_note</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 7}, 'item-title' ]">{{ $t('snackbar') }}</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

      <v-list-group
        prepend-icon="fingerprint">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">{{ $t('authorization') }}</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '403' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">403</v-list-tile-title>
        </v-list-tile>


        <v-list-tile @click="$router.push({ name: 'Login' })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">{{ $t('login') }}</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

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
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toggle: {
        type: Boolean,
        required: false,
        default: true
    }
  },

  data() {
    return {
      selectedIndex: 1
    }
  },

  methods: {
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
