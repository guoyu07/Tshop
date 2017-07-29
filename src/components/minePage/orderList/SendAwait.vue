<template>
    <div class="sendAwait">
        <list-page :list="sendList" :title="title"></list-page>
    </div>
</template>

<script>
    import ListPage from '../common/ListPage'

    export default {
        data: function () {
            return {
                "title": "待发货",
                "sendList": [

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