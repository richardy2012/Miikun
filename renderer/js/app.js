// define
var def = require('./def.js');
global.STORAGE = def.STORAGE;


// Vue.js
var Vue = require('vue');

var VueElectron = require('vue-electron');
Vue.use(VueElectron);

// register component
Vue.component('mii-editor', require('./../components/editor.vue'));
Vue.component('mii-tooltip', require('./../components/tooltip.vue'));
Vue.component('mii-setting', require('./../components/setting.vue'));

document.addEventListener('DOMContentLoaded', function() {
    global.app = new Vue(require('./../components/app.vue')).$mount('app');
}, false);
