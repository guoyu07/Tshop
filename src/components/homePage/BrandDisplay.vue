<template>
<div class="brand_display">
	<div class="nav_header">
		<span @click="backFn"></span>
		<span>列表</span>
	</div>
	<h4>茶商城电子专柜诚招省内优质供应商</h4>
	<div class="content">					
		<h3>济南茶百汇商贸有限公司，自2014年至今一直致力于日照绿茶批发，品牌茶叶省内专柜招商业务，随着业务的不断深入与发展，诚邀优质省级代理商、茶叶生产厂商合作，共同开拓维护山东市场。</h3>
		<img src="../../../static/homePage/brands.png"/>
		<p>
			为品牌厂商和消费者之间提供零距离一站式解决方案，让消费者能买到实惠优质的商品，让经营者能够解决产品单一、商品不全等问题，为品牌厂商解决库存压力等问题。<br />
			运用强大的销售网络优势，利用线下17地市17名销售经理，开发近百家体验店，，打通了连接店面和终端客户之间的最后一道屏障，突破了传统的销售瓶颈，快速提升销售业绩！<br />
			茶叶专柜供货商品牌入驻申请流程及相关说明均以济南茶百汇商贸有限公司官方招商页面为准。
		</p>
		<ol>
			<li>（一）茶叶电子专柜有权根据包括但不限于品牌需求、公司经营状况、服务水平等其他因素退回商家入驻申请。</li>
			<li>（二）茶叶电子专柜有权在申请入驻及后续经营阶段要求商家提供其他资质。</li>
			<li>（三）茶叶电子专柜将结合各行业发展动态、国家相关规定及消费者购买需求，不定期更新招商标准。</li>
		</ol>
		<p>入驻条件</p>
		<ul>
			<li></li>
			<li>1.须具有一般纳税人资质，非小规模，暂不接受个体工商户入驻；</li>
			<li>2.企业必须自有知名品牌，注重品牌效应，要求长期合作；</li>
			<li>3.企业产品丰富，拥有丰富款式，质量有保障；</li>
			<li>4.企业必须有自主生产作为后备力量；</li>			
		</ul>
		<p>入驻资料</p>
		<p>1.茶叶电子专柜供货商入驻必须递交7项，国家相关职能部门颁发的相关证件；</p>
		<ul>
			<li>（1）企业营业执照复印件</li>
			<li>（2）法人身份证</li>
			<li>（3）企业税务登记证复印件</li>
			<li>（4）商标注册证</li>
			<li>（5）组织机构代码证</li>
			<li>（6）产品质检报</li>
			<li>（7）代理销售授权证明</li>
		</ul>
		<p>（请务必确保申请入驻及后续经营阶段提供的相关资质和信息的真实性、完整性、有效性，一旦发现虚假资质或信息的，济南茶百汇商贸有限公司将不再与商家进行合作并有权根据茶商城规则及与商家签署的相关协议的约定进行处理）
2. 公司简介及公司相关信息（简介、logo、标语、文化）；</p>
		<p>
			2. 公司简介及公司相关信息（简介、logo、标语、文化）；<br />
			3. 需要有正规商品详情图片、单品设计卖点解说、商品名称、颜色、尺码、库存数；
		</p>
		<ul>
			<li>  (1) 产品图片不少于15张，包含整体场景图及独立展示图；</li>
			<li>  (2) 供货商每款产品提供3-5张场景图；</li>
			<li>  (3) 每款产品一个文件夹，文件夹里包含处理好的拍摄图片及相应款式的实景图，文件夹以产品的型号命名，如：CB2012-3，宝贝图片像素不小于1024x768；</li>
		</ul>
	</div>
</div>
</template>

<script>
	export default{
		data:function(){
			return{
				
			}
		},
		methods:{
			backFn(){
				this.$router.push({name:'HomePage'})
			}
		},
		mounted:function(){
			document.body.scrollTop = 0;
			document.querySelector('body').style.paddingBottom = '1.2rem';
			var mess = this.$route.params;
			console.log(mess);
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.brand_display
	.nav_header
		display flex
		height 1.2rem
		line-height 1.2rem
		span:first-child
			flex 1
			/*display inline-block*/
			/*padding-left 1rem*/
			/*width 0.2933rem
			height 0.44rem*/
			background url('../../../static/homePage/toLeft.png') 0 50% no-repeat
			background-size 20% 50%
		span:last-child
			flex 1
			text-align right
			padding-right 0.44rem
			font-size 0.4266rem	
	h4
		height 1.3066rem
		line-height 	1.3066rem
		text-align center
		font-size 0.4266rem
		color #666666
		border-bottom 0.0133rem solid #eee
	.content
		padding 0 0.2266rem
		margin-top 0.4266rem		
		h3			
			font-size 0.5133rem
			line-height 0.75rem
		img
			width 100%
		p,li
			font-size 0.5066rem
			line-height 0.8rem
		li
			text-indent 0.5066rem
.text{
	width: 0.8rem;
	
}				
</style>