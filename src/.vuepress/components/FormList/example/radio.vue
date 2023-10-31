<template>
  <div>
    <p>
      Speaking of radio buttons in forms, there are typically two common business requirements.
      <br /> In general, binding complex JavaScript code within HTML violates the principle of separation of behavior and structure, mainly because it's hard to maintain next time.
    </p>

    <div class="img-demo">
      <img :src="$withBase('/img/toggle.gif')" alt="" />
      <img :src="$withBase('/img/append.gif')" alt="" />
    </div>

    <p>In general, radio buttons can be categorized into two types: <b>Insertion</b> and <b>Toggling</b>.</p>
    <p><b>Insertion</b>: Use the FormList's append slot for this.</p>
    <p>
      <b>Toggling</b>: You can either directly manipulate the fieldList array (testing your knowledge of arrays) to achieve toggling,
      <br /> or you can prepare two sets of field item arrays (less error-prone).
    </p>
    <el-divider></el-divider>
    <p>let's see a direct toggling example:</p>
    <el-card>
      <FormList
        :footer="false"
        :fieldList="formItem"
        @handle-event="handleEvent"
      ></FormList>
    </el-card>
  </div>
</template>
<script>

export default {
  name: "radioEle",
  data() {
    return {
      formItem: [
        {
          type: "radio",
          label: "Switch Form Items",
          prop: "radio",
          list: [
            {
              value: 0,
              label: "Username and Password",
            },
            {
              value: 1,
              label: "Age and Gender",
            },
          ],
        },
        {
          type: "input",
          label: "Username",
          prop: "account",
        },
        {
          type: "password",
          label: "Password",
          prop: "password",
        },
      ],
      formItemChange: [
        {
          type: "radio",
          label: "Switch Form Items",
          prop: "radio",
          list: [
            {
              value: 0,
              label: "Username and Password",
            },
            {
              value: 1,
              label: "Age and Gender",
            },
          ],
        },
        {
          type: "input",
          label: "Age",
          prop: "account",
        },
        {
          type: "radio",
          label: "Gender",
          prop: "sex",
          list: [
            {
              label: "Male",
              value: 0,
            },
            {
              label: "Female",
              value: 1,
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleEvent(type, val, key) {
      switch (type) {
        case "radio":
          this.radioCase(val, key);
          break;
        default:
          break;
      }
    },
    radioCase(val, key) {
      if (key === "radio") {
        [this.formItem, this.formItemChange] = [
          this.formItemChange,
          this.formItem,
        ];
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.img-demo {
  img {
    width: 70%;
  }
}
</style>
