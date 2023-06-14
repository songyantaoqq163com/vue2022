<template>
  <div>
    <el-form :inline="true">
      <el-form-item>
        <el-upload
          action
          accept=".xlsx, .xls"
          :accept-upload="false"
          :show-file-list="false"
          :on-change="handle"
        >
          <el-button type="primary" size="mini">解析excel</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" size="mini" @click="fileClick"
          >将字符串转为txt文档下载</el-button
        >
      </el-form-item>
    </el-form>
    <el-table :data="datalist" border height="20vh">
      <el-table-column
        v-for="item in Xlist"
        :key="item.index"
        :label="item.label"
        :prop="item.value"
      >
        <!-- <template slot-scope="scope">
              {{scope.row}}
          </template> -->
      </el-table-column>
    </el-table>

    <div>
      <h1>This is an about page</h1>
    <el-table :data="tableData" class="headerName" :height="500">
      <el-table-column label="序号" type="index"></el-table-column>
      <el-table-column label="发现问题" prop="label_1"></el-table-column>
      <el-table-column label="解决问题" prop="value_1"></el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
import * as XLSX from "xlsx/xlsx.mjs";
// import {saveAs} from 'file-saver'
export default {
  //el-input
  data() {
    return {
      message: "xlsx 的使用",
      Xlist: [],
      datalist: [],
      tableData:[
       {
         label_1:'el-input禁用浏览器密码',
         value_1:'show-password autocomplete= "new-password" '
       },{
         label_1:'定义表格高度',
         value_1:'height="calc(100vh - 250px)"'
       }
     ]
    };
  },
  created(){
    this.line()
  },
  methods: {
    line(){
      var list=[1,2,3,4,5]
      for(var row in list){
        // let hang=new Array(6)
        // console.log(6,row,hang)
        for(var col in list[row]){
           let index = this.getIndex(4, list[row][col]);
          console.log(36,col)
          if(index<0){
            console.log(39,list[row][col])
          }
        }
        
      }
    },
     getIndex(array, value) {
                for (let i = 0; i < array.length; i++) {
                    if (array[i] == value) {
                        return i;
                    }
                }
                return -1;
            },

    // 解析2
    readFile(file) {
      return new Promise((resolve) => {
        let reader = new FileReader();
        reader.readAsBinaryString(file); //以二进制的方式读取
        reader.onload = (ev) => {
          resolve(ev.target.result);
        };
      });
    },
    // 解析1
    async handle(ev) {
      let file = ev.raw;
      if (!file) {
        console.log("文件打开失败");
        return;
      } else {
        this.Xlist = [];
        let data = await this.readFile(file);
        let workbook = XLSX.read(data, { type: "binary", cellDates: true }); //解析二进制格式数据
        console.log("二进制数据的解析:");
        console.log(workbook);
        let worksheet = workbook.Sheets[workbook.SheetNames[0]]; //获取第一个Sheet
        let result = XLSX.utils.sheet_to_json(worksheet); //json数据格式
        console.log("最终解析的 json 格式数据:");
        console.log(result, XLSX);

        
      
        for (var i in result[0]) {
          var a = { value: String(i), label: String(i) };
          this.Xlist.push(a);
        }
        console.log("表头", this.Xlist);
        this.datalist = [];
        // for (var j = 0; j < result.length; j++) {
        //   if (j !== 0) {
        //     this.datalist.push(result[j]);
        //   }
        // }
        this.datalist=result
        console.log("表格", this.datalist);
      }
    },
    //转换为txt
    fileClick() {
      let str = "天涯明月刀2";
      let strData = new Blob([str], { type: "text/plain;charset=utf-8" });
      saveAs(strData, "测试文件下载.txt");
    },
  },
};
</script>

<style scoped>
.two {
  border: 1px solid red;
  height: 5px;
  flex-basis: 200px;
}
</style>