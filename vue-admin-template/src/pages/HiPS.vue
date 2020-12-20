<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap >
          
          <!--<v-flex sm12>
            <h4>Basic</h4>
          </v-flex>-->
          <v-flex lg64 sm8 >
            <button type="button" >点我haodene!</button>
            <h4>ResNet-18</h4>
            <column-chart :data="data1" :colors="['#b00']" label="单轮迭代时间" ytitle="单轮迭代时间" style="width=50%"></column-chart>
            <h4>ResNet-34</h4>
            <column-chart :data="data2" :colors="['#b00']" label="单轮迭代时间" ytitle="单轮迭代时间"></column-chart>
          </v-flex>
          <v-flex lg64 sm4 v-show="true">
            <div id="HiPS" style="background:#F5F5F5">  
              <h4 style="align:center">分层参数服务器架构（HiPS）</h4>
              <img src="static/HiPS.png" width="300px" ></img>
              <p>针对现有典型框架中计算节点与参数服务器直接通信引发的显著通信瓶颈，
                根据数据中心内外通信环境的巨大差异性，设计了分层参数服务器通信架构HiPS，
                实现对数据中心内外通信环境的隔离，同时降低通信、运维、安全等多方面成本和风险。
              </p>


            </div>
            
          </v-flex>
          <!--<v-flex lg6 lg12 v-for="(item,index) in users" :key=" 'mini' + index">
            <social-widget
              mini
              v-bind="item">
            </social-widget>
          </v-flex>
          <v-flex sm12>
            <h4>Normal</h4>
          </v-flex>
          <v-flex lg3 sm12 v-for="(item,index) in users" :key=" 'basic' + index">
            <social-widget v-bind="item">
            </social-widget>
          </v-flex>
          <v-flex sm12>
            <h4>Name Card with top nav</h4>
          </v-flex>
          <v-flex lg3 sm12 v-for="(item,index) in users" :key=" 'basic-top-nav' + index">
            <social-widget
              top-nav
              v-bind="item">
            </social-widget>
          </v-flex>
          <v-flex sm12>
            <h4>Bottom Nav Name Card</h4>
          </v-flex>
          <v-flex lg3 sm12 v-for="(item,index) in users" :key=" 'bottom-nav' + index">
            <social-widget
              bottom-nav
              v-bind="item">
            </social-widget>
          </v-flex>
          <v-flex sm12>
            <h4>Contact Card</h4>
          </v-flex>-->
          <!-- <v-flex lg4 sm12>
            <profile-card></profile-card>
          </v-flex> -->
        </v-layout>
      </v-container>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>

export default {
  data () {
    return {
      data1: {'HiPS-1G': 1.22, 'HiPS-155M': 1.78, 'MXNET-1G': 2.29, 'MXNET-155M': 6.70},
      data2: {'HiPS-1G': 13.86, 'HiPS-155M': 29.02, 'MXNET-1G': 33.53, 'MXNET-155M': 131.49},
      users: [
        {
          jobTitle: 'Web Developer',
          name: 'Michael Wang',
          color: '#fffff0',
          dark: true,
          avatar: {
            src: 'https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat4&accessoriesType=Prescription01&hatColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Black&graphicType=Selena&eyeType=Squint&eyebrowType=AngryNatural&mouthType=Default&skinColor=DarkBrown',
            size: '36'
          }
        },
        {
          jobTitle: 'Web Designer',
          name: 'Jessie J',
          color: '#ccc',
          dark: true,
          avatar: {
            src: 'https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat1&accessoriesType=Sunglasses&hatColor=Red&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
            size: '36'
          }
        },
        /*
        {
          jobTitle: 'Web Developer',
          name: 'Jim J',
          color: 'teal',
          dark: true,
          avatar: {
            src: 'https://avataaars.io/?avatarStyle=Transparent&topType=Hat&accessoriesType=Sunglasses&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Light',
            size: '36'
          },
        },

        {
          jobTitle: 'Product Manager',
          name: 'John Doe',
          color: '#a51288',
          dark: true,
          cardBgImage: '/static/bg/15.jpg',
          avatar: {
            src: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairSides&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=WinkWacky&eyebrowType=SadConcerned&mouthType=ScreamOpen&skinColor=Brown',
            size: '36'
          },
        },
*/
      ]
    }
  }
}
</script>

<style scoped>


p, li {
  font-size: 20px;
  /* line-height 行间距 后而可以跟不同的参数，如果是数字，就是当前字体大小乘上数字 */    
  line-height: 1.5;
  letter-spacing: 1px;
}
body {
  /*width: 800px;
  margin中0 auto代表居中对齐*/
  margin: 0 auto;
  /*background-color: #FF9500;*/
  padding: 20px 20px 20px 20px;
  border: 5px solid rgb(42, 4, 92);
}

img{
  display: block;
  margin: 0 auto;
}

</style>
