// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import VueToasted from 'vue-toasted'
import axios from './http'
import moment from 'moment'


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$moment = moment


Vue.use(VueToasted,{
    theme:'bubble',
    position:'top-center',
    duration:3000,
    iconPack:'material',
    action:{
        text:'Cancel',
        onclick:(e,toastObject) =>{
            toastObject.goAway(0)
        }
    }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
