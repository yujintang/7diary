<template>
 <div>
       <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" v-for="item in list2" @click.native="typeSwitch">{{item}}</tab-item>
      </tab>

      <router-view></router-view>
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
      index: 0
    }
  },
  methods:{
    typeSwitch(){
      switch (this.index){
        case 0:
          this.$router.push('/menu/jianshu')
          break;
        case 1:
          this.$router.push('/menu/gold')
          break;
        default:
          this.$router.push('/menu/jianshu')
          break;
      }
    }
  }
}

</script>

<style>

</style>