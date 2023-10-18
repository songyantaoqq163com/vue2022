<template>
  <div class="aisde_menu">
    <el-menu :default-active="activeIndex11" router class="el-menu-demo" mode="horizontal" @select="handleSelect"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <!-- <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->

      <menutree :data="menu_data"></menutree>
    </el-menu>
  </div>
</template>
<script>
import menutree from "./menutree.vue"
import menus from '../../js/menus.json'
export default {
  name: "pageFullScreen",
  components: {
    menutree: menutree
  },
  data() {
    return {
      activeIndex11: '2',
      menu_data: menus.menus
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // this.activeIndex2=key;
      // console.log(50,this.activeIndex2)
      console.log(43, key, keyPath);
    }
  },
};
</script>

<style scoped>
.aisde_menu .menutree {
  display: inline-flex;
}
</style>