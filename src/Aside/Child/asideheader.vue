<template>
  <div class="asideheader">
    <el-row :gutter="20">
      <el-col :span="24">
        <Menu></Menu>
        <!-- <el-menu
          :default-active="activeIndex2"
          router
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1" route="/first/Homepage">表格</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1" route="/#2">选项1</el-menu-item>
            <el-menu-item index="2-2" route="/#3">选项2</el-menu-item>
            <el-menu-item index="2-3" route="/#4">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1" route="/#5">选项1</el-menu-item>
              <el-menu-item index="2-4-2" route="/#6">选项2</el-menu-item>
              
            </el-submenu>
          </el-submenu>
         <el-menu-item index="3" route="/#7">消息中心</el-menu-item>
        </el-menu> -->
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Menu from './Menu'
export default {
  name: "asideheader",
  components: {
    Menu
  },
  data() {
    return {
      activeIndex2: "1",
      menu_data:[]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
        this.activeIndex2=key;
        console.log(50,this.activeIndex2)
      console.log(43, key, keyPath);
    }
  }
};
</script>

<style>
</style>