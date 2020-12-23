<template>
  <div class="container">
    <div class="left">
      <div>
        <div style="width:600px;height:450px;" ref="chart1"></div>
        <div style="width:600px;height:450px;" ref="chart2"></div>
      </div>
      <br>
      <div style="width:600px;height:450px;" ref="chart3"></div>
      
      
    </div>
    <div class="right" >
      <div class="right-inside">
        <h2 style="align:center">多播传送调度（TSEngine）</h2>
        <figure>
            <img src="static/TS示意图.png"></img>
            <figcaption align="center">TSEngine示意图</figcaption>
        </figure>
        <strong>
            核心思想：
        </strong>
        <p>
            //这里写TS的核心思想……
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
  var myChart1;
  var myChart2;
  var myChart3;
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
      initCharts1 () {
        myChart1 = echarts.init(this.$refs.chart1);
        // 绘制图表
        myChart1.setOption({
           title: {
              text: '动态数据 + 时间坐标轴1'
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
      updateCharts1 () {
          for (var i = 0; i < 5; i++) {
              data.push(randomData());
          }

          myChart1.setOption({
              series: [{
                  data: data
              }]
          });
      },


      initCharts2 () {
        
        myChart2 = echarts.init(this.$refs.chart2);
        // 绘制图表
        myChart2.setOption({
           title: {
              text: '动态数据 + 时间坐标轴2'
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
                name:'时间',
                show:true,
                type: 'time',
                splitLine: {
                    show: false
                },
                axisLine:{
                  lineStyle:{
                    width:2,
                  }

                }
            },
            yAxis: {
                name:'数值',
                show:true,
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: true
                },
                axisLine:{
                  show:true,
                  lineStyle:{
                    width:2,
                    color:'black',
                  },

                },
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
      updateCharts2 () {
          // for (var i = 0; i < 5; i++) {
          //     data.push(randomData());
          // }

          myChart2.setOption({
              series: [{
                  data: data
              }]
          });
      },
      initCharts3 () {
        
        myChart3 = echarts.init(this.$refs.chart3);
        // 绘制图表
        myChart3.setOption({
           title: {
              text: '动态数据 + 时间坐标轴3'
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
                name:'时间',
                show:true,
                type: 'time',
                splitLine: {
                    show: false
                },
                axisLine:{
                  lineStyle:{
                    width:2,
                  }

                }
            },
            yAxis: {
                name:'数值',
                show:true,
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: true
                },
                axisLine:{
                  show:true,
                  lineStyle:{
                    width:2,
                    color:'black',
                  },

                },
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
      updateCharts3 () {
          // for (var i = 0; i < 5; i++) {
          //     data.push(randomData());
          // }

          myChart3.setOption({
              series: [{
                  data: data
              }]
          });
      },
    },
    mounted () {
      this.initCharts1();
      this.initCharts2();
      this.initCharts3();
      //TODO: watch
      this.timer = setInterval(this.updateCharts1, 1000);
      
      //TODO: watch
      this.timer = setInterval(this.updateCharts2, 1000);
      this.timer = setInterval(this.updateCharts3, 1000);
      
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
  width:70%;
  padding: 15px 1%;
  position:absolute;
  display: flex;
  display: -webkit-flex;
  align-items:flex-start;
  justify-content:center;
  /* color: #008cff; */
}

.right{
  float: right;
  width: 30%;
  height: 900px;
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

p{
  text-indent: 2em;

}
 
</style>