import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from "vue-resource";
import Routes from "./route.js";
import VueAxios from "vue-axios";
import axios from 'axios';

Vue.use(VueAxios,axios);

Vue.prototype.$axios =axios;
//routes 
Vue.use(VueRouter);

const router = new VueRouter({
  routes:Routes,
  mode:"history"

});

// Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
});
