<template lang="html">
  <div class="item2-wrapper">
      <h1>two</h1>
      <p>
        <!--@model自定义事件是在该dom在第一次出现在视口内时触发的方法-->
        <!--v-view-lazy='method' 或 v-view-lazy='(e)=>method(e,...arg)'-->
        <!--<p class="cnt" v-for="(v,i) in msg" :key="i" v-view-lazy @model="(e)=>getAjaxContent(e,v.msg)">
          loading...
        </p>-->
        <!--<p class="cnt" v-for="(v,i) in msg" :key="i" v-view-lazy @model="getAjaxContent()">
          {{v.short_name}}
        </p>-->
      </p>
  </div>
</template>

<script>
import Vue from 'vue'
import vView from 'vue-view-lazy'
Vue.use(vView, {})
export default {
  data () {
    return {
      msg: []
    }
  },
  mounted () {
    /* fetch('../../static/data/test.json').then(res => res.json()).then(res => {
      console.log(res.data)
      this.msg = res.data
      console.log(this.msg)
    }) */
  },
  methods: {
    /* getAjaxContent (event, msg) {
      console.log(msg)
      event.innerText = msg
    } */
  }
}
</script>

<style lang="scss">
.item2-wrapper{
  h1{
    padding: 15px;
  }
}
</style>
