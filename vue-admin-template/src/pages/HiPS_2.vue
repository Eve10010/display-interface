<template>
  <div class="container">
    <v-btn @click="changSRight">切换简介显示状态</v-btn>
    <div class="left" >
      <div style="width:600px;height:450px;" ref="chart1"></div>
      <div class="description" > 

        <p>相比直接在155Mbps网部署MXNET,
            <strong>
            HiPS模型收敛精度无损；
            HiPS减少76%的训练收敛时间。</strong>
        </p>
        <!-- <h5>注释：</h5> -->
        <p style="text-indent:-2em;padding:2em;align-self: start;">注释：<br>
        
          模型ResNet-18的参数量为11.17M；<br>
            模型ResNet-34的参数量为21.27M；<br>
            模型ResNet-50的参数量为23.49M；<br>
            模型ResNet-101的参数量为42.46M。<br>
            “HiPS-1G”：HiPS架构在1G网络带宽环境下测试；<br>
            “HiPS-155M”：HiPS架构在155M网络带宽环境下测试；<br>
            “MXNET-1G”：MXNET架构在1G网络带宽环境下测试；<br>
            “MXNETV-155M”：MXNET架构在155M网络带宽环境下测试。
          
        </p>
      </div>
    </div>
    <div class="right" v-show="showRight">
      <div class="right-inside">
        <h2 style="align:center">分层参数服务器架构（HiPS）</h2>
        <figure>
          <img src="static/HiPS.png"></img>
          <figcaption align="center">HiPS架构示意图</figcaption>
        </figure>
        <br>
        <p>针对现有典型框架中计算节点与参数服务器直接通信引发的<strong>显著通信瓶颈</strong>
                ，根据数据中心内外通信环境的巨大差异性，设计了<strong>分层参数服务器通信架构HiPS</strong>，
                实现对数据中心内外通信环境的隔离，同时降低通信、运维、安全等多方面成本和风险。
        </p>
        <br>
        <figure>
          <img src="static/HiPS-procedure.png"></img>
          <figcaption align="center">HiPS流程示意图</figcaption>
        </figure>
        
        <strong>
          核心思想：
        </strong>
        <ul>
          <li>参与数据中心内局部同步</li>
          <li>主控数据中心处全局同步</li>
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
        showRight:true,
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
          legend: {top:'10%',right:0 },
          grid: {
                top: '20%',
                left: '4%',
                right:'4%',
                bottom: '3%',
                containLabel: true
          },
          title:{
              text:'HiPS与MXNET单次迭代时间对比',
          },
            tooltip: {},
            dataset: {
                dimensions: ['product', 'ResNet-18', 'ResNet-34', 'ResNet-50','ResNet-101'],
                //'HiPS-1G', 'HiPS-155M', 'MXNET-1G', 'MXNET-155M'
                source: [
                    {product: 'HiPS-1G', 'ResNet-18': 1.22, 'ResNet-34': 13.86, 'ResNet-50': 16.46, 'ResNet-101': 39.45},
                    {product: 'HiPS-155M', 'ResNet-18': 1.78, 'ResNet-34': 29.02, 'ResNet-50': 36.56, 'ResNet-101': 65.34},
                    {product: 'MXNET-1G', 'ResNet-18': 2.29, 'ResNet-34': 33.53, 'ResNet-50': 42.49, 'ResNet-101': 83.11},
                    {product: 'MXNET-155M', 'ResNet-18': 6.70, 'ResNet-34': 131.49, 'ResNet-50': 153.35, 'ResNet-101': 277.44}
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {name:'单轮迭代时间（s）'},
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'}
            ]
        });
      },
    },
  mounted () {
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
  font-size: 16px;
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

p{
  text-indent: 2em;
  align-self: start;

}
 
</style>