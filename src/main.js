import Vue from "vue";
import App from "./App.vue";
import "./plugins/ant-design-vue.js";
import Vue2Filters from "vue2-filters";

import router from "./router";

Vue.config.productionTip = false;

Vue.use(Vue2Filters);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
