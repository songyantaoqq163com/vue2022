<template>
  <div class="about">
    <el-tabs tab-position="left" tyle="height:150px">
      <el-tab-pane label="触发画布">
        <el-button @click="draw">触发</el-button>
      </el-tab-pane>
      <el-tab-pane label="下载">
        <a href="./pad.apk" download="pad.apk">下载</a>
        <i class="el-icon-search butSearch "></i>
      </el-tab-pane>
      <el-tab-pane label="播放音乐">
        <audio controls="controls" class="audio" src="../../assets/xumi.mp3"></audio>
      </el-tab-pane>
    </el-tabs>
    
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
      dialogJPG: false,
      // img: new Image(),
      imgurl: require('../../assets/img01.gif'),

      context: {},
    };
  },
  created() {
    setTimeout(() => {
      // this.Yinping()
    }, 2000)
  },
  methods: {
    InitCvs(ctx) {
      ctx.width = window.innerWidth * devicePixelRatio;
      ctx.height = (window.innerHeight / 2) * devicePixelRatio
    },
    audioDraws(ctx, cvs, inInit, analyser, dataArray) {
      console.log(1, ctx, cvs, inInit, analyser, dataArray)
      requestAnimationFrame(this.audioDraws(ctx, cvs, inInit, analyser, dataArray))
      // 清空画布
      const { width, height } = cvs;
      ctx.clearRect(0, 0, width, height)
      if (!inInit) {
        return
      }
      //分析并放入
      analyser.getByteFrequencyData(dataArray);
      const len = dataArray.length;//条数
      const barWidth = width / length;
      ctx.fillStyle = 'red'
      for (let i = 0; i < len; i++) {
        const data = dataArray[i]//<=256
        const barHeight = (data / 255) * height
        const x = i * barWidth;
        const y = height - barHeight
        ctx.fillRect(x, y, barWidth, barHeight)
      }
    },



    draw() {
      this.dialogJPG = true;
      setTimeout(() => {
        this.doDraw()
      }, 3000)
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

.div2 .canvas1 {
  border: 1px solid lawngreen;
}
.butSearch{
  width: 45px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  border:1px solid #bcd711
}
.butSearch:hover{
  border:1px solid red;
}
</style>

