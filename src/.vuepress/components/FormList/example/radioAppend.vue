<template>
  <div>
    <el-card>
      <FormList
        :footer="false"
        :fieldList="formItem"
        @handle-event="handleEvent"
      >
        <template v-if="showSlot" #append="{ templateData }">
          <el-form-item :label="_tran('page.age')">
            <el-input v-model="templateData.age"></el-input>
          </el-form-item>
          <el-form-item :label="_tran('page.gender')">
            <el-radio-group v-model="templateData.sex">
              <el-radio label="0">{{ _tran("page.male") }}</el-radio>
              <el-radio label="1">{{ _tran("page.female") }}</el-radio>
            </el-radio-group>
          </el-form-item>
        </template>
      </FormList>
    </el-card>
  </div>
</template>

<script>
import { _tran } from "@/utils/i18n";
export default {
  data() {
    return {
      showSlot: false,
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
        this.showSlot = val === 0 ? false : true;
      }
    },
  },
};
</script>

<style></style>
