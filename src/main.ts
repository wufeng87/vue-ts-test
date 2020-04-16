import Vue from "vue";
import App from "./App.vue";
import "normalize.css/normalize.css";
import vueCustomElement from "vue-custom-element";
import { LOG, APPS, BACKEND } from "./config/SETUP";
import Logger from "yn-p1/libs/modules/log/logger";
// import store from "yn-p1/libs/store";
import store from "@/store";

import VueRouter from "vue-router";
import YnP1 from "yn-p1";
//import "@/assets/applications/stylesheets/app.css";

Logger.option("level", LOG.LEVEL);
Logger.warn(
  `Platform Log Level: ${
    LOG.LEVEL === 2
      ? "2 - Warn"
      : LOG.LEVEL === 3
      ? "3 - Info"
      : LOG.LEVEL === 4
      ? "4 - Log"
      : ""
  }`
);

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(vueCustomElement);
Vue.use(YnP1.components);
YnP1.setup(LOG, APPS, BACKEND);

new Vue({
  //router will be updated whild App is created
  router: new VueRouter({
    routes: []
  }),
  store,
  render: h => h(App)
}).$mount("#app");
