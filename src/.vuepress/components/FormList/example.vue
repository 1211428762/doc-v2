<template>
  <div>
    <FormList
      @handle-event="handleEvent"
      v-model:elForm="elForm"
      ref="formList"
      :fieldList="formItem"
    >
      <!-- Normal slot -->
      <!-- The original templateData usage is no longer needed in the parent component; you can use slots now, just like before. -->
      <template #testSlot="{ templateData }">
        <el-input v-model="templateData.testSlot"></el-input>
      </template>
      <!-- Input prefix slot -->
      <template #testPrefix>
        <div>Input prefix slot</div>
      </template>
      <!-- Input suffix slot -->
      <template #testSuffix>
        <div>Input suffix slot</div>
      </template>
      <!-- Original el-form-item -->
      <template #testNativeSlot="{ templateData }">
        <el-form-item
          prop="testNativeSlot"
          label="Native slot"
          :rules="[{ required: true }]"
        >
          <el-input v-model="templateData.testNativeSlot"></el-input>
        </el-form-item>
      </template>

      <template #footer>
        <el-button @click="submit">{{ _tran("common.submit") }}</el-button>
        <el-button @click="submit">{{ _tran("common.back") }}</el-button>
      </template>
    </FormList>
    <el-button @click="getSelect">{{ _tran("page.getAsyncData") }}</el-button>
  </div>
</template>
<script>
import FormList from "./index.vue";
import i18nMixin from "@/utils/i18nMixin";
export default {
  components: {
    FormList,
  },
  mixins: [i18nMixin],
  data() {
    return {
      // form: {
      //   test: "",
      //   testSlot: "",
      //   testNativeSlot: "",
      // },
      elForm: {}, //表单组件表格 示例, 方便调用 resetField 等方法
      formItem: [
        {
          type: "input",
          label: "Input",
          prop: "test",
          rules: [{ required: true }],
        },
        {
          type: "select",
          label: "testSelect",
          prop: "testSelect",
          list: [
            {
              label: "Option",
              value: 1,
              disabled: false, //默认是false, 如果需要传true
            },
            {
              label: "Option1",
              value: 2,
              disabled: false, //默认是false, 如果需要传true
            },
          ],
          rules: [{ required: true }],
        },
        // TODO多个多选框时有bug,多个时, 可以使用插槽方式
        {
          type: "checkbox",
          prop: "testCheckbox",
          label: "testCheckbox",
          list: [
            {
              label: "Option1",
            },
          ],
        },
        {
          type: "radio",
          label: "testRadio",
          prop: "testRadio",
          list: [
            {
              label: "Option1",
              value: 0,
            },
            {
              label: "Option2",
              value: 1,
            },
          ],
        },
        // {
        //   type: 'icon',
        //   label: '图标',
        //   prop: 'testIcon',
        // },
        {
          type: "date",
          label: "testDate",
          prop: "testDate",
          // dateType:year/month/date/week/ datetime/datetimerange/daterange
        },
        {
          type: "slot",
          prop: "testSlot",
          label: "testSlot",
          rules: [{ required: true }],
        },
        {
          type: "nativeSlot",
          prop: "testNativeSlot",
        },
        { type: "select", label: "ayncSelect", prop: "ayncSelect", list: [] },
      ],
    };
  },

  methods: {
    getSelect() {
      // 异步的select
      this.formItem.filter((cur) => {
        if (cur.prop === "ayncSelect") {
          cur.list = [
            {
              label: "Option1",
              value: 1,
            },
            {
              label: "Option2",
              value: 2,
            },
          ];
        }
      });
    },
    submit() {
      this.$refs.formList.submitForm((form) => {
        // 通过表单校验后,执行, form为表单数据
        this.$message.success("控制台查看表单数据");
        console.log(form);
      });
    },
    handleEvent(type, val, key) {
      switch (type) {
      }
    },
  },
};
</script>
