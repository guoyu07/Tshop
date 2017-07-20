<template>
      <div class="service_box">
          <div class="service_top"><p><i class="iconfont icon-xiaoyuhao"></i></p><p>系统提示</p></div>
          <div class="service_middle">
               <p>您还未登录提到，请先登录！</p>
               <div class="service_middle_button"><input type="button" value="登录"><input type="button" value="返回上一页"></div>
            </div>
      </div>
</template>

<script>


</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "/static/css/font/iconfont.css"
      .service_box
            background-color #ffffff
            position relative
            /*background-color red*/
      .service_top
            width 100%
            height 1.3333rem
            /*border 1px solid red*/
            background-color white
            text-align center
      .service_top p
            line-height 1.3333rem
            /*color red*/
            display inline-block
      .service_top:after
            display block
            clear both
            content ""
      .service_top p:nth-child(1)
            float left
            position absolute
            left 0.6rem
            /*color red*/
      .service_top i
            font-size 0.44rem
      .service_top p:nth-child(2)
            font-size 0.4rem
      .service_middle
            background-color whitesmoke
            height: 15.88rem;
      .service_middle p
            padding-top 2.7333rem
            text-align center
            font-size 0.4rem
      .service_middle_button
            padding-top 1.4667rem
            margin auto
            width 7.93333rem
            /*border 1px solid red */
      .service_middle input[type=button]
            font-size 0.3467rem
            width 3.8133rem
            height 0.9333rem
            border 1px solid red
            color white
            background red
      .service_middle_button input[type=button]:nth-child(2)
            margin-left 0.3067rem
</style>
