<template>
	<div class="login">
		<back></back>
		<div class="logo">
			<img src="/static/minePage/login/logo.png" alt="" />
		</div>
		<div class="paw">
			<input type="text" placeholder="账号" v-model="newUserName"/>
			<input type="password" placeholder="密码" v-model="newPassword"/>
			<input type="password" placeholder="确认密码" v-model="surePassword"/>
		</div>
		<div class="logins" @click="setUp">
			<span>注册</span>
		</div>
		<p>其他注册方式</p>
		<div class="other">
			<div v-for="x in arr">
				<span href="">
					<img :src="x.src" alt="" />
				</span>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Back from '../common/Back'

	export default {
		data:function(){
			return{
				arr:[
				    {
				        'src':require('../../../static/minePage/login/qq.png')
					},
					{
						'src':require('../../../static/minePage/login/weixin.png')
					},
					{
					    'src':require('../../../static/minePage/login/weibo.png')
					},
					{
					    'src':require('../../../static/minePage/login/baidu.png')
					}
				],
				newUserName:'',
				newPassword:'',
				surePassword:'',
			}
		},
		mounted:function(){
			console.log(localStorage.setItem('a','abc'));
			console.log(localStorage.getItem('a'));
		},
		methods:{
//			Fn:function(){
//				if(this.newPassword==this.surePassword){
//					localStorage.setItem('username','{"name":"'+this.newUserName+'","pwd":"'+this.newPassword+'","surePwd":"'+this.surePassword+'"}');
//					var v = JSON.parse(localStorage.getItem('username'));
//					console.log(v);
//					this.newUserName="";
//					this.newPassword="";
//					this.surePassword="";
//				}else{
//					alert("密码不一致")
//				}
//			}, 
			setUp:function(){
				if(this.newPassword==this.surePassword){
					this.setCookie("username",this.newUserName,2);
					this.setCookie("pwd",this.newPassword,2)
					console.info(document.cookie);
					alert("注册成功")
					this.newUserName="";
					this.newPassword="";
					this.surePassword="";
					this.$router.push("/login");
				}else{
					alert("密码不一致")
				}
				
			},
			setCookie:function(cname, cvalue, exdays){
				var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
//              console.info(cname + "=" + cvalue + "; " + expires);
                document.cookie = cname + "=" + cvalue + "; " + expires; 
			},
			
		},
		components: {
            Back
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
			padding 0.2rem 4rem
			background-color #e71f19
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