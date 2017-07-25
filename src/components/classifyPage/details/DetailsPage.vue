<template>
	<div class="DetailsPage">
		<div class="header">
			<div class="back" v-on:click="detailBack"></div>
			<div class="middle">
				<input type="text" placeholder="请输入商品名称 货号"/>
				<p></p>
			</div>
			<!--<div class="menu" @click="screenFn">筛选</div>-->
			<router-link :to="{path:'/screen',query:{teaTitle:teaTitle,teaLists:teaLists}}">
				<div class="menu">筛选</div>
			</router-link>
		</div>
		<div class="theIndex"  @click="cgColor($event)" >
			<!--:class="{redColor: cgCol == 'DIV'}"-->
			<div class="every" v-for="item in theIndex">{{ item }}</div>
			<div class="direction">价格
				<!--<p>价格</p>-->
				<img class="up" :src="up_b"/>
				<img class="down" :src="down_b"/>
			</div>
			<p class="colLine"></p>
			<div class="layout">
				<img :src="picPath1" class="group" v-show="bool" @click="L_group"/>
				<img :src="picPath2" class="list" v-show="!bool" @click="L_group"/>
			</div>
		</div>
		<!--商品列表-->
		<div class="goodsComponents">
			<goods-l v-show="!bool"></goods-l>
			<goods-t v-show="bool"></goods-t>
		</div>
		<!--返回顶部-->
		<div class="goTop" @click="goTop"></div>
	</div>
	
</template>

<script>
	import GoodsL from '../common/GoodsL'
    import GoodsT from '../common/GoodsT'
	export default {
		data() {
			return {
                //接收到上一级传过来的数据
				teaTitle:"",
				teaLists:[],
				//本页面的数据
				theIndex:["最新","销量","更新"],
				bool:true,
				up_b:"../../../../static/img/ClassifyPage/up_b.png",
				down_b:"../../../../static/img/ClassifyPage/down_b.png",
				up_r:"../../../../static/img/ClassifyPage/up_r.png",
				down_r:"../../../../static/img/ClassifyPage/down_r.png",
				picPath1:"../../../../static/img/ClassifyPage/group.png",
				picPath2:"../../../../static/img/ClassifyPage/list.png",


				//
				comeInData:[
					{picSrc:"../../../../static/img/DetailsPage/product.jpg",texts:"传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装",count:0},
                    {picSrc:"../../../../static/img/DetailsPage/product1.jpg",texts:"传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装",count:0},

				],
				cgCol:"",
			}
		},
		components:{
			GoodsL,
            GoodsT
		},
		methods:{
            detailBack:function(){
                this.$router.push({path: history.go(-1)})
            },
			L_group:function(){
				this.bool = !this.bool;
			},
//			screenFn:function(){
//				this.$router.push("/screen");
//
//			},
			goTop:function(){
				document.body.scrollTop = 0;
			},
			//事件委托
            cgColor:function(event){
				var every = document.getElementsByClassName('every');
				var direction = document.getElementsByClassName('direction')[0];
				for(var i =0;i<every.length;i++){
				    every[i].style.color = 'black';
				}
				direction.style.color = 'black';
//				console.log(every);
				event.target.style.color = 'red';

			}
		},
		mounted:function(){
		    var pDatas = this.$route.query;
            var listArr = pDatas.teaLists;
            for(var i = 0;i<listArr.length;i++){
                this.teaLists.push(listArr[i])
            }
            this.teaTitle = pDatas.teaTitle;

		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.DetailsPage
		width 100%
		.redColor
			color red
		.header
			height 1.2rem
			line-height 1.2rem
			text-align center
			position relative
			left 0
			top 0
			border-bottom 0.0333rem solid lightgray
			.back
				position absolute
				left 0
				top 0
				width 1.2rem
				height 1.2rem
				background url('../../../../static/img/ClassifyPage/back.png') no-repeat
				background-position center center
				background-size 50%
			.middle
				position relative
				left 0
				top 0
				width 70%
				margin 0 auto
				/*border 1px solid red*/
				input
					background-color lightgray
					width 100%
					height 0.8rem
					border-radius 0.1333rem
					padding-left 0.2rem
				p
					position absolute
					right 0.1333rem
					top 0.2667rem
					width 0.6666rem
					height 0.6666rem
					/*border 1px solid aqua*/
					background url('../../../../static/img/ClassifyPage/search.png') no-repeat
					background-position center center
					background-size 90%
			.menu
				position absolute
				right 0
				top 0
				width 1.2rem
				height 1.2rem
		.theIndex
			height 1.2rem
			line-height 1.2rem
			border-bottom 0.0333rem solid lightgray
			display flex
			text-align center
			font-size 0.4rem
			.every
				flex-basis 20%
				/*border 1px solid red*/
			.direction
				flex-basis 20%
				/*border-right 0.0333rem solid red*/
				position relative
				left 0
				top 0
				.up
					/*border 1px solid red*/
					position absolute
					right 10%
					top 33%
					width 15%
					height 25%
					img
						display inline-block
						width 100%
				.down
					/*border 1px solid red*/
					position absolute
					right 10%
					bottom 25%
					width 15%
					height 25%
			.colLine
				height 0.8rem
				margin-top 0.2rem
				margin-left 0.2rem
				border 1px solid lightgray
			.layout
				flex-basis 20%
				img
					display inline-block
				.group
					/*display none*/
					width 0.8rem
					height 0.8rem
				.list
					/*display none*/
					width 0.8rem
					height 0.8rem
		.goTop
			z-index 100
			width 1.5rem
			height 1.5rem
			border-radius 50%
			position fixed
			right 0.2rem
			bottom 2rem
			background url('../../../../static/img/ClassifyPage/goTop.png') no-repeat
			background-position center center
			background-size 100%
			background-color rgba(0,0,0,0.4)
		//商品组件列表
		/*.goodsComponents*/
			/*background-color lightgray*/
				
</style>