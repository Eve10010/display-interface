<template>
  <div class="container">
    <v-btn @click="changSRight">切换简介显示状态</v-btn>
    <div class="left">
      <div style="width:600px;height:450px;" ref="chart1"></div>
      <div style="width:600px;height:450px;" ref="chart2"></div>
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
              <img src="static/BSC示意图.png"></img>
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
              <img src="static\混合精度传输技术示意图.png"></img>
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
  export default{
    data () {
      return {
        showRight:false,
      };  
    },
    methods: {
      changSRight () {
        
        this.showRight = ! this.showRight;

      },

      initCharts1 () {
        let myChart1 = echarts.init(this.$refs.chart1);
      // 绘制图表
        myChart1.setOption({
          legend: {},
          tooltip: {},
          dataset: {
              dimensions: ['product', '2015', '2016', '2017'],
              source: [
                  {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
                  {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
                  {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
                  {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
              ]
          },
          xAxis: {type: 'category'},
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
              {type: 'bar'},
              {type: 'bar'},
              {type: 'bar'}
          ]
        });
      },
      initCharts2 () {
        let myChart2 = echarts.init(this.$refs.chart2);
      // 绘制图表
        myChart2.setOption({
            title: {
                text: '动态数据 + 时间坐标轴'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: false
            }]

        });
      }
    },
  mounted () {
    this.initCharts1();
    this.initCharts2();
  }
  }
</script>

 
<style scoped>
.container{
  /* background: white; */
  /* margin-top: 8px; */
  /* text-align: center; */
  padding: 0%;
  float:left;
  width:100%;
}
.left{
  /* font-size: 16px; */
  width:65%;
  padding: 15px 1%;
  position:absolute;
  display: flex;
  display: -webkit-flex;
  align-items:center;
  justify-content:center;
  /* color: #008cff; */
}

.right{
  float: right;
  height: 1400px;
  width: 30%;
  padding: 15px 1%;
  background: white;
  margin:0px 0px 0px 0px;
  border-left:2px solid #f5f5f5;
}
/* .left img, .right img{
  display: block;
  margin: 0 auto;
  width: 80%;
} */
/* .top{
  float: top;
  border-bottom:1px solid #ebedf0;
}
.bottom{
  float: bottom;
}
.top,.bottom{
  height: 50%;
  display: flex;
  display: -webkit-flex;
  align-items:center;
  justify-content:center;
  color: #008cff;
}*/
 
</style>