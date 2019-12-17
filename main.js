import Vue from "vue";
import App from "./App";

import pageHead from "./components/page-head.vue";
import pageFoot from "./components/page-foot.vue";
import uLink from "@/components/uLink.vue";
import store from "./store";

import MinRequest from "./common/MinRequest.js";
import minRequest from "./api/index.js";
Vue.config.productionTip = false;

Vue.prototype.$store = store;
Vue.prototype.$backgroundAudioData = {
    playing: false,
    playTime: 0,
    formatedPlayTime: "00:00:00"
};

Vue.component("page-head", pageHead);
Vue.component("page-foot", pageFoot);
Vue.component("uLink", uLink);
Vue.use(MinRequest);

App.mpType = "app";

const app = new Vue({
    store,
    minRequest,
    ...App
});
app.$mount();
