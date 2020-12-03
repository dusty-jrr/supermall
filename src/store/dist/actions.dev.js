"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mutationTypes = require("./mutation-types");

var _default = {
  addCart: function addCart(context, payload) {
    return new Promise(function (resolve, reject) {
      //1.查找之前数组中是否有该商品
      var oldProduct = context.state.cartList.find(function (item) {
        return item.iid === payload.iid;
      }); //2.判断oldProduct

      if (oldProduct) {
        //数量＋1
        context.commit(_mutationTypes.ADD_COUNTER, oldProduct);
        resolve('当前的商品数量+1');
      } else {
        //添加新的商品
        payload.count = 1;
        context.commit(_mutationTypes.ADD_TO_CART, payload);
        resolve('添加新的商品');
      }
    });
  }
};
exports["default"] = _default;