<template>
	<div class="ClassifyPage">
		<!--菜单-->
		<div class="menuBox" v-show="bool">
			<div class="sanjiao"></div>
			<div class="powers">
				<div class="toHome">
					<span class="bgH"></span>
					<span class="fontsH">首页</span>
				</div>
				<div class="toClassify">
					<span class="bgCl"></span>
					<span class="fontCl">分类</span>
				</div>
				<div class="toCar">
					<span class="bgCa"></span>
					<span class="fontCa">购物车</span>
				</div>
				<div class="toMine">
					<span class="bgM"></span>
					<span class="fontM">我的</span>
				</div>
			</div>
		</div>
		<!--头部-->
		<div class="header">
			<div class="back" @click="backFn"></div>
			<div class="pgTitle">{{ pgTitle }}</div>
			<div class="menu" @click="menuFn"></div>
		</div>
		<!--分类内容-->
		<div class="ClaMain">
			<div class="ClaMain_left">
				<router-link v-for="(v,k) in classifys" :to="v.path">
					<div class="theSame" @click="themeFn(k)">{{ v.theme }}</div>
				</router-link>
			</div>
			<div class="ClaMain_right">
				<router-view></router-view>
			</div>
		</div>
		<div class="text"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pgTitle:"全部分类",
				classifys:[
					{path:"/classify/flowerT",theme:"花茶"},
					{path:"/classify/sixT",theme:"六大茶山"},
					{path:"/classify/puerT",theme:"大益普洱茶"},
					{path:"/classify/middleT",theme:"中茶"},
					{path:"/classify/yusanT",theme:"瑜山日照绿"},
					{path:"/classify/windT",theme:"风牌红茶"},
					{path:"/classify/goldT",theme:"金灶"},
				],
				bool:false,
			}
		},
		methods:{
			menuFn:function(){
				this.bool = !this.bool;
			},
			backFn:function(){
				this.$router.push("/home");
			},
			themeFn:function(index){
//				console.log(this.classifys)
			}
		},
		mounted: function () {
            console.log("1")
        }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.ClassifyPage
		width 100%
		position relative
		left 0
		top 0
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
						top 0.1rem
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
						top 0.2333rem
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
						top 0.2333rem
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
						top 0.2333rem
						font-size 0.4rem
						display inline-block
						margin-left 1rem
				
		/*头部*/
		.header
			height 1.2rem
			line-height 1.2rem
			/*background-color red*/
			text-align center
			position relative
			left 0
			top 0
			.back
				position absolute
				left 0
				top 0
				width 1.2rem
				height 1.2rem
				background url('/static/img/ClassifyPage/back.png') no-repeat
				background-position center center
				background-size 50%
			.pgTitle
				font-size 0.5066rem
				color #333333
			.menu
				position absolute
				right 0
				top 0
				width 1.2rem
				height 1.2rem
				background url('/static/img/ClassifyPage/menu.png') no-repeat
				background-position center center
				background-size 100%
		/*分类内容*/
		.ClaMain
			position relative
			left 0
			top 0
			background-color #f5f5f5
			.ClaMain_left
				position absolute
				left 0
				top 0
				width 25%
				height: 22.6666rem
				/*border 1px solid red*/ 
				text-align center
				.theSame
					border-top 0.0333rem solid #f5f5f5
					border-bottom 0.0333rem solid #f5f5f5
					font-size 0.45rem
					padding 0.4666rem 0
				>div:nth-child(1)
					border-top 0.0666rem solid #f5f5f5
			.ClaMain_right
				position absolute
				right 0
				top 0
				width 75%
				height: 22.6666rem
				/*border 1px solid aqua*/
				background-color #f5f5f5
				.msg
					width 90%
					height 0.9333rem
					line-height 0.9333rem
					text-align center
					background-color #e71f19
					border-radius 0.1333rem
					margin 3.5% auto
					font-size 0.4rem
					color #fff
		.text
			height: 0.3333rem
			color #fff
</style>