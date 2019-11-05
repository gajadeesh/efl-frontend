import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueLayers from "vuelayers";
import "vuelayers/lib/style.css"; // needs css-loader
import axios from "axios";
import * as VueGoogleMaps from "vue2-google-maps";
import Chat from "vue-beautiful-chat";
// import VueSocketio from "vue-socket.io";
import VueJWT from "vuejs-jwt";

Vue.use(VueJWT);
Vue.use(Chat);
Vue.use(Vuetify);
// import Tawk from "vue-tawk";

// Vue.use(Tawk, {
//   tawkSrc: "https://embed.tawk.to/5d568f6a77aa790be32f3188/1dimtogbh"
// })
window.Bus = new Vue();
window.token = localStorage.getItem("token");
window.axios = axios;
// axios.defaults.baseURL = "http://192.168.1.2:80/oauth/token";
Vue.use(VueLayers);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA27Qqwtb2jMFDRpve577GdEPXR6K1e--E",
    libraries: "places,drawing,visualization" // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  }

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
