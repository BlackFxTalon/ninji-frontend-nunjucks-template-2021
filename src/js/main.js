/* alpine.js */

import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()


/* swiper.js */

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// custom scripts

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});
