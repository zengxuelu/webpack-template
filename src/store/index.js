import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
// import index from './modules/index';
// import welfare from './modules/welfare';
// import footprint from './modules/footprint';

import createLogger from 'vuex/dist/logger';

// const questions = require('./question.js');


Vue.use(Vuex);

const debug = process.env.VUE_APP_ENV !== 'development';

/**
 * 输出 store
 */
export default new Vuex.Store({
  state: {
    modal: {
      show: false,
      type: ''
    },
    alert: {
      show: false,
      msg: ''
    },
    confirm: {
      show: false
    },
    goToLogin: false,
    showGuide: false,
    userInfo: {},
    userStatus: 0,
    updateStyle: false,
    loading: false
  },
  actions,
  mutations,
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

