<template>
    <div>
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
    ;
    /* display: grid;
    grid-gap: 10px;
    grid-auto-rows: minmax(120px, auto);
    grid-auto-flow: dense; */
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

.borderred{
    span{
        border:1px solid lawngreen;
        &:hover{
            color: red;
        }    
    }
}
</style>