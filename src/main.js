import 'element-ui/lib/theme-chalk/index.css';

import Vue from 'vue';
import App from './App.vue';
import Element from 'element-ui';
import formCreate from '@form-create/element-ui';
import FcDesigner from './form-create/designer';

import InputMobile from './components/designForm/InputMobile.vue';
Vue.config.productionTip = false;

Vue.use(Element, { size: 'default' }).use(formCreate).use(FcDesigner).use(FcDesigner.formCreate);

Vue.component('input-mobile', InputMobile);

new Vue({
  render: h => h(App),
}).$mount('#app');
