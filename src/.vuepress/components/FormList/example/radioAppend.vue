<template>
  <div>
    <el-card>
      <FormList
        :footer="false"
        :fieldList="formItem"
        @handle-event="handleEvent"
      >
        <template v-if="showSlot" #append="{ templateData }">
       
          <el-form-item label="Age">
            <el-input v-model="templateData.age"></el-input>
          </el-form-item>
          <el-form-item label="Gender">
            <el-radio-group v-model="templateData.sex">
              <el-radio label="0">Male</el-radio>
              <el-radio label="1">Female</el-radio>
            </el-radio-group>
          </el-form-item>
        </template>
      </FormList>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSlot: false,
      formItem: [
        {
          type: "radio",
          label: "Toggle Form Items",
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
        this.showSlot = val === 0 ? false : true;
      }
    },
  },
};
</script>

<style>
</style>