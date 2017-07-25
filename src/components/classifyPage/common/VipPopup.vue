<template>
	<transition name="bounce">
		<div id="bullet" v-show="popLock">
			<h2>会员专享价</h2>
			<ul>
				<li v-for="(item,index) in vips"><span>{{item}}</span><span>{{price * (1-0.05*index).toFixed(2) }} </span></li>
			</ul>
			<p class="close" @click="vipPopup" >关闭</p>
		</div>
	</transition>
</template>

<script>
    export default {
        data(){
            return {
                price:'112.00',
                vips:['普通会员','金卡会员','白金会员','钻石会员'],
            }
        },
        methods:{
			vipPopup(){
                this.$store.commit('vipPopup')
			}
        },
		computed:{
            popLock(){
            	return this.$store.state.popLock
            }
        }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#bullet
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