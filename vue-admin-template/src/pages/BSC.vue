<template>
  <div class="container">
    <v-btn @click="changSRight">切换简介显示状态</v-btn>
    <div class="left">
      <div style="width:600px;height:450px;" ref="chart1"></div>
      <div style="width:600px;height:450px;" ref="chart2"></div>
    </div>
    <div class="right" v-show="showRight">
      <div class="right-inside">
        <h2 style="align:center">分层参数服务器架构（HiPS）</h2>
        <img src="static/HiPS.png"></img>
        <p>针对现有典型框架中计算节点与参数服务器直接通信引发的显著通信瓶颈，
                根据数据中心内外通信环境的巨大差异性，设计了分层参数服务器通信架构HiPS，
                实现对数据中心内外通信环境的隔离，同时降低通信、运维、安全等多方面成本和风险。
        </p>
        
        <br>
        
        <strong>
          核心思想：
        </strong>
        <p>
          参与数据中心内局部同步
        </p>
        <p>
          主控数据中心处全局同步
        </p>
        <img src="static/HiPS.png"></img>
        <p>针对现有典型框架中计算节点与参数服务器直接通信引发的显著通信瓶颈，
                根据数据中心内外通信环境的巨大差异性，设计了分层参数服务器通信架构HiPS，
                实现对数据中心内外通信环境的隔离，同时降低通信、运维、安全等多方面成本和风险。
        </p>
        
        <br>
        
        <strong>
          核心思想：
        </strong>
        <p>
          参与数据中心内局部同步
        </p>
        <p>
          主控数据中心处全局同步
        </p>
        
        <!-- <img src="static/HiPS line.png" height="200" width="500"></img>
        <img src="static/HiPS model.png" height="400" width="500"></img> -->
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
  font-size: 16px;
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
  width: 30%;
  padding: 15px 1%;
  background: white;
  margin:0px 0px 0px 0px;
  border-left:2px solid #f5f5f5;
}
.left img, .right img{
  display: block;
  margin: 0 auto;
  width: 80%;
}
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