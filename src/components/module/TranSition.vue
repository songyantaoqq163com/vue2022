<template>
    <div style="display:initial;">
        <!-- hover旋转1 -->
        <div class="box1 red">
            <img class="box1_img" src="../../assets/img01.gif" alt="hover旋转" />
        </div>
        <!--hover上下移动  -->
        <div class="box1">
            <span class="button blue">上下平移</span>
        </div>
        <!-- 动画 -->
        <div class="box1">
            <span class="span2"></span>
        </div>
        <div class="box1 div3">
            不傻瓜刷怪怪速度改U公司大概us给丢啊公司度改us给丢啊告诉大哥
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.box1 {
    width: 300px;
    height: 300px;
    text-align: center;
    border: 1px solid red;
    display: table-cell;
    vertical-align: middle;
}

.box1_img {
    width: 200px;
    height: 200px;
    transition: width 2s, height 2s, transform 2s;
    /*退出houer时间后复原*/
    /* -webkit-transform:width 2s,height 2s,-webkit-transform 2s; */
}

.box1_img:hover {
    width: 290px;
    height: 290px;
    /* transition: transform 2s linear 0s;*突然变 */
    transition: width 2s, height 2s, transform 2s;
    /**慢慢改变宽高 */
    /* transform: scale(1.2) rotate(360deg); */
    transform: rotate(360deg)
}

.button {
    display: block;
    width: 180px;
    height: 50px;
    text-decoration: none;
    line-height: 50px;
    color: red;
    font-family: '微软雅黑';
    font-weight: bolder;
    padding-right: 50px;
    margin: 0 auto;
    box-sizing: border-box;
    background: url('../../assets/logo.png') no-repeat 130px 1px;
    transition: 0.3s linear;
    background-size: 35px;
    /* transform: rotate(180deg); */
}

.button:hover {
    background: url('../../assets/logo.png') no-repeat 130px 16px;
    ;
    background-size: 35px;
    border: 2px solid red;
}

.span2 {
    width: 50px;
    height: 50px;
    background-color: red;
    position: relative;
    animation: anim 3s;
    /*不循环*/
    /* animation:anim 3s infinite alternate;循环 */
    display: inline-block;
    /* -webkit-animation: anim 3s; */
}

@keyframes anim {
    0% {
        background: red;
        left: 0px;
        top: 0px;
    }

    25% {
        background: blue;
        left: 100px;
        top: 0px;
    }

    50% {
        background: yellow;
        left: 100px;
        top: 100px;
    }

    75% {
        background: rebeccapurple;
        left: 0;
        top: 100px;
    }

    100% {
        background: red;
        left: 0;
        top: 0;
    }
}

.div3 {
    column-count: 4;
    -webkit-column-count: 4;
    -webkit-column-gap: 10px;
    column-gap: 10px;
    column-rule: 5px outset red;
    /* -webkit-column-rule:5px outset forestgreen; */
}</style>