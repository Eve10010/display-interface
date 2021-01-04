<template>
  <div class="container">
    <v-btn @click="changSRight">切换简介显示状态</v-btn>
    <div class="left">
      <div class="pic-echarts" ref="chart1"></div>
      <div class="description">
        <p>相比直接在155Mbps网络部署HiPS，
          双向梯度稀疏传输算法BiSparse和混合精度传输技术FP16均取得了显著的时效性增益，
          <strong>最高提升了74%</strong>。
          <br>
          <br>//这一页有问题：双向稀疏传输技术的英文全称是？其缩写应该定为“BiSparse”还是“BSC”？
        </p>
        <p style="text-indent:-2em;padding:2em;align-self: start;">
          注释：<br>
          “HiPS”指的是：在155M网络带宽下，利用HiPS框架进行分布式机器学习模型训练；<br>
          “HiPS-FP16”指的是：在155M网络带宽下，HiPS框架中使用FP16数据传输技术进行分布式机器学习模型训练；<br>
          “HiPS-BiSparse”指的是：在155M网络带宽下，HiPS框架中使用BiSparse数据传输技术进行分布式机器学习模型训练；<br>
          “HiPS-BiSparse+FP16”指的是：在155M网络带宽下，HiPS框架中结合使用BiSparse和FP16数据传输技术进行分布式机器学习模型训练。<br>
          收敛程度一致时（本实验情况），“收敛时间”越少，“单轮次通信时延”越少，模型训练越快。
        </p>
      </div>


    </div>
    <div class="right" v-show="showRight">
      <div class="right-inside">
        <h2 style="align:center">轻量级数据传输技术</h2>
        <p>通过减少带宽受限网络传输的模型数据量实现高效通信。
          项目从稀疏化和量化两个方面着手，开发了<strong>双向梯度稀疏传输技术</strong>和<strong>混合精度传输技术</strong>，
          分别减少传输数据的数量和比特位数，以实现大规模模型数据在带宽受限网络中的轻量传输。
        </p>
        <ul>
          <li><h3>双向稀疏传输技术（BSC）</h3></li>
          <figure>
            <img src="@/static/BSC示意图.png">
            <figcaption align="center">BSC示意图</figcaption>
          </figure>
          <strong>
            核心思想：
          </strong>
          <p>
            为了进一步降低广域网通信开销，在压缩传输方面，提出双向稀疏梯度传输技术，
            通过域间传输稀疏的上下行梯度以大幅度压缩模型更新数据量，
            减少需要在数据中心间传输的数据量，从而减少通信带宽需求、提高通信效率。
          </p>
          <li><h3>混合精度传输技术（FP16）</h3></li>
          <figure>
            <img src="@/static/混合精度传输技术示意图.png">
            <figcaption align="center">FP16示意图</figcaption>
          </figure>
          <strong>
            核心思想：
          </strong>
          <p>
            以半精度浮点格式FP16数据训练模型，从而显著提高本地模型更新计算速度。
            以单精度浮点格式FP32缓存模型训练结果，从而保存尽可能多的模型更新信息，
            在减少所需内存和训练时间的同时，获得与单精度训练相同的精度。
          </p>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const echarts = require('echarts');
var title_size = 28;
var legend_size = 18;
var yAxis_size = 15;
var xAxis_size = 15;
export default {
  data() {
    return {
      showRight: true,
    };
  },
  methods: {
    changSRight() {
      this.showRight = !this.showRight;
    },

    initCharts1() {//考虑将四个柱状图分别用四个div写
      let myChart1 = echarts.init(this.$refs.chart1);
      var sizeValue = '57%';
      // 绘制图表
      myChart1.setOption({
        legend: {
          // right:'5%',
          top: '7%',
          // orient:'vertical',
          // top:'10%',
          // right:0,
          textStyle: {
            fontSize: legend_size, //字体大小
          },
        },
        tooltip: {},
        title: {
          text: '155M带宽下达到同一收敛程度耗费时间',
          textStyle: {
            fontSize: title_size, //字体大小
          },
        },
        grid: [

          {right: sizeValue, top: '20%', bottom: '55%'},
          {left: sizeValue, top: '20%', bottom: '55%'},
          {right: sizeValue, top: '62%'},
          {left: sizeValue, top: '62%'}
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
            name: '收敛精度（%）',
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
            name: '收敛时间（h）',
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
            name: '收敛轮数（次）',
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
            name: '单轮次通信时延（s）',
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
            name: '收敛精度',
            data: [90.8, 90.8, 90.8, 90.6],
            // symbolSize: symbolSize,
            xAxisIndex: 0,
            yAxisIndex: 0,

          },
          {
            type: 'bar',
            name: '收敛时间',
            data: [37.3, 17.8, 8.6, 5.8],
            // symbolSize: symbolSize,
            xAxisIndex: 1,
            yAxisIndex: 1,

          },
          {
            type: 'bar',
            // symbolSize: symbolSize,
            name: '收敛轮数',
            data: [5270, 4900, 4720, 5370],
            xAxisIndex: 2,
            yAxisIndex: 2,

          },
          {
            type: 'bar',
            // symbolSize: symbolSize,
            name: '单轮次通信时延',
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
.container {
  /* background: white; */
  /* margin-top: 8px; */
  /* text-align: center; */
  padding: 0%;
  float: left;
  width: 100%;
}

.left {
  /* font-size: 16px; */
  width: 70%;
  padding: 15px 1%;
  position: absolute;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* color: #008cff;  */
}

.description {
  padding: 10px 5% 10px 5%;
  align-self: start;
}

.pic-echarts {
  width: 800px;
  height: 600px;
}

.right {

  float: right;
  height: 1400px;
  width: 30%;
  padding: 15px 1%;
  background: white;
  margin: 0px 0px 0px 0px;
  border-left: 2px solid #f5f5f5;
}

/* .left img, .right img{
  display: block;
  margin: 0 auto;
  width: 80%;
} */

p {
  text-indent: 2em;
  align-self: start;

}

</style>