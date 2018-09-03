// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import store from './vuex/vuex'

store.commit('increment')
// console.log('store.state.count = ',store.state.count) // -> 1

Vue.config.productionTip = false;
Vue.use(iview);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  template: '<App/>'
});

router.push('/layoutView');