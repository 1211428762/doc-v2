import FormList from "./FormList/index.vue";
import TableList from "./TableList/index.vue";
import TableListExample from "./TableList/example.vue";
import FormListExampleRadio from "./FormList/example/radio.vue";
import FormListExample from "./FormList/example.vue";
import FormListExampleRadioAppend from "./FormList/example/radioAppend.vue";
import FormListExampleSync from "./FormList/example/sync.vue";
import BusinessIndex from "./Business/index.vue";
// import TableListExample from './TableList/example'
import FlowChart from "./FlowChart/index.vue";
import test from "./test.vue";

// amber组件加载

import docFormTab from "./form-tab/src/doc-form-tab.vue";
import TabInput from "./form-tab/components/tab-input.vue";
import TabDate from "./form-tab/components/tab-date.vue";
import TabNumber from "./form-tab/components/tab-number.vue";
import TabRaido from "./form-tab/components/tab-radio.vue";
import rulesCommon from "../../guide/rules/rules-common.vue";
import ruleSpecial from "../../guide/rules/rules-special.vue";
// flow-ui组件挂载
import areaSelect from "./flow-components/area/index.vue";
import Badge from "./flow-components/badge.vue";
import fToast from "./flow-components/toast/toast.vue";
import fButton from "./flow-components/button.vue";
import fDialog from "./flow-components/dialog.vue";
import viewport from "./flow-components/viewport.vue";

// 宠物和正方形
import cube from "./render-cube/src/render-cube.vue";
import pet from "./render-pet/src/render-pet.vue";
// codemaker组件挂载
import codemaker from "./lowcode/codemaker.vue";
import formSearch from "./FormSearch/install.ts";
// 全局挂载
export default {
  install(Vue) {
    Vue.component("FormList", FormList);
    Vue.component("TableList", TableList);
    Vue.component("TableListExample", TableListExample);
    Vue.component("FormListExample", FormListExample);
    Vue.component("FormListExampleRadio", FormListExampleRadio);
    Vue.component("FormListExampleRadioAppend", FormListExampleRadioAppend);
    Vue.component("FormListExampleSync", FormListExampleSync);
    Vue.component("BusinessIndex", BusinessIndex);
    Vue.component("FlowChart", FlowChart);
    Vue.component("docFormTab", docFormTab);
    Vue.component(TabInput.name, TabInput);
    Vue.component(TabDate.name, TabDate);
    Vue.component(TabNumber.name, TabNumber);
    Vue.component(TabRaido.name, TabRaido);
    Vue.component("test", test);
    Vue.component("ruleSpecial", ruleSpecial);
    Vue.component("rulesCommon", rulesCommon);

    //flow-ui挂载
    Vue.component("fButton", fButton);
    Vue.component("areaSelect", areaSelect);
    Vue.component("viewport", viewport);
    Vue.component("fDialog", fDialog);
    Vue.component("Badge", Badge);
    Vue.component("fToast", fToast);
    Vue.component("cube", cube);
    Vue.component("pet", pet);

    // codemaker组件挂载
    Vue.component("codemaker", codemaker);
    Vue.use(formSearch);
  },
};
