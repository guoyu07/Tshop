<template>
  <div id="app">
    <router-view></router-view>
    <navigator></navigator>
  </div>
</template>

<script>
    import Navigator from './components/common/Navigator'
    
    import Vue from 'vue'
	import Vuex from 'vuex'
	Vue.use(Vuex)
    
    const store = new Vuex.Store({
		state:{
			isShow:false,
		},
		getters:{
			
		},
		mutations:{
			show:function(state,str){
				state.isShow=str
			},
		}
	})
    
    export default {
        components: {
            Navigator
        }
    }
</script>

<style>

</style>
