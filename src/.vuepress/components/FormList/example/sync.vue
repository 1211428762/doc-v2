<template>
  <div>
    <el-card>
      <FormList :footer="false" :fieldList="formItem"></FormList>
      <el-button @click="getSelect">Get asynchronous data </el-button>
      <el-button @click="reset">Reset</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formItem: [
        {
          type: "select",
          label: "syncSelect",
          prop: "syncSelect",
          list: [],
        },
      ],
    };
  },
  methods: {
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

