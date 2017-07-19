<template>
  <div id="app">
    <router-view></router-view>
    <navigator></navigator>
  </div>
</template>

<script>
    import Navigator from './components/common/Navigator'
    export default {
        components: {
            Navigator
        }
    }
</script>

<style>

</style>
