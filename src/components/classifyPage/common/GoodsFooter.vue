<template>
	<div class="footer">
		<div class="footer_1">
			<div class="fastKey" v-for="(v,k) in footer_1" @click = "fastKey(k)">
				<div class="icon"><img :src="v.picSrc"/></div>
				<div class="fonts">{{ v.powers }}</div>
			</div>
		</div>
		<div class="footer_2" @click="addToCar">加入购物车</div>
		<div class="footer_3" @click="comeMy">立即购买</div>
	</div>
</template>

<script>
	export default {
		props:['footer_1'],
		data(){
			return {
				
			}
		},
		methods:{
            comeMy(){
                this.$router.push("/mine")
            },
            addToCar:function(){
					this.$store.commit('increase');
            },
            fastKey:function(index){
                if(index == 0){
                    this.$router.push("/");
                }else if(index == 1){
                    this.$router.push("/service");
                }else if(index == 2){
                    if(this.saveClock){
                        this.footer_1[index].picSrc = "../../../../static/img/DetailsPage/save1.png";
                        this.saveClock = !this.saveClock;
                    }else{
                        this.footer_1[index].picSrc = "../../../../static/img/DetailsPage/save.png";
                        this.saveClock = !this.saveClock;
                    }

                }
            }
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	/*底部*/
	.footer
		width 100%
		height 1.3333rem
		position fixed
		left 0
		bottom 1.3333rem
		z-index 200
		display flex
		.footer_1
			border 1px solid lightgray
			flex-basis 40%
			height 1.3rem
			line-height 1.3rem
			display flex
			text-align center
			background-color #f8f8f8
			.fastKey
				flex-basis 33.3333%
				position relative
				.icon
					position absolute
					left 25%
					top 0.15rem
					width 0.65rem
					height 0.65rem
					margin 0 auto
					img
						display inline-block
						position absolute
						left 0
						top 0
						width 100%
				.fonts
					height 0.65rem
					position absolute
					left 25%
					bottom 0.3rem
					text-align center
		.footer_2
			flex-basis 30%
			height 1.3rem
			line-height 1.3rem
			font-size 0.5rem
			text-align center
			color #fff
			background-color #ff9c00
		.footer_3
			flex-basis 30%
			height 1.3rem
			line-height 1.3rem
			font-size 0.5rem
			text-align center
			color #fff
			background-color #dd2726
</style>