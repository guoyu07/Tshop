<template>
	<div class="flowerT">
		<router-link :to="{path:path,query:{teaTitle:theClass,teaLists:toFlowerT}}">
			<div class="toFlowerT">{{titles}}</div>
		</router-link>
		<router-link :to="path">
			<div class="list" v-for="item in toFlowerT">{{item}}</div>
		</router-link>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				titles:"进入花茶频道  >",
				path:"/details",

				//传递给下一级的数据
				theClass:"花茶",
				toFlowerT:["花草茶","中药调饮"],

			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.flowerT
		position absolute
		right 0
		top 0
		width 100%
		height: 22.6666rem
		/*border 1px solid aqua*/
		background-color #f5f5f5
		.toFlowerT
			width 90%
			height 0.9333rem
			line-height 0.9333rem
			text-align center
			background-color #e71f19
			border-radius 0.1333rem
			margin 4% auto
			font-size 0.4rem
			color #fff
		.list
			/*border 1px solid red*/
			color gray
			width 90%
			margin 0 auto
			margin-bottom 0.3333rem
			font-size 0.4rem
			
</style>