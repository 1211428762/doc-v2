<template>
  <div>
    <p>
      {{ _tran("word.speakingOfRadio") }}
    </p>

    <div class="img-demo">
      <img :src="$withBase('/img/toggle.gif')" alt="" />
      <img :src="$withBase('/img/append.gif')" alt="" />
    </div>

    <p>
      {{ _tran("word.radio1") }}
      <b> {{ _tran("word.insert") }}</b> , <b> {{ _tran("word.toggle") }}</b
      >.
    </p>
    <p>
      <b> {{ _tran("word.insert") }}</b
      >:{{ _tran("word.insert1") }}
    </p>
    <p>
      <b> {{ _tran("word.toggle") }}</b
      >: {{ _tran("word.toggle1") }}
    </p>
    <el-divider></el-divider>
    <p>{{ _tran("word.example1") }}</p>
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
import { _tran } from "@/utils/i18n";
export default {
  name: "radioEle",
  data() {
    return {
      formItem: [
        {
          type: "radio",
          label: _tran("page.toggle"),
          prop: "radio",
          list: [
            {
              value: 0,
              label: _tran("page.namePassword"),
            },
            {
              value: 1,
              label: _tran("page.ageGender"),
            },
          ],
        },
        {
          type: "input",
          label: _tran("page.username"),
          prop: "account",
        },
        {
          type: "password",
          label: _tran("page.password"),
          prop: "password",
        },
      ],
      formItemChange: [
        {
          type: "radio",
          label: _tran("page.toggle"),
          prop: "radio",
          list: [
            {
              value: 0,
              label: _tran("page.namePassword"),
            },
            {
              value: 1,
              label: _tran("page.ageGender"),
            },
          ],
        },
        {
          type: "input",
          label: _tran("page.age"),
          prop: "account",
        },
        {
          type: "radio",
          label: _tran("page.gender"),
          prop: "sex",
          list: [
            {
              label: _tran("page.male"),
              value: 0,
            },
            {
              label: _tran("page.female"),
              value: 1,
            },
          ],
        },
      ],
    };
  },
  methods: {
    _tran,
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
