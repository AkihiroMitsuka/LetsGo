import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.use(Buefy)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
/* Firebase */
var config = {
  apiKey: 'AIzaSyBrz7sBjHNRcj1We4GHYipRKTdFOOS_Dy0',
  authDomain: 'letsgo-app-a1992.firebaseapp.com',
  databaseURL: 'https://letsgo-app-a1992.firebaseio.com',
  projectId: 'letsgo-app-a1992',
  storageBucket: 'letsgo-app-a1992.appspot.com',
  messagingSenderId: '285013131988'
}
firebase.initializeApp(config)
