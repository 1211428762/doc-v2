import { initI18n } from "@/utils/i18n";
export default {
  data() {
    return {
      _tran: (msg) => msg,
    };
  },
  created() {
    const isCN = window.location.pathname.includes("/zh/");
    const i18nCN = initI18n("zh-CN");
    const i18nEN = initI18n("en");
    if (isCN) {
      this._tran = (msg) => i18nCN.global.t.call("zh-CN", msg);
    } else {
      this._tran = (msg) => i18nEN.global.t.call("en", msg);
    }
  },
};
