"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backTopMixin = exports.itemListenerMixin = void 0;

var _utils = require("common/utils");

var _BackTop = _interopRequireDefault(require("components/content/backTop/BackTop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var itemListenerMixin = {
  data: function data() {
    return {
      itemImgListener: null
    };
  },
  mounted: function mounted() {
    var refresh = (0, _utils.debounce)(this.$refs.scroll.refresh, 50);

    this.itemImgListener = function () {
      refresh();
    };

    this.$bus.$on('itemImageLoad', this.itemImgListener);
  }
};
exports.itemListenerMixin = itemListenerMixin;
var backTopMixin = {
  components: {
    BackTop: _BackTop["default"]
  },
  data: function data() {
    return {
      isShowBackTop: false
    };
  },
  methods: {
    backClick: function backClick() {
      this.$refs.scroll.scrollTo(0, 0, 700);
    },
    listenShowBackTop: function listenShowBackTop(position) {
      this.isShowBackTop = -position.y > 1000;
    }
  }
};
exports.backTopMixin = backTopMixin;