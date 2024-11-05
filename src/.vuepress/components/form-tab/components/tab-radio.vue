<template>
  <el-radio-group v-bind="$attrs">
    <el-radio
      v-for="(config, index) in props.config.options"
      :key="index"
      v-model="config.value"
      :label="config.value"
    >
      {{ t(config.label || "") }}
    </el-radio>
  </el-radio-group>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "tab-radio",
  inheritAttrs: false,
  emits: ["change"],
  setup(props) {
    const { t } = useI18n();
    return {
      t,
      props,
    };
  },
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
});
</script>
