<template>
	<div>
	  <!--<label>关键词：<input v-model="keyword"></label>-->
	  <label>地区：<input v-model="location"></label>
	  <baidu-map class="biaduMap">
	    <bm-view class="map"></bm-view>
	    <bm-local-search keyword="茶叶店" :auto-viewport="true" :location="location" id="searchResult"></bm-local-search>
	    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
	  </baidu-map>
	</div>
</template>

<script>
export default {
  data () {
    return {
      location: '',
    }
  }
}
</script>
<style>
	.baiduMap {
		font-size: 0.5rem;
	}
	label {
		font-size: 0.5rem;
	}
	ol>li>span{
		font-size:0.5rem;
		height: 1rem;
		display:inline-block;
		margin-top: 0.2rem;
		text-align: center;
	}
	.bm-view {
	  width: 100%;
	  height: 300px;
	  z-index: 10;
	  font-size:1rem;
	}
	.map {
		/*margin-top: 5rem;*/
		width:100%;
		height:5rem;
		font-size:1rem;
	}
</style>