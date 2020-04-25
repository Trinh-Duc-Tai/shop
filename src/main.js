import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'
import firebase from 'firebase'



Vue.config.productionTip = false
Vue.use(VueNoty)

let app = null;

//wait for firebase auth to init before creating the app
firebase.auth().onAuthStateChanged(() => {

  //init app if not already created
  if(!app){

    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')

  }

})



