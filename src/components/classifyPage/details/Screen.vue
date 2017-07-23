<template>
	<div class="ScreenPage">
		<div class="header">
			<div class="back" v-on:click="screenBack"></div>
			<div class="cliTitle">{{cliTitle}}</div>
		</div>
		<div class="classify">
			<p class="classify_L">分类</p>
			<div class="classify_R">
				<div class="comDiv" v-show="bool" @click="cgBoolFn">
					<span>收起</span>
					<img :src="path1" alt="" />
				</div>
				<div class="comDiv" v-show="!bool" @click="cgBoolFn">
					<span @click="cgBoolFn">展开</span>
					<img :src="path2" alt="" />
				</div>
			</div>
		</div>
		<div class="checkBox" v-show="bool">
			<div class="checkBy">{{ checkTitle }}</div>
			<div class="teaList" v-for="item in teaLists">{{ item }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				cliTitle:"筛选",
				checkTitle:"",
				path1:"../../../../static/img/ClassifyPage/upArr.png",
				path2:"../../../../static/img/ClassifyPage/downArr.png",
				bool:true,
				teaLists:[],
			}
		},
		methods:{
            screenBack:function(){
                this.$router.push({path: history.go(-1)})
            },
			cgBoolFn:function(){
				this.bool = !this.bool
			}
		},
        mounted:function(){
            var pDatas = this.$route.query;
            var listArr = pDatas.teaLists
            for(var i = 0;i<listArr.length;i++){
                this.teaLists.push(listArr[i])
            }
            this.checkTitle = pDatas.teaTitle;


        }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.ScreenPage
		width 100%
		.header
			height 1.2rem
			line-height 1.2rem
			position relative
			left 0
			top 0
			border-bottom 0.0333rem solid lightgray
			.cliTitle
				margin-left 0.8rem
				font-size 0.45rem
			.back
				position absolute
				left 0
				top 0
				width 1.2rem
				height 1.2rem
				background url('../../../../static/img/ClassifyPage/back.png') no-repeat
				background-position center center
				background-size 50%
		.classify
			position relative
			left 0
			top 0
			width 100%
			height 1.2rem
			border-bottom 0.0333rem solid lightgray
			.classify_L
				position absolute
				left 0.25rem
				top 0
				height 1.2rem
				line-height 1.2rem
				font-size 0.4rem
			.classify_R
				.comDiv
					position absolute
					right 0
					top 0
					height 1.2rem
					line-height 1.2rem
					font-size 0.3rem
					img
						width 30%
		.checkBox
			/*border 1px solid red*/
			.checkBy
				margin 0 auto
				width 88%
				height 1.2rem
				line-height 1.2rem
				font-size 0.35rem
				color red
				margin-left 0.6rem
				border-bottom 0.0333rem solid lightgray
			.teaList
				margin 0 auto
				width 85%
				height 1.2rem
				line-height 1.2rem
				font-size 0.35rem
				color gray
				margin-left 0.9rem
				border-bottom 0.0333rem solid lightgray
</style>