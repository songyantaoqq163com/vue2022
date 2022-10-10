<template>
  <div class="Home">
    <el-header>
      <Asideheader/>
    </el-header>
    <el-main class="Homecenter">
      <AsideChild/>
    </el-main>
    <el-footer>Footer</el-footer>
  </div>
</template>
<script>
import Asideheader from "@/Aside/Child/asideheader"
import AsideChild from "@/Aside/Child/asideChild";
export default {
  name: "Home",
  components: {
    Asideheader,
    AsideChild,
  },
  data() {
    return {
    };
  },
  methods: {},
  created() {
  },
  // mounted() {
  //    setTimeout(() => {
  //      console.log('home.vue高度',this,this.$refs.elemain.$el.offsetHeight)
  //               // this.tableHeight = this.$el.offsetParent.firstChild.clientHeight - this.$refs.form.$el.clientHeight-5;
  //           }, 100)
  // },
  watch: {
  }
};
</script>

<style>
/* #app {
  text-align: center;
  color: #2c3e50;
} */
.el-header,
.el-footer {
  background-color: rgb(84, 92, 100);
  text-align: center;
  height: 60px;
  line-height: 60px;
  color: #ffffff;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-menu {
  background-color: #e9eef3;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: unset!important;
  width: 100vw;
  overflow: hidden!important;
}
.Home {
  height: 100vh;
}
.Homecenter{
  height: calc(100vh - 122px);
}

body > .el-container {
  margin-bottom: 40px;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom: 1;
}
</style>