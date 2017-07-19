<template>
    <div class="car">
        <div class="head">
            <div class="mui mui-input-row mui-checkbox mui-left">
                <label></label>
                <input name="checkbox1" value="Item 1" type="checkbox">
            </div>
            <p>网站自营</p>
            <span>编辑</span>
        </div>
        <ul>
            <li>
                <div class="mui mui-input-row mui-checkbox">
                    <label></label>
                    <input name="checkbox1" value="Item 1" type="checkbox">
                </div>
                <div class="img">
                    <img src="static/images/carPage/car1.jpg" alt="">
                </div>
                <div class="title">
                    <h4>大益普洱茶熟茶 琥珀方砖60g*4盒组合装云南勐海茶厂砖茶</h4>
                    <p>79.60 <span>95.52</span></p>
                </div>
                <span class="count">x{{ 2 }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .car
        margin-top 1rem
        padding 0 0.2rem
        .head
            overflow hidden
            height 1rem
            div
                float left
                line-height 1rem
                label
                    display inline-block
                    line-height 1rem
                input
                    line-height 1rem
                input:before
                    font-size 0.6rem
            p
                float left
                padding-left 0.5rem
                line-height 1rem
                font-size 0.32rem
            span
                line-height 1rem
                float right
                padding 0 0.32rem
                border-left 1px solid #ccc
        ul
            li
                overflow hidden
                .mui
                    float left
                    line-height 2rem
                    label
                        display inline-block
                        line-height 2rem
                    input
                        line-height 2rem
                    input:before
                        font-size 0.6rem
                .img
                    width 1.813rem
                    height 1.813rem
                    float left
                    margin-left 0.5rem
                    img
                        width 100%
                        display block
                .title
                    float left
                    width 5.5rem
                    margin-left 0.5rem
                    h4
                        line-height 0.5rem
                    p
                        color #e82620
                        font-size 0.32rem
                        line-height 0.5rem
                        span
                            color #9a9a9a
                            padding-left 0.1rem
                            text-decoration line-through


    .mui-checkbox input[type=checkbox]:checked:before
        color #e71f19

</style>