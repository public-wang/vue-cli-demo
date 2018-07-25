import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import VideoPlayer from '@/components/VideoPlayer'
import Example from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/videoPlayer',
      name: 'VideoPlayer',
      component: VideoPlayer
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    }
  ]
})
