// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import router from './router'
import store from './vuex/vuex'

store.commit('increment')

Vue.config.productionTip = false;
Vue.use(iview);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { 
    App:resolve=>require(['./App'],resolve)
  },
  template: '<App/>'
});
// router.push('/layoutView/pagesTab');