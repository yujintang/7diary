<template>
 <div>
       <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" v-for="item in list2" @click="demo2 = item">{{item}}</tab-item>
      </tab>
      <!-- <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="item in list2">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper> -->
    </div>
</template>

<script>
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
const list = () => ['简书', '掘金', 'CNode', '英语', '段子']

export default {
  components: {
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      list2: list(),
      demo2: '简书',
      index: 0
    }
  }
}

</script>

<style>

</style>