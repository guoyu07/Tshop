<template>
      <div class="service_box">
          <back :title="title"></back>
          <div class="service_middle">
            <p>您还未登录提到，请先登录！</p>
            <div class="service_middle_button">
                <span @click="login">登陆</span><span @click="backFn">返回上一页</span>
            </div>
          </div>
          <navigator></navigator>
      </div>
</template>

<script>
    import Navigator from '../common/Navigator'
    import Back from '../common/Back'

    export default {
        data: function () {
            return {
                'title': '系统提示'
            }
        },
        components: {
            Navigator,
            Back
        },
        methods: {
            login: function () {
                this.$router.push('/login')
            },
            backFn: function () {
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
