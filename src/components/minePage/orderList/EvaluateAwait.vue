<template>
    <div class="evaluate">
        <list-page :list="evaluateList" :title="title"></list-page>
    </div>
</template>

<script>
    import ListPage from '../common/ListPage'

    export default {
        data: function () {
            return {
                "title": "待评价",
                "evaluateList": [

                ]
            }
        },
        components: {
            ListPage
        },
        mounted: function () {
            this.evaluateList = this.$store.state.evaluateList
        }
    }
</script>

<style>

</style>