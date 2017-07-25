<template>
	<transition name="bounce">
		<div id="bullets" v-show="argPopLock">
			<h2>商品信息</h2>
			<ul>
				<li v-for="(item,index) in vips"><span>{{item.title}}</span><span>{{item.values}} </span></li>
			</ul>
			<p class="close" @click="argPopup" >关闭</p>
		</div>
	</transition>
</template>

<script>
    export default {
        data(){
            return {
                vips:[
                    {title:"商品名称",values:"KAMJOVE/金灶 E-400食品级304不锈钢"},
                    {title:"商品编号",values:"CLG000053"},
                    {title:"商品品牌",values:"金灶"},
                    {title:"商品重量",values:"0克"},
                    {title:"商品库存",values:5001},
				],

            }
        },
        methods:{
            argPopup(){
                this.$store.commit('argPopup')
			}
        },
		computed:{
            argPopLock(){
          	  	return this.$store.state.argPopLock
            }
        }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#bullets
		position absolute
		bottom 0
		width 100%
		height 14.0933rem
		z-index 300
		border-top 0.01333rem solid black
		background-color #fff

		h2
			padding 0.8rem 0 0.1333rem
			text-align center
			font-size 0.46667rem
		ul
			width 100%
			li
				height 1.333rem
				line-height 1.333rem
				display flex
				border-bottom 1px solid #eeeeee
				span:nth-child(1)
					width 20%
					font-size 0.3733rem
				span:nth-child(2)
					width 80%
					font-size 0.3733rem
					color #e71f19
		p
			position absolute
			bottom 0
			width 100%
			height 1.18666rem
			line-height 1.18666rem
			text-align center
			color white
			font-size 0.506667rem
			background-color #e71f19
	.bounce-enter-active {
		animation: bounce-in .5s;
	}
	.bounce-leave-active {
		animation: bounce-in .5s reverse;
	}
	@keyframes bounce-in {
		0% {
			transform: translateY(14rem);
		}
		100% {
			transform: translateY(0rem);
		}
	}
</style>