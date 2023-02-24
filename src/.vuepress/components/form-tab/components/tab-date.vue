<template>
  <el-date-picker
    v-bind="$attrs"
    range-separator="-"
    :start-placeholder="开始时间"
    :end-placeholder="结束时间"
    clearable
  >
  </el-date-picker>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'tab-date',
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
