import Vue from 'vue'
import Index from '@/components/Index'
require('./assets/sass/reset.scss')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Index/>',
  components: { Index }
})
