<template>
  <div class="about">
    <el-button @click="draw">触发</el-button>
    <a href="./pad.apk" download="pad.apk">下载</a>
    <i class="el-icon-search butSearch "></i>
    <el-dialog title="查看图片" :visible.sync="dialogJPG" append-to-body>
      <canvas id="canvas" width="540" height="370" style="border: 1px solid red" @mousedown="doDraw($event)"></canvas>
    </el-dialog>
    <div class="div2">
      <canvas id="canvas1" class="borderred"></canvas>
      <audio controls="controls" class="audio" src="../../assets/xumi.mp3"></audio>
    </div>
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
      this.Yinping()
    }, 2000)



  },
  methods: {
    Yinping() {
      const audioEle = document.querySelector('.audio');
      const cvs = document.querySelector('#canvas1');
      const ctx = cvs.getContext('2d')
      // console.log(110, ctx)
      this.InitCvs(ctx)//初始化canvas尺寸
      let inInit = false
      //视频开始播放inplay
      let dataArray, analyser
      audioEle.onplay = function () {
        if (inInit) {
          return
        }

        const audCtx = new AudioContext()//创建音频上下文
        const source = audCtx.createMediaElementSource//创建音频节点
          (audioEle)
        analyser = audCtx.createAnalyser();
        analyser.fftSize = 512//窗口大小
        // const dataArray=new Uint8Array(512/2)//创建8位子节点数组,下同
        dataArray = new Uint8Array(analyser.frequencyBinCount);
        source.connect(analyser);//连接到输出
        analyser.connect(audCtx.destination)//输出
        inInit = true
        console.log(60, ctx, cvs, inInit, analyser, dataArray)
        // this.audioDraws(ctx, cvs, inInit, analyser, dataArray)

        // Dram.function(){
        //   requestAnimationFrame(Dram)
        //   清空画布
        // const{width,height}=cvs;
        // ctx.clearRect(0,0,width,height)
        // if(!inInit){
        //   return
        // }
        // 分析并放入
        // analyser.getByteFrequencyData(dataArray);
        // const len=dataArray.length;//条数
        // const barWidth=width/length;
        // ctx.fillStyle='#000'
        // for(let i=0;i<len;i++){
        //   const data=dataArray[i]//<=256
        //   const barHeight=data/255*height
        //   const x=i*barWidth;
        //   const y=height-barHeight
        //   ctx.fillRect(x,y,barWidth,barHeight)
        // }
        // }
      }




    },
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

