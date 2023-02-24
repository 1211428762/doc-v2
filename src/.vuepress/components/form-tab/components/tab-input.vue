<template>
  <el-input v-bind="{ ...config, ...$attrs }">
    <template #append v-if="config.append">{{ config.append }}</template></el-input
  >
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'tab-input',
  inheritAttrs: false,
  emits: ['change'],
  setup(props) {
    return {
      props,
    }
  },
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
})
</script>
