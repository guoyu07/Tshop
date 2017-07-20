<template>
    <nav id="nav">
        <router-link :to="item.url" v-for="item in navItems" :key="item.id">
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
                        'id': 1,
                        'name': '首页',
                        'url': '/',
                        'icon': 'icon-shouye'
                    },
                    {
                        'id': 2,
                        'name': '客服',
                        'url': '/service',
                        'icon': 'icon-dingwei'
                    },
                    {
                        'id': 3,
                        'name': '分类',
<<<<<<< HEAD
                        'url': '/classify',
                        'icon': 'icon-crownfill'
=======
                        'url': '/classifyPage',
                        'icon': 'icon-fenlei'
>>>>>>> 9f917c26b3b9ba7c94987c2ebc1ce3cf8eb384e0
                    },
                    {
                        'id': 4,
                        'name': '购物车',
                        'url': '/car',
                        'icon': 'icon-gouwuchekong'
                    },
                    {
                        'id': 5,
                        'name': '我的',
                        'url': '/mine',
                        'icon': 'icon-wode'
                    }
                ]
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
                    background-color #48382b
                    height 1.3333rem
                    border-top 1px solid #e6e6e6
                    text-align center
                    font-size 0.32rem
            a.active
                    color #f29004
            a
                    -webkit-box-flex 1
                    display block
                    text-decoration none
                    color #c3ad88
                    line-height 0.9rem
            i
                    /*font-size  0.6667rem*/
                    font-size 0.6667rem
            p
                    margin-top -0.4333rem
                    font-size 0.4rem
            #nav .router-link-exact-active
                    color #6ab439
</style>
