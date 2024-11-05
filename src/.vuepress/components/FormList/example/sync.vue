<template>
  <div>
    <el-card>
      <FormList :footer="false" :fieldList="formItem"></FormList>
      <el-button @click="getSelect"
        >{{ _tran("page.getAsyncData") }}
      </el-button>
      <el-button @click="reset">{{ _tran("common.reset") }}</el-button>
    </el-card>
  </div>
</template>

<script>
import { _tran } from "@/utils/i18n";
export default {
  data() {
    return {
      formItem: [
        {
          type: "select",
          label: _tran("page.syncSelect"),
          prop: "syncSelect",
          list: [],
        },
      ],
    };
  },
  methods: {
    _tran,
    getSelect() {
      // 异步的select
      this.formItem.filter((cur) => {
        if (cur.prop === "syncSelect") {
          cur.list = [
            {
              label: "选项一",
              value: 1,
            },
            {
              label: "选项二",
              value: 2,
            },
          ];
        }
      });
    },
    reset() {
      this.formItem.filter((cur) => {
        if (cur.prop === "syncSelect") {
          cur.list = [];
        }
      });
    },
  },
};
</script>
