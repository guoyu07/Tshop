<template>
	<div>
		<div class="header">
			<div class="back" @click="backFn"></div>
			<div class="titleBox">
				<div class="title" v-for="(title,index) in tetles" @click="titleFn(index)" :class="{cgTitle: index == i}">{{title}}</div>
			</div>
			<div class="myCar">
				<p class="myCount">{{ myCount }}</p>
			</div>
			<div class="menu" @click="menuFn"></div>
		</div>
		<!--菜单-->
		<div class="menuBox" v-show="bool">
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
					<span class="bgCa"></span>
					<span class="fontCa">购物车</span>
				</div>
				<div class="toMine"  @click="comeMy">
					<span class="bgM"></span>
					<span class="fontM">我的</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:['tetles',"i"],
		data(){
			return {
				bool:false,
			}
		},
		methods:{
            backFn:function(){
                this.$router.push({path: history.go(-1)})
            },
            menuFn:function(){
                this.bool = !this.bool;
            },
            titleFn:function(ind){
                this.i = ind;
                if(ind == 1){
                    this.$router.push("/theDetails")
                }else if(ind == 2){
                    this.$router.push("/mine")
                }
            },
            comeIndex(){
                this.$router.push("/")
            },
            comeClass(){
                this.$router.push("/classify")
            },
            comeCart(){
                this.$router.push("/car")
            },
            comeMy(){
                this.$router.push("/mine")
            },
		},
		computed:{
            myCount () {
                return this.$store.state.myCount
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.menuBox
		position absolute
		right 0
		top 1.2rem
		background-color rgba(0,0,0,0.8)
		width 25%
		z-index 200
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
	/*头部*/
	.cgTitle
		color red
		border-bottom 0.0333rem solid red
	.header
		height 1.2rem
		line-height 1.2rem
		/*background-color red*/
		text-align center
		position relative
		left 0
		top 0
		background-color #f6f6f6
		z-index 50
		.back
			position absolute
			left 0
			top 0
			width 1.2rem
			height 1.2rem
			background url('/static/img/ClassifyPage/back.png') no-repeat
			background-position center center
			background-size 50%
		.titleBox
			/*border 1px solid red*/
			position absolute
			left 1.45rem
			top 0
			width 60%
			display flex
			.title
				flex-basis 33.3333%
		.myCar
			/*border 1px solid aqua*/
			position absolute
			right 1.2rem
			top 0
			width 1.2rem
			height 1.2rem
			background url('/static/img/ClassifyPage/grayCar.png') no-repeat
			background-position center center
			background-size 60%
			.myCount
				position absolute
				right 0.2rem
				top 0.2rem
				width 0.4rem
				height 0.4rem
				line-height 0.4rem
				border-radius 50%
				color #fff
				background-color red
				font-size 0.3rem
		.menu
			position absolute
			right 0
			top 0
			width 1.2rem
			height 1.2rem
			background url('/static/img/ClassifyPage/menu.png') no-repeat
			background-position center center
			background-size 100%
</style>