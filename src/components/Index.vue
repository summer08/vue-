<template>
  <div class="hello">
    <header-top></header-top>
    
  </div>
</template>

<script>
import HeaderTop from './common/HeaderTop'
export default {
  data () {
    return {
      msg: 'Welcome'
    }
  },
  components: {
    HeaderTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
h1, h2 {
  font-weight: normal;
}
</style>
