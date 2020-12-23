<template>
  <div class="container">
    <div class="left">  
      <div style="display:flex;flex-direction:row;">
        <div style="width:600px;height:450px;" ref="chart1"></div>
        <div style="width:600px;height:450px;" ref="chart2"></div>
      </div>
      <div style="display:flex;">
        <div style="width:600px;height:450px;" ref="chart3"></div>
      </div>
    </div>
    <div class="right" >
      <div class="right-inside">
        <h2 style="align:center">差异化传输协议（DGT）</h2>
        <figure>
            <img src="static/DGT示意图.png"></img>
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
  position: absolute;
  display: flex;
  display: -webkit-flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  /* color: #008cff; */
}

.right{
  float: right;
  width: 30%;
  height:900px;
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