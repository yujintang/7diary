<template>
  <div>
    <router-view></router-view>

	    <div>
	    <tabbar v-if= "showTab">
	     <tabbar-item selected link= '/search'>
	        <img slot="icon" src="./assets/news.gif">
	        <span slot="label">百度</span>
	      </tabbar-item>
	      <tabbar-item selected link= '/'>
	        <img slot="icon" src="./assets/news.gif">
	        <span slot="label">瞧一瞧</span>
	      </tabbar-item>
	      <tabbar-item selected link= '/login'>
	        <img slot="icon" src="./assets/me.gif">
	        <span slot="label">我</span>
	      </tabbar-item>
	    </tabbar>
	  </div>

  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data(){
  	return {
  		showTab: false
  	}
  } ,
  watch:{
  	$route: 'routeChange'
  },
  methods:{
  	routeChange(){
  		this.path = this.$route.path || window.location.pathname
  		this.showTab = !(/login/.test(this.path))
  	}
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
