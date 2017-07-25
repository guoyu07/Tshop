<template>
      <div class="service_box">
          <div class="service_top"><p @click = "serverBack"><i class="iconfont icon-xiaoyuhao"></i></p><p>系统提示</p></div>
          <div class="service_middle">
            <p>您还未登录提到，请先登录！</p>
            <div class="service_middle_button"><span>登陆</span><span>返回上一页</span></div>
          </div>
      </div>
</template>

<script>
    export default{
        methods:{
            serverBack:function(){
                this.$router.push({path: history.go(-1)})
            }
        }
    }

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
            p
                line-height 1.3333rem
                /*color red*/
                display inline-block
            p:nth-child(1)
                float left
                position absolute
                left 0.6rem
                /*color red*/
            p:nth-child(2)
                font-size 0.4rem
            i
                font-size 0.44rem
        .service_top:after
            display block
            clear both
            content ""
        .service_middle
            background-color whitesmoke
            height: 15.88rem;
            p
                padding-top 2.7333rem
                text-align center
                font-size 0.4rem
            .service_middle_button
                padding-top 1.4667rem
                margin auto
                width 7.93333rem
                /*border 1px solid red */
                span
                    display inline-block
                    text-align center
                    font-size 0.3467rem
                    width 3.8133rem
                    height 0.9333rem
                    line-height 0.9333rem
                    border 1px solid red
                    color white
                    background red
                span:nth-child(2)
                    margin-left 0.3067rem
</style>
