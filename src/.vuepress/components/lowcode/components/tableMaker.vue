<script setup lang="ts">
import { ref, reactive } from "vue";
import moEditor from "./moEdior.vue";
import { useI18n } from "vue-i18n";

import { uniqBy, isEqual } from "lodash-es";

import { accessToken, booleanOptions } from "./config";
import { _tran } from "@/utils/i18n";
const state = reactive({
  getListApi: undefined,
  dataList: [],
  actionList: [
    {
      name: "common.view",
      methods: (row: { id: string }) => {},
    },
    {
      name: "common.delete",
      type: "delete",
      methods: async (row: { id: string }) => {
        //  await gatewayDelete({ id: row.id });
      },
    },
  ],
});
const listConfig = { state: { dataForm: {} } };

const formConfigs = [
  {
    label: _tran("codemaker.lang"),
    type: "radio",
    prop: "multiLanguage",
    options: booleanOptions,
  },
  {
    label: _tran("codemaker.searchFormText"),
    type: "textarea",
    prop: "searchText",
    fit: false,
    placeholder: _tran("codemaker.formPlaceholder"),
  },
  {
    label: _tran("codemaker.tableText"),
    type: "textarea",
    prop: "tableText",
    fit: false,
    placeholder: _tran("codemaker.tablePlaceholder"),
  },
];
const formData = ref({
  searchText: _tran("page.username"),
  tableText: _tran("codemaker.tableExampleText"),
  langText: "",
  multiLanguage: false,
  operationBtn: true,
});
const genFormData = ref({});
const genFormConfigs = ref<any>([]);
const genColConfigs = ref<any>([]);
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
  const searchTextStr = formData.value.searchText.replaceAll("，", ",");
  const tableTextStr = formData.value.tableText.replaceAll("，", ",");
  let translateSearchTextArr = searchTextStr.split(",");
  let translateTableTextArr = tableTextStr.split(",");
  const originSearchTextArr = searchTextStr.split(",");
  const originTableTextArr = tableTextStr.split(",");
  //   if (formData.value.multiLanguage) {
  //     try {
  //       const {
  //         data: {
  //           result: {
  //             trans_result: [{ dst: translateSearchText }],
  //           },
  //         },
  //       } = await translate(searchTextStr);
  //       const {
  //         data: {
  //           result: {
  //             trans_result: [{ dst: translateTableText }],
  //           },
  //         },
  //       } = await translate(tableTextStr);
  //       translateSearchTextArr = translateSearchText.split(",");
  //       translateTableTextArr = translateTableText.split(",");
  //     } catch (error) {
  //       ElMessage.warning(
  //         "God damn \ud83d\ude40，应该是翻译token失效了 \ud83d\ude3f，呼叫他来补充"
  //       );
  //     }
  //   }
  const formArr = [];
  for (let i = 0; i < translateSearchTextArr.length; i++) {
    const item = translateSearchTextArr[i];
    if (item) {
      formArr.push({
        label:
          (formData.value.multiLanguage ? "多语言." : "") +
          mergeToCamelCase(translateSearchTextArr[i]),
        type: "text",
        prop: mergeToCamelCase(translateSearchTextArr[i]),
        originLabel: mergeToCamelCase(originSearchTextArr[i]),
      });
    }
  }

  genFormConfigs.value = formArr;
  const colArr = [];
  for (let i = 0; i < translateTableTextArr.length; i++) {
    const item = translateTableTextArr[i];
    if (item) {
      colArr.push({
        label:
          (formData.value.multiLanguage ? "多语言." : "") +
          mergeToCamelCase(translateTableTextArr[i]),
        prop: mergeToCamelCase(translateTableTextArr[i]),
        originLabel: mergeToCamelCase(originTableTextArr[i]),
      });
    }
  }

  //   colArr.push({
  //     slot: "operation",
  //   });
  genColConfigs.value = colArr;
  codeStr.value = `
    <template>
    <hit-list-wrap>
        <hit-form
                    :formConfigs="listConfig.state.formConfigs"
                    v-model:dataForm="listConfig.state.dataForm"
                    @onQuery="listConfig.query"
                    @onReset="listConfig.refreshList">
                    <!-- 如果你要自定义表单的按钮，请在此处添加 -->
                    <template #formButton> <el-button >{{ $t('content.customButtons') }}</el-button> </template>
                    </hit-form>
                       <el-card>
         <!-- ifAdd 传入按钮权限控制显隐， onAdd为新增事件 -->
        <hit-table
                :ifAdd="$hasAuth('gatew:add')"
                @onAdd="openAdd"
                :dataList="state.dataList"
                :colConfigs="listConfig.state.colConfigs"
                :dataListLoading="state.dataListLoading"
                :current-page="state.current"
                :page-size="state.size">
          <template v-slot:operation>
            <el-table-column :label="$t('common.operate')" fixed="right" width="130px">
              <template v-slot="scope">
                <hit-action :actionList="state.actionList" :rowInfo="scope.row" @formAction="listConfig.operationHandle" />
              </template>
            </el-table-column>
          </template>
        </hit-table>
        <el-pagination v-model:current-page="listConfig.state.current" v-model:page-size="listConfig.state.size" :page-sizes="[5, 10, 20, 50]" :background="true" layout="total, sizes, prev, pager, next, jumper" :total="state.total" @size-change="listConfig.handleSizeChange" @current-change="listConfig.handleCurrentChange"></el-pagination>
          </el-card>
    </hit-list-wrap>
    </template>
    <script setup lang="ts">
    import { ref , reactive ,onMounted} from 'vue';
    import { useI18n } from 'vue-i18n';
    import useList from '@/hooks/useList';
    import { hasAuth } from '@/utils/hasAuth';
    const state = reactive<PageState>({
      getListApi: undefined, // t('labelLingo.yourPaginationFunction'),
    formConfigs: ${JSON.stringify(
      genFormConfigs.value.map((c: { originLabel: any }) => {
        const { originLabel, ...rest } = c;
        return rest;
      })
    )},
    colConfigs: ${JSON.stringify(
      genColConfigs.value.map((c: { originLabel: any }) => {
        const { originLabel, ...rest } = c;
        return rest;
      })
    )},
    });
    const openAdd = () => {
};
    const listConfig = useList(state);

    onMounted(() => {
    state.actionList = [
        {
            name: 'common.view',
            show: hasAuth('gatew:info'),
            methods: (row: { id: string }) => {
            },
        },
        {
            name: 'common.delete',
            show: hasAuth('gatew:delete'),
            type: 'delete',
            tip: 'gateway.deviceDeleteTip',
            methods: async (row: { id: string }) => {
              //  await gatewayDelete({ id: row.id });
            },
        },
    ];
});
          ${"</scr" + "ipt>"}
    \n
       <style scoped></style>
    `;

  // 默认一条数据
  const tableMockData = {};
  let langText = "";
  // 拼接多语言文案
  uniqBy([...genFormConfigs.value, ...genColConfigs.value], "prop").forEach(
    (c) => {
      if (c.prop) {
        langText += `    ${c.prop}: ${c.originLabel || ""} \n`;
        tableMockData[c.prop] = c.prop;
      }
    }
  );
  state.dataList = [tableMockData];
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
        <FormSearch
          :formConfigs="genFormConfigs"
          v-model:dataForm="listConfig.state.dataForm"
          @onQuery="listConfig.query"
          @onReset="listConfig.refreshList"
        >
        </FormSearch>
        <TableList
          :loading="false"
          :tableData="state.dataList"
          :tableHead="genColConfigs"
          :addBtnList="{
            property: {
              width: 200, // 列宽
              label: '操作',
              class: 'text-center test', // 为列添加类名
            },
            button: [
              {
                info: '编辑', // 文字
                method: 'edit', // 方法名
                icon: 'el-icon-edit', // icon，支持element-ui icon
                type: 'primary', // element-ui button type属性
                iconColor: 'red', // icon颜色
                fontColor: 'white', // 字体颜色
              },
              {
                info: '删除',
                method: 'delete',
              },
            ],
          }"
          :total="10"
          :pageSize="10"
          :currentPage="1"
          showCheckbox
        >
        </TableList>
        <el-pagination
          v-model:current-page="listConfig.state.current"
          v-model:page-size="listConfig.state.size"
          :page-sizes="[5, 10, 20, 50]"
          :background="true"
          layout="total, sizes, prev, pager, next, jumper"
          :total="state.total"
          @size-change="listConfig.handleSizeChange"
          @current-change="listConfig.handleCurrentChange"
        />
      </el-tab-pane>
      <el-tab-pane :label="_tran('codemaker.code')" name="second">
        <moEditor :key="activeName" id="tableCode" :code="codeStr"></moEditor
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
