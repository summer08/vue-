<template lang="html">
  <div class="router-wrapper">
    <header-top></header-top>
    <div class="content">
      <div class="tab">
        <div class="item-tab">
          <router-link to="/Item1">Item1</router-link>
        </div>
        <div class="item-tab">
          <router-link to="/Item2">Item2</router-link>
        </div>
        <div class="item-tab">
          <router-link to="/Item3">Item3</router-link>
        </div>
      </div>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->

    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import Item1 from './Item1'
import Item2 from './Item2'
import Item3 from './Item3'
import HeaderTop from './common/HeaderTop'

Vue.use(VueRouter)
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
const routes = [
  {path: '/', redirect: '/Item1', component: Item1},
  {path: '/Item1', component: Item1},
  {path: '/Item2', component: Item2},
  {path: '/Item3', component: Item3}
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes // (缩写) 相当于 routes: routes
})

export default {
  router,
  components: {
    HeaderTop
  }
}
</script>

<style lang="scss">
.content{
  .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    .item-tab{
      flex: 1;
      text-align: center;
      a {
        display: block;
        color: rgb(77, 85, 93);
        font-size: 14px;
        background: #fff;
        &.active {
          background: #d5d5d5;
          color: rgb(240, 20, 20);
        }
      }
    }

  }
}
.slide-fade-enter-active{
  transition: all .3s ease;
}
.slide-fade-leave-active{
  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(50px);
  opacity: 0;
}
</style>
