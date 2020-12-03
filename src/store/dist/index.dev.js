"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _mutation = _interopRequireDefault(require("./mutation"));

var _actions = _interopRequireDefault(require("./actions"));

var _getters = _interopRequireDefault(require("./getters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//1.安装插件
_vue["default"].use(_vuex["default"]); //2.创建Store对象


var state = {
  cartList: []
};
var store = new _vuex["default"].Store({
  state: state,
  mutations: _mutation["default"],
  actions: _actions["default"],
  getters: _getters["default"]
}); //3.挂载Vue实例上

var _default = store;
exports["default"] = _default;