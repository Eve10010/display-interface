<template>
  <v-container fluid>
    <v-row align="stretch">
      <v-col>
        <v-container style="width:400px">
          <v-row no-gutters align="center" justify="space-around">
            <v-switch v-model="showRightPanel" @click:prepend="showRightPanel = !showRightPanel" label="简介" color="primary"></v-switch>
            <v-btn plain elevation="2" @click="onSendMsgBtn" color="primary" :loading="loading_for_start" :disabled="disabled_for_start">开始训练<v-icon dark right>open_in_browser</v-icon></v-btn>
            <v-btn plain elevation="2" @click="onStopTrainBtn" color="warning" :loading="loading_for_stop" :disabled="disabled_for_stop">终止训练<v-icon dark right>stop</v-icon></v-btn>
          </v-row>
        </v-container>
        <v-container fluid>
          <v-row no-gutters align="center" justify="center">
            <div class="pic-echarts" ref="chart_acc_time"></div>
            <div class="pic-echarts" ref="chart_acc_iter"></div>
            <div class="pic-echarts" ref="chart_time_iter"></div>
          </v-row>
        </v-container>
        <v-divider></v-divider>
        <div class="description" v-show="cur_routeName===`HiPS`">
          <p style="text-indent:-2em;padding:2em;align-self: start;">
            注释：<br>
            “HiPS-1G”指的是：在1G网络带宽下，利用HiPS框架进行分布式机器学习模型训练；<br>
            “HiPS-155M”指的是：在155M网络带宽下，利用HiPS框架进行分布式机器学习模型训练；<br>
            “HiPS+P3-155M”指的是：在155M网络带宽下，HiPS框架中使用P3调度算法进行分布式机器学习模型训练；<br>
            单轮迭代时间越少，模型训练越快。
          </p>
        </div>
        <div class="description" v-show="cur_routeName===`P3`">
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
      </v-col>
      <v-divider vertical></v-divider>
      <transition name="slide-fade">
        <v-col :cols="3" v-show="showRightPanel" style="padding: 14px;">
          <div v-show="cur_routeName===`HiPS`" style="height: 100%;">
            <h2 style="position: sticky; top: 64px; background: white; z-index: 1;">分层参数服务器架构（HiPS）</h2>
            <figure>
              <img src="@/static/HiPS.png">
              <figcaption>HiPS架构示意图</figcaption>
            </figure>
            <p>针对现有典型框架中计算节点与参数服务器直接通信引发的<strong>显著通信瓶颈</strong>
              ，根据数据中心内外通信环境的巨大差异性，设计了<strong>分层参数服务器通信架构HiPS</strong>，
              实现对数据中心内外通信环境的隔离，同时降低通信、运维、安全等多方面成本和风险。
            </p>
            <figure>
              <img src="@/static/HiPS-procedure.png">
              <figcaption>HiPS流程示意图</figcaption>
            </figure>
            <strong>
              核心思想：
            </strong>
            <ul>
              <li>参与数据中心内局部同步</li>
              <li>主控数据中心处全局同步</li>
            </ul>
          </div>
          <div v-show="cur_routeName===`BSC`" style="height: 100%;">
            <h2 style="position: sticky; top: 64px; background: white; z-index: 1;">轻量级数据传输技术</h2>
            <p>通过减少带宽受限网络传输的模型数据量实现高效通信。
              项目从稀疏化和量化两个方面着手，开发了<strong>双向梯度稀疏传输技术</strong>和<strong>混合精度传输技术</strong>，
              分别减少传输数据的数量和比特位数，以实现大规模模型数据在带宽受限网络中的轻量传输。
            </p>
            <h3>双向稀疏传输技术（BSC）</h3>
            <figure>
              <img src="@/static/BSC示意图.png">
              <figcaption>BSC示意图</figcaption>
            </figure>
            <strong>
              核心思想：
            </strong>
            <p>
              为了进一步降低广域网通信开销，在压缩传输方面，提出双向稀疏梯度传输技术，
              通过域间传输稀疏的上下行梯度以大幅度压缩模型更新数据量，
              减少需要在数据中心间传输的数据量，从而减少通信带宽需求、提高通信效率。
            </p>
            <h3>混合精度传输技术（FP16）</h3>
            <figure>
              <img src="@/static/混合精度传输技术示意图.png">
              <figcaption>FP16示意图</figcaption>
            </figure>
            <strong>
              核心思想：
            </strong>
            <p>
              以半精度浮点格式FP16数据训练模型，从而显著提高本地模型更新计算速度。
              以单精度浮点格式FP32缓存模型训练结果，从而保存尽可能多的模型更新信息，
              在减少所需内存和训练时间的同时，获得与单精度训练相同的精度。
            </p>
          </div>
          <div v-show="cur_routeName===`DGT`" style="height: 100%;">
            <h2 style="position: sticky; top: 64px; background: white; z-index: 1;">差异化传输协议（DGT）</h2>
            <figure>
              <img src="@/static/DGT示意图.png">
              <figcaption>DGT示意图</figcaption>
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
          <div v-show="cur_routeName===`TS`" style="height: 100%;">
            <h2 style="position: sticky; top: 64px; background: white; z-index: 1;">多播传送调度（TSEngine）</h2>
            <figure>
              <img src="@/static/TS示意图.png">
              <figcaption>TSEngine示意图</figcaption>
            </figure>
            <strong>
              核心思想：
            </strong>
            <p>
              //这里写TS的核心思想……
            </p>
          </div>
          <div v-show="cur_routeName===`P3`" style="height: 100%;">
            <h2 style="position: sticky; top: 64px; background: white; z-index: 1;">细粒度数据传输调度（P3）</h2>
            <figure>
              <img src="@/static/P3示意图.png">
              <figcaption>TSEngine示意图</figcaption>
            </figure>
            <strong>
              核心思想：
            </strong>
            <p>这里写P3的核心思想……</p>
          </div>
        </v-col>
      </transition>
    </v-row>
    <v-row justify="center">
      <v-dialog max-width="600px" v-model="show" persistent>
        <v-card>
          <v-toolbar flat dense dark color="primary">
            <v-toolbar-title>参数设置</v-toolbar-title>
            <div @click="show = false; loading_for_start = false; disabled_for_start = false;" class="vuedl-layout__closeBtn">×</div>
          </v-toolbar>
          <v-expansion-panels accordion multiple v-model="panel">
            <v-expansion-panel>
              <v-expansion-panel-header>通用参数</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-container fluid>
                  <v-row no-gutters align="center" justify="center">
                    <v-text-field dense class="pa-2" label="优化算法" v-model="params.task_type" disabled required/>
                    <v-text-field dense class="pa-2" label="测试带宽 / Mbps" v-model="params.bandwidth" required :rules="titleRules"/>
                    <v-text-field dense class="pa-2" label="学习率" v-model="params.learning_rate" required :rules="titleRules"/>
                    <v-text-field dense class="pa-2" label="批量大小" v-model="params.batch_size" required :rules="titleRules"/>
                    <v-select dense class="pa-2" :items="models" label="训练模型" v-model="params.model"></v-select>
                    <v-select dense class="pa-2" :items="datasets" label="数据集" v-model="params.dataset"></v-select>
                    <v-select dense class="pa-2" :items="competitors" label="实验对比对象" v-model="params.competitor"></v-select>
                  </v-row>
                  <v-row align="center" justify="space-around">
                    <v-checkbox dense v-model="params.use_cpu" :label="`使用CPU`"></v-checkbox>
                  </v-row>
                </v-container>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>特殊参数</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-container fluid v-show="cur_routeName===`HiPS`">
                  <v-row align="center" justify="space-between">
                    <v-checkbox dense class="pa-2" v-model="params.use_async" :label="`启用混合同步`" :rules="exclusiveRules"></v-checkbox>
                    <v-checkbox dense class="pa-2" v-model="params.use_dcasgd" :label="`启用DC-ASGD`" :rules="exclusiveRules"></v-checkbox>
                    <v-checkbox dense class="pa-2" v-model="params.use_fp16" :label="`启用FP16`"></v-checkbox>
                    <v-checkbox dense class="pa-2" v-model="params.update_locally" :label="`在本地更新`" :rules="exclusiveRules"></v-checkbox>
                  </v-row>
                  <v-row align="center" justify="space-between">
                    <v-checkbox dense class="pa-2" v-model="params.use_hfa" :label="`启用HierFAVG`" :rules="exclusiveRules"></v-checkbox>
                    <v-text-field dense class="pa-2" label="域内同步轮数" v-model="params.hfa_k1" required v-show="params.use_hfa" type="number" :rules="titleRules"/>
                    <v-text-field dense class="pa-2" label="域间同步轮数" v-model="params.hfa_k2" required v-show="params.use_hfa" type="number" :rules="titleRules"/>
                  </v-row>
                </v-container>
                <v-container fluid v-show="cur_routeName===`BSC`">
                  <v-row align="center" justify="space-between">
                    <v-checkbox dense class="pa-2" v-model="params.use_fp16" :label="`启用FP16`"></v-checkbox>
                    <v-text-field dense class="pa-2" label="压缩率" v-model="params.bsc_compr_ratio" required :rules="titleRules"/>
                    <v-text-field dense class="pa-2" label="压缩门槛" v-model="params.size_lower_bound" required :rules="titleRules"/>
                  </v-row>
                </v-container>
                <v-container fluid v-show="cur_routeName===`DGT`">
                  <v-row align="center" justify="space-between">
                    <v-checkbox dense class="pa-2" v-model="params.adaptive_k_flag" :label="`ADAPTIVE_K_FLAG`"></v-checkbox>
                    <v-text-field dense class="pa-2" label="压缩门槛比率" v-model="params.dgt_k" required :rules="titleRules"/>
                    <v-text-field dense class="pa-2" label="UDP_CHANNEL" v-model="params.udp_channel" required type="number" :rules="titleRules"/>
                  </v-row>
                </v-container>
                <v-container fluid v-show="cur_routeName===`TS`">
                  <v-row align="center" justify="space-between">
                    <v-checkbox dense class="pa-2" label="域内启用" v-model="params.intra_ts"/>
                    <v-checkbox dense class="pa-2" label="域间启用" v-model="params.inter_ts"/>
                    <v-text-field dense class="pa-2" v-model="params.greedy_rate_ts" :label="`MAX_GREED_RATE_TS`" :rules="titleRules"/>
                  </v-row>
                </v-container>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn plain color="primary" @click="sendMsg" dark class="ma-1">确认</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
const echarts = require('echarts');
var chart_acc_time;
var chart_acc_iter;
var chart_time_iter;

export default{
  data () {
    return {
      exp_1G_acc_time_list: [],
      exp_1G_acc_iter_list: [],
      exp_1G_time_iter_list: [],
      exp_n1G_acc_time_list: [],
      exp_n1G_acc_iter_list: [],
      exp_n1G_time_iter_list: [],
      ctl_1G_acc_time_list: [],
      ctl_1G_acc_iter_list: [],
      ctl_1G_time_iter_list: [],
      ctl_n1G_acc_time_list: [],
      ctl_n1G_acc_iter_list: [],
      ctl_n1G_time_iter_list: [],
      show: false,
      showRightPanel: true,
      loading_for_start: false,
      loading_for_stop: false,
      disabled_for_start: false,
      disabled_for_stop: false,
      panel: [0],
      cur_routeName: '',
      params: {
        task_type: this.cur_routeName,
        bandwidth: '100',
        model: 'ResNet18',
        dataset: 'FashionMNIST',
        competitor: 'MXNet',
        learning_rate: 0.1,
        batch_size: 32,
        use_cpu: 0,
        use_fp16: false,
        use_async: false,
        use_dcasgd: false,
        update_locally: false,
        use_hfa: false,
        hfa_k1: 1,
        hfa_k2: 1,
        bsc_compr_ratio: 0.01,
        size_lower_bound: 100000,
        adaptive_k_flag: true,
        dgt_k: 0.8,
        inter_ts: 0,
        intra_ts: 0,
        greedy_rate_ts: 0.9
      },
      models: [
        'MobileNet_V1',
        'MobileNet_V2',
        'ResNet18',
        'ResNet32',
        'ResNet50',
        'ResNet101',
        'AlexNet'
      ],
      datasets: [
        'MNIST',
        'FashionMNIST',
        'Cifar10'
      ],
      competitors: ['MXNet', 'HiPS'],
      chart_common_option: {
        title: {
          textStyle: {
            Height: '30'
          },
          left:'center'
        },
        grid: {
          top: '20%',
          left: '15%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            animation: false,
            snap: true
          }
        },
        xAxis: {
          type: 'value',
          nameLocation: 'middle',
          nameGap: 25,
          axisLine: {
            symbol: ['none','none'],
            symbolSize: [10, 15],
            lineStyle:{
              width:2,
              color:'black',
            },
          },
          axisLabel: {
            fontFamily: ['Microsoft YaHei'],
            fontSize: 12
          }
        },
        yAxis: {
          type: 'value',
          nameLocation: 'middle',
          nameGap: 40,
          axisLine: {
            symbol: ['none','none'],
            symbolSize: [10, 15],
            lineStyle:{
              width:2,
              color:'black',
            },
          }
        }
      }
    };
  },

  computed: {
    exclusiveRules() {
      return [
        this.params.use_async + this.params.use_dcasgd + this.params.update_locally + this.params.use_hfa <= 1 || '提示：功能互不兼容'
      ];
    },
    titleRules() {
      return [
        v => !!v || '提示: 不能为空',
        v => /^[0-9]+(.[0-9]{1,3})?$/.test(v) || '提示：请输入正数'
      ];
    }
  },

  sockets:{
    connect(){
      this.$dialog.notify.success('socket 已连接', {
        position: 'bottom-right',
        timeout: 5000,
      })
    },
    disconnect() {
      console.log('socket disconnect')
    },
    start_training_response() {
      this.$dialog.notify.success('任务已启动', {
        position: 'bottom-right',
        timeout: 5000
      })
      this.loading_for_start = false;
    },
    task_end_response(content){
      let message = '';
      if (content.end === 1) {
        message = '所有任务已完成';
        this.disabled_for_start = false;
      } else if (content.end === 0){
        message = '任务: ' + content.task + ' 已完成';
      }
      this.$dialog.notify.info(message, {
        position: 'bottom-right',
        timeout: 5000,
        icon: 'check',
        dense: true
      })
    },
    stop_training_response() {
      this.$dialog.notify.success('任务已结束', {
        position: 'bottom-right',
        timeout: 5000
      })
      this.loading_for_start = false;
      this.disabled_for_start = false;
      this.loading_for_stop = false;
      this.disabled_for_stop = false;
    },
    training_update(content) {
      var cur_task = content.current_task;
      var is_CG = cur_task.match(RegExp(/MXNet/)) || (this.cur_routeName !== `HiPS` && cur_task.match(RegExp(/HiPS/)));
      var is_1G = cur_task.match(RegExp(/1000Mbps/));
      // var task_category = cur_task.split("-")[0];
      // var bandwidth = parseInt(cur_task.split("-")[1].split("Mbps")[0]);

      if (is_CG && is_1G) {
        this.ctl_1G_acc_time_list.push([parseFloat(content.time), parseFloat(content.acc)])
        this.ctl_1G_acc_iter_list.push([parseFloat(content.iter), parseFloat(content.acc)])
        this.ctl_1G_time_iter_list.push([parseFloat(content.iter), parseFloat(content.time)])
      } else if (!is_CG && is_1G) {
        this.exp_1G_acc_time_list.push([parseFloat(content.time), parseFloat(content.acc)])
        this.exp_1G_acc_iter_list.push([parseFloat(content.iter), parseFloat(content.acc)])
        this.exp_1G_time_iter_list.push([parseFloat(content.iter), parseFloat(content.time)])
      } else if (is_CG && !is_1G) {
        this.ctl_n1G_acc_time_list.push([parseFloat(content.time), parseFloat(content.acc)])
        this.ctl_n1G_acc_iter_list.push([parseFloat(content.iter), parseFloat(content.acc)])
        this.ctl_n1G_time_iter_list.push([parseFloat(content.iter), parseFloat(content.time)])
      } else if (!is_CG && !is_1G) {
        this.exp_n1G_acc_time_list.push([parseFloat(content.time), parseFloat(content.acc)])
        this.exp_n1G_acc_iter_list.push([parseFloat(content.iter), parseFloat(content.acc)])
        this.exp_n1G_time_iter_list.push([parseFloat(content.iter), parseFloat(content.time)])
      }
      this.update_chart('acc_time');
      this.update_chart('acc_iter');
      this.update_chart('time_iter');
    }
  },

  methods: {
    onSendMsgBtn(){
      this.show = true;
      this.params.task_type = this.cur_routeName;
      if (this.cur_routeName === 'HiPS') {
        this.competitors =  ['MXNet'];
        this.params.competitor = 'MXNet';
      } else {
        this.competitors = ['MXNet', 'HiPS'];
        this.params.competitor = 'HiPS';
      }
      this.loading_for_start = true;
      this.disabled_for_start = true;
    },

    sendMsg() {
      this.show = false;
      this.empty_chart();
      this.$socket.emit('start_training', this.params);
    },

    async onStopTrainBtn(){
      this.loading_for_stop = true;
      this.disabled_for_stop = true;
      this.$socket.emit('stop_training', {'msg':'stop_training'});
      let res = await this.$dialog.confirm({
        text: '是否清空图表？',
        title: '注意',
        color: 'warning',
        persistent: false,
        actions: {
          false: '保留',
          true: {
            color: 'red',
            text: '清空'
          },
        }
      })
      if (res) {
        this.empty_chart();
      }
    },

    empty_chart() {
      this.exp_1G_acc_time_list = [];
      this.exp_1G_acc_iter_list = [];
      this.exp_1G_time_iter_list = [];
      this.exp_n1G_acc_time_list = [];
      this.exp_n1G_acc_iter_list = [];
      this.exp_n1G_time_iter_list = [];
      this.ctl_1G_acc_time_list = [];
      this.ctl_1G_acc_iter_list = [];
      this.ctl_1G_time_iter_list = [];
      this.ctl_n1G_acc_time_list = [];
      this.ctl_n1G_acc_iter_list = [];
      this.ctl_n1G_time_iter_list = [];
      this.update_chart('acc_time');
      this.update_chart('acc_iter');
      this.update_chart('time_iter');
    },
    init_chart(type) {
      let cur_routeName = this.cur_routeName;
      let competitor = this.params.competitor;
      let bandwidth = this.params.bandwidth + 'Mbps';
      switch (type) {
        case 'acc_time':
          chart_acc_time = echarts.init(this.$refs.chart_acc_time);
          chart_acc_time.setOption(this.chart_common_option);
          chart_acc_time.setOption({
            title: {
              text: '精度随时间变化曲线'
            },
            legend: {
              data: [cur_routeName + '-1000Mbps', cur_routeName + '-' + bandwidth, '', competitor + '-1000Mbps', competitor + '-' + bandwidth],
              top: '7%'
            },
            series: [{
              name: cur_routeName + '-1000Mbps',
              data: this.exp_1G_acc_time_list,
              type: 'line'
            }, {
              name: cur_routeName + '-' + bandwidth,
              data: this.exp_n1G_acc_time_list,
              type: 'line'
            }, {
              name: competitor + '-1000Mbps',
              data: this.ctl_1G_acc_time_list,
              type: 'line'
            }, {
              name: competitor + '-' + bandwidth,
              data: this.ctl_n1G_acc_time_list,
              type: 'line'
            }],
            xAxis: {
              name: '运行时间'
            },
            yAxis: {
              name: '精度',
              min: 'dataMin'
            }
          });
          break;

        case 'acc_iter':
          chart_acc_iter = echarts.init(this.$refs.chart_acc_iter);
          chart_acc_iter.setOption(this.chart_common_option);
          chart_acc_iter.setOption({
            title: {
              text: '精度随迭代轮数变化曲线'
            },
            legend: {
              data: [cur_routeName + '-1000Mbps', cur_routeName + '-' + bandwidth, '', competitor + '-1000Mbps', competitor + '-' + bandwidth],
              top: '7%'
            },
            series: [{
              name: cur_routeName + '-1000Mbps',
              data: this.exp_1G_acc_iter_list,
              type: 'line'
            }, {
              name: cur_routeName + '-' + bandwidth,
              data: this.exp_n1G_acc_time_list,
              type: 'line'
            }, {
              name: competitor + '-1000Mbps',
              data: this.ctl_1G_acc_iter_list,
              type: 'line'
            }, {
              name: competitor + '-' + bandwidth,
              data: this.ctl_n1G_acc_iter_list,
              type: 'line'
            }],
            xAxis: {
              name: '迭代轮数'
            },
            yAxis: {
              name: '精度',
              min: 'dataMin'
            }
          });
          break;

        case 'time_iter':
          chart_time_iter = echarts.init(this.$refs.chart_time_iter);
          chart_time_iter.setOption(this.chart_common_option);
          chart_time_iter.setOption({
            title: {
              text: '时间随迭代轮数变化曲线',
            },
            legend: {
              data: [cur_routeName + '-1000Mbps', cur_routeName + '-' + bandwidth, '', competitor + '-1000Mbps', competitor + '-' + bandwidth],
              top: '7%'
            },
            series: [{
              name: cur_routeName + '-1000Mbps',
              data: this.exp_1G_time_iter_list,
              type: 'line'
            }, {
              name: cur_routeName + '-' + bandwidth,
              data: this.exp_n1G_time_iter_list,
              type: 'line'
            }, {
              name: competitor + '-1000Mbps',
              data: this.ctl_1G_time_iter_list,
              type: 'line'
            }, {
              name: competitor + '-' + bandwidth,
              data: this.ctl_n1G_time_iter_list,
              type: 'line'
            }],
            xAxis: {
              name: '迭代轮数'
            },
            yAxis: {
              name: '运行时间'
            }
          });
          break;
      }
    },
    update_chart(type) {
      let cur_routeName = this.cur_routeName;
      let competitor = this.params.competitor;
      let bandwidth = this.params.bandwidth + 'Mbps';
      switch (type) {
        case 'acc_time':
          chart_acc_time.setOption({
            legend: [{
              data: [cur_routeName + '-1000Mbps', cur_routeName + '-' + bandwidth, '\n', competitor + '-1000Mbps', competitor + '-' + bandwidth]
            }],
            series: [{
              name: cur_routeName + '-1000Mbps',
              data: this.exp_1G_acc_time_list,
            }, {
              name: cur_routeName + '-' + bandwidth,
              data: this.exp_n1G_acc_time_list,
            }, {
              name: competitor + '-1000Mbps',
              data: this.ctl_1G_acc_time_list,
            }, {
              name: competitor + '-' + bandwidth,
              data: this.ctl_n1G_acc_time_list,
            }]
          });
          break;

        case 'acc_iter':
          chart_acc_iter.setOption({
            legend: [{
              data: [cur_routeName + '-1000Mbps', cur_routeName + '-' + bandwidth, '\n', competitor + '-1000Mbps', competitor + '-' + bandwidth]
            }],
            series: [{
              name: cur_routeName + '-1000Mbps',
              data: this.exp_1G_acc_iter_list,
            }, {
              name: cur_routeName + '-' + bandwidth,
              data: this.exp_n1G_acc_iter_list,
            }, {
              name: competitor + '-1000Mbps',
              data: this.ctl_1G_acc_iter_list,
            }, {
              name: competitor + '-' + bandwidth,
              data: this.ctl_n1G_acc_iter_list,
            }]
          })
          break;

        case 'time_iter':
          chart_time_iter.setOption({
            legend: [{
              data: [cur_routeName + '-1000Mbps', cur_routeName + '-' + bandwidth, '\n', competitor + '-1000Mbps', competitor + '-' + bandwidth]
            }],
            series: [{
              name: cur_routeName + '-1000Mbps',
              data: this.exp_1G_time_iter_list,
            }, {
              name: cur_routeName + '-' + bandwidth,
              data: this.exp_n1G_time_iter_list,
            }, {
              name: competitor + '-1000Mbps',
              data: this.ctl_1G_time_iter_list,
            }, {
              name: competitor + '-' + bandwidth,
              data: this.ctl_n1G_time_iter_list,
            }]
          })
          break;
      }
    }
  },
  mounted () {
    this.bus.$on("routeChange", cur_routeName => {
      this.cur_routeName = cur_routeName.replace('_pro', '');
    });
    this.init_chart('acc_time');
    this.init_chart('acc_iter');
    this.init_chart('time_iter');
  },
  beforeDestroy() {
    this.bus.$off("routeChange");
  }
}
</script>

<style scoped>
.v-text-field {
  width: 25%;
  max-width: 34%;
}

.description{
  padding: 10px 5% 10px 5%;
}

.pic-echarts{
  width: 500px;
  height: 400px;
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