// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './test.vue'
import router from '../../router/index'
import 'jquery'
import 'bootstrap'

Vue.config.productionTip = false

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  components: { Index },
  template: '<Index/>'
})
