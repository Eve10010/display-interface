<template>
  <v-container fluid>
    <v-row align="stretch">
      <v-col :cols="auto" class="d-flex flex-column align-center">
        <div class="description">
          <p>细粒度模型调度技术，解决模型更新机制导致的<strong>训练轮次间等待时间过长</strong>
            的问题，使需求紧迫数据优先完成传输，降低轮次间等待时间，缩短了模型训练耗时。
          </p>
        </div>
        <h2>HiPS下P3时效性增益</h2>
        <!-- <v-row style="align:center;;justify-content:center"> -->
          <div style="width:600px;height:400px;" ref="chart1"></div>
        <!-- </v-row> -->
        <div class="description">
          <p>使用P3通信算法后，HiPS框架中分布式机器学习模型训练时效性
            <strong>
              提升了30.38%。
            </strong>
          </p>
          <v-divider ></v-divider>
            <v-simple-table style="padding:10px">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left"> 名词 </th>
                    <th class="text-left"> 测试框架 </th>
                    <th class="text-left"> 域间带宽 </th>
                    <th class="text-left"> 传输调度技术 </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts1" :key="item.name" >
                    <td>{{ item.name }}</td>
                    <td>{{ item.frame }}</td>
                    <td>{{ item.bandwidth }}</td>
                    <td>{{ item.tech }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            
          <!-- </v-row> -->
        </div>
      </v-col>
      <v-switch v-model="showRightPanel" @click:prepend="showRightPanel = !showRightPanel"
          label="简介" color="primary" style="padding:10px;">
      </v-switch>
      <v-divider vertical></v-divider>
      <transition name="slide-fade">
        <v-col :cols="3" v-show="showRightPanel" style="padding: 14px;">
          <h2 style="position: sticky; top: 64px; background: white; z-index: 1;">细粒度模型传输调度技术（P3）</h2>
          
          <figure>
            <img src="@/static/P3示意图.png">
            <figcaption>P3示意图</figcaption>
          </figure>
          
          <strong> 优势： </strong>
          <ul>
            <li>需求紧迫数据优先完成传输</li>
            <li>减少轮次间的等待时间</li>
            <li>加速模型训练</li>
            <li>提高通信效率</li>
          </ul>
        </v-col>
      </transition>
    </v-row>
  </v-container>
</template>

<script>
// var title_size = 28;
// var legend_size = 18;
var yAxis_size = 15;
var xAxis_size = 15;
const echarts = require('echarts');
export default {
  data() {
    return {
      showRightPanel: true,
      desserts1: [
        {
          name: 'HiPS-大带宽',
          frame:'HiPS',
          bandwidth:'1Gbps',
          tech:'无'
        },
        {
          name: 'HiPS-受限带宽',
          frame:'HiPS',
          bandwidth:'155Mbps',
          tech:'无'
        },
        {
          name: 'HiPS+P3-受限带宽',
          frame:'HiPS',
          bandwidth:'155Mbps',
          tech:'P3'
        }
      ],
      
    };
  },
  methods: {
    initCharts1() {//考虑将四个柱状图分别用四个div写
      let myChart1 = echarts.init(this.$refs.chart1);
      myChart1.setOption({
        tooltip: {},
        title: {},
        grid: {
          top: '15%',
          bottom: '3%',
          right:'3%',
          left:'10%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['HiPS-大带宽', 'HiPS-受限带宽', 'HiPS+DGT-受限带宽'],
          axisLabel: {
            fontSize: xAxis_size,
            interval: 0,
          },
        },
        yAxis: {
          type: 'value',
          name: '单次通信耗时（s）',
          nameTextStyle: {
            fontSize: yAxis_size,
          },
          axisLabel: {
            fontSize: yAxis_size,
          },
        },

        series: {
          type: 'bar',
          barWidth: '50%',//柱图宽度
          data: [11.97, 71.35, 49.67],
          xAxisIndex: 0,
          yAxisIndex: 0,
        },

      });
    },


  },
  mounted() {
    this.initCharts1();
  },
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