<template>
  <div style="display:initial;">
    <!-- hover旋转1 -->
       <div class="box1 red">
            <img class="box1_img" src="../assets/img01.gif" alt="hover旋转"/>
       </div>
    <!--hover上下移动  -->
       <div class="box1">
            <span class="button blue">上下平移</span>
       </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .box1{
        width: 300px;
        height: 300px;
        text-align: center;
        border:1px solid red;
        display:table-cell;
        vertical-align: middle;
    }
    .box1_img{
        width: 200px;
    }
    .box1_img:hover{
        transition: transform 2s linear 0s;
            transform: scale(1.2) rotate(360deg);
    }

    .button{
        display:block;
        width: 180px;
        height: 50px;
        text-decoration:none;
        line-height: 50px;
        color:red;
        font-family: '微软雅黑';
        font-weight:bolder;
        padding-right: 50px;
        margin:0 auto;
        box-sizing:border-box;
        background:url('../assets/logo.png') no-repeat 130px 1px;
        transition:0.3s linear;
        background-size:35px;
        /* transform: rotate(180deg); */
    }
    .button:hover{
        background:url('../assets/logo.png') no-repeat 130px 16px;;
        background-size:35px;
        border:2px solid blue;
    }
</style>