import Vue from 'vue';
import App from './App.vue';
import router from './router';

//font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faDiscord,faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';


library.add(faDiscord, faTwitterSquare, faGithubSquare)
Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon)

//Vuescroll
var VueScrollTo=require('vue-scrollto')
Vue.use(VueScrollTo)
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
