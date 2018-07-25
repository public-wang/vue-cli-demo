// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer)

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
require('@/../static/customVideo.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
