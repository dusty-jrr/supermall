"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _fastclick = _interopRequireDefault(require("fastclick"));

var _vueLazyload = _interopRequireDefault(require("vue-lazyload"));

var _toast = _interopRequireDefault(require("components/common/toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;
_vue["default"].prototype.$bus = new _vue["default"](); //安装toast插件

_vue["default"].use(_toast["default"]); //解决移动端的300ms延迟


_fastclick["default"].attach(document.body); //使用懒加载的插件


_vue["default"].use(_vueLazyload["default"], {
  loading: require('./assets/img/common/placeholder.png')
});

new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"],
  store: _store["default"]
}).$mount('#app');