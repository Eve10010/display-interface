<template>
  <v-container fluid>
    <v-row align="stretch">
      <v-col :cols="auto" class="d-flex flex-column align-center">
        <div class="description">
          <p>分布式机器学习模型数据中通常存在“无关紧要”的<strong>非重要数据</strong>
            ，对所有数据均采用TCP协议传输将浪费通信资源、时间资源，协议差异化数据传输技术
            <strong>依据数据重要度进行协议差异化数据传输</strong>，使得数据传输更加高效，
            加速任务训练速度。
          </p>
        </div>
        <h2>HiPS下DGT时效性增益</h2>
        <!-- <v-row style="align:center;;justify-content:center"> -->
          <div style="width:600px;height:400px;" ref="chart1"></div>
        <!-- </v-row> -->
        <div class="description">
          <p>使用DGT通信算法后，HiPS框架中分布式机器学习模型训练时效性
            <strong>
              提升近30%。
            </strong>
            <!-- <br> -->
            “单次通信耗时”越少，模型训练越快。
          </p>
          <v-divider ></v-divider>
          <!-- <v-row style="align:center;justify-content:center"> -->
            <v-simple-table style="padding:10px">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left"> 名词 </th>
                    <th class="text-left"> 测试框架 </th>
                    <th class="text-left"> 域间带宽 </th>
                    <th class="text-left"> 数据传输技术 </th>
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
          <h2 style="position: sticky; top: 64px; background: white; z-index: 1;">协议差异化数据传输技术（DGT）</h2>
          
          <figure>
            <img src="@/static/DGT示意图.png">
            <figcaption>DGT示意图</figcaption>
          </figure>
          
          <strong> 优势： </strong>
          <ul>
            <li>特意化数据传输协议</li>
            <li>充分利用有界容忍性特点</li>
            <li>高效数据传输</li>
            <li>容忍恶劣网络环境</li>
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
          name: 'HiPS+DGT-受限带宽',
          frame:'HiPS',
          bandwidth:'155Mbps',
          tech:'DGT'
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
          data: [12.87, 41.96, 29.53],
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