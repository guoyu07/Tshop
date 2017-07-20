<template>
	<div class="login">
		<div class="headers clearfix">
			<router-link to="/mine" class="back">
				<img src="../../../static/minePage/login/back.png" alt="" />
			</router-link>
			<span class="register clearfix" @click="isShow=!isShow">注册新用户</span>
		</div>
		<div class="logo">
			<img src="../../../static/minePage/login/logo.png" alt="" />
		</div>
		<div class="paw">
			<input type="text" placeholder="账号" />
			<input type="password" placeholder="密码" />
		</div>
		<div class="logins">
			<span>登录</span>
		</div>
		<p>其他登录方式</p>
		<div class="other">
			<div v-for="x in arr">
				<span>
					<img :src="x.src" alt="" />
				</span>
			</div>
		</div>
		<register :isShow="isShow"></register>
	</div>
</template>

<script type="text/javascript">
	import Register from './Register'
	export default {
		data:function(){
			return {
				arr:[{'src':require('../../../static/minePage/login/qq.png')},
					 {'src':require('../../../static/minePage/login/weixin.png')},
					 {'src':require('../../../static/minePage/login/weibo.png')},
					 {'src':require('../../../static/minePage/login/baidu.png')}],
				isShow: false
			}
		},
		components:{
			Register
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.login
		background-color #fff
		position absolute
		top 0
		left 0
		width 100%
		height 100%
	.headers
		height 1rem
		line-height 1rem
		background #48382b
		color #a5a09c
		padding 0.3rem
		.back
			float left
			display inline-block
			width 1rem
			img
				display block
	.register
		font-size 0.36rem
		position absolute
		top 0
		right 0
		padding-right 0.2rem
		display inline-block
	.logo
		text-align center
		margin 2rem 0 1rem
		img
			display inline-block
			width 3rem
	.paw
		padding 0 0.2rem
		input
			width 100%
			height 1rem
			border 1px solid #fff
			border-bottom 3px solid #000
			padding 0.1rem 0.1rem
			font-size 0.5rem
			margin-bottom 0.5rem
			 
	.logins
		margin-top 0.5rem
		text-align center
		margin-bottom 5%
		span
			display inline-block
			padding 0.4rem 4rem
			background-color #48382b
			border-radius 2rem
			font-size 0.4rem
			color #fff
	p
		text-align  center
		font-size 0.3rem
	.other
		margin 0.2rem 0
		text-align center
		div
			display inline-block
			margin 0.2rem
			img
				display block
</style>