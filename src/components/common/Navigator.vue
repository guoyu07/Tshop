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
                        'icon': 'icon-home_fill_light'
                    },
                    {
                        'id': 2,
                        'name': '客服',
                        'url': '/service',
                        'icon': 'icon-shopfill'
                    },
                    {
                        'id': 3,
                        'name': '分类',
                        'url': '/classifyPage',
                        'icon': 'icon-crownfill'
                    },
                    {
                        'id': 4,
                        'name': '购物车',
                        'url': '/car',
                        'icon': 'icon-attentionfill'
                    },
                    {
                        'id': 5,
                        'name': '我的',
                        'url': '/mine',
                        'icon': 'icon-my_fill_light'
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    /*@import "../../../static/css/font/iconfont.css"*/
    #nav
        position fixed
        width 100%
        display -webkit-box
        bottom 0
        background-color #48382b
        height 1.25rem
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
            i
                font-size 0.67rem
                line-height 0.9rem
            p
                margin-top -0.1rem
    #nav .router-link-exact-active
        color: #6ab439
</style>
