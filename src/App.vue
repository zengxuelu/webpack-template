<template>
  <div class="app">
    <Base v-if="show" />
    <Modal v-if="modal.show" class="fadeIn animated" />
    <Loading v-if="loading" />
    <Orientation />
  </div>
</template>
<style rel="stylesheet/stylus" lang="stylus">
    .app
        width 100%
        height 100%
    ::-webkit-scrollbar
        width: 6px;
        height: 6px;
        /* background-color:#fff; */
        display: none;

    ::-webkit-scrollbar:hover
        background-color: #eee;

    ::-webkit-scrollbar-thumb
        min-height: 5px;
        min-width: 5px;
        -webkit-border-radius: 20px;
        border: 1px solid #AAA;
        background-color: #AAA;

    ::-webkit-scrollbar-thumb:hover
        min-height: 5px;
        min-width: 5px;
        -webkit-border-radius: 20px;
        border: 1px solid #444;
        background-color: #444;

    ::-webkit-scrollbar-thumb:active
        -webkit-border-radius: 20px;
        border: 1px solid #444;
        background-color: #444;
</style>
<script>
import { mapState } from 'vuex';
import Vue from 'vue';
import Base from './views/base/base.vue';
import Loading from './components/loading.vue';
import Modal from './components/Modal/modal.vue';
import Orientation from './components/Orientation/orientation.vue';
import store from './store/index';
import * as types from './store/mutation-type';
// import { isWeiXin } from '~/tools/utils';
import alert from '~/components/Alert';
import confirm from '~/components/Confirm'
import 'animate.css/animate.min.css';
import '@babel/polyfill';

Vue.prototype.$alert = alert;
Vue.prototype.$confirm = confirm;

export default {
  components: {
    Loading,
    Modal,
    Base,
    Orientation
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapState({
      modal: state => state.modal,
      loading: state => state.loading,
      showGuide: state => state.showGuide,
      alert: state => state.alert
    })
  },
  mounted() {
    store.commit(types.SHOW_LOADING, true);
    // 解决ios输入之后键盘收起后留白
    document.body.addEventListener('focusout', function() {
      window.scrollTo(0, document.documentElement.clientHeight);
    });
    if (process.env.VUE_APP_ENV !== 'development') {
      requirejs(['weixin/set'], function(setShare) {
        let imgUrl = require('./images/share.png');
        window.shareconfig = {
          appid: 'wx0fcf7f47419c8171',
          title: '中秋祈愿领节日时装头饰', // 分享标题，如果不设置会获取页面的
          desc: '《征途2手游》中秋团圆聚兄弟，快来看看你的专属福卡吧~', // 分享描述
          link: process.env.VUE_APP_ENV === 'pre' ? 'https://zt2m.web.ztgame.com/act/moon2019/' : 'https://zt2m.ztgame.com/act/moon2019/', // 分享链接，如果和当前访问的域不完全一致会导致分享自定义失败
          imgUrl: location.href.replace('https', 'http').split('act')[0] + imgUrl, // 分享图标
          type: 'link', // 分享类型,music、video或link，不填默认为link ,只在微信下起作用
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空,只在微信下起作用
          success: function() {
            // 用户确认分享后执行的回调函数,只在微信下起作用
            window.shareconfig.link = process.env.VUE_APP_ENV === 'pre' ? 'https://zt2m.web.ztgame.com/act/moon2019/' : 'https://zt2m.ztgame.com/act/moon2019/';
            setShare(window.shareconfig);
          },
          cancel: function() {
            // 用户取消分享后执行的回调函数,只在微信下起作用
          }
        }
        setShare(window.shareconfig);
        window.setShare = setShare;
        // 如果需要重新设置分享信息只需要重新执行 setShare()方法
      });
    }
    this.show = true;
  },
  methods: {
    closeAlert() {
      store.commit(types.HIDE_ALERT);
    },
    close() {
      store.commit(types.HIDE_MODAL);
    }
  }
}
</script>
