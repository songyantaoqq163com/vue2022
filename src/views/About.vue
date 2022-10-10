<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-table :data="tableData" class="headerName" :height="500">
      <el-table-column label="序号" type="index"></el-table-column>
      <el-table-column label="发现问题" prop="label_1"></el-table-column>
      <el-table-column label="解决问题" prop="value_1"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
 data(){
   return {
     tableData:[
       {
         label_1:'el-input禁用浏览器密码',
         value_1:'show-password autocomplete= "new-password" '
       },{
         label_1:'定义表格高度',
         value_1:'height="calc(100vh - 250px)"'
       }
     ]
   }
 },
 created(){
   this.line()
 },
 methods:{
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
 }
}
</script>

