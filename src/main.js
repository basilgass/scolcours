import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

// Katex
import VueKatex from 'vue-katex';
Vue.use(VueKatex, {globalOptions: {}});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
