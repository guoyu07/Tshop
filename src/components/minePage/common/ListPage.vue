<template>
    <div class="listPage">
        <back :title="title"></back>
        <ul>
            <li v-for="(item,index) in list">
                <div  class="check">
                    <input type="checkbox" v-model="item.check">
                    <span>{{ item.merchant }}</span>
                    <span>{{ item.status }}</span>
                </div>
                <div class="img">
                    <img :src="item.src" alt="">
                </div>
                <div class="title">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.price }} <span>{{ item.pre_price }}</span></p>
                    <span class="count">x{{ item.count }}</span>
                </div>
                <div class="settle" v-show="item.status=='等待买家付款'">
                    <p>共{{ item.count }}件商品 合计：￥{{ item.count*item.price.toFixed(2) }}</p>
                    <div>
                        <div>付款</div>
                        <div @click="cancelOrder(index)">取消订单</div>
                        <div>朋友代付</div>
                    </div>
                </div>
                <div class="settle" v-show="item.status=='交易成功'">
                    <p>共{{ item.count }}件商品 合计：￥{{ item.count*item.price.toFixed(2) }}</p>
                    <div>
                        <div>评价</div>
                        <div @click="removeItem">删除订单</div>
                    </div>
                </div>
                <div class="settle" v-show="item.status=='交易关闭'">
                    <p>共{{ item.count }}件商品 合计：￥{{ item.count*item.price.toFixed(2) }}</p>
                    <div>
                        <div @click="removeItem">删除订单</div>
                    </div>
                </div>
            </li>
            <h4>
                <span>亲，已经没有订单了哦!</span>
            </h4>
        </ul>
    </div>
</template>

<script>
    import Back from '../../common/Back'
    export default {
        data: function () {
            return {
                isEdit: false,
                isCheckAll: true,
                checked_count: 0,
                price_all: 0,
                id: 0
            }
        },
        components: {
            Back
        },
        props: ['list','title'],
        methods: {
            removeItem: function (index) {
                this.list.splice(index,1);
            },
            cancelOrder: function (index) {
                this.list[index].status = "交易关闭"
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .listPage
        position relative
        background-color #fff
        ul
            li
                position relative
                margin-top 0.2rem
                overflow hidden
                background-color #f5f5f5
                .check
                    padding 0 0.2rem
                    line-height 0.8rem
                    input
                        line-height 2rem
                        width 0.4rem
                        height 0.4rem
                        vertical-align middle
                    span:nth-child(3)
                        color red
                        float right
                .img
                    width 2rem
                    height 2rem
                    padding 0.2rem
                    float left
                    img
                        width 100%
                        display block
                .title
                    padding 0.2rem 0
                    float left
                    width 5rem
                    margin-left 0.5rem
                    h4
                        line-height 0.5rem
                        color #636363
                    p
                        color #e82620
                        font-size 0.32rem
                        line-height 0.5rem
                        span
                            color #9a9a9a
                            padding-left 0.1rem
                            text-decoration line-through
                    >span
                        position absolute
                        right 0.4rem
                        top 1.5rem
                        font-size 0.4rem
                .settle
                    overflow hidden
                    width 100%
                    padding 0.3rem 0
                    p
                        text-align right
                        font-size 0.28rem
                        margin 0 0.2rem
                        padding-bottom 0.2rem
                        border-bottom 1px solid #d2d2d2
                    div
                        padding 0.2rem 0
                        div
                            float right
                            width 1.8rem
                            text-align center
                            text-align center
                            font-size 0.28rem
                            padding 0.1rem 0.2rem
                            margin-right 0.15rem
                            border 1px solid #c2c2c2
                        div:nth-child(1)
                            border-color #e31939
                            color #e31939
            >h4
                margin 0.5rem 0.2rem 0
                text-align center
                background url("/static/minePage/h4_bg.png") 50% repeat-x
                span
                    padding 0 0.5rem
                    background-color #fff
</style>