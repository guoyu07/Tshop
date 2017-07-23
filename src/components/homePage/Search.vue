<template>
	<div>
		<div class="header">
	     		<router-link to="/classify"><img src="../../../static/homePage/classify_icon.png"/></router-link>
	     		<span>茶叶电子专柜</span>
	     		<router-link to="/classify"><img src="../../../static/homePage/cart_icon.png"/></router-link>
	     </div>
	    <div class="back">
	     	<span>关键搜索</span>
	     	<div>
	     		<router-link to="/">
	     			<img src="../../../static/homePage/close.png" alt="" />
	     		</router-link>
	     	</div>
	    </div>
		<div class="SearchBox">
			<div class="box">
				<span>宝贝</span><span>店铺</span>	
			</div>
			<div class="search">
     			<router-link to="/Search">
     				<input type="text" placeholder="请输入你所搜索的商品"/>
     				<img src="../../../static/homePage/icosousuo.png"/>
     			</router-link>
     		</div>
		     <div class="recordBox">
		     	<span>搜索记录</span>
		     	<span class="del"><img src="../../../static/homePage/close.png" alt="" />删除</span>
		     	<div class="record">
		     		<span v-for="x in recordArr">{{x.title}}</span>
		     	</div>
		     </div>
		     <div class="hotBox">
		     	<div class="hot">热门搜索</div>
		     	<div>
		     		<span v-for="i in hotArr">{{i.title}}</span>
		     	</div>
		     </div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data:function(){
			return {
				recordArr:[],
				hotArr:[
					{'title':'红茶'},
					{'title':'绿茶'},
					{'title':'普洱茶'},
					{'title':'白茶'},
					{'title':'茶具'},
					{'title':'茶服'}],
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.header
		background-color #e31939
		height 1.2133rem
		line-height 1.2133rem
		text-align center
		a
			float left		
			img
				width 0.7066rem 
				height 0.7066rem	
				vertical-align middle		
		span
			font-size 0.48rem
			color white
			text-align center
		a:nth-child(1)
			float left
			padding-left 0.4rem	
		a:last-child
			float right
			padding-right 0.4rem	
	.back
		text-align center
		position relative
		span
			font-size 0.5rem	
		div
			right 0.2rem
			top 0.15rem
			position absolute
			width 0.5rem
			img
				display block
				width 100%
	.SearchBox
		padding 0.5rem
		.box
			span
				font-size 0.4rem
				/*color #fff*/
				/*background-color #e31939*/
				padding 0.2rem
				display inline-block
				
		.search
			width 100%
			border 5px solid #e31939
			position relative
			margin-bottom 0.5rem
			input
				width 90%
				font-size 0.3733rem
				color #999999
				padding 0.2833rem 
				/*border 0*/
			img
				position absolute
				width 0.76rem
				height 0.72rem
				right 1%
				top 20%
		.recordBox
			font-size 0.5rem
			padding 0.2rem
			span:nth-child(2)
				font-size 0.3rem
				padding 0.1rem
				border 1px solid #000
				float right
				margin-right 0.1rem
			img
				width 0.3rem
				padding-bottom 0.05rem
			.record
				span
					margin 0 0.1rem
					border 1px solid #000
					font-size 0.3rem
					border-radius 8px
					padding 0.1rem
		.hotBox
			padding 0.2rem
			font-size 0.5rem
			.hot
				margin 0.2rem 0 0.4rem
			span
				margin 0 0.1rem
				border 1px solid #000
				font-size 0.3rem
				border-radius 8px
				padding 0.1rem
</style>