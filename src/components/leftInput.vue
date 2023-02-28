<template>
  <div>
      <el-form :inline="true">
        <el-upload action accept=".xlsx, .xls" :accept-upload="false" :show-file-list="false"
          :on-change="handle">
          <el-button type="primary">解析excel</el-button>
        </el-upload>
      </el-form>
      <el-table :data="datalist" border>
        <el-table-column v-for="item in Xlist" :key="item.index" :label="item.label" :prop="item.value">
          <!-- <template slot-scope="scope">
              {{scope.row}}
          </template> -->
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
import * as XLSX from 'xlsx/xlsx.mjs'
export default {
    //el-input
    data(){
      return{
        message:'xlsx 的使用',
        Xlist:[],
        datalist:[]
      }
    },
    methods:{
      readFile(file){
        return new Promise(resolve => {
          let reader = new FileReader();
          reader.readAsBinaryString(file);//以二进制的方式读取
          reader.onload = ev =>{
            resolve(ev.target.result);
          }
        })
      },
      async handle(ev){
        let file=ev.raw;
        if(!file){
          console.log('文件打开失败')
          return ;
        }else{
          let data = await this.readFile(file);
          let workbook = XLSX.read(data,{ type: "binary",cellDates:true});//解析二进制格式数据
          console.log('二进制数据的解析:')
          console.log(workbook)
          let worksheet = workbook.Sheets[workbook.SheetNames[0]];//获取第一个Sheet
          let result = XLSX.utils.sheet_to_json(worksheet);//json数据格式
          console.log('最终解析的 json 格式数据:')
          console.log(result,XLSX)

          this.Xlist=[]
          for(var i in result[0]){
              var a={label:result[0][i],value:i}
            this.Xlist.push(a)
          }
          console.log('表头',this.Xlist)
          this.datalist=[]
          for(var j=0;j<result.length;j++){
            if(j!==0){
              this.datalist.push(result[j])
            }
          }
          console.log('表格', this.datalist)
        }
      }
    }
}
</script>

<style>

</style>