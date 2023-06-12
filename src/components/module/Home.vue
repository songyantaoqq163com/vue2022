<template>
  <div class="home">
    <el-row>
      <el-col :span="10">
        <div>
          <div ref="echarts" id="echarts"></div>
        </div>
      </el-col>
      <el-col :span="4">
        <p>列表拖拽</p>
        <draggable element="ul" v-model="list">
          <li v-for="item in list" :key="item.index">{{ item.id }}--{{ item.name }}</li>
        </draggable>
      </el-col>
      <el-col :span="10">
        <div>
          <inc_imgsvg v-if="srcImg" :imgWidth="'100%'">
            <img :src="srcImg" alt="">
          </inc_imgsvg>
          <!-- <VueDragResize
           
            :isActive="isActive"
            :w="width"
            :h="height"
            :aspectRatio="true"
            :sticks="['tl','tr','bl','br']"
            :minw="10"
            :minh="10"
            :x="left"
            :y="top"
            v-on:resizing="resize"
            v-on:dragging="resize"
            v-on:resizestop="stop"
            v-on:dragstop="stop"
          >
            <img src="../../assets/img01.gif" class="logoImg">
          </VueDragResize> -->

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import VeLine from 'v-charts/lib/line.js'
import VueDragResize from 'vue-drag-resize';

import draggable from 'vuedraggable'//移动
import inc_imgsvg from './HomeIndex.vue'

export default {
  name: "Home",
  components: {
    // VeLine
    draggable,
    VueDragResize,
    inc_imgsvg
  },
  data() {
    return {
      list: [{
        id: 1,
        name: '第一项'
      }, {
        id: 2,
        name: '第二项'
      }, {
        id: 3,
        name: '第三项'
      }, {
        id: 4,
        name: '第四项'
      }],

      startclientX: 0, // 元素拖拽前距离浏览器的X轴位置
      startclientY: 0,
      srcImg:require(`../../assets/img01.gif`)
    };
  },
  mounted() {
    this.bar3D();
  },
  methods: {
    //移动
    Start(e) {
      this.startclientX = e.layerX // 记录拖拽元素初始位置
      this.startclientY = e.layerY
      console.log(1,e.layerX,e.layerY,e)
    },


    bar3D() {
      let dom = this.$refs.echarts;
      let option = {
        xAxis3D: {
          type: "category",
          name: "X:中心名称",
          // nameGap: 45,
          nameTextStyle: {
            color: "#000000",
          },
          axisLine: {
            lineStyle: {
              color: "#000000",
            },
          },
          axisLabel: {
            show: false,
          },
        },
        yAxis3D: {
          type: "value",
          name: "Y:调用数量",
          nameTextStyle: {
            color: "#000000",
          },
          axisLine: {
            lineStyle: {
              color: "#000000",
            },
          },
        },
        zAxis3D: {
          type: "value",
          name: "Z:服务数量",
          nameTextStyle: {
            color: "#000000",
          },
          axisLine: {
            lineStyle: {
              color: "#000000",
            },
          },
        },
        grid3D: {
          viewControl: {
            // autoRotate: true
          },
          light: {
            main: {
              shadow: true,
              quality: "ultra",
              intensity: 1.5,
            },
          },
          top: "6%",
          width: "90%",
          height: "80%",
        },
        series: [
          {
            name: "静态服务数量",
            type: "bar3D",
            data: [
              ["资源中心", 2, 1],
              ["资产中心", 8, 6],
              ["图形中心", 11, 10],
              ["拓扑中心", 2, 1],
              ["管理中心", 11, 8],
              ["计量中心", 4, 3],
            ],
            stack: "stack",
            shading: "lambert",
            emphasis: {
              label: {
                show: false,
              },
            },
            itemStyle: {
              color: "#0BB33E",
            },
          },
          {
            name: "动态服务数量",
            type: "bar3D",
            data: [
              ["资源中心", 2, 1],
              ["资产中心", 8, 3],
              [" 图形中心", 11, 4],
              ["拓扑中心", 2, 1],
              ["测点管理中心", 11, 3],
              ["计量中心", 4, 1],
            ],
            stack: "stack",
            shading: "lambert",
            emphasis: {
              label: {
                show: false,
              },
            },
            itemStyle: {
              color: "#0AC1C1",
            },
          },
          {
            name: "异常服务数量",
            type: "bar3D",
            data: [
              ["资源中心", 2, 1],
              ["资产中心", 8, 2],
              [" 图形中心", 11, 3],
              ["拓扑中心", 2, 1],
              ["测点管理中心", 11, 6],
              ["计量中心", 4, 2],
            ],
            stack: "stack",
            shading: "lambert",
            emphasis: {
              label: {
                show: false,
              },
            },
            itemStyle: {
              color: "#DF0024",
            },
          },
        ],
      };
      this.echartsMit(dom, option);
    },
    echartsMit(dom, option) {
      let myChart = this.$echarts.init(dom);
      myChart.setOption(option);
    },
  },
};
</script>
<style scoped>
#echarts {
  width: 500px;
  height: 500px;
  /* position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  bottom: 0; */
  margin: auto;
  border: 1px solid red;
}
</style>
