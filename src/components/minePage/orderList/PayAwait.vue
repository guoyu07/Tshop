<template>
    <div class="payAwait">
        <list-page :list="payList" :title="title"></list-page>
    </div>
</template>

<script>
    import ListPage from '../common/ListPage'

    export default {
        data: function () {
            return {
                "title": "待付款",
                "payList": [

                ]
            }
        },
        components: {
            ListPage
        },
        mounted: function () {
            this.payList = this.$store.state.payList
        }
    }
</script>

<style>

</style>