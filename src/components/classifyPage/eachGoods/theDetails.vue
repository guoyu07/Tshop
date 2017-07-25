<template>
    <div>
        <!--头部-->
        <goods-header v-bind:tetles = "tetles" v-bind:myCount = "myCount" v-bind:i = "i"></goods-header>
        <div class="middles">
            <div class="firstPic">
                <img src="../../../../static/img/DetailsPage/details_1.png"/>
            </div>
            <ul class="informations">
                <li v-for="item in informations">
                    <span class="title">{{item.title}}</span>
                    <span class="name">{{item.name}}</span>
                </li>
            </ul>
            <div class="ImgBox" v-for="i in arrImage">
                <img :src="i.src" alt="" />
            </div>
        </div>
        <!--底部-->
        <goods-footer v-bind:footer_1 = "footer_1" v-bind:myCount = "myCount"></goods-footer>
    </div>
</template>

<script type="text/javascript">
    import GoodsFooter from "../common/GoodsFooter"
    import GoodsHeader from "../common/GoodsHeader"

    export default {
        data() {
            return {
                pgTitle:"全部分类",
                bool:false,
                tetles:["商品","详情","评价"],
                myCount:0,
                i:0,
                footer_1:[
                    {picSrc:"../../../../static/img/DetailsPage/index.png",powers:"首页"},
                    {picSrc:"../../../../static/img/DetailsPage/server.png",powers:"客服"},
                    {picSrc:"../../../../static/img/DetailsPage/save.png",powers:"收藏"}
                ],
                saveClock:true,
                informations:[
                    {"title":"玻璃杯花色:","name":"无色透明"},
                    {"title":"形状:","name":"吹制"},
                    {"title":"容量:","name":"101ml(含)-200(含)"},
                    {"title":"品牌:","name":"KAMJOVE/金灶"},
                    {"title":"颜色分类:","name":"K-106"},
                    {"title":"价格区间:","name":"30元-39.9元"},
                    {"title":":个数:","name":"1个"},
                    {"title":"玻璃杯花色:","name":"无色透明"},
                    {"title":"形状:","name":"吹制"},
                    {"title":"容量:","name":"101ml(含)-200(含)"},
                    {"title":"品牌:","name":"KAMJOVE/金灶"},
                    {"title":"颜色分类:","name":"K-106"},
                    {"title":"价格区间:","name":"30元-39.9元"},
                    {"title":":个数:","name":"1个"},
                    {"title":"图片来源:","name":"自主实拍图"}
                ],
                arrImage:[
                    {"src":"../../../../static/img/DetailsPage/details_2.jpg"},
                    {"src":"../../../../static/img/DetailsPage/details_3.jpg"},
                    {"src":"../../../../static/img/DetailsPage/details_4.jpg"},
                    {"src":"../../../../static/img/DetailsPage/details_5.jpg"},
                    {"src":"../../../../static/img/DetailsPage/details_6.jpg"},
                    {"src":"../../../../static/img/DetailsPage/details_7.jpg"},
                    {"src":"../../../../static/img/DetailsPage/details_8.jpg"},
                    {"src":"../../../../static/img/DetailsPage/details_9.jpg"},
                    {"src":"../../../../static/img/DetailsPage/details_10.jpg"},
                    {"src":"../../../../static/img/DetailsPage/details_11.jpg"},
                    {"src":"../../../../static/img/DetailsPage/details_12.jpg"},
                    {"src":"../../../../static/img/DetailsPage/details_13.jpg"}
                ],
            }
        },
        methods:{

        },
        components:{
            GoodsFooter,
            GoodsHeader

        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .middles
        .firstPic
            img
                width 100%
        .informations
            padding-left 0.2rem
            font-size 0.4rem
            li
                margin 0.2rem 0
            .title
                color #333333
                margin-right 0.25rem
            .name
                color #f28686
        .ImgBox
            img
                width 100%

</style>