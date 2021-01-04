<template>
  <div class="container">
    <v-btn @click="changSRight">切换简介显示状态</v-btn>
    <div class="left">
      <div class="pic-echarts" ref="chart1"></div>
      <div class="description">
        <p>使用DGT通信算法后，HiPS框架中分布式机器学习模型训练时效性
          <strong>提升了29.62%</strong>。
        </p>
        <p style="text-indent:-2em;padding:2em;align-self: start;">
          注释：<br>
          “HiPS-1G”指的是：在1G网络带宽下，利用HiPS框架进行分布式机器学习模型训练；<br>
          “HiPS-155M”指的是：在155M网络带宽下，利用HiPS框架进行分布式机器学习模型训练；<br>
          “HiPS+DGT-155M”指的是：在155M网络带宽下，HiPS框架中使用DGT调度算法进行分布式机器学习模型训练；<br>
          单轮迭代时间越少，模型训练越快。
        </p>
      </div>
    </div>
    <div class="right" v-show="showRight">
      <div class="right-inside">
        <h2 style="align:center">差异化传输协议（DGT）</h2>
        <figure>
          <img src="@/static/DGT示意图.png">
          <figcaption align="center">DGT示意图</figcaption>
        </figure>
        <strong>
          核心思想：
        </strong>
        <p>
          利用机器学习基于梯度下降的优化算法对中间结果误差的有界容忍性特点，
          差异化梯度传输（Differential Gradient Transmission，简称DGT）
          结合流量调度策略混合使用可靠传输协议TCP和不可靠传输协议UDP进行数据传输，
          使对模型收敛重要的数据得到优先可靠传输，非重要的数据使用低优先级尽力传输。
          在保证模型收敛的同时，使数据传输更加高效，
          降低由于参数同步突发流量产生的大量重传时延，加速协同训练的参数同步过程。
        </p>

      </div>
    </div>
  </div>
</template>

<script>
const echarts = require('echarts');
var title_size = 28;
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
      myChart1.setOption({
        tooltip: {},
        title: {
          text: '关于DGT算法的HiPS框架单轮迭代时间',
          textStyle: {
            fontSize: title_size, //字体大小
          },
        },


        grid: {
          top: '20%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['HiPS-1G', 'HiPS-155M', 'HiPS+DGT-155M'],
          axisLabel: {
            fontSize: xAxis_size,
            interval: 0,
          },

        },
        yAxis: {
          type: 'value',
          name: '单轮迭代时间（s）',
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
  width: 600px;
  height: 450px;
}

.right {

  float: right;
  height: 900px;
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