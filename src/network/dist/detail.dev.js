"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDetail = getDetail;
exports.getRecommend = getRecommend;
exports.Shop = exports.GoodsParam = exports.Goods = void 0;

var _request = require("./request");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getDetail(iid) {
  return (0, _request.request)({
    url: '/detail',
    params: {
      iid: iid
    }
  });
}

function getRecommend() {
  return (0, _request.request)({
    url: '/recommend'
  });
}

var Goods = function Goods(itemInfo, columns, services) {
  _classCallCheck(this, Goods);

  this.title = itemInfo.title;
  this.desc = itemInfo.desc;
  this.newPrice = itemInfo.price;
  this.oldPrice = itemInfo.oldPrice;
  this.discount = itemInfo.discountDesc;
  this.columns = columns;
  this.services = services;
  this.realPrice = itemInfo.lowNowPrice;
};

exports.Goods = Goods;

var GoodsParam = function GoodsParam(info, rule) {
  _classCallCheck(this, GoodsParam);

  //注：images可能没有值（某些商品有值，某些商品没有值）
  this.image = info.image ? info.image[0] : '';
  this.infos = info.set;
  this.sizes = rule.tables;
};

exports.GoodsParam = GoodsParam;

var Shop = function Shop(shopInfo) {
  _classCallCheck(this, Shop);

  this.logo = shopInfo.shopLogo;
  this.name = shopInfo.name;
  this.fans = shopInfo.cFans;
  this.sells = shopInfo.cSells;
  this.score = shopInfo.score;
  this.goodsCount = shopInfo.cGoods;
};

exports.Shop = Shop;