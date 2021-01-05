<template>
  <v-container fluid>
    <v-row align="stretch">
      <v-col :cols="auto" class="d-flex flex-column align-center">
        <h2>任务训练耗时</h2>
        <v-row style="align:center;justify-content:center">
          <div style="width:600px;height:450px;" ref="chart1"></div>
          <div style="width:600px;height:450px;" ref="chart2"></div>
        </v-row>
        <div class="description">
          <p>带宽受限情况下,相比MXNET，
            <strong>
              HiPS减少76%的训练收敛时间。
            </strong>
          </p>
          <v-divider ></v-divider>
          <v-row style="align:center;justify-content:center; ">
              <v-simple-table style="padding:10px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left"> 名词 </th>
                      <th class="text-left"> 参数量(M) </th>
                      <th class="text-left"> 模型类型 </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in desserts1" :key="item.name" >
                      <td>{{ item.name }}</td>
                      <td>{{ item.size }}</td>
                      <td>{{ item.model }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <v-simple-table style="padding:10px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left"> 名词 </th>
                      <th class="text-left"> 测试框架 </th>
                      <th class="text-left"> 域间带宽 </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in desserts2" :key="item.name" >
                      <td>{{ item.name }}</td>
                      <td>{{ item.frame }}</td>
                      <td>{{ item.bandwidth }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
          </v-row>
        </div>
      </v-col>
      <v-switch v-model="showRightPanel" @click:prepend="showRightPanel = !showRightPanel"
          label="简介" color="primary" style="padding:10px">
      </v-switch>
      <v-divider vertical></v-divider>
      <transition name="slide-fade">
        <v-col :cols="3" v-show="showRightPanel" style="padding: 14px;">
          <!-- <h2>分层参数服务器架构（HiPS）</h2> -->
          <h2 style="position: sticky; top: 64px; background: white; z-index: 1;">分层参数服务器架构（HiPS）</h2>
          <figure>
            <img src="@/static/HiPS.png">
            <figcaption>HiPS架构示意图</figcaption>
          </figure>
          <!-- <br>
          <p>针对现有典型框架中计算节点与参数服务器直接通信引发的<strong>显著通信瓶颈</strong>
            ，根据数据中心内外通信环境的巨大差异性，设计了<strong>分层参数服务器通信架构HiPS</strong>，
            实现对数据中心内外通信环境的隔离，同时降低通信、运维、安全等多方面成本和风险。
          </p>
          <br>
          <figure>
            <img src="@/static/HiPS-procedure.png">
            <figcaption>HiPS流程示意图</figcaption>
          </figure> -->
          <strong>
            优势：
          </strong>
          <ul>
            <li>缓解中心服务器拥塞</li>
            <li>利用数据中心内高带宽</li>
            <li>隔离数据中心内外通信环境</li>
            <li>降低数据中心间通信风险</li>
          </ul>
        </v-col>
      </transition>
    </v-row>
  </v-container>
</template>

<script>
// var title_size = 28;
var legend_size = 18;
var yAxis_size = 15;
var xAxis_size = 15;
const echarts = require('echarts');
export default {
  data() {
    return {
      showRightPanel: true,
      desserts1: [
        {
          name: '轻任务',
          size: 11.17,
          model:'ResNet-18',
        },
        {
          name: '较轻任务',
          size: 21.27,
          model:'ResNet-34',
        },
        {
          name: '较重任务',
          size: 23.49,
          model:'ResNet-50',
        },
        {
          name: '重任务',
          size: 42.46,
          model:'ResNet-101',
        }, 
      ],
      desserts2: [
        {
          name: 'HiPS-大带宽',
          frame: 'HiPS',
          bandwidth:'1Gbps',
        },
        {
          name: 'HiPS-受限带宽',
          frame: 'HiPS',
          bandwidth:'155Mbps',
        },
        {
          name: 'MXNET-大带宽',
          frame: 'MXNET',
          bandwidth:'1Gbps',
        },
        {
          name: 'MXNET-受限带宽',
          frame: 'MXNET',
          bandwidth:'155Mbps',
        },
      ],
    };
  },
  methods: {
    initCharts1(){
      let myChart1 = echarts.init(this.$refs.chart1);
      myChart1.setOption({
        title:{},
        tooltip:{},
        legend:{
          data:['重任务','较重任务','较轻任务','轻任务',],
            textStyle:{
              fontSize: legend_size,
              textAlign:'auto',

            },
            top: '7%',
        },
        dataset:{
          source:[
            ['product', 'MXNET-受限带宽', 'HiPS-受限带宽', 'MXNET-大带宽', 'HiPS-大带宽'],
            ['重任务', 277.44, 65.34, 83.11, 39.45],
            ['较重任务', 153.35, 36.56, 42.49, 16.46],
            ['较轻任务', 131.49, 29.02, 33.53, 13.86],
            ['轻任务', 6.70, 1.78, 2.29, 1.22]
          ],
        },
        xAxis:{
          type: 'category', gridIndex: 0,
          axisLabel: {
            fontSize: xAxis_size,
            interval: 0,
          }
        },
        yAxis:{
          name: '单轮迭代时间（s）',gridIndex: 0,
          nameTextStyle: {
            fontSize: yAxis_size,
          },
          axisLabel: {
            fontSize: yAxis_size,
          },
        },
        grid:{
          top: '25%',
          left: '5%',
          right: '5%',
          bottom: '3%',
          containLabel: true
        },
        series:[
          {type: 'bar', seriesLayoutBy: 'row', name:'重任务'},
          {type: 'bar', seriesLayoutBy: 'row', name:'较重任务'},
          {type: 'bar', seriesLayoutBy: 'row', name:'较轻任务'},
          {type: 'bar', seriesLayoutBy: 'row', name:'轻任务'},
        ],
      });

    },

    initCharts2() {
      let myChart2 = echarts.init(this.$refs.chart2,'light');
      // 绘制图表
      myChart2.setOption({
        title: {
          
        },
        tooltip: {},
        legend:[
          {
            data:['MXNET-受限带宽','HiPS-受限带宽','','MXNET-大带宽','HiPS-大带宽'],
            textStyle:{
              fontSize: legend_size,
              textAlign:'auto',
            },
            top: '3%',
          },
        ],
        dataset: {
          source: [
            ['product', 'MXNET-受限带宽', 'HiPS-受限带宽', 'MXNET-大带宽', 'HiPS-大带宽'],
            ['重任务', 277.44, 65.34, 83.11, 39.45],
            ['较重任务', 153.35, 36.56, 42.49, 16.46],
            ['较轻任务', 131.49, 29.02, 33.53, 13.86],
            ['轻任务', 6.70, 1.78, 2.29, 1.22]
          ]
        },
        xAxis:{
          type: 'category',
          axisLabel: {
            fontSize: xAxis_size,
            interval: 0,
          },
        },
        yAxis:{
          name: '单轮迭代时间（s）',
          nameTextStyle: {
            fontSize: yAxis_size,
          },
          axisLabel: {
            fontSize: yAxis_size,
          },
        },
        grid: [
          {
            top: '25%',
            left: '5%',
            right: '5%',
            bottom: '3%',
            containLabel: true
          }
        ],
        series: [
          // These series are in the second grid.
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'}
        ],
      });
    },
    
  },
  mounted() {
    this.initCharts1();
    this.initCharts2();
  }
}
</script>


<style scoped>
.description {
  padding: 10px 5% 10px 5%;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>