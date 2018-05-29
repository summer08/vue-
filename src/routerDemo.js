import Vue from 'vue'
import RouterDemo from '@/components/RouterDemo'

require('./assets/sass/reset.scss')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<RouterDemo/>',
  components: { RouterDemo }
})
