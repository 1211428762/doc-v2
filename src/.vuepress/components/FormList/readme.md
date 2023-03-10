# 基于 Element 的 FormList(表单)组件

### Attributes

| 参数       | 说明                                                      | 类型    | 默认  |
| ---------- | --------------------------------------------------------- | ------- | ----- |
| fieldList  | 必填,表单项,格式见下表                                    | Array   |       |
| formData   | 可选,表单数据, 初始值                                     | Object  |       |
| footer     | 可选,默认表单脚部,含提交返回按钮(建议自定义)              | Boolean | true  |
| exhibit    | 可选,去除表单项边框等其他样式,以纯文本显示                | Boolean | false |
| className  | 可选,表单类名                                             | String  |       |
| loading    | 可选,表单 loading(待改进)                                 | Boolean | true  |
| elForm     | 可选,表单实例, 会在 mount 后返回给父组件,使用需要带 sync  | Object  |       |
| labelWidth | 可选,表单 label 宽, 表单加了 $attr ,可被 label-width 替代 | String  | 100px |
| xxxx       | 可选,el-form 能带的属性, 全部都能直接传给 该组件          |         |       |

**注:表单数据在提交前, 一直在子组件内, 如果 父组件需要在表单提交前就需要校验,(如两次密码输入是否一致.出现该组件自带功能难以处理的场景.就 传递 formData,实现"父子组件双向绑定" ,表单数据在父组件也可以操作 )**

### 表单项

| 参数      | 说明                                                    | 类型    | 可选                                                           |
| --------- | ------------------------------------------------------- | ------- | -------------------------------------------------------------- |
| type      | 必填,表单项类型                                         | String  | input/number/select/checkbox/radio/switch/date/slot/nativeSlot |
| label     | 必填,表单项文字部分                                     | String  |                                                                |
| prop      | 必填,表单字段名                                         | String  |                                                                |
| list      | select/checkbox/radio 等的子选项                        | Array   | 异步操作时在,created hook 赋值                                 |
| className | 表单项类名                                              | String  |                                                                |
| half      | 表单项长度折半                                          | Boolean |                                                                |
| xxx       | 不同类型表单项,自带不同的详细属性,详情见 element 表单项 | String  | disabled,multiple(多选),maxlength(输入框)等等                  |

### Event

| 函数名                    | 参数                                 | 说明                                             |
| ------------------------- | ------------------------------------ | ------------------------------------------------ |
| submitForm                | fn(函数),formName(占位,不建议填)     | 提交校验, fn 为通过校验成功函数,fn 的参数是 form |
| setDefaultVal             | props(字段名),val(值)                | 父组件手动设置表单某一项的值( 逃生舱方式 )       |
| handleEvent               | type(类型),val(该项值),key(对应字段) | 表单项独立的事件,以 emit 形式向上传递            |
| cancel                    |                                      | 表单取消按钮事件,不常用                          |
| clearValidate/resetFields |                                      | el-form 常用函数                                 |

### Slot

| 插槽名                  | 说明                                |
| ----------------------- | ----------------------------------- |
| append                  | 添加在其他正常表单项的后            |
| prop(字段名) + 'Prefix' | 表单项的前插槽, 可理解为 css before |
| prop(字段名) + 'Suffix' | 表单项的尾插槽,可理解为 css after   |

**注:**如果 css 伪元素, 自由度较高

### 示例

```vue
<template>
  <div>
    <FormList @handle-event="handleEvent" :elForm.sync="elForm" ref="formList" :fieldList="formItem">
      <!-- 输入框的Prefix 插槽 -->
      <template #testPrefix>
        <div>输入框的Prefix 插槽</div>
      </template>

      <!-- 输入框的Suffix 插槽 -->
      <template #testSuffix>
        <div>输入框的Suffix 插槽</div>
      </template>

      <!-- 普通插槽 -->
      <!-- 原templateData写法, 现在不用在父组件定义,使用插槽即可, 用法与之前相同 -->
      <template #testSlot="{ templateData }">
        <el-input v-model="templateData.testSlot"></el-input>
      </template>

      <!-- 原生el-form-item -->
      <template #testNativeSlot="{ templateData }">
        <el-form-item prop="testNativeSlot" label="原生插槽" :rules="[{ required: true }]">
          <el-input v-model="templateData.testNativeSlot"></el-input>
        </el-form-item>
      </template>

      <template #footer>
        <el-button @click="submit"> 提交 </el-button>
      </template>
    </FormList>
  </div>
</template>
<script>
import FormList from '@/components/FormList'
export default {
  components: {
    FormList,
  },
  data() {
    return {
      // form: {
      //   test: "",
      //   testSlot: "",
      //   testNativeSlot: "",
      // },
      elForm: null, //表单组件表格 实例, 方便调用 resetField 等方法
      formItem: [
        {
          type: 'input',
          label: '输入框',
          prop: 'test',
          rules: [{ required: true }],
        },
        {
          type: 'select',
          label: '下拉框',
          prop: 'testSelect',
          list: [
            {
              label: '选项一',
              value: 1,
              disabled: false, //默认是false, 如果需要传true
            },
            {
              label: '选项二',
              value: 2,
              disabled: false, //默认是false, 如果需要传true
            },
          ],
          rules: [{ required: true }],
        },
        // TODO多个多选框时有bug.多个时, 建议使用插槽方式
        {
          type: 'checkbox',
          prop: 'testCheckbox',
          label: '测试多选框',
          list: [
            {
              label: '选项一',
            },
          ],
        },
        {
          type: 'radio',
          label: '测试单选',
          prop: 'testRadio',
          list: [
            {
              label: '选项一',
              value: 0,
            },
            {
              label: '选项二',
              value: 1,
            },
          ],
        },
        {
          type: 'switch',
          label: '测试switch',
          prop: 'testSwitch',
        },
        {
          type: 'date',
          label: '测试日期',
          prop: 'testDate',
          // dateType:year/month/date/week/ datetime/datetimerange/daterange
        },
        {
          type: 'slot',
          prop: 'testSlot',
          label: '插槽',
          rules: [{ required: true }],
        },
        {
          type: 'nativeSlot',
          prop: 'testNativeSlot',
        },
        { type: 'select', label: '异步下拉框', prop: 'ayncSelect', list: [] },
      ],
    }
  },
  created() {
    // 异步的select
    this.formItem.filter((cur) => {
      if (cur.prop === 'ayncSelect') {
        // cur.list=[]  等于对应值
      }
    })
  },
  methods: {
    submit() {
      this.$refs.formList.submitForm((form) => {
        //表单校验成功的回调
        console.log(form, this.formItem)
      })
    },
    handleEvent(type, val, key) {
      switch (
        type
        // xxxx
      ) {
      }
    },
  },
}
</script>
```

####

#### 使用建议

遇到复杂逻辑, 使用 定义 type 为 slot/nativeSlot 提高自由度

业务组件, 表单极具多变性 , 用多了 就习惯了
