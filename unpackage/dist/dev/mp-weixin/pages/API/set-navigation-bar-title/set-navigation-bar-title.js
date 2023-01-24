"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "nav-default",
      hasSetText: false,
      hasSetBg: false
    };
  },
  methods: {
    setText() {
      this.hasSetText = !this.hasSetText;
      common_vendor.index.setNavigationBarTitle({
        title: this.hasSetText ? "Hello uni-app" : "\u9ED8\u8BA4\u5BFC\u822A\u680F"
      });
    },
    setBg() {
      this.hasSetBg = !this.hasSetBg;
      common_vendor.index.setNavigationBarColor({
        frontColor: this.hasSetBg ? "#000000" : "#ffffff",
        backgroundColor: this.hasSetBg ? "#F8F8F8" : "#007AFF"
      });
    }
  }
};
if (!Array) {
  const _easycom_page_head2 = common_vendor.resolveComponent("page-head");
  _easycom_page_head2();
}
const _easycom_page_head = () => "../../../components/page-head/page-head.js";
if (!Math) {
  _easycom_page_head();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: $data.title
    }),
    b: common_vendor.o((...args) => $options.setText && $options.setText(...args)),
    c: common_vendor.o((...args) => $options.setBg && $options.setBg(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/hbuilder/online-shop/online-shop/pages/API/set-navigation-bar-title/set-navigation-bar-title.vue"]]);
wx.createPage(MiniProgramPage);
