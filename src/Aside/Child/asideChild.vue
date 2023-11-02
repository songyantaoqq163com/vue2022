<template>
  <div class="AMChild">
    <router-view></router-view>
  </div>
</template>
<script>
import conmheader from "@/js/conmheader";
import bus from '../../js/bus'
export default {
  name: "asideChild",
  components: {
  },
  data() {
    return {
      collapsed: false,
      allmenu: [],
      auth: conmheader.isAuthenticated(),
      breadcrumbListData: [],
      indexBreadcrumbs: [],
      activepath: "1-1",
      menus: [
        {
          id: "1",
          name: "Aside首页",
          // icon: "el-icon-burger",
          child: [
            {
              id: "1-1",
              name: "知识点收集",
              //  icon: "el-icon-right",
              path: "/first/Homepage"
            },
            {
              id: "1-2",
              name: "登录页面",
              path: "/#2"
            }
          ]
        }
      ]
    };
  },
  methods: {
    initMenu() {
      const menudata = this.menus;
      conmheader.setlistMenu(menudata);
      //   this.$root.Bus.$emit("menuList", menudata);
    },

    handleSelect(index, indexPath) {
      console.log("AMChild.vue", index, indexPath);
      this.indexBreadcrumbs = indexPath; // indexPath为一个数组，里面包含选中的菜单，和菜单的index标识
      sessionStorage.setItem("keylist", index); //存储
    },
    initfirst() {
      var data = sessionStorage.getItem("keylist"); //取出
      this.activepath = data;
    }
  },
  created() {
    console.log("created优先级高");
    this.initMenu();
    this.initfirst();
  },
  mounted() {
    console.log("mounted优先级低");
    bus.$on('deom', (data) => {
      let a = document.getElementsByClassName('AMChild')
      if (data == false) {
        a[0].style.backgroundColor = '#000'
        a[0].style.color = '#fff'
      } else {
        a[0].style.backgroundColor = '#fff'
        a[0].style.color = '#000'
      }
    })
  },
  watch: {
    fullHeight(val) {
      if (!this.timer) {
        this.fullHeight = val;
        this.timer = true;
        let that = this;
        setTimeout(function () {
          that.timer = false;
        }, 400);
      }
    }
  }
};
</script>

<style>
.AMChild {
  margin: 20px;
  height: calc(100vh - 160px);
  border-radius: 10px;
  box-shadow: 0px 5px 10px 5px #888888;
  overflow: auto;
  background: #e9eef3;
}
</style>