import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import VueLayers from "vuelayers";
import "vuelayers/lib/style.css"; // needs css-loader

Vue.use(VueLayers);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
