<template>
  <div class="container">
    <div class="left">
      <div style="width:600px;height:450px;" ref="chart"></div>
      <p>make it make it</p>
    </div>
    <div class="right" >
      <div class="right-inside">
        <h2 style="align:center">分层参数服务器架构（HiPS）</h2>
        <img src="static/HiPS.png"></img>

        <p>针对现有典型框架中计算节点与参数服务器直接通信引发的显著通信瓶颈，
                根据数据中心内外通信环境的巨大差异性，设计了分层参数服务器通信架构HiPS，
                实现对数据中心内外通信环境的隔离，同时降低通信、运维、安全等多方面成本和风险。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
          Math.round(value)
        ]
      };
  }

  var data = [];
  var now = +new Date(1997, 9, 3);
  var oneDay = 24 * 3600 * 1000;
  var value = Math.random() * 1000;
  var myChart;
  for (var i = 0; i < 5; i++) {
      data.push(randomData());
  }
 
  const echarts = require('echarts');
  export default{
    
    data () {
      return {
        timer: ''
      };  
    },
    methods: {
      initCharts () {
        myChart = echarts.init(this.$refs.chart);
        // 绘制图表
        myChart.setOption({
           title: {
              text: '动态数据 + 时间坐标轴'
           },
           tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                  params = params[0];
                  var date = new Date(params.name);
                  return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
              },
              axisPointer: {
                  animation: false
              }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: '模拟数据',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data
            }]
          });
      },
      updateCharts () {
          for (var i = 0; i < 5; i++) {
              //alert("aaa");
              // data.shift();
              data.push(randomData());
          }

          myChart.setOption({
              series: [{
                  data: data
              }]
          });
      }
    },
    mounted () {
      this.initCharts();
      //TODO: watch
      this.timer = setInterval(this.updateCharts, 1000);
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