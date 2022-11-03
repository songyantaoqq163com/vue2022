<template>
  <div>
    菜单
    <span>
          <el-autocomplete
              v-model="valueMeta"
              :fetch-suggestions="querySearchone"
              placeholder="请输入菜单"
              clearable
              @select="handleSelectone"></el-autocomplete>
              <p>{{valueObj.value}}</p>
              <p>{{valueObj.path}}</p>
    </span>
    <p>颜色配置 <el-button @click="clickcolor">查询数量</el-button>{{titlecolor}} <span><el-button @click="clickreverse">颜色倒序</el-button></span></p>
   
    <el-row>
      <el-col :span="12" style="border:1px solid red">
        <span v-for="(item,index) in listColors" :key="index" >
          <el-color-picker v-model="listColors[index]"></el-color-picker>
        </span>
      </el-col>
      <el-col :span="12">{{listColors}}</el-col>
  </el-row>
   

  </div>
</template>

<script>
export default {
    name:'menuSerch',//菜单查询页面
    data(){
      return{
        valueMeta:'',
        valueObj:'',
        listtwo:[{
          path:'/JG/ELAllMaking?type=el',
          value:'生产-检测数据查询-NG类型(el/pl/aoi)'
        },{
          path:'/newTracercollect',
          value:'工艺-电性能参数按批次号汇总'
        },{
          path:'/newTracerBadtype?type=aoi',
          value:'生产-检测数据查询-不良类型统计'
        },{
          path:'/AoiDetails',
          value:'生产-检测数据查询-aoi明细all'
        },{
          path:'/newPlRepoert',
          value:'生产-检测数据查询-pl统计'
        },{
          path:'/newTracerPl',
          value:'追溯-cvd-普通踢片统计'
        },{
          path:'/JT/CvdPlNg_JT',
          value:'追溯-cvd-踢片统计'
        },{
          path:'/newAoiPvdStatNg',
          value:'追溯-pvd-踢片统计'
        },{
          path:'/PLPlay_piece',
          value:'追溯-丝印-pl踢片统计'
        },{
          path:'/newTracerTesting',
          value:'el统计'
        },{
          path:'/AoiDetails',
          value:'检测数据查询-AOI明细ALL'
        },{
          path:'/PlRepoert',
          value:'pl统计'
        },{
          path:'/G/ELAllMaking ?type=aoi',
          value:'AOI-NG类型统计'
        },{
          path:'/newTracerBadtype?type=aoi',
          value:'检测数据查询-AOI不良类型'
        },{
          path:'/newcvdWaferPositionByCarrier?loaderType=CVD_IN',
          value:'载板坐标统计IN'
        },{
          path:'/ElectricalOne',
          value:'工艺-电性能-当班效率趋势图'
        },{
          path:'/ReportNumber',
          value:'工艺-载板次数报表'
        },{
          path:'/newEffectNormal',
          value:'生产-生产报表-入库分档'
        },{
          path:'/newCleanHalmBasket',
          value:'工艺-位置相关性-清洗-花篮'
        },{
          path:'/PrintTableHalmReport',
          value:'工艺-位置相关性-丝印-印刷台面'
        },{
          path:'/newPrintStovePathwayHalm',
          value:'工艺-位置相关性-丝印-炉子轨道'
        },{
          path:'/Con/YieldAccount',
          value:'生产-产量补帐'
        },{
          path:'/Con/newPlanScheduling',
          value:'生产-计划排产(按月)'
        },{
          path:'/Con/newPlanDay',
          value:'生产-计划排产(按天)'
        },{
          path:'/OnlineSpecific',
          value:'在线电阻率'
        },{
          path:'/EquipmentStop',
          value:'设备停机记录表'
        },{
          path:'/newTracerFour',
          value:'电性能箱线图'
        },{
          path:'/JG/HumitureReport',
          value:'温湿度报表'
        },{
          path:'/JG/OnlineDetails',
          value:'在线电阻率明细-JG'
        },{
          path:'/newPvdPlPiece',
          value:'pvd-pl踢片统计'
        },{
          path:'/JG/JieldEfficency',
          value:'生产报表-生产稼动率'
        },{
          path:'/JG/JieldStarting',
          value:'生产报表-生产开机率'
        }],
        listColors: [ "#05BE35", "#10C441", "#23C94F", "#1FB747", "#17B757", "#2FC26A", "#2EBC67", "#32B567",  "#17B757", "#2FC26A", "#2EBC67", "#32B567","#3FBF6C", "#50C87A", "#57be7b", "#57BE7B", "#7ED37F", "#7ecf7f", "#7ecf7f","#57be7b","#57be7b", "#57BE7B", "#7ED37F", "#7ecf7f", "#7ecf7f","#57be7b", "#57BE7B", "#7ED37F", "#7ecf7f", "#7ecf7f", "#7ecf7f", "#8bcf7f", "#8bcf7f", "#8bcf7f", "#8bcf7f", "#9ecf7f", "#9ecf7f", "#9ecf7f", "#9ecf7f", "#a4d17f", "#a4d17f", "#a4d17f", "#b9d780", "#b9d780", "#9CD236", "#8bcf7f", "#8bcf7f", "#8bcf7f", "#8bcf7f", "#7ecf7f", "#7ecf7f", "#7ecf7f", "#7ecf7f", "#8bcf7f", "#8bcf7f", "#8bcf7f", "#7ecf7f", "#7ecf7f", "#7ecf7f", "#7ecf7f", "#f8e984","#f8e984", "#f8e984", "#f8e984","#f8e984",  "#f8e984","#f8e984", "#f8e984", "#f8e984","#f8e984", "#f8e984", "#f8e984", "#f8e984", "#ffeb84", "#ffeb84", "#ffeb84","#f8e984", "#f8e984", "#ffeb84", "#ffeb84", "#ffeb84", "#f8e984", "#ffeb84", "#ffeb84","#ffeb84", "#ffeb84", "#ffeb84", "#f8e984", "#ffeb84", "#ffeb84", "#ffeb84", "#ffeb84", "#fedd81", "#fedd81", "#fedd81", "#fedd81", "#fdce7e", "#fdce7e", "#fdce7e", "#fdce7e", "#fedd81", "#fedd81", "#fedd81", "#fedd81", "#fdce7e", "#fdce7e", "#fdce7e", "#fdce7e", "#fdc77d", "#fdc77d", "#fdc77d", "#fdc77d", "#fcc57c", "#fcc57c", "#fcc57c", "#fcc57c", "#fcbb7a", "#fcbb7a", "#fcbb7a", "#fcbb7a", "#fa9c75", "#fa9c75", "#fa9c75", "#fa9c75", "#fa9975", "#fa9975", "#fa9975", "#fa9975", "#fa9d75", "#fa9d75", "#fa9d75", "#fa9d75", "#fa9673", "#fa9673", "#fa9673", "#fa9673", "#f98c71", "#f98c71", "#f98c71", "#f98c71", "#f9806f", "#f9806f", "#f9806f", "#f8696b", "#f8696b", "#f8696b", "#f86966", "#f86966", "#f86966", "#f4696b", "#f4696b", "#f4696b", "#f42124", "#f42124", "#f42124", "#f4211c", "#f4211c", "#f4211c" , "#f4211c", "#f4211c"  ],
        itemcolor:'',
        titlecolor:''
      }
    },
    methods:{
        clickcolor(){
            this.titlecolor=this.listColors.length
        },
        clickreverse(){
          this.listColors=this.listColors.reverse()
        },
          querySearchone(queryString, cb) {
                var restaurants = this.listtwo;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                cb(results);
            },
            createFilter(queryString) {
                return process => {
                    return (
                        process.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1
                    );
                };
            },
            handleSelectone(item){
              this.valueObj=item
            }
    }
}
</script>

<style>

</style>