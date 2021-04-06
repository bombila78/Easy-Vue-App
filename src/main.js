import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faUser, faChevronLeft, faChevronRight, faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from "@/router";
import store from '@/store';

import App from './App.vue'

library.add(faBars, faUser, faChevronLeft, faChevronRight, faPhoneAlt, faEnvelope, faMapMarkerAlt )

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
