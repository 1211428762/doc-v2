<template>
    <el-date-picker
        :type="props.config.type"
        :range-separator="$t('common.to')"
        :format="props.config.format"
        clearable
        :placeholder="$t(props.config?.label || '')"
        :style="{ width: '230px' }"
        v-bind="{ ...$attrs, ...props.config }"
        :start-placeholder="$t(props.config?.startPlaceholder || '') != '' ? $t(props.config?.startPlaceholder || '') : $t('common.startDate')"
        :end-placeholder="$t(props.config?.endPlaceholder || '') != '' ? $t(props.config?.endPlaceholder || '') : $t('common.endDate')"
    />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// 表头查询组件，宽度默认230px，防止太短数据展示不全
export default defineComponent({
    name: 'search-date',
    emits: ['change'],
    setup(props) {
        return {
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
