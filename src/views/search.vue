<template>
  <div>
    <search v-model="value"></search>
    <br>
  </div>
</template>

<script>
import { Search, Group, Cell } from 'vux'

export default {
  components: {
    Search,
    Group,
    Cell
  },
  methods: {
    
  },
  data () {
    return {
      results: [],
      value: ''
    }
  }
}
</script>