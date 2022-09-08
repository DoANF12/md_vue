import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'jquery/dist/jquery.min.js'
import { createApp } from 'vue'
import App from './App.vue'

import CoursesComponent from "./components/CoursesComponent.vue";
import CarouselComponent from "./components/Elements/CarouselComponent.vue";
import router  from "./router/index.js"

const app = createApp(App);
app.component('CarouselComponent',CarouselComponent);
app.component('CoursesComponent',CoursesComponent);
app.use(router);
app.mount('#app');

// import jQuery from 'jquery';
// global.$ = jQuery