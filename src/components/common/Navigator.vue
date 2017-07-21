<template>
    <nav id="nav">
        <router-link :to="item.url" v-for="(item,index) in navItems" :key="item.id" @click.native="active(index)" :class="{active: i==index}">
            <i class="iconfont" :class="item.icon"></i>
            <p>{{ item.name }}</p>
        </router-link>
    </nav>
</template>

<script>
    export default {
        data: function () {
            return {
                navItems: [
                    {
                        'id': 0,
                        'name': '首页',
                        'url': '/',
                        'icon': 'icon-shouye'
                    },
                    {
                        'id': 1,
                        'name': '客服',
                        'url': '/service',
                        'icon': 'icon-dingwei'
                    },
                    {
                        'id': 2,
                        'name': '分类',
                        'url': '/classify',
                        'icon': 'icon-fenlei'
                    },
                    {
                        'id': 3,
                        'name': '购物车',
                        'url': '/car',
                        'icon': 'icon-gouwuchekong'
                    },
                    {
                        'id': 4,
                        'name': '我的',
                        'url': '/mine',
                        'icon': 'icon-wode'
                    }
                ],
                i: ''
            }
        },
        methods: {
            active: function (index) {
                this.i = index;

            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "/static/css/font/iconfont.css"
            #nav
                    position fixed
                    width 100%
                    /*width 10.0rem*/
                    display -webkit-box
                    bottom 0
                    background-color #f2f2f2
                    height 1.3333rem
                    border-top 1px solid #e6e6e6
                    text-align center
                    font-size 0.32rem
            a
                    -webkit-box-flex 1
                    display block
                    text-decoration none
                    color #c3ad88
                    line-height 0.9rem
            i
                    font-size  0.8rem
            p
                    margin-top -0.4333rem
                    font-size 0.32rem
            #nav .active
                    color: #e7201a

</style>
