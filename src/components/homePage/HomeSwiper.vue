<template>
<div class="myswiper">
<swiper :options="swiperOption">
	<!--轮播图-->
    	<swiper-slide v-for="slide in banner" >
    		<img :src="slide"/>
    </swiper-slide>
    <!--点-->
    <div class="swiper-pagination" slot="pagination"></div>
 	</swiper> 	  	
</div>
</template>

<script>
	import Vue from 'vue'
	import VueAwesomeSwiper from 'vue-awesome-swiper'
	Vue.use(VueAwesomeSwiper)
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		props:['banner'],
		data() {
	      return {
	        swiperOption: {
	          autoplay: 3500,
	          setWrapperSize :true,
	          pagination : '.swiper-pagination',
	          paginationClickable :true,
	          mousewheelControl : false,
	          observeParents:true,
	          loop: true
	        }
	      }
	  	},
		components: {
		    swiper,
		    swiperSlide
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 swiper-slide
	img
		width 100% 
		height 5.0667rem
	
</style>