<template>
	<div class="login">
		<div class="headers clearfix">
			<router-link to="/mine" class="back">
				<img src="/static/minePage/login/back.png" alt="" />
			</router-link>
			<router-link to="/register" class="register clearfix">注册新用户</router-link>
		</div>
		<div class="logo">
			<img src="../../../static/minePage/login/logo.png" alt="" />
		</div>
		<div class="paw">
			<input type="text" placeholder="账号" v-model="userName"/>
			<input type="password" placeholder="密码" v-model="pwd"/>
		</div>
		<div class="logins" @click="updateCookie">
			<span v-show="true" @click = "gogo">登录</span>
			<!--<span v-show="false">{{userName}}</span>-->
		</div>
		<p>其他登录方式</p>
		<div class="other">
			<div v-for="x in arr">
				<span>
					<img :src="x.src" alt="" />
				</span>
			</div>
		</div>
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
				isShow: false,
				userName:"",
				pwd:"",
			}
		},
		methods:{
//			Login:function(){
//				var abc=localStorage.getItem("username");
//				console.log(abc);
//				var v = JSON.parse(abc)
//				console.log(JSON.parse(abc));
//				if(this.userName==v.name&&this.pwd==v.pwd){
//					console.log("OK")
//				}else{
//					console.log("密码错误")
//				}
//			},
            gogo(){
                this.$store.commit('gogo')
            },
			updateCookie:function(){
				console.log(this.getCookie("username"));
				console.log(this.getCookie("pwd"));
				var username = this.getCookie("username");
				var pwd = this.getCookie("pwd");
				if(username == this.userName&& pwd == this.pwd){
					alert("登录成功");
					this.userName="";
					this.pwd="";
					this.$router.push("/mine");
				}else{
					alert("账号或者密码错误,请重新输入")
				}
			},
			getCookie:function(cname){
				var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1);
                    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
                }
                return "";
			},
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
		background #e7201a
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
		color #fff
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
			background-color #e7201a
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