<template>
  <el-card class="form-card">
    <slot name="slotDiv" style="margin-left: 10px"> </slot>

    <div ref="actions">
      <slot name="operationBtn"></slot>
      <el-button
        v-if="props.ifAdd"
        style="margin-bottom: 16px"
        @click="$emit('onAdd', 'add')"
        type="primary"
      >
        {{ $t(btnName != null ? btnName : "common.add") }}</el-button
      >
      <el-button
        v-if="props.ifRead"
        style="margin-bottom: 16px"
        @click="$emit('onRead', 'read')"
        type="primary"
      >
        {{ $t(btnReadName != null ? btnReadName : "common.read") }}</el-button
      >
      <el-button
        v-if="props.ifDel"
        style="margin-bottom: 16px"
        @click="$emit('onDel', 'del')"
        type="danger"
      >
        {{ $t(btnDelName != null ? btnDelName : "common.delete") }}</el-button
      >
      <el-button
        v-if="props.ifExport"
        style="margin-bottom: 16px"
        @click="$emit('onExport', 'export')"
        type="primary"
      >
        {{
          $t(btnExportName != null ? btnExportName : "common.export")
        }}</el-button
      >
      <el-button
        v-if="props.ifImport"
        style="margin-bottom: 16px"
        @click="$emit('onImport', 'import')"
        class="reset"
      >
        {{
          $t(btnImportName != null ? btnImportName : "common.import")
        }}</el-button
      >
    </div>
    <el-form
      class="hit-form"
      ref="hitFormRef"
      :inline="true"
      :model="localDataForm"
      @submit.prevent="query"
    >
      <template v-for="itemConfig in props.formConfigs" :key="itemConfig.prop">
        <slot v-if="itemConfig.slot" :name="itemConfig.slot" />
        <el-form-item
          v-else
          :prop="itemConfig.prop"
          :style="{ width: itemConfig.width, ...itemConfig?.style }"
          :label-width="itemConfig.labelWidth"
          :rules="itemConfig.rules"
        >
          <component
            :is="getComponent(itemConfig)"
            v-model="localDataForm[itemConfig.prop as string]"
            v-bind="$attrs"
            :config="itemConfig"
            @change="dataChange"
          />
        </el-form-item>
      </template>
      <el-form-item v-if="defaultQuery">
        <slot name="beforeFormButton"> </slot>
        <el-button @click="query" type="primary"
          >{{ $t("common.query") }}
        </el-button>
        <el-button v-if="defaultReset" @click="reset" class="reset">
          {{ $t("common.reset") }}
        </el-button>
        <!-- 扩展按钮 -->
        <slot name="formButton"> </slot>
      </el-form-item>
      <slot />
    </el-form>
    <slot name="slotBot" style="margin-left: 10px"> </slot>
  </el-card>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "FormSearch",
  emits: ["update:dataForm", "onAdd", "onDel", "onRead", "onQuery", "onReset"],
  setup(props) {
    const { t } = useI18n();
    const hitFormRef = ref<any>(null);
    const validate = async () => {
      const res = true;
      try {
        await hitFormRef.value.validate();
        return res;
      } catch (e) {
        return false;
      }
    };
    const slotBtn = (slot: any) => {
      return slot ? "display: inline-block;" : "display: none";
    };
    const resetForm = () => {
      hitFormRef.value.resetFields();
    };
    return {
      props,
      validate,
      resetForm,
      hitFormRef,
      slotBtn,
    };
  },
  props: {
    formConfigs: {
      type: Array,
      required: true,
    },
    dataForm: {
      type: Object,
      required: true,
    },
    ifAdd: {
      type: Boolean,
      default: false,
    },
    ifExport: {
      type: Boolean,
      default: false,
    },
    ifImport: {
      type: Boolean,
      default: false,
    },
    ifDel: {
      type: Boolean,
      default: false,
    },
    ifRead: {
      type: Boolean,
      default: false,
    },
    btnName: {
      type: String,
      default: "common.add",
    },
    btnDelName: {
      type: String,
      default: "common.delete",
    },
    btnImportName: {
      type: String,
      default: "common.import",
    },
    btnExportName: {
      type: String,
      default: "common.export",
    },
    btnReadName: {
      type: String,
      default: "common.read",
    },
    permissionPrefix: {
      type: String,
      default: "bms",
    },
    isBMS: {
      type: Boolean,
      default: true,
    },
    defaultQuery: {
      type: Boolean,
      default: true,
    },
    defaultReset: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      localDataForm: this.dataForm,
    };
  },
  watch: {
    dataForm() {
      this.localDataForm = this.dataForm;
    },
  },

  methods: {
    update() {
      this.$emit("update:dataForm", this.localDataForm);
    },
    async query() {
      (await this.validate()) && this.$emit("onQuery");
    },
    reset() {
      this.localDataForm = {};
      this.resetForm();
      this.$emit("update:dataForm", this.localDataForm);
      this.$emit("onReset");
    },
    dataChange(info: { prop: string | number; value: any }): void {
      this.localDataForm[info.prop] = info.value;
    },
    getComponent(value): string {
      const type = value.type;
      switch (type) {
        case "text":
          return "search-input";
        case "select":
          return "search-select";
        case "datetimerange":
        case "datetime":
        case "date":
        case "daterange":
        case "monthrange":
          return "search-date";
        default:
          if (value.componentName) {
            return value.componentName;
          }
          console.warn("未找到组件：" + type);
          return "";
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.form-card {
  width: 100%;
  min-height: 56px;
  // padding: 16px 16px 0;
  overflow: visible;
  box-sizing: border-box;

  .actions {
    display: inline-flex;
    align-items: center;
    height: 32px;
    margin-bottom: 16px;
  }

  :deep(.el-card__body) {
    padding: 16px 16px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: 1px solid #8b9aaf33;
    box-sizing: border-box;
  }

  :deep(.el-form-item) {
    margin-bottom: 16px;
  }
}

:deep() .hit-form {
  .el-form-item:last-child {
    margin-right: 0;
  }

  .el-form-item {
    margin-right: 16px;

    &:not(:last-child) {
      width: 210px;
    }

    .el-form-item__content {
      & > div,
      .el-input {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 1440px) {
  :deep() .hit-form {
    .el-form-item {
      &:not(:last-child) {
        width: 160px;
      }
    }
  }
}
@media screen and (max-width: 640px) {
  :deep() .hit-form {
    .el-form-item {
      &:not(:last-child) {
        width: 100%;
      }
    }
  }
}
</style>
