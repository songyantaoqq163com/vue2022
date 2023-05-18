<template>
  <div class="about">
    <el-button @click="draw">触发</el-button>
    <el-dialog title="查看图片" :visible.sync="dialogJPG" append-to-body>
      <canvas id="canvas" width="540" height="370" style="border: 1px solid red" @mousedown="doDraw($event)"></canvas>
    </el-dialog>
  </div>
</template>
<script>
import imgurl from '../../assets/img01.gif'
export default {
  data() {
    return {
      dialogJPG: true,
      // img: new Image(),
      imgurl: require('../../assets/img01.gif'),
      context: {},
    };
  },
  created() {
    // this.xianDuan()
    setTimeout(() => {
      this.doDraw()
    }, 3000)

  },
  methods: {
    draw() {
      1111;
    },
    initDraw() {
      const canvas = document.querySelector("#canvas");
      this.context = canvas.getContext("2d");

      let w = (this.img.width * 600) / this.img.height;
      let h = (this.img.height * 800) / this.img.width;
      console.log(w, h);
      canvas.width = w;
      canvas.heigth = h;
      setTimeout(() => {
        console.log((this.img.width * 600) / this.img.height);
        this.context.drawImage(this.img, 0, 0, w, h); //在画布上定位图像
      }, 10);
    },
    canvasDown(e) {
      console.log("按下", e);
      const canvas = document.querySelector("#canvas");
      this.context = canvas.getContext("2d");
      this.context.font = "20px '微软雅黑'";
      this.context.fillStyle = "red";
      this.context.fillText("这是个画布", e.offsetX, e.offsetY);
    },

    doDraw() {

      const canvas = document.querySelector("#canvas");
      var imgObj = new Image();
      imgObj.src = this.imgurl
      imgObj.onload = function () {
        var ctx = canvas.getContext('2d');
        ctx.drawImage(this, 0, 0);//this即是imgObj,保持图片的原始大小：470*480
        //ctx.drawImage(this, 0, 0,1024,768);//改变图片的大小到1024*768
      }
    },
  },
};
</script>
<style scoped>
#mycanvas {
  border: 1px solid rgb(199, 198, 198);
}
</style>>

