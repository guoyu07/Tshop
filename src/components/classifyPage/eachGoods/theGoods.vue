<template>
	<div class="ClassifyPage">
		<!--头部-->
		<goods-header v-bind:tetles = "tetles" v-bind:myCount = "myCount" v-bind:i = "i"></goods-header>
		<!--轮播图-->
		<goods-swiper v-bind:detailsSwiper = "detailsSwiper"></goods-swiper>
		<!--中部-->
		<div class="middle">
			<div class="middle_1">
				<div class="texts">{{texts}}</div>
				<div class="share" @click="shareAfterLogin">
					<div><img src="../../../../static/img/DetailsPage/share.png"/>
					<p>分享</p>
					</div>
				</div>
			</div>
			<div class="middle_2">
				<div class="price">&yen;{{ price }}</div>
				<span>&yen;{{ pre_price }}</span>
				<span>赠送积分：{{ jifen }}</span>
			</div>
			<div class="middle_3">
				<div v-for="i in middle_3data">{{ i }}</div>
			</div>
			<div class="middle_4">
				<div class="vip" @click = "vipPopup">
					<span>会员等级价格</span>
					<span>></span>
				</div>
				<div class="canshu" @click = "argPopup">
					<span>产品参数</span>
					<span>></span>
				</div>
				<div class="checks" @click = "toMaps">
					<span>查看自提点</span>
					<span>></span>
				</div>
			</div>
		</div>
		<!--底部-->
		<goods-footer v-bind:footer_1 = "footer_1" v-bind:myCount = "myCount"></goods-footer>
		<!--弹窗-->
		<vip-popup v-show="popLock"></vip-popup>
		<arg-popup v-show="argPopLock"></arg-popup>
	</div>
</template>

<script>
import GoodsSwiper from "../common/GoodsSwiper"
import GoodsFooter from "../common/GoodsFooter"
import GoodsHeader from "../common/GoodsHeader"
import VipPopup from "../common/VipPopup"
import ArgPopup from "../common/ArgPopup"
    export default {
        data() {
            return {
                pgTitle:"全部分类",
                bool:false,
                tetles:["商品","详情","评价"],
                myCount:0,
                i:0,
                detailsSwiper:["../../../../static/img/DetailsPage/product.jpg","../../../../static/img/DetailsPage/product1.jpg","../../../../static/img/DetailsPage/product.jpg","../../../../static/img/DetailsPage/product1.jpg"],
                texts:"KAMJOVE/金灶 E-400食品级304不锈钢电热水壶全钢电茶壶烧水壶煮",
                price:"69.00",
                pre_price:"82.00",
                jifen:"66",
                middle_3data:["折扣：8.4折","5人评价","541人已购"],
                footer_1:[
                	{picSrc:"../../../../static/img/DetailsPage/index.png",powers:"首页"},
                	{picSrc:"../../../../static/img/DetailsPage/server.png",powers:"客服"},
                	{picSrc:"../../../../static/img/DetailsPage/save.png",powers:"收藏"}
                ],
                saveClock:true
            }
        },
        methods:{
            //事件提交
            vipPopup:function(){
                this.$store.commit('vipPopup')
			},
            argPopup:function(){
                this.$store.commit('argPopup')
			},
            shareAfterLogin:function(){
                this.$router.push("/login")
			},
            toMaps:function(){
                this.$router.push("/BaiDu")
			}
        },
        components:{
			GoodsSwiper,
			GoodsFooter,
			GoodsHeader,
            VipPopup,
            ArgPopup
		},
		computed:{
            popLock(){
                return this.$store.state.popLock
			},
            argPopLock(){
                return this.$store.state.argPopLock
			}
		}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.bg
		border-left 0.0666rem solid #e71f19
		color: #e71f19
		background-color #f5f5f5
	.ClassifyPage
		width 100%
		position fixed
		left 0
		top 0
		.middle
			.middle_1
				width 100%
				display flex
				padding 0.15rem 0rem 0.15rem 0.2rem
				color #333333
				.texts
					flex-basis 80%
					width 80%
					font-size 0.45rem
					padding 0.2rem 0.2rem
					padding-right 0.5rem
				.share
					border-left 0.0333rem solid lightgray
					flex-basis 20%
					width 20%
					position relative
					div
						width 45%
						position absolute
						left 0
						right 0
						top 0
						bottom 0
						margin auto
						img
							display inline-block
							width 95%
							height 60%
						p
							width 100%
							height 40%
							line-height 0.5rem
							text-align center
			.middle_2
				padding-left 0.5rem
				.price
					color red
					font-size 0.6rem
					margin 0.1333rem 0
				span
					display inline-block
				span:nth-child(2)
					color #8f8f8f
					text-decoration line-through
					margin-bottom 0.1333rem
					margin-right 0.2rem
				span:nth-child(3)
					color #fff
					background-color red
					padding 0.0333rem 0.0666rem
			.middle_3
				padding-left 0.5rem
				padding-right 0.5rem
				display flex
				font-size 0.35rem
				margin 0.25rem auto
				div
					flex-basis 33.3333%
				div:nth-child(2)
					text-align center
				div:nth-child(3)
					text-align right
			.middle_4
				background-color #eeeeee
				padding 0.15rem 0
				.vip
					width 100%
					height 1.1rem
					line-height 1.1rem
					background-color #fff
					padding 0 0.5rem
					font-size 0.38rem
					color #8f8f8f
					display flex
					span:nth-child(1)
						flex-basis 50%
					span:nth-child(2)
						flex-basis 50%
						text-align right
				.canshu
					width 100%
					height 1.1rem
					line-height 1.1rem
					background-color #fff
					padding 0 0.5rem
					margin-top 0.15rem
					font-size 0.38rem
					color #8f8f8f
					display flex
					span:nth-child(1)
						flex-basis 50%
					span:nth-child(2)
						flex-basis 50%
						text-align right
				.checks
					width 100%
					height 1.1rem
					line-height 1.1rem
					background-color #fff
					padding 0 0.5rem
					margin-top 0.15rem
					font-size 0.38rem
					color #8f8f8f
					display flex
					span:nth-child(1)
						flex-basis 50%
					span:nth-child(2)
						flex-basis 50%
						text-align right
		/*底部*/

</style>