"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mutationTypes = require("./mutation-types");

var _ADD_COUNTER$ADD_TO_C;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_ADD_COUNTER$ADD_TO_C = {}, _defineProperty(_ADD_COUNTER$ADD_TO_C, _mutationTypes.ADD_COUNTER, function (state, payload) {
  payload.count++;
}), _defineProperty(_ADD_COUNTER$ADD_TO_C, _mutationTypes.ADD_TO_CART, function (state, payload) {
  payload.checked = true;
  state.cartList.push(payload);
}), _ADD_COUNTER$ADD_TO_C);

exports["default"] = _default;