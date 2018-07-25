<template>
  <div class="page">
    <div class="activity">
      <div class="head-wrap">
        <img id="head-icon" class="head-icon" src="//source.vipabc.com/Ext/member/Resources/vipabcJr/zh_CN/images/avator_animal_01.png" onerror="this.onerror=null;this.src='//source.vipabc.com/ext/images/website/junior/linkage_page/h5/oxfordafterclass/defaultteacher.png'">
      </div>
      <div class="visit-info _clear">
        <div class="name js-name"></div>
        <div class="visit js-visit"></div>
      </div>
      <div class="title">父亲节，我在vipJr学了一首英文歌<br>送给爸爸，快来听听吧~</div>
      <div class="video-wrap js-video-show">
        <VideoPlayer id="video_share" :src="src" :poster="poster">
        </VideoPlayer>
      </div>
      <div class="join">
        <p>想听到您孩子{{fullName}}对爸爸的献唱吗？</p>
        <p>现在参加，</p>
        <p>还有机会为爸爸赢取专属好礼哦～</p>
      </div>
      <button class="btn upload_btn js_btn_join">加入vipJr</button>
    </div>
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer'
import {mapGetters} from 'vuex'
export default {
  name: 'Index',
  components: {VideoPlayer},
  created () {
    this.$store.dispatch('changeMemberName', 'new baby')
  },
  data () {
    return {
      src: '//source.vipabc.com/ext/video/LP/fatherDay/fatherDay.mp4',
      poster: '//source.vipabc.com/ext/images/website/vjr/landingpage/fatherday2018/upload_poster.png'
    }
  },
  computed: {
    ...mapGetters({
      fullName: 'fullName'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.loading {
  background: rgba(0,0,0,.9);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
    display: none;
}
.loading .loading-wrap {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
}

.loading .loading-wrap img {
  width: 30%;
  display: block;
  margin: auto;
}
.loading .loading-wrap .loading-text {
  color: #fff;
    margin-top: 20px;
    font-size: 14px;
}

.weChat-share-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 99990;
    background-color: rgba(0,0,0,0.5);
}
.weChat-share-bg img {
  width: 75%;
  float: right;
  top: 20px;
  right: 20px;
  display: block;
  position: relative;
}

.page {
  position: relative;
  background: url(//source.vipabc.com/ext/images/website/vjr/landingpage/fatherday2018/share_bg.jpg) no-repeat center top;
  background-size: 100% 100%;
  overflow: hidden;
  text-align: center;
  padding-bottom: 5%;
  max-width: 550px;
  margin: auto;
}

.page .activity {
  position: relative;
  display: inline-block;
  width: 90%;
  margin: auto;
  margin-top: 30%;
  border-radius: 18px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 1px rgba(104, 35, 35, 0.5), 0 2px 4px 0 rgba(156, 33, 33, 0.5);
}
.page .activity .head-wrap {
  position: absolute;
    width: 118px;
    left: 50%;
    transform: translateX(-50%);
    top: -59px;
    border: solid 4px rgba(255,255,255,0.3);
    border-radius: 50%;
    overflow: hidden;
}
.page .activity .head-wrap .head-icon {
  width: 100%;
    vertical-align: top;
}
.page .activity .visit-info {
  width: 90%;
  font-size: 14px;
    line-height: 1.14;
    text-align: center;
    color: #ff4b59;
    padding-top: 13%;
    padding-bottom: 8%;
    margin: auto;
}
.page .activity .name {
  float: left;
}
.page .activity .visit {
  float: right;
}
.page .activity .title {
  font-size: 18px;
    font-weight: 600;
    line-height: 1.67;
    text-align: center;
    color: #343434;
    padding-bottom: 15px;
}
.page .video-wrap {
  width: 90%;
  margin: auto;
  border-radius: 6px;
    overflow: hidden;
}
.page .video-wrap .video-js {
  background-color: #000;
}
.page .join {
  font-size: 14px;
    text-align: center;
    color: #343434;
    line-height: 2;
    padding: 20px 0 15px;
}
.page .btn {
  display: block;
  height: 40px;
  line-height: 40px;
  border-radius: 100px;
  width: 90%;
  margin: auto;
  margin-bottom: 30px;
  color: #fff;
  font-size: 14px;
  background-color: #ff4b59;
    border: solid 1px #ff4b59;
}

.popup_wrap {
  display: none;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.85);
  width: 100%;
    height: 100%;
    top: 0;
    z-index: 400;
}
.popup-tip {
  background-color: #fff;
  text-align: center;
  position: absolute;
    width: 76%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    padding: 16px 5% 20px;
}
.popup-tip p {
  font-size: 16px;
    text-align: center;
    color: #4a4a4a;
    padding-bottom: 12px;
    border-bottom: solid 1px #d8d8d8;
}
.popup-tip .confirm .tips {
  font-size: 14px;
    text-align: center;
    color: #666;
    padding: 15px 0 30px;
}
.popup-tip .confirm .ok {
  font-size: 16px;
    color: #fff;
    width: 120px;
    line-height: 40px;
    background-color: #ff4b59;
    border-radius: 30px;
    margin: auto;
}

.form-wrap {
  width: 100%;
  background-color: #f8f8f8;
  padding: 10% 0 8%;
}
.form-wrap h2 {
  font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: #333333;
    margin: 0;
}
.form-wrap h2 span {
  font-size: 24px;
    font-weight: normal;
    color: #ff4b59;
}
.form-wrap .form-ul {
  width: 100%;
    padding: 8% 5% 0;
}
.form-wrap .form-ul li {
    margin-bottom: 25px;
    width: 100%;
    float: left;
}
.form-wrap .form-ul li._nation-code-wrap {
  position: relative;
  border: 1px solid #bfbfbf;
    border-radius: 25px;
    background-color: #fff;
    height: 40px;
}
.form-wrap .form-ul li p {
  padding: 7px 11px;
    border: 1px solid #bfbfbf;
    background-color: #fff;
    -webkit-transition: all .5s ease-out;
    -moz-transition: all .5s ease-out;
    -ms-transition: all .5s ease-out;
    -o-transition: all .5s ease-out;
    transition: all .5s ease-out;
    border-radius: 2px;
    border-radius: 25px;
}
.form-wrap .form-ul li._nation-code-wrap ._short-box {
    float: left;
    width: 20%;
    padding: 0 4%;
    margin: 7px 0;
    height: auto;
    line-height: 26px;
  border: none;
    border-radius: 25px 0 0 25px;
    border-right: solid 1px #bfbfbf;
}
.form-wrap .form-ul li._nation-code-wrap ._long-box {
  width: 80%;
    padding: 7px 2% 7px 15px;
  float: right;
  border: none;
    border-radius: 0 25px 25px 0;
}
.form-wrap .form-input {
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  /* list-style-type: none; */
}
.select_wrap {
  height: 40px;
    line-height: 40px;
    border-radius: 25px;
}
.select_btn {
  width: 40px;
  height: 40px;
}
.form-wrap .form-private {
  float: none;
  padding: 0 0 5px;
  width: 100%;
  text-align: center;
}
.form-wrap .form-private a {
  float: none;
  color: #535353;
  background: none;
    padding-left: 0;
}
.form-wrap .meg-error {
  font-size: 14px;
}
.form-wrap .form-submit {
  width: 90%;
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  background-color: #ff4b59;
  font-size: 18px;
  text-align: center;
  color: #fff;
  margin: 0 auto;
  border: none;
}

@media all and (max-width: 350px) {
  .page .activity .title {
    font-size: 16px;
  }
  .page .activity .head-wrap {
    width: 108px;
    top: -54px;
  }
  .form-wrap h2 {
    font-size: 16px;
  }
  .form-wrap h2 span {
    font-size: 20px;
  }
}
</style>
