<template>
	<div class="add_product" >
		<div class="pro_pic"><router-link :to="{path:'/theGoods',params:{title:allmes.title}}"><img :src="allmes.img"/></router-link></div>
		<div @click="serdFn(allmes.title)"><span>{{allmes.title}}</span></div>
		<div>
				<div><span>{{allmes.cost}}</span><span>{{allmes.cost2}}</span></div>
				<a @click="showFn(allmes)"><img src="../../../static/homePage/index_flow.png" /></a>
		</div>
	</div>
</template>

<script>
	export default {
		props:['allmes'],
		data() {
	      return {
	      }
	  },		
		components: {
		    
		 },
		 methods:{
		 	serdFn(title){
		 		this.$router.push({'path':'/theGoods',params:{'title':title}})
		 	},
			 showFn(allmes){
				 alert('成功添加进购物车');
                 this.$store.commit('insertCar',allmes);
             }
		 }
	}	
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.add_product
	width 100%
	div:nth-child(1)
		a
			img
				width 100%
	div:nth-child(2)
		width 93%
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
			top 0.2666rem
			span:nth-child(1)
				display block
				font-size 0.3733rem
				font-weight bold
				color #E71F19
			span:last-child
				color #999999
				font-size 0.24rem
				text-decoration line-through
		a:nth-child(2)
			position absolute 
			width 0.7066rem
			height 0.7066rem
			right 0.1466rem
			top 0.2666rem
			background-color #e71f19
			border-radius 50%
			img
				width 100%
				
			
</style>