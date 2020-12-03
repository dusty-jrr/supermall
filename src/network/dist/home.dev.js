"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHomeMultidata = getHomeMultidata;
exports.getHomeGoods = getHomeGoods;

var _request = require("./request");

function getHomeMultidata() {
  return (0, _request.request)({
    url: '/home/multidata'
  });
}

function getHomeGoods(type, page) {
  return (0, _request.request)({
    url: '/home/data',
    params: {
      type: type,
      page: page
    }
  });
} //函数调用->压入函数栈（保存函数调用过程中所有变量）
// 函数调用结束->弹出函数栈（释放函数所有的变量）