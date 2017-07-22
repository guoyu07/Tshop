<template>
    <div class="homepage">
    		<div class="goTop" @click="goTop"></div>
     	<div class="header">
     		<router-link to="/classify"><img src="../../../static/homePage/classify_icon.png"/></router-link>
     		<span>茶叶电子专柜</span>
     		<router-link to="/classify"><img src="../../../static/homePage/cart_icon.png"/></router-link>
     	</div>
     	<home-swiper v-bind:banner="swiperImg"></home-swiper>
     	<div class="nav_bar">
     		<!--输入框-->
     		<div class="search">
     			<router-link to="/Search">
     				<input type="text" placeholder="请输入你所搜索的商品"/>
     				<img src="../../../static/homePage/icosousuo.png"/>
     			</router-link>
     		</div>
     		<!--导航栏列表图标-->
     		<div class="nav_logo">
     			<ul>
     				<li v-for="(item,index) in logoImg" @click="navFn(index)">
     					<img :src="item.img"/>
     					<p>{{item.title}}</p>
     				</li>
     			</ul>
     		</div>
     	</div>
     	<div class="nav_pic">
     		<img src="../../../static/homePage/nav_pic.png" />
     	</div>
     	<!--中间方格布局，品牌展示-->
     	<div class="brand">
     		<!--给父级添加点击事件，事件委托-->
     		<ul @click="brandFn($event)">
     			<!-- :name给自己添加自定义属性-->
				<li v-for="val in brandImg" ><img :src="i.img" v-for="i in val" :name="i.name"/></li>
     		</ul>
     	</div>
     	<div class="product">
     		<!--新品上市-->
	     	<div class="new_product">
	     		<div class="nav_top">
	     			<span>新品上市</span>
	     			<router-link to="/details">更多></router-link>
	     		</div>
	     		<new-swiper v-bind:banners="newProd"></new-swiper>
	     	</div>
	     	<!--热销商品-->
	     	<div class="new_product">
	     		<div class="nav_top">
	     			<span>热销商品</span>
	     			<router-link to="/details">更多></router-link>
	     		</div>
	     		<new-swiper v-bind:banners="hotProd"></new-swiper>
	     	</div>
	     	<!--乌龙茶-->
	     	<div class="new_product">
	     		<div class="nav_top">
	     			<span>乌龙茶</span>
	     			<router-link to="/details">更多></router-link>
	     		</div>
	     		<div class="oolong">
	     			<ul >
	     				<li v-for="m in oolongProd"><add-product v-bind:allmes="m" ></add-product> </li>
	     			</ul>	     			
	     		</div>
	     	</div>
	     	<!--精品推荐-->
	     	<h2>———— 精品推荐 ————</h2>
	     	<div class="recommend">
	     		<ul >
	     			<li v-for="n in recomProd"><add-product v-bind:allmes="n" ></add-product></li>
	     		</ul>
	     	</div>
     	</div>
    </div>
</template>

<script>
import HomeSwiper from "./HomeSwiper"
import AddProduct from "./AddProduct"
import NewSwiper from "./NewSwiper"
//import BrandDisplay from "./BrandDisplay"

export default {
		//渲染数据
		data: function() {
			return {
				swiperImg:["../../../static/homePage/swiper1.jpg","../../../static/homePage/swiper2.jpg","../../../static/homePage/swiper3.jpg"],
				//logo图标
				logoImg:[
					{img:'../../../static/homePage/nav_logo1.png',title:'商品分类'},
					{img:'../../../static/homePage/nav_logo2.png',title:'促销活动'},
					{img:'../../../static/homePage/nav_logo3.png',title:'优惠活动'},
					{img:'../../../static/homePage/nav_logo4.png',title:'拼团'},
					{img:'../../../static/homePage/nav_logo5.png',title:'附近店铺'},
					{img:'../../../static/homePage/nav_logo6.png',title:'砍价'},
					{img:'../../../static/homePage/nav_logo7.png',title:'预售'},
					{img:'../../../static/homePage/nav_logo8.png',title:'一元云购'},
					{img:'../../../static/homePage/nav_logo9.png',title:'积分商城'},
					{img:'../../../static/homePage/nav_logo10.png',title:'商家'}
				],
				//中间方格的图标
				brandImg:[
					[{img:'../../../static/homePage/brand1.jpg',name:'品牌展示'}],
					[{img:'../../../static/homePage/brand2.png',name:'风牌红茶'},{img:'../../../static/homePage/brand3.png',name:'六大茶山'}],
					[{img:'../../../static/homePage/brand4.png',name:'中茶普洱茶'},{img:'../../../static/homePage/brand6.png',name:'大益普洱茶'}],
					[{img:'../../../static/homePage/brand5.png',name:'瑜山日照绿茶'},{img:'../../../static/homePage/brand7.png',name:'茶具'}]
				],
				//新品上市
				newProd:	[
		      		[{img:'../../../static/homePage/product.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'},{img:'../../../static/homePage/product.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'},{img:'../../../static/homePage/product.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'}],
		      		[{img:'../../../static/homePage/product.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'},{img:'../../../static/homePage/product.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'},{img:'../../../static/homePage/product.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'}]
		      ],
		      //商品热销
				hotProd:	[
		      		[{img:'../../../static/homePage/product.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'},{img:'../../../static/homePage/product.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'}],
		      		[{img:'../../../static/homePage/product.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'},{img:'../../../static/homePage/product.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'}]
		      ],
		      //乌龙茶
		      	oolongProd:[
		      		{img:'../../../static/homePage/product.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'},
		      		{img:'../../../static/homePage/product.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'},
		      		{img:'../../../static/homePage/product.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'},
		      		{img:'../../../static/homePage/product.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'},
		      		{img:'../../../static/homePage/product.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'},
		      		{img:'../../../static/homePage/product.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'}
		      	],
		      	recomProd:[
		      		{img:'../../../static/homePage/product1.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'},
		      		{img:'../../../static/homePage/product1.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'},
		      		{img:'../../../static/homePage/product1.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'},
		      		{img:'../../../static/homePage/product1.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'},
		      		{img:'../../../static/homePage/product1.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'},
		      		{img:'../../../static/homePage/product1.jpg',title:'传承老树白茶9018 福鼎白牡丹2016春节送礼佳品白茶套装',cost:'1268.00',cost2:'321.60'}
		      	],
		      	
		      	
				
			}
		},
		//注册组件
		components:{
			HomeSwiper,
			AddProduct,
			NewSwiper,
			AddProduct
		},
		methods:{
			navFn(index){
				switch (index){
					case 0:
						console.log(0)
						this.$router.push({name:'ClassifyPage'});
						break;
					case 1:
						console.log(1)
						this.$router.push({name:'LimitTime'});
						break;
					case 2:
						console.log(2)
						this.$router.push({name:'ClassifyPage'});
						break;
					case 3:
						console.log(3)
						break;
					case 4:
						console.log(4)
						this.$router.push({name:'BaiDu'});
//                      this.$router.push({name:'Bargain',query:{title:'拼团活动列表',cxt_nav:['全部活动','限量抽奖','热门拼团']}});
						break;
					case 4:
                        alert(1);
						break;
					case 5:
                        this.$router.push({name:'Bargain',query:{title:'砍价活动',cxt_nav:['全部活动','限量抽奖','热门拼团']}});
						break;
					case 6:
                        this.$router.push({name:'Bargain',query:{title:'预售活动',cxt_nav:['全部活动']}});
					    break;
					case 7:
                        this.$router.push({name:'Bargain',query:{title:'一元云购',cxt_nav:['即将揭晓','人气','最新','价值']}});
						break;
					case 8:
                        this.$router.push({name:'Bargain',query:{title:'积分商城',cxt_nav:['上架','积分','更新','人气']}});
						break;
					case 9:
						this.$router.push({name:'ClassifyPage'});
						break;
				}
			},
//			中间方格布局，品牌展示各大茶系
			brandFn(event){
				console.log(event.target.name);
				switch (event.target.name){
					case '品牌展示':
						this.$router.push({name:'brand',params:{name:event.target.name}});
						break;
					case '风牌红茶':
						this.$router.push({name:'details',params:{name:event.target.name}});
						break;
					case '六大茶山':
						this.$router.push({name:'details',params:{name:event.target.name}});
						break;
					case '中茶普洱茶':
						this.$router.push({name:'details',params:{name:event.target.name}});
						break;
					case '大益普洱茶':
						this.$router.push({name:'details',params:{name:event.target.name}});
						break;
					case '瑜山日照绿茶':
						this.$router.push({name:'details',params:{name:event.target.name}});
						break;	
					case '茶具':
						this.$router.push({name:'details',params:{name:event.target.name}});
						break;
				}
				
				
			},
//			一键返回顶部
			goTop:function(){
				document.body.scrollTop = 0;
			}
		}
	}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.homepage
	.goTop
			width 1.5rem
			height 1.5rem
			border-radius 50%
			position fixed
			right 0.2rem
			bottom 2rem
			background url('../../../static/img/ClassifyPage/goTop.png') no-repeat
			background-position center center
			background-size 100%
			background-color rgba(0,0,0,0.4)
			z-index 10
	/*导航栏*/
	background-color #fff
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
	.nav_bar
		width 9.2rem
		margin 0.5066rem auto 0
		/*搜索框*/
		.search
			width 100%
			border 1px solid #999999
			border-radius 0.1333rem
			position relative
			input
				width 90%
				font-size 0.3733rem
				color #999999
				padding 0.2833rem 
				border 0
				border-right 0.0266rem solid #999  
			img
				position absolute
				width 0.76rem
				height 0.72rem
				right 1%
				top 20%
		/*十个小图标*/
		.nav_logo
			margin-top 0.44rem
			ul
				list-style none 
				margin 0
				padding 0
				li
					display inline-block
					width 1.8133rem
					margin-bottom 0.3733rem	
					height 1.8666rem
					text-align center
					img
						width 1.2533rem
						height 1.2533rem
						margin 0 auto
					p
						font-size 0.3066rem
						margin-top 0.2533rem
	.nav_pic
		width 100%
		img
			width 100%
			height 2.88rem
	/*中间方格布局，品牌展示*/
	.brand
		width 100%
		ul
			list-style none
			margin 0
			padding 0
			
			li
				box-sizing border-box
				border 1px solid white
				display inline-block
				width 50%
				height 5.52rem
				vertical-align top
				img
					width 100%
					height 2.76rem
					vertical-align top
					/*vertical-align top*/	
			li:nth-child(1)
				img
					height 5.52rem
	/*商品列表*/
	.product
		background-color #eee
		.new_product
			width 100%
			margin-bottom 0.28rem
			background-color #fff
			/*导航栏*/
			.nav_top
				width 100%
				height 1.1466rem
				line-height 1.1466rem
				border 0.0133rem solid #eee
				margin-bottom 0.3466rem
				display flex
				span:nth-child(1)
					flex 1
					font-size 0.3866rem
					padding-left 2%
					font-weight bold
					border-left 0.0533rem solid #e71f19
				a:nth-child(2)
					flex 1
					text-align right
					padding-right 2%
					font-size 0.3866rem			
					color #999999
					text-decoration none
			/*乌龙茶*/
			.oolong
				ul
					li	
						display inline-block
						width 32%
					li:nth-child(3n-1)
						margin 0 2%
		h2
			height 1.3733rem
			line-height 1.3733rem
			text-align center					
			font-size 0.44rem
			color #999	
		/*精品推荐*/
		.recommend
			background-color #fff
			width 96%
			margin 0 2%
			ul
				padding 0
				list-style none
				li
					display inline-block
					width 49%
					margin-right 2%
				li:nth-child(2n)
					margin-right 0
				
											
.show{
	width:0.0133rem;
}		

</style>