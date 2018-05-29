<template lang="html">
    <div class="item1-wrapper">
      <h1>one----懒加载图片</h1>
      <ul id='img'>
        <!--<li v-for="img in imgs">
          <img v-lazy="img.cover" >
        </li>-->
        <li class="in" v-for="(item,i) in imgs" :key="i">
          <img src="#" alt="图片" v-lazy="item.src">
        </li>
      </ul>
    </div>
</template>

<script>
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3, // 预加载的宽高
  error: require('../../static/images/false.png'), // img加载失败时现实的图片的路径
  loading: require('@/assets/images/orderimg_local.png'), // img的加载中的显示的图片的路径
  attempt: 1, // 尝试加载的次数
  listenEvents: ['scroll'] // 监听的事件 the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
})
export default {
  data () {
    return {
      /* imgs: [] */
      imgs: [
        {src: '../../static/images/1.jpg'},
        {src: '../../static/images/2.jpg'},
        {src: '../../static/images/3.jpg'},
        {src: '../../static/images/4.jpg'},
        {src: '../../static/images/5.jpg'},
        {src: '../../static/images/6.jpg'},
        {src: '../../static/images/7.jpg'},
        {src: '../../static/images/8.jpg'}
      ]
    }
  },
  mounted () {
    /* fetch('../../static/data/test.json').then(res => res.json()).then(res => {
      this.imgs = res.data
      console.log(this.imgs)
    }) */
  }
}
</script>

<style lang="scss">
.item1-wrapper{
  background: #fff;
  h1{
    padding: 15px;
  }
  #img{
    font-size: 0;
    li{
      margin-bottom: 20px;
      img{
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
