<script setup lang="ts">
// import axios from "axios";
import { ref } from "vue";
import moEditor from "./moEdior.vue";
// import { debounce } from '@/utils';
import { accessToken, booleanOptions } from "./config";
import { useI18n } from "vue-i18n";
import { _tran } from "@/utils/i18n";
const formConfigs = [
  {
    label: _tran("codemaker.lang"),
    type: "radio",
    prop: "multiLanguage",
    options: booleanOptions,
  },
  {
    label: _tran("codemaker.required"),
    type: "radio",
    prop: "required",
    options: booleanOptions,
  },
  {
    label: _tran("codemaker.formText"),
    type: "textarea",
    prop: "text",
    fit: false,
    placeholder: _tran("codemaker.formPlaceholder"),
  },
];
const formData = ref({
  text: _tran("codemaker.formExampleText"),
  multiLanguage: false,
  addGap: false,
  addTitle: true,
  autoBreakLine: false,
  langText: "",
  required: true,
});
const genFormData = ref({});
const genFormConfigs = ref<any>([]);
const codeStr = ref("");
const activeName = ref("first");
// const translate = (q: any) =>
//   axios.request({
//     method: "POST",
//     url:
//       "https://aip.baidubce.com/rpc/2.0/mt/texttrans/v1?access_token=" +
//       accessToken,
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     data: JSON.stringify({
//       from: "zh",
//       to: "en",
//       q,
//     }),
//   });
function mergeToCamelCase(sentence: string) {
  return sentence
    .toLowerCase()
    .replace(/\s(.)/g, (match: string) => match.toUpperCase())
    .replace(/\s/g, "")
    .replace(/^(.)/, (match: string) => match.toLowerCase());
}
const generateForm = async () => {
  const inputStr = formData.value.text.replaceAll("，", ",");
  let translateArr = inputStr.split(",");
  const inputArr = inputStr.split(",");
  //   if (formData.value.multiLanguage) {
  //     const {
  //       data: {
  //         result: {
  //           trans_result: [{ dst: translateKey }],
  //         },
  //       },
  //     } = await translate(inputStr);
  //     translateArr = translateKey.split(",");
  //   }
  const formArr = [];
  for (let i = 0; i < translateArr.length; i++) {
    const item = translateArr[i];
    if (item) {
      console.log("item--->", item);
      formArr.push({
        label:
          (formData.value.multiLanguage ? "多语言." : "") +
          mergeToCamelCase(translateArr[i]),
        type: "text",
        prop: mergeToCamelCase(translateArr[i]),
        originLabel: mergeToCamelCase(inputArr[i]),
      });
    }
  }

  genFormConfigs.value = formArr;
  codeStr.value = `
    <template>
      <div>
        <!-- fit 为 true 时，自动折行.默认为false-->
        <!-- isRequired 默认表单项必填.默认为true， 如果想要部分表单项非必填，可设置 表单项rules-->
        <FormRule :formConfigs="formConfigs" :fit="false"  labelWidth="120px" ref="dataFormRef" v-model:dataForm="formData"> </FormRule>
    </template>
    <script setup lang="ts">
    import { ref } from 'vue';
    const formConfigs = ${JSON.stringify(
      genFormConfigs.value.map((c) => {
        const { originLabel, ...rest } = c;
        return rest;
      })
    )};
    const formData = ref({
        ${formArr
          .filter((c) => c.prop)
          .map((item) => `${item.prop}: '',`)
          .join("\n      ")} // 常规值可不初始化，针对多选类表单推荐初始化值
    });
   ${"</scr" + "ipt>"};
    \n
    <style scoped></style>
`;

  console.log("genFormConfigs>", genFormConfigs.value);
  // 拼接多语言文案
  let langText = "";
  genFormConfigs.value.forEach((c) => {
    if (c.prop) {
      langText += `    ${c.prop}: ${c.originLabel} \n`;
    }
  });
  formData.value.langText = langText;
};
</script>

<template>
  <div>
    <doc-form-tab
      fit
      :formConfigs="formConfigs"
      labelWidth="180px"
      ref="dataFormRef"
      v-model:dataForm="formData"
    >
    </doc-form-tab>
    <el-button type="primary" @click="generateForm">{{
      _tran("codemaker.gen")
    }}</el-button>
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane :label="_tran('codemaker.preview')" name="first">
        <doc-form-tab
          :footer="false"
          :form-configs="genFormConfigs"
          v-model:dataForm="genFormData"
          :isRequired="formData.required"
          :fit="formData.autoBreakLine"
          labelWidth="180px"
          ref="dataFormRef"
        ></doc-form-tab>
      </el-tab-pane>
      <el-tab-pane :label="_tran('codemaker.code')" name="second">
        <moEditor :key="activeName" id="formCode" :code="codeStr"></moEditor
      ></el-tab-pane>
      <el-tab-pane :label="_tran('codemaker.lang1')" name="third">
        <el-input
          :key="activeName"
          v-model="formData.langText"
          :autosize="{ minRows: 4 }"
          type="textarea"
          placeholder=""
      /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped></style>
