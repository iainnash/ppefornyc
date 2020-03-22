import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Skeleton from './Skeleton.vue'

import Home from './pages/Home.vue';
import PaySuccess from './pages/PaySuccess.vue';
import NearGoal from './pages/NearGoal.vue';
import PayCancel from './pages/PayCancel.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.filter('zerofill', function (value) {
  //value = ( value < 0 ? 0 : value );
  return ( value < 10 && value > -1 ? '0' : '' ) + value;
});

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {component: App, path: '/', children: [
      {path: '/', component: Home},
      {path: '/pay/success', component: PaySuccess},
      {path: '/pay/cancel', component: PayCancel},
    ]},
    {component: NearGoal, path: '/goal'},
  ]
});


new Vue({
  router,
  render: h => h(Skeleton),
}).$mount('#app')
