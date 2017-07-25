<template>
	<!--轮播图-->
		<div class="myswiper">
			<swiper :options="swiperOption" class="myswiperWrap">
		      <swiper-slide v-for="slide in detailsSwiper" class="myswiperImgBox">
		      	<img :src="slide" />
		      </swiper-slide>
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
		props:['detailsSwiper'],
		data() {
	      return {
	        swiperOption: {
	          autoplay: 3500,
	          setWrapperSize :true,
	          pagination : '.swiper-pagination',
	          paginationClickable :true,
	          mousewheelControl : true,
	          observeParents:true,
	        }
	      }
	    },
	    components:{
			swiper,
		    swiperSlide,
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 swiper-slide
	img
		width 100% 
		height 7.5rem
</style>