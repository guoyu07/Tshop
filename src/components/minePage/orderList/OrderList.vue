<template>
    <div class="orderList">
        <list-page :list="orderList" :title="title"></list-page>
    </div>
</template>

<script>
    import ListPage from '../common/ListPage'

    export default {
        data: function () {
            return {
                "title": "全部订单",
                "orderList": [

                ]
            }
        },
        components: {
            ListPage
        },
        mounted: function () {
            this.orderList = this.$store.state.payList.concat(this.$store.state.evaluateList)
        }
    }
</script>

<style>

</style>