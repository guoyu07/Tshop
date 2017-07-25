<template>
	<div class="limit_time">
		<div class="header">
			<p><i class="iconfont icon-xiaoyuhao" @click="backFn"></i></p><p><span>{{title}}</span></p><p><i class="iconfont icon-gengduoanniu" @click="menuFn"></i></p>
		</div>
		<div class="limit_img">
			<img src="../../../static/homePage/limit.png"/>
		</div>
		<p>——————— 亲，已经没有东西了哦！ ———————</p>
		<!--菜单-->
		<div class="menuBox" v-show="bool" >
			<div class="sanjiao"></div>
			<div class="powers">
				<div class="toHome" @click="comeIndex">
					<span class="bgH"></span>
					<span class="fontsH">首页</span>
				</div>
				<div class="toClassify" @click="comeClass">
					<span class="bgCl"></span>
					<span class="fontCl">分类</span>
				</div>
				<div class="toCar" @click="comeCart">
					<span class="bgCa" ></span>
					<span class="fontCa">购物车</span>
				</div>
				<div class="toMine" @click="comeMy">
					<span class="bgM"></span>
					<span class="fontM">我的</span>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default{
		data:function(){
			return {
				title:'限时抢购',
                bool:false,
			}
		},
		methods:{
		    backFn(){
		        this.$router.push({name:'/'})
			},
            menuFn:function(){
                this.bool = !this.bool;
            },
            comeIndex(){
                this.$router.push({name:'HomePage'})
			},
            comeClass(){
                this.$router.push({name:'ClassifyPage'})
			},
            comeCart(){
                this.$router.push({name:'CarPage'})
			},
            comeMy(){
                this.$router.push({name:'MinePage'})
			}
		},

	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import "/static/css/font/iconfont.css"
.limit_time
	.header
		display flex
		height 1.2rem
		line-height 1.2rem
		p
			flex 1

			i
				font-size 0.44rem
				color: #363636
			span
				color: #363636
				font-size 0.44rem
		p:nth-child(1)
			text-align left
			padding-left 0.356rem
		p:last-child
			text-align right

	.limit_img
		border-bottom 0.08rem solid #996ce6
		img
			width 100%
	p
		height 1.3733rem
		line-height 1.3733rem
		text-align center					
		font-size 0.36rem
		color #adadad
	/*菜单*/
	.menuBox
		position absolute
		right 0
		top 1.2rem
		background-color rgba(0,0,0,0.8)
		width 25%
		z-index 10
		.sanjiao
			position absolute
			right 14%
			top -0.3333rem
			width 0
			height 0
			border-left 0.2666rem solid transparent
			border-right 0.2666rem solid transparent
			border-bottom 0.3333rem solid rgba(0,0,0,0.8)
		.powers
			color lightgray
			.toHome
				position relative
				padding 0.1666rem 0.1333rem
				border-bottom 1px solid lightgray
				.bgH
					position absolute
					left 5%
					top 0.1666rem
					display inline-block
					width 0.7rem
					height 0.7rem
					background url('/static/img/ClassifyPage/homes.png') no-repeat
					background-position center center
					background-size 90%
				.fontsH
					font-size 0.4rem
					display inline-block
					margin-left 0.85rem
					margin-bottom:0.2rem
					margin-top:0.1666rem
			.toClassify
				position relative
				padding 0.1666rem 0.1333rem
				border-bottom 1px solid lightgray
				.bgCl
					display inline-block
					width 0.7rem
					height 0.7rem
					background url('/static/img/ClassifyPage/classify.png') no-repeat
					background-position center center
					background-size 120%
				.fontCl
					position absolute
					left 0
					top 0.3rem
					font-size 0.4rem
					display inline-block
					margin-left 1rem
			.toCar
				position relative
				padding 0.1666rem 0.1333rem
				border-bottom 1px solid lightgray
				.bgCa
					display inline-block
					width 0.7rem
					height 0.7rem
					background url('/static/img/ClassifyPage/shopCar.png') no-repeat
					background-position center center
					background-size 90%
				.fontCa
					position absolute
					left 0
					top 0.3rem
					font-size 0.4rem
					display inline-block
					margin-left 1rem
			.toMine
				position relative
				padding 0.1666rem 0.1333rem
				border-bottom 1px solid lightgray
				.bgM
					display inline-block
					width 0.7rem
					height 0.7rem
					background url('/static/img/ClassifyPage/my.png') no-repeat
					background-position center center
					background-size 90%
				.fontM
					position absolute
					left 0
					top 0.3rem
					font-size 0.4rem
					display inline-block
					margin-left 1rem


</style>