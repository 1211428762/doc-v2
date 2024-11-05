// 多组件库的国际化和本地项目国际化兼容
import { App, WritableComputedRef } from "vue";
import { type I18n, createI18n } from "vue-i18n";

function siphonI18n(prefix = "zh-CN") {
  return Object.fromEntries(
    Object.entries(import.meta.glob("./locales/*.ts", { eager: true })).map(
      ([key, value]: any) => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)[1];
        return [matched, value.default];
      }
    )
  )[prefix];
}

export const localesConfigs = {
  zh: {
    ...siphonI18n("zh-CN"),
  },
  en: {
    ...siphonI18n("en"),
  },
  zhHK: {
    ...siphonI18n("zh-HK"),
  },
};
console.log("localesConfigs--->", localesConfigs);
/**
 * 国际化转换工具函数（自动读取根目录locales文件夹下文件进行国际化匹配）
 * @param message message
 * @returns 转化后的message
 */
export function transformI18n(message: any = "", variable = {}) {
  if (!message) {
    return "";
  }

  // 处理存储动态路由的title,格式 {zh:"",en:""}
  if (typeof message === "object") {
    const locale: string | WritableComputedRef<string> | any =
      i18n.global.locale;
    return message[locale?.value];
  }

  const key = message.match(/(\S*)\./)?.[1];
  if (key && Object.keys(siphonI18n("zh-CN")).includes(key)) {
    return i18n.global.t.call(i18n.global.locale, message, variable);
  } else if (!key && Object.keys(siphonI18n("zh-CN")).includes(message)) {
    // 兼容非嵌套形式的国际化写法
    return i18n.global.t.call(i18n.global.locale, message, variable);
  } else {
    return message;
  }
}

/** 此函数只是配合i18n Ally插件来进行国际化智能提示，并无实际意义（只对提示起作用），如果不需要国际化可删除 */
export const $t = (key: string) => key;

const isCN = window.location.pathname.includes("/zh/");
const locale = isCN ? "zh-CN" : "en";
export const i18n: I18n = createI18n({
  legacy: false,
  locale: locale,
  fallbackLocale: "en",
  messages: localesConfigs,
});
export const initI18n = (lang = locale) =>
  createI18n({
    legacy: false,
    locale: lang,
    fallbackLocale: "en",
    messages: localesConfigs,
  });
export function useI18n(app: App) {
  app.use(i18n);
}
const i18nCN = initI18n("zh-CN");
const i18nEN = initI18n("en");
export const _tran = (msg) => {
  const isCN = window.location.pathname.includes("/zh/");
  if (isCN) {
    return i18nCN.global.t.call("zh-CN", msg);
  } else {
    return i18nEN.global.t.call("en", msg);
  }
};
