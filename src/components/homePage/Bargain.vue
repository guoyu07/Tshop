<template>
    <div class="Barain-box">
      <div class="Barain-header">
          <p><i class="iconfont icon-xiaoyuhao" @click="backFn"></i></p><p>{{title}}</p><p><i class="iconfont icon-gengduoanniu" @click="menuFn"></i></p>
      </div>
      <div class="Barain-nav">
          <ul>
              <li v-for="(item,index) in bargin_nav" @click="selectFn(index)"><span>{{item}}</span></li>
          </ul>
      </div>
        <!--内容部分-->
      <div class="cxt" v-for="(item,index) in bargin_nav">
          <h4>——————— 亲，已经没有东西了哦！ ———————</h4>
          <div class="Baeain-middle">
              <div class="Baeain-middle-top"><span>登录</span> | <span>注册</span> | <span>回顶部</span></div>
              <p>&copy;2005-2017 茶叶电子专柜版权所有, 并保留权利。</p>
          </div>
      </div>
      <!--菜单-->
      <div class="menuBox" v-show="bool" >
          <div class="sanjiao"></div>
          <div class="powers">
              <div class="toHome" @click="comeIndex">
                  <span class="bgH"></span>
                  <span class="fontsH">首页</span>
              </div>
              <div class="toClassify" @click="comeClass">
                  <span class="bgCl"></span>
                  <span class="fontCl">分类</span>
              </div>
              <div class="toCar" @click="comeCart">
                  <span class="bgCa" ></span>
                  <span class="fontCa">购物车</span>
              </div>
              <div class="toMine" @click="comeMy">
                  <span class="bgM"></span>
                  <span class="fontM">我的</span>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
export default{
    data:function(){
        return {
            title:'',
            bargin_nav:['6','7'],
            bool:false,
        }
    },
    methods:{
        selectFn(index){
            var bargin_nav = document.querySelector('.Barain-nav');
            var lis =bargin_nav.querySelectorAll('li');
            var cxt = document.querySelectorAll('.cxt');
            for(var i =0;i<lis.length;i++){
                lis[i].className = '';
                cxt[i].style.display = 'none';
            }
            lis[index].className = 'active'
            cxt[index].style.display = 'block';
        },
        backFn(){
            this.$router.push({name:'/'})
        },
        menuFn:function(){
            this.bool = !this.bool;
        },
//        给菜单栏四个按钮添加点击事件，让其链接到不同地方
        comeIndex(){
            this.$router.push({name:'HomePage'})
        },
        comeClass(){
            this.$router.push({name:'ClassifyPage'})
        },
        comeCart(){
            this.$router.push({name:'CarPage'})
        },
        comeMy(){
            this.$router.push({name:'MinePage'})
        }
    },
    mounted:function(){
        //        刚开始就接受数据
        var msg = this.$route.query;
        console.log(msg.cxt_nav);

        this.title = msg.title;
        this.bargin_nav.splice(0,2);
        for(var j = 0;j<msg.cxt_nav.length;j++){
            this.bargin_nav.push(msg.cxt_nav[j]);
        }
//        console.log(msg.title.length == true);

//      刚开始的时候让第一个为选中状态显示出来，其他隐藏
        var bargin_nav = document.querySelector('.Barain-nav');
        var lis =bargin_nav.querySelectorAll('li');
        var cxt = document.querySelectorAll('.cxt');
        for(var i =0;i<lis.length;i++){
            lis[i].className = '';
        }
        lis[0].className = 'active'
        cxt[0].style.display = 'block';
        document.body.scrollTop = 0;


    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "/static/css/font/iconfont.css"
.Barain-header
  height 1.3333rem
  width 100%
  display flex
  font-size 0.4rem
  line-height 1.3333rem
  i
    font-size 0.5333rem
  i:nth-child(1)
    padding-left 0.4rem
  p
    display inline-block
    flex 1
  p:nth-child(2)
     text-align center
  p:nth-child(3)
    text-align right
.Barain-nav
  ul
    display flex
    li
      flex 1
      text-align center
      font-size 0.36rem
      height 0.86rem
      line-height 0.86rem
      /*border-bottom 0.05333rem solid #cccccc*/
      border-right 0.01333rem solid #ccc

.cxt
  display none
  h4
      height 1.3733rem
      line-height 1.3733rem
      text-align center
      font-size 0.36rem
      color #adadad
      background-color whitesmoke
  .Baeain-middle
      height 100%
      background-color whitesmoke
      height: 15.88rem;
      font-size 0.3333rem
      .Baeain-middle-top
          padding-top 0.6667rem
          text-align center
      p
        padding-top 2.6667rem
        text-align center
        font-size 0.2667rem
    /*菜单*/
.menuBox
    position absolute
    right 0
    top 1.2rem
    background-color rgba(0,0,0,0.8)
    width 25%
    z-index 10
    .sanjiao
        position absolute
        right 14%
        top -0.3333rem
        width 0
        height 0
        border-left 0.2666rem solid transparent
        border-right 0.2666rem solid transparent
        border-bottom 0.3333rem solid rgba(0,0,0,0.8)
    .powers
        color lightgray
        .toHome
            position relative
            padding 0.1666rem 0.1333rem
            border-bottom 1px solid lightgray
            .bgH
                position absolute
                left 5%
                top 0.1666rem
                display inline-block
                width 0.7rem
                height 0.7rem
                background url('/static/img/ClassifyPage/homes.png') no-repeat
                background-position center center
                background-size 90%
            .fontsH
                font-size 0.4rem
                display inline-block
                margin-left 0.85rem
                margin-bottom:0.2rem
                margin-top:0.1666rem
        .toClassify
            position relative
            padding 0.1666rem 0.1333rem
            border-bottom 1px solid lightgray
            .bgCl
                display inline-block
                width 0.7rem
                height 0.7rem
                background url('/static/img/ClassifyPage/classify.png') no-repeat
                background-position center center
                background-size 120%
            .fontCl
                position absolute
                left 0
                top 0.3rem
                font-size 0.4rem
                display inline-block
                margin-left 1rem
        .toCar
            position relative
            padding 0.1666rem 0.1333rem
            border-bottom 1px solid lightgray
            .bgCa
                display inline-block
                width 0.7rem
                height 0.7rem
                background url('/static/img/ClassifyPage/shopCar.png') no-repeat
                background-position center center
                background-size 90%
            .fontCa
                position absolute
                left 0
                top 0.3rem
                font-size 0.4rem
                display inline-block
                margin-left 1rem
        .toMine
            position relative
            padding 0.1666rem 0.1333rem
            border-bottom 1px solid lightgray
            .bgM
                display inline-block
                width 0.7rem
                height 0.7rem
                background url('/static/img/ClassifyPage/my.png') no-repeat
                background-position center center
                background-size 90%
            .fontM
                position absolute
                left 0
                top 0.3rem
                font-size 0.4rem
                display inline-block
                margin-left 1rem


.active
    border-bottom 0.05333rem solid #ff0000
    color red


</style>