<template>
  <el-button @click="formatCode" style="margin: 10px 0">{{
    _tran("common.formatCode")
  }}</el-button>
  <div class="codeEditBox" :id="props.id" :style="{ height }"></div>
</template>
<script lang="ts" setup>
import { _tran } from "@/utils/i18n";
// import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import * as monaco from "monaco-editor";
import { nextTick, ref, onBeforeUnmount, watch } from "vue";
const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "codeEditBox",
  },
  height: {
    type: String,
    default: "400px",
  },
});

const text = ref("");
const language = ref("go");

//
// MonacoEditor start
//
onBeforeUnmount(() => {
  editor.dispose();
});
// @ts-ignore
// 为减小打包体积,目前只开放了json的格式化
self.MonacoEnvironment = {
  getWorker(_: string, label: string) {
    // if (label === 'json') {
    //     return new jsonWorker();
    // }
    // if (label === "css" || label === "scss" || label === "less") {
    //   return new cssWorker();
    // }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (["typescript", "javascript"].includes(label)) {
      return new tsWorker();
    }
    return new EditorWorker();
  },
};
let editor: monaco.editor.IStandaloneCodeEditor;

const editorInit = () => {
  nextTick(() => {
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: false,
    });
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2016,
      allowNonTsExtensions: true,
    });

    !editor
      ? (editor = monaco.editor.create(
          document.getElementById(props.id) as HTMLElement,
          {
            value: text.value, // 编辑器初始显示文字
            language: "html", // 语言支持自行查阅demo
            automaticLayout: true, // 自适应布局
            theme: "vs-dark", // 官方自带三种主题vs, hc-black, or vs-dark
            foldingStrategy: "indentation",
            renderLineHighlight: "all", // 行亮
            selectOnLineNumbers: true, // 显示行号
            minimap: {
              enabled: false,
            },
            readOnly: false, // 只读
            fontSize: 16, // 字体大小
            scrollBeyondLastLine: false, // 取消代码后面一大段空白
            overviewRulerBorder: false, // 不要滚动条的边框
          }
        ))
      : editor.setValue("");
    // console.log(editor)
    // 监听值的变化
    editor.onDidChangeModelContent((val: any) => {
      text.value = editor.getValue();
    });
  });
};
editorInit();
const formatCode = () => {
  // 初始化时，editor初始化完成仍需要一定时间，所以延迟100ms
  setTimeout(() => {
    editor.getAction("editor.action.formatDocument").run();
  }, 100);
};
watch(
  () => props.code,
  (val) => {
    text.value = val;
    nextTick(() => {
      editor && editor.setValue(val);
      formatCode();
    });
    // editor.setValue(val);
  },
  {
    immediate: true,
  }
);
// @ts-ignore
//切换语言
// const changeLanguage = () => {
//   monaco.editor.setModelLanguage(editor.getModel(), language.value);

//   //  editor.updateOptions({
//   //           language: "objective-c"
//   //       });
// };

const submitCode = () => {
  return editor.getValue();
};

defineExpose({
  submitCode,
});
/***
 * editor.setValue(newValue)

editor.getValue()

editor.onDidChangeModelContent((val)=>{ //监听值的变化  })

editor.getAction('editor.action.formatDocument').run()    //格式化代码

editor.dispose()    //销毁实例

editor.onDidChangeOptions//配置改变事件

editor.onDidChangeLanguage//语言改变事件
 */
</script>
<style scoped>
.codeEditBox {
  /* width: 900px; */
  min-height: 400px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px #ccc;
}
</style>
