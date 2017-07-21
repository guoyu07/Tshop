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
</style>