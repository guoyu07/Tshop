<template>
    <div class="headers">
        <span class="back" @click="backFn">
            <img src="/static/minePage/login/back.png" alt="" />
        </span>
        {{ title }}
    </div>

</template>

<script>
    export default {
        methods: {
            backFn: function () {
                this.$router.push({path: history.go(-1)})
            }
        },
        props: ['title']
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .headers
        position relative
        height 1rem
        line-height 1rem
        background #e7201a
        color #fff
        text-align center
        font-size 0.40rem
        .back
            position absolute
            width 1rem
            padding 0.3rem
            left 0
            img
                display block
</style>