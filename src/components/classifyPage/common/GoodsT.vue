<template>
	<!--商品列表-->
	<ul class="goodsList">
		<li class="eachGood" v-for="(v,k) in comeInData">
			<div class="part_1">
				<div class="HNB"></div>
				<div class="goods_images">
					<img :src="v.picSrc">
				</div>
			</div>
			<div class="part_2">
				<dl class="goodsTexts">
					<dt>大益茶庭 T36 普洱熟茶（中）解块散茶 100...</dt>
					<dd><i>&yen;79.00</i>
						<em>&yen;94.80</em></dd>
				</dl>
				<div class="goods_number">
					<div class="ui-number">
						<span class="decrease" @click="dec(k)">-</span>
						<input class="count" type="text" v-bind:value="v.count" >
						<span class="increase" @click="add(k)">+</span>
					</div>
					<div class="shopCar"></div>
				</div>

			</div>
		</li>
	</ul>
</template>

<script>
    export default {
        data() {
            return {
                comeInData:[
                    {picSrc:"../../../../static/img/DetailsPage/product.jpg",texts:"传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装",count:0},
                    {picSrc:"../../../../static/img/DetailsPage/product1.jpg",texts:"传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装",count:0},
                    {picSrc:"../../../../static/img/DetailsPage/product.jpg",texts:"传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装",count:0},
                    {picSrc:"../../../../static/img/DetailsPage/product1.jpg",texts:"传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装",count:0},
                ],
            }
        },
//		props:["teaType"],
        methods:{
            dec:function(ind){
                this.comeInData[ind].count < 1 ? this.comeInData[ind].count = 0 : this.comeInData[ind].count--;
            },
            add:function(ind){
                this.comeInData[ind].count++;
            }
        },
        mounted:function(){

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	/*@import "/static/css/font/iconfont.css"*/
	//商品列表
	.goodsList
		display flex
		flex-wrap wrap
		width 98%
		margin 0 auto
		margin-top 0.3333rem
		display flex
		background-color lightgray
		.eachGood
			flex-basis 47.5%
			margin 0.1222rem
			background-color #fff
			.part_1
				position relative
				left 0
				top 0
				margin-bottom 0.3rem
				.HNB
					position absolute
					left 0
					top 0
					width 1rem
					height 1rem
					background url('../../../../static/img/DetailsPage/HNB.png') no-repeat
					background-position center center
					background-size 100%
				.goods_images
					img
						display inline-block
						width 100%
			.part_2
				flex-basis 70%
				margin-left 0.2rem
				.goodsTexts
					dt
						color #666
						font-size 0.4rem
					dd
						margin 0.3rem 0
						i
							color red
							font-size 0.45rem
						em
							color #666
							font-size 0.3rem
							text-decoration line-through
				.goods_number
					position relative
					left 0
					top 0
					height 1rem
					.ui-number
						position absolute
						left 0
						.decrease
							border 1px solid #666
							display inline-block
							width 0.7rem
							height 0.7rem
							line-height 0.7rem
							font-size 0.5rem
							text-align center
							margin-right -0.0666rem
						.count
							border-top 1px solid #666
							border-bottom 1px solid #666
							display inline-block
							width 1.5rem
							height 0.7rem
							color #666
							line-height 0.7rem
							font-size 0.5rem
							text-align center
						.increase
							border 1px solid #666
							display inline-block
							width 0.7rem
							height 0.7rem
							line-height 0.7rem
							font-size 0.5rem
							text-align center
							margin-left -0.0666rem
					.shopCar
						position absolute
						right 0.2rem
						width 0.8rem
						height 0.8rem
						border-radius 50%
						background url('../../../../static/img/DetailsPage/index_flow.png') no-repeat
						background-position center center
						background-color red
						background-size 100%




</style>