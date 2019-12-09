import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as firebase from 'firebase'
import infoText from '@/components/InfoText.vue'

Vue.config.productionTip = false
Vue.component('app-info-text', infoText)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.$store.dispatch('autoSignIn', user)
        console.log('user is logged in');
        
      }
    })
  }
}).$mount('#app')
