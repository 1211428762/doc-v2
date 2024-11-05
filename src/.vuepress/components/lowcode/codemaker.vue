<script setup lang="ts">
import { ref } from "vue";
import formMaker from "./components/formMaker.vue";
import tableMaker from "./components/tableMaker.vue";
import { _tran } from "@/utils/i18n";
const activeName = ref("form");
</script>

<template>
  <div>
    <img :src="$withBase('/img/codegen.gif')" alt="" />
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane :label="_tran('codemaker.formGen')" name="form"
        ><formMaker></formMaker
      ></el-tab-pane>
      <el-tab-pane :label="_tran('codemaker.tableGen')" name="table"
        ><tableMaker></tableMaker
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped></style>
