<template>
  <el-form
    ref="docFormTab"
    class="doc-table"
    :model="localDataForm"
    label-position="right"
    :label-width="props.labelWidth"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <template v-for="itemConfig in props.formConfigs" :key="itemConfig.prop">
      <slot v-if="itemConfig.slot" :name="itemConfig.slot"></slot>
      <div
        :key="itemConfig.prop"
        class="tag"
        v-else-if="itemConfig.type === 'tagHead'"
      >
        <el-tag effect="dark">{{
          itemConfig.prop || itemConfig.text || ""
        }}</el-tag>
      </div>
      <el-form-item
        v-else
        :prop="itemConfig.prop"
        :label="itemConfig.label"
        :rules="itemConfig.rules || basicRules(itemConfig)"
      >
        <template v-if="itemConfig.useI18n">
          <el-tabs :model-value="INIT_LANGUAGE_KEY">
            <el-tab-pane
              :key="language.dictValue"
              v-for="language in languageList"
              :name="language.dictValue"
              :label="language.dictLabel"
            >
              <component
                :disabled="disabled"
                :is="getComponent(itemConfig)"
                v-bind="{ ...itemConfig }"
                v-model="
                  localDataForm[itemConfig.model || itemConfig.prop][
                    language.dictValue
                  ]
                "
                :config="itemConfig"
              ></component>
            </el-tab-pane>
          </el-tabs>
        </template>
        <template v-else>
          <component
            :disabled="disabled"
            :is="getComponent(itemConfig)"
            v-bind="{ ...itemConfig }"
            v-model="localDataForm[itemConfig.model || itemConfig.prop]"
            :config="itemConfig"
          ></component>
        </template>
      </el-form-item>
    </template>
  </el-form>
</template>
<script>
import {
  defineComponent,
  watchEffect,
  toRefs,
  onMounted,
  reactive,
  ref,
} from "vue";
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "DocFormTab",
  emits: ["update:dataForm"],
  props: {
    formConfigs: {
      type: Array,
      default: () => [],
    },
    dataForm: {
      type: Object,
      default: () => {},
    },
    isRequired: {
      type: Boolean,
      default: true,
    },
    labelWidth: {
      type: String,
      default: "16%",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const docFormTab = ref(null);
    const state = reactive({
      localDataForm: props.dataForm,
      languageList: [
        { dictValue: "en-US", dictLabel: "English" },
        { dictValue: "zh-CN", dictLabel: "简体中文" },
      ],
    });
    watchEffect(() => {
      state.localDataForm = props.dataForm;
    });
    const getComponent = (value) => {
      const type = value.type;
      switch (type) {
        case "tag":
        case "tagHead":
          return "tab-tag";
        case "input":
        case "text":
        case "textarea":
          return "tab-input";
        case "select":
          return "tab-select";
        case "datetime":
        case "datetimerange":
        case "daterange":
          return "tab-date";
        case "number":
          return "tab-number";
        case "radio":
          return "tab-radio";
        case "image":
          return "tab-image";
        case "uploadExcel":
          return "tab-upload-excel";
        case "checkbox":
          return "tab-checkbox";
        case "file":
          return "tab-file";
        default:
          if (value.componentName) {
            return value.componentName;
          }
          ElMessage({
            type: "error",
            message: `The type ${type} is not supported`,
            group: true,
          });
          return "";
      }
    };
    const basicRules = (itemConfig) => {
      return [
        {
          required:
            itemConfig.isRequired === undefined
              ? props.isRequired
              : itemConfig.isRequired,
          trigger:
            itemConfig.type === "radio" || itemConfig.type === "select"
              ? "change"
              : "blur",
        },
      ];
    };
    const validateFormNew = async () => {
      let res = true;
      try {
        await docFormTab.value.validate();
        return res;
      } catch (e) {
        return false;
      }
    };
    return {
      docFormTab,
      getComponent,
      basicRules,
      validateFormNew,
      props,
      ...toRefs(state),
    };
  },
});
</script>
<style scoped>
.tag {
  display: block;
  height: 10px;
  margin: 10px auto 30px;
}
</style>
