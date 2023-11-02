<template>
    <div id="app">
        <p>自动轮播</p>
        <div class="banner-container">
            <div class="banner-img-container">
                <img src="../../assets/img01.gif" alt="">
                <img src="../../assets/img02.png" alt="">
                <img src="../../assets/img03.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>
<style scoped>
/* 自动轮播 */
.banner-container{
    width:600px;
    height: 300px;
    /* margin 0 auto;轮播居中 */
    overflow:hidden;
    position:relative;
}
.banner-container .banner-img-container{
    width: 1800px;
    height: 300px;
    overflow:hidden;
    position:absolute;
    display:flex;
    animation:run 10s ease infinite;
}
.banner-container .banner-img-container img{
    width: 600px;
    height: 100%;
}
@keyframes run {
	0%,25%{
		/* margin-left: 0; */
		transform: translateX(0);
	}
	25%,55%{
		/* margin-left: -1200px;; */
		transform: translateX(-600px);
	}
	55%,85%{
		/* margin-left: -2400px; */
		transform: translateX(-1200px);
	}
	85%,100%{
		/* margin-left: 0; */
		transform: translateX(0);
	}
}
</style>
