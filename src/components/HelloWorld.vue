<template>
  <div class="HelloWorld">
    <el-row :gutter="24">
      <el-col :span="10" :offset="1">
                <el-form :inline="false">
                  <el-form-item label="模糊查询表格数据">
                      <el-input clearable placeholder="模糊查询" v-model="schfilter" icon="search"></el-input>
                  </el-form-item>
                  <el-form-item label="选择对象">
                    <el-select v-model="form.selectcode" clearable filterable value-key="label">
                      <el-option v-for="(item,index) in SetlectList" :label="item.label" :value="item" :key="index"></el-option>
                    </el-select>
                  </el-form-item>
              </el-form>
                <el-table
                  border
                  ref="table"
                  :data="datalist"
                  :height="tableheight"
                  :header-cell-style="headClass"
                >
                <el-table-column type=expand label="详情" width="80">
                      <template slot-scope="props">
                        <p>{{props.row.value}}</p>
                        <p>{{props.row.label}}</p>
                      </template>
                  </el-table-column>
                  <el-table-column type="index" label="序号" width="50px"></el-table-column>
                  <el-table-column
                    prop="materialBatchNo"
                    label="关系"
                    :show-overflow-tooltip="true"
                    width="150px"
                  >
                    <template slot="header" slot-scope="scope">
                      <span :class="scope.row">关系</span>
                      <el-tooltip
                        class="item"
                        effect="dark"
                        content="和内容之间的关系"
                        placement="top-start">
                        <span
                          style="
                            border-radius: 50%;
                            border: 1px solid gray;
                            width: 15px;
                            height: 15px;
                            display: inherit;
                            text-align: center;
                            line-height: 15px;
                          "
                          >?</span
                        >
                      </el-tooltip>
                    </template>
                    <template slot-scope="scope">
                      {{ scope.row.value }}
                    </template>
                  </el-table-column>
                  <el-table-column label="图片" width="100px">
                    <template slot-scope="scope">
                      <el-image style="width:50px;height:50px;" :src="scope.row.url"></el-image>
                    </template>
                  </el-table-column>
                </el-table>
      </el-col>
      <el-col :span="10" :offset="1">
          <!-- 套用下拉框组件 -->
            <seletmodel v-model="food"></seletmodel>
            {{food}}

            <el-table :data="DatTwo" :height="tableheight" border="" :header-cell-style="headClass">
              <el-table-column type="index" label="序号" width="50"></el-table-column>
               <el-table-column v-for="item in TableListTwolength" :label="item" :key="item.index">
                <template slot-scope="scope">
                  {{scope.row[item]?scope.row[item].ratio:null}}
                    <!-- <template #default="scope"> -->
                    <!-- {{scope.row[item-1]?scope.row[item-1].ratio:null}} -->
                </template>
            </el-table-column>
            </el-table>
            
      </el-col>
    </el-row>
  
  </div>
</template>
<script>
import seletmodel from '../model/selectmodel.vue'
export default {
  name: "HelloWorld",
  components: {
    seletmodel
  },
  data() {
    return {
      food:'',

      form:{
        selectcode:''
      },
      schfilter: "",
      datalist: [
        {
          value: "vue双向绑定原理",
          label: "通过数据劫持结合发布者-订阅者模式方式来实现",
          url: require('../assets/logo.png'),
        },
        {
          value: "Vue生命周期",
          url: require('../assets/logo.png'),
          label:
            "beforeCreate(实例初始化后，无法访问方法和数据)、create(实例创建完成，可访问数据和方法)、beforeMonut(挂载Dom之前)、Mounted(改变data,可获取dom)、beforeUpdate(数据更新是调用)、Updated(数据更改后)、beforeDestroy(实例销毁之前)",
        },{
          value:'el-image地址',
          url:null,
          label:':src="url",url:require()'
        },
        {
          value: "axios特点",
           url: require('../assets/logo.png'),
          label:
            "基于promise的http库，支持promise的所有opi(默认不携带cookie),安全性较高，响应回来的数据自动转化为json类型",
        },
        {
          value: "vue和vuex的区别",
          label: "vue是框架，vuex是插件",
           url: require('../assets/logo.png'),
        },
        {
          value: "Vuex是什么",
          label: "Vuex是框架中的状态管理,(用于购物车，登录页面，单页面应用等)",
           url: require('../assets/logo.png'),
        },
        {
          value: "Vuex取值",
           url: require('../assets/logo.png'),
          label:
            'This.$store.state.city\this.$store.commit("getData")\this.$stor.dispath("getData")\this.$stor.getters.getData',
        },
        {
          value: "Vuex有几种属性",
           url: require('../assets/logo.png'),
          label: "State(存放的数据是响应式)、Getter、Mutation、Action、Module",
        },
        {
          value: "vuex中的actions和mutations的区别",
          label: "mutations是同步更改，actions是异步操作",
           url: require('../assets/logo.png'),
        },
        {
          value: "路由钩子",
           url: require('../assets/logo.png'),
          label:
            "全局路由勾子：Router，beforEach(to,form,next),Router，afterEach组件路由勾子：beforeRouteEnter\beforeRouteUpdate(路由切换时)",
        },
        {
          value: "指令周期",
           url: require('../assets/logo.png'),
          label:
            "Vue,nextTick(在dom更新后执行，一般用于dom操作)、Vue，$nextTick(一直到真实的dom渲染结束后执行)",
        },
      ],
      SetlectList:[{
        label:'clearble',
        value:'可清空数据'
      },{
        label:'filterable',
        value:'可输入搜索'
      },{
        label:'value-key="id"',
        value:'可选中当前的对象当做参数'
      }],
      tableheight: null,
      itemsTwo:[],
      TableListTwo:[
        [{
          xAxis:1,
          yAxis:1.23
        },{
          xAxis:2,
          yAxis:2.34
        },{
          xAxis:3,
          yAxis:3.45
        },{
          xAxis:4,
          yAxis:4.56
        }]
      ],
      TableListTwolength:[],
      DatTwo:[]
    };
  },
  mounted() {
    // setTimeout(() => {
    //   this.tableheight =
    //     window.innerHeight - this.$refs.table.$el.offsetTop - 100;
    // }, 100);
  },
  methods: {
    headClass() {
      return "text-align: center;background:#409EFF;color:#fff";
    },

    TWo(){
        // 表头的个数最好为字符串
        for(var i=0;i<this.TableListTwo[0].length;i++){
          this.TableListTwolength.push(String(i))
        }
        console.log(this.TableListTwolength)
        // 数组处理
        let atwo=[]
         let Length=this.TableListTwo.length;
        this.TableListTwo.forEach(e=>{
          atwo.push(e)
        })
         this.DatTwo=[]
        for(var row in atwo){
          let columns=new Array(Length+1);
          // colums[100]=atwo[row].value
          for(var col in atwo[row]){
            let index=this.getIndax(Length,atwo[row][col]);
            if(index<0){
                let val=atwo[row][col]
                columns[col]={
                  index:col,
                  ratio:val.yAxis,
                  // xAxix:val.xAxis,
                    // ratio: val.yaxis == null ? null : Number(val.yaxis.toFixed(5))
                  // ratio:val.yAxis
                }
            }
          }
         this.DatTwo.push(columns)
          console.log(this.DatTwo)
        }
            
    },
    getIndax(array, value) {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] == value) {
                        return i;
                    }
                }
                return -1;
            },
  },
  created(){
    this.itemsTwo=this.datalist 
    this.TWo();
  },
  watch:{
    schfilter: function(val, oldVal) {
      console.log(143,val,oldVal,this.datalist)
      if (!val) {
        this.datalist = this.itemsTwo;
        return ;
      }
      let arr = this.datalist.filter(v => {
        return v.value.includes(this.schfilter);
      });
      this.datalist = arr;
    }
  }
};
</script>

<style scoped>
</style>