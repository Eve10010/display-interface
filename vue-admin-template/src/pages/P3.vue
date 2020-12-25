<template>
  <div class="container">
    <v-btn @click="changSRight">切换简介显示状态</v-btn>
    <div class="left" >
      <div class="pic-echarts" ref="chart1"></div>
      <div class="description" > 
        Vue SocketIO Test
        <v-btn @click="onSendMsgBtn">send 'hello world!' </v-btn>
            <p>使用P3通信算法后，HiPS框架中分布式机器学习模型训练时效性
            <strong>提升了30.38%</strong>。
            </p>
            <p style="text-indent:-2em;padding:2em;align-self: start;">
            注释：<br>
            “HiPS-1G”指的是：在1G网络带宽下，利用HiPS框架进行分布式机器学习模型训练；<br>
            “HiPS-155M”指的是：在155M网络带宽下，利用HiPS框架进行分布式机器学习模型训练；<br>
            “HiPS+P3-155M”指的是：在155M网络带宽下，HiPS框架中使用P3调度算法进行分布式机器学习模型训练；<br>
            单轮迭代时间越少，模型训练越快。
            
            </p>
      </div>
    </div>
    <div class="right" v-show="showRight">
      <div class="right-inside">
        <h2 style="align:center">细粒度数据传输调度（P3）</h2>
        <figure>
            <img src="static/P3示意图.png"></img>
            <figcaption align="center">TSEngine示意图</figcaption>
        </figure>
        <strong>
            核心思想：
        </strong>
        <p>
            //这里写P3的核心思想……
        </p>
        
      </div>
    </div>
  </div>
</template>

<script>
  const echarts = require('echarts');
  export default{
    data () {
      return {
        showRight:true,
      };  
    },

    sockets:{
      connect(){
        console.log('socket connected')
      },
      disconnect() {
        console.log('socket disconnect')
      },
    },

    methods: {
      onSendMsgBtn(){
        this.sockets.subscribe('training_update',(data) =>{
          console.log(data.current_task)
        })
        this.$socket.emit('data_event',{ 'data_key': 'Hello world!' })
      },

      changSRight () {
        this.showRight = ! this.showRight;
      },

      initCharts1 () {
        let myChart1 = echarts.init(this.$refs.chart1);
        myChart1.setOption({
            tooltip: {},
            title:{
              text:'关于P3算法的HiPS框架单轮迭代时间',
            },
            
            
            grid: {
                    top: '20%',
                    bottom: '3%',
                    containLabel: true
            },
            xAxis:{ 
                type: 'category', 
                data: ['HiPS-1G', 'HiPS-155M', 'HiPS+P3-155M'],
                axisLabel:{
                interval: 0,
                // rotate:15
                },
            },
            yAxis:{
                type: 'value', 
                name: '单轮迭代时间（s）'
            },
            
            series: {
                    type: 'bar',
                    barWidth : '50%',//柱图宽度
                    data:[11.97, 71.35, 49.67],
                    xAxisIndex: 0,
                    yAxisIndex: 0,
            },
            
        });
        },
      
        
    },
  mounted () {
    console.log('mounted');
    this.initCharts1();
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
  flex-direction:column;
  align-items:center;
  justify-content:center;
    /* color: #008cff;  */
}
.description{
  padding: 10px 5% 10px 5%;
  align-self: start;
}
.pic-echarts{
  width:520px;
  height:390px;
}
.right{
  float: right;
  height: 900px;
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

p{
  text-indent: 2em;
  align-self: start;

}
 
</style>