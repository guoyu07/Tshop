<template>
<div class="myswiper">
	<swiper :options="swiperOption">
	<!--轮播图-->
   	<swiper-slide v-for="slide in banners">
   		<ul>
   			<li v-for="item in slide" :key="item.id">
   				<div class="add_product" >
					<div class="pro_pic">
						<router-link :to="{path:'/theGoods',params:{title:item.title}}">
							<img :src="item.src"/>
						</router-link></div>
					<div @click="sendFn(item.title)">
						<span>{{item.title}}</span>
					</div>
					<div>
						<div>
							<span>{{item.price}}</span>
							<span>{{item.pre_price}}</span>
						</div>
						<div @click="addCar(item)">
							<img src="/static/homePage/index_flow.png"/>
						</div>
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
	import axios from 'axios'
	import VueAwesomeSwiper from 'vue-awesome-swiper'

	Vue.use(VueAwesomeSwiper)

	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		data: function () {
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
		props: ['banners'],
		components: {
		    swiper,
		    swiperSlide
		 },
		methods: {
			sendFn(title){
				this.$router.push({name:'/theGoods',params:{title:title}});
			},
            addCar(item){
			    alert("已添加进购物车")
				this.$store.commit('insertCar', item);
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
			margin 0 1%
			.add_product
				width 100%
				div:nth-child(1)
					a
						img
							width 100%
				div:nth-child(2)
					width 93%
					height 2rem
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
						span:nth-child(1)
							display block
							font-size 0.3733rem
							font-weight bold
							color #E71F19
						span:last-child
							color #999999
							font-size 0.24rem
							text-decoration line-through
					div:nth-child(2)
						position absolute 
						width 0.7066rem
						height 0.7066rem
						right 0.1466rem
						background-color #e71f19
						border-radius 50%
						img
							width 100%
.myswiper
	div
		z-index 0					
</style>