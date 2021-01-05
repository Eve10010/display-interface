<template>
  <v-container fluid>
    <v-row align="stretch">
      <v-col :cols="auto" class="d-flex flex-column align-center">
        <div class="description">
          <p>分布式机器学习模型通常<strong>模型规模大</strong>、
            <strong>传输数据量多</strong>，轻量级数据传输技术压缩
            模型训练过程中的传输数据，从而减少传输时延，实现通信高效。
          </p>
        </div>
        <h2>受限带宽下时效性增益</h2>
        <!-- <v-row style="align:center;;justify-content:center"> -->
          <div style="width:800px;height:600px;" ref="chart1"></div>
        <!-- </v-row> -->
        <div class="description">
          <p>带宽受限情况下,相比直接部署HiPS，双向梯度稀疏传输算法（BSC）
            和混合精度传输技术（FP16）均取得了显著的时效性增益，
            <strong>
              最高提升了74%。
            </strong>
            <!-- <br> -->
            准确度一致时（本实验情况），“总耗时”越少，“单次通信耗时”越少，模型训练越快。
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
                    <th class="text-left"> 轻量级数据传输技术 </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts1" :key="item.name" >
                    <td>{{ item.name }}</td>
                    <td>{{ item.frame }}</td>
                    <td>{{ item.bandwidth }}</td>
                    <td>{{ item.compression }}</td>
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
          <!-- <h2>分层参数服务器架构（HiPS）</h2> -->
          <h2 style="position: sticky; top: 64px; background: white; z-index: 1;">轻量级数据传输技术</h2>
          <p>通过<strong>压缩</strong>通信数据量，实现通信高效。主要包括：双向稀疏梯度传输技术（BSC）和混合精度传输技术（FP16）。</p>
          <figure>
            <img src="@/static/轻量级技术.png">
            <figcaption>轻量级数据传输技术</figcaption>
          </figure>
          <h4>双向梯度稀疏传输技术（BSC）</h4>
          <figure>
            <img src="@/static/BSC示意图.png">
            <figcaption>BSC示意图</figcaption>
          </figure>
          
          <strong> 优势： </strong>
          <ul>
            <li>稀疏化梯度数据</li>
            <li>降低必要传输数据量</li>
            <li>减少通信带宽需求</li>
          </ul>
          <h4>混合精度传输技术（FP16）</h4>
          <figure>
            <img src="@/static/混合精度传输技术示意图.png">
            <figcaption>FP16示意图</figcaption>
          </figure>
          <strong> 优势： </strong>
          <ul>
            <li>量化模型数据</li>
            <li>减少数据比特位数</li>
            <li>减少训练时长</li>
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
          name: 'HiPS',
          frame:'HiPS',
          bandwidth:'155Mbps',
          compression:'无'
        },
        {
          name: 'HiPS-FP16',
          frame:'HiPS',
          bandwidth:'155Mbps',
          compression:'FP16'
        },
        {
          name: 'HiPS-BSC',
          frame:'HiPS',
          bandwidth:'155Mbps',
          compression:'BSC'
        },
        {
          name: 'HiPS-BSC+FP16',
          frame:'HiPS',
          bandwidth:'155Mbps',
          compression:'BSC与FP16结合使用'
        },
      ],
      
    };
  },
  methods: {
    initCharts1() {//考虑将四个柱状图分别用四个div写
      let myChart1 = echarts.init(this.$refs.chart1);
      var sizeValue = '57%';
      // 绘制图表
      myChart1.setOption({
        tooltip: {},
        title: {},
        legend: {
          // right:'5%',
          top: '5%',
          textStyle: {
            fontSize: legend_size, //字体大小
          },
        },
        
        grid: [
          {right: sizeValue, top: '20%', bottom: '55%'},
          {left: '60%', top: '20%', bottom: '55%',right:'3%'},
          {right: sizeValue, top: '62%'},
          {left: '60%', top: '62%',right:'3%'}
        ],
        xAxis: [
          {
            type: 'category', gridIndex: 0,
            data: ['HiPS', 'HiPS-FP16', 'HiPS-BiSparse', 'HiPS-BiSparse+FP16'],
            axisLabel: {
              fontSize: xAxis_size,
              interval: 0,
              rotate: 20
            },
          },
          {
            type: 'category', gridIndex: 1,
            data: ['HiPS', 'HiPS-FP16', 'HiPS-BiSparse', 'HiPS-BiSparse+FP16'],
            axisLabel: {
              fontSize: xAxis_size,
              interval: 0,
              rotate: 20
            },
          },
          {
            type: 'category', gridIndex: 2,
            data: ['HiPS', 'HiPS-FP16', 'HiPS-BiSparse', 'HiPS-BiSparse+FP16'],
            axisLabel: {
              fontSize: xAxis_size,
              interval: 0,
              rotate: 20
            },
          },
          {
            type: 'category', gridIndex: 3,
            data: ['HiPS', 'HiPS-FP16', 'HiPS-BiSparse', 'HiPS-BiSparse+FP16'],
            axisLabel: {
              fontSize: xAxis_size,
              interval: 0,
              rotate: 20
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            gridIndex: 0,
            name: '准确度（%）',
            nameTextStyle: {
              fontSize: yAxis_size,
            },
            axisLabel: {
              fontSize: yAxis_size,
            },

          },
          {
            type: 'value',
            gridIndex: 1,
            name: '总耗时（h）',
            nameTextStyle: {
              fontSize: yAxis_size,
            },
            axisLabel: {
              fontSize: yAxis_size,
            },
          },
          {
            type: 'value',
            gridIndex: 2,
            name: '总训练次数（次）',
            nameTextStyle: {
              fontSize: yAxis_size,
            },
            axisLabel: {
              fontSize: yAxis_size,
            },
          },
          {
            type: 'value',
            gridIndex: 3,
            name: '单次通信耗时（s）',
            nameTextStyle: {
              fontSize: yAxis_size,
            },
            axisLabel: {
              fontSize: yAxis_size,
            },
          }
        ],

        series: [
          {
            title: {text: 'ResNet-18'},
            type: 'bar',
            name: '准确度',
            data: [90.8, 90.8, 90.8, 90.6],
            // symbolSize: symbolSize,
            xAxisIndex: 0,
            yAxisIndex: 0,

          },
          {
            type: 'bar',
            name: '总耗时',
            data: [37.3, 17.8, 8.6, 5.8],
            // symbolSize: symbolSize,
            xAxisIndex: 1,
            yAxisIndex: 1,

          },
          {
            type: 'bar',
            // symbolSize: symbolSize,
            name: '总训练次数',
            data: [5270, 4900, 4720, 5370],
            xAxisIndex: 2,
            yAxisIndex: 2,

          },
          {
            type: 'bar',
            // symbolSize: symbolSize,
            name: '单次通信耗时',
            data: [25.45, 13.09, 6.58, 3.88],
            xAxisIndex: 3,
            yAxisIndex: 3,

          }
        ]
      });
    },


    
  },
  mounted() {
    this.initCharts1();
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