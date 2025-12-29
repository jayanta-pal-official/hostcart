// import './assets/main.css'
import route from "./routers/index.js";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";


import Toast from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import "vue-awesome-paginate/dist/style.css";
import VueAwesomePaginate from "vue-awesome-paginate";
const pinia = createPinia();


const app = createApp(App);
app.use(Toast, {
  autoClose: 3000,
  clearOnUrlChange: false,
  position: "bottom-right",
});
app.use(pinia);
app.use(route);
app.component("VueAwesomePaginate", VueAwesomePaginate);
app.mount("#app");
