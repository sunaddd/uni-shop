"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      showMap: false
    };
  },
  onLoad() {
    this.showMap = true;
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
  return common_vendor.e({
    a: common_vendor.p({
      title: "cover-view\u7528\u4E8E\u8986\u76D6map\u3001video\u7B49\u539F\u751F\u7EC4\u4EF6"
    }),
    b: $data.showMap
  }, $data.showMap ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/hbuilder/online-shop/online-shop/pages/component/cover-view/cover-view.vue"]]);
wx.createPage(MiniProgramPage);
