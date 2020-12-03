"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  cartLength: function cartLength(state) {
    return state.cartList.length;
  },
  cartList: function cartList(state) {
    return state.cartList;
  }
};
exports["default"] = _default;