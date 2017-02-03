<template>
  <div>
    <router-view></router-view>

	    <div>
	    <tabbar>
	      <tabbar-item selected link= '/'>
	        <img slot="icon" src="./assets/news.gif">
	        <span slot="label">新闻</span>
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
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
