<template>
    <div class="takeAwait">
        <list-page :list="takeList" :title="title"></list-page>
    </div>
</template>

<script>
    import ListPage from '../common/ListPage'

    export default {
        data: function () {
            return {
                "title": "待收货",
                "takeList": [

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