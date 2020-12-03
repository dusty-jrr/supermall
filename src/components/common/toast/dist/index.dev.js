"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Toast = _interopRequireDefault(require("./Toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var obj = {};

obj.install = function (Vue) {
  // Vue.extend(Toast)
  // document.body.appendChild(Toast.$el)
  //1.创建组件构造器
  var toastContrustor = Vue.extend(_Toast["default"]); //2.new 的方式，根据组件构造器，可以创建出来一个组件对象

  var toast = new toastContrustor(); //3.将组件对象，手动挂载到某一个元素上

  toast.$mount(document.createElement('div')); //4.toast.$el对应的就是div

  document.body.appendChild(toast.$el);
  Vue.prototype.$toast = toast;
};

var _default = obj;
exports["default"] = _default;