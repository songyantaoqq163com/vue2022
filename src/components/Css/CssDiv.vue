<template>
    <div class=''>
        <div class="borderred disblock">
            <span>scss方法变色文字</span>
        </div>
        <div class="divnums">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
        </div>
        <div>
            <div class="box"><span>图1</span></div>
            <div class="box show360"><span>图2</span></div>
            <div class="box2"><span>图3</span></div>
        </div>
      <div class="borderred flexbetween" style="height: 300px">
        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
          <span>上左1</span>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
          <span>上左2</span>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
          <span>上左3</span>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
          <span>上左4</span>
        </el-tooltip>
      </div>

    </div>
</template>
<script>
export default {
    name: "CSSDiv",
}
</script>
<style lang="scss" scoped>
.divnums {
    border: 1px solid gray;
    width: 350px;
    height: 400px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.divnums div {
    text-align: center;
    border: 1px solid red;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.divnums div:nth-child(2) {
    width: 100px;
    height: 200px;
    border: 1px solid royalblue;
    display: inline-block;
}

.divnums div:nth-child(4) {
    width: 50px;
    vertical-align: text-top;
    /* clear: left; */
    /* float: left; */
    /* float: inline-start; */

}

.clear {
    /* //清除浮动 */
    clear: both;
}

.borderred {
    span {
        border: 1px solid lawngreen;

        &:hover {
            color: red;
        }
    }
}

.box {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    box-shadow: 0 0 8px red($color: #000000);
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    z-index:100
}
.box span{
    z-index: 1000;
}
// 图标1
.box:after {
    content: '';
    position: absolute;
    inset: 5px;
    border-radius: 8px;
    background: hwb(303 33% 11%);
    z-index: 1;
}
// 图标2
.box.show360::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 10px;
    width: 20px;
    height: 150%;
    background: #00ff00;
    box-shadow: 0 0 50px #00ff00; //盒子内背景
    animation: animate 2s linear infinite;
}
// 图标3hover3
.box2 {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    box-shadow: 0 0 8px red($color: #000000);
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    z-index:100
}
.box2:after {
    content: '';
    position: absolute;
    inset: 5px;
    border-radius: 8px;
    background: hwb(303 33% 11%);
    z-index: 1;
}
.box2 span{
    z-index: 1000;
}
.box2:hover::before{
    content: '';
    position: absolute;
    top: -10px;
    left: 10px;
    width: 20px;
    height: 150%;
    background: #00ff00;
    box-shadow: 0 0 50px #00ff00; //盒子内背景
    animation: animate 2s linear infinite;
}
@keyframes animate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>