import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

// Katex
/*import VueKatex from 'vue-katex';
Vue.use(VueKatex, {globalOptions: {}});*/


// Auto router.
/*
import axios from "axios";
  axios({
    method: 'post',
    url: '/crud/themes.php',
    data: {
      'crud': 'r'
    }
  }).then(response => {
    console.log(response.data.result);
    for(let r of response.data.result){
        console.log(r)
      if (r.raccourci !== '') {
        router.options.routes.push(
            {
              name: `${r.code}-shortcut`,
              path: `/${r.raccourci}`,
              redirect: `/${r.code}`
            }
        );
      }
      router.options.routes.push(
          {
            name: `${r.code}`,
            path: `/${r.code}/:code?`,
            component: () => import(/!* webpackChunkName: "theme" *!/`@/themes/${r.code}/index.vue`),
          }
      );

    }
      console.log(router.options.routes);



    return response.data.result;
  }).catch(e => {
    console.log('Erreur dans les routes')
    console.log(e);
    return [];
  }).finally(()=>{
  });*/

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app');