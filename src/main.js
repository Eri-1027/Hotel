import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import vuetify from "./plugins/vuetify";
import "@/assets/scss/main.scss";
import "./plugins/aos"; // aos動畫套件

Vue.config.productionTip = false;
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

