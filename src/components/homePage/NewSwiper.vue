<template>
<div class="myswiper">
	<swiper :options="swiperOption">
	<!--轮播图-->
   	<swiper-slide v-for="slide in banners" >
   		<ul >
   			<li v-for=" (k,index) in slide">
   				<div class="add_product" >
					<div class="pro_pic"><router-link :to="{path:'/details',params:{title:k.title}}"><img :src="k.img"/></router-link></div>
					<div @click="sendFn(k.title)"><span>{{k.title}}</span></div>
					<div>
						<div><span>{{k.cost}}</span><span>{{k.cost2}}</span></div>
						<router-link to="/"><img src="../../../static/homePage/index_flow.png" @click="cartBtn(index)"/></router-link>
					</div>
				</div>
   			</li>
   		</ul>
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
		props:['banners'],
		data() {
	      return {
	        swiperOption: {
	          setWrapperSize :true,
	          pagination : '.swiper-pagination',
	          paginationClickable :true,
	          observeParents:true,
	          loop: true,
	        }
	      }
	  },		
		components: {
		    swiper,
		    swiperSlide
		 },
		 methods:{
		 	sendFn(title){
		 		this.$router.push({name:'/',params:{title:title}});
		 	},
			 cartBtn(index){

			 }
		 }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 swiper-slide
	ul
		display flex
		margin 0
		padding 0
		list-style none
		li
			flex 1
			margin-left 1%
			.add_product
				width 100%
				div:nth-child(1)
					a
						img
							width 100%
				div:nth-child(2)
					width 93%
					margin auto
					border-bottom 0.0133rem solid #eeeeee
					span
						color #686868
						font-size 0.32rem
						display block
						width 100%
						padding 0.1866rem 0 0.266rem
						/*text-align center*/
				div:last-child		
					position relative
					height 1.2rem
					div:nth-child(1)
						position absolute
						width 1.5333rem
						left 0.1733rem
						top 0.2666rem
						span:nth-child(1)
							display block
							font-size 0.3733rem
							font-weight bold
							color #E71F19
						span:last-child
							color #999999
							font-size 0.24rem
							text-decoration line-through
					a:nth-child(2)
						position absolute 
						width 0.7066rem
						height 0.7066rem
						right 0.1466rem
						top 0.2666rem
						background-color #e71f19
						border-radius 50%
						img
							width 100%
.myswiper
	div
		z-index 0					
</style>