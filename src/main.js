import Vue from 'vue';
import App from './App.vue';

Vue.filter('to-lowercase', (value) => {
  return value.toLowerCase();
});

// NOTE: global mixins are normally for showcase.
Vue.mixin({
  created() {
    console.log('Created! (Global Mixin)');
  },
});

new Vue({
  el: '#app',
  render: h => h(App),
});
