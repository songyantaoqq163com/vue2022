<template>
  <div class="home">
    
        <!-- v-vharts -->
        <!-- <ve-line
          height="300px"
          :series="series"
          :xAxis="xAxis"
          :yAxis="yAxis"
          :tooltip="tooltip"
          :legend="legend"></ve-line> -->
          <div>
              <div ref="echarts" id="echarts"></div>
          </div>
  
    
  </div>
</template>

<script>
// import VeLine from 'v-charts/lib/line.js'
export default {
  name: "Home",
  components: {
    // VeLine
  },
  data() {
    return {
      series: [
        {
          name: "归档",
          type: "line",
          data: [1, 2, 3, 4, 5, 6, 7],
        },
      ],
      yAxis: {
        type: "value",
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: [
        {
          type: "category",
          axisLabel: {
            rotate: 45,
          },
          data: [1, 2, 3, 4, 5, 6],
        },
      ],
      legend: {
        data: ["归档"],
        textStyle: {
          //图例文字的样式
          color: "#00d4f7",
          fontSize: 16,
        },
      },
    };
  },
  mounted() {
    this.bar3D();
  },
  methods: {
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
