<template>
  <el-input-number v-bind="$attrs"></el-input-number>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'tab-number',
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
