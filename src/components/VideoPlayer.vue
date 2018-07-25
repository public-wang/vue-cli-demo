<template>
  <div class="container">
    <div class="player">
      <video-player class="video-player vjs-custom-skin"
                     ref="videoPlayer"
                     :playsinline="true"
                     :options="playerOptions"
      >
      </video-player>
    </div>
  </div>
</template>
<script>
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'VideoPlayer',
  props: ['src', 'poster'],
  data () {
    return {
      playerOptions: {
        autoplay: false,
        muted: false,
        loop: false,
        preload: 'auto',
        language: 'zh-CN',
        aspectRatio: '4:3',
        fluid: true,
        sources: [{
          type: 'video/mp4',
          src: this.src
        }],
        poster: this.poster,
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试'
      }
    }
  },
  components: {
    videoPlayer
  },
  methods: {
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  }
}
</script>

<style type="text/css" scoped>
  .container {
    background-color: #efefef;
    min-height: 100%;
  }
</style>
