#### Complete Example

## Form Example

<cube/><pet/>
<FormList-example></FormList-example>
::: details View Code

```vue
<template>
  <div>
    <FormList @handle-event="handleEvent" :elForm.sync="elForm" ref="form" :fieldList="formItem">
      <!-- Regular slot -->
      <!-- The original templateData is no longer required to be defined in the parent component. Instead, you can use slots with the same usage as before. -->
      <template #testSlot="{ templateData }">
        <el-input v-model="templateData.testSlot"></el-input>
      </template>
      <!-- Input's Prefix slot -->
      <template #testPrefix>
        <div>Input's Prefix slot</div>
      </template>
      <!-- Input's Suffix slot -->
      <template #testSuffix>
        <div>Input's Suffix slot</div>
      </template>
      <!-- Original el-form-item -->
      <template #testNativeSlot="{ templateData }">
        <el-form-item prop="testNativeSlot" label="Native Slot" :rules="[{ required: true }]">
          <el-input v-model="templateData.testNativeSlot"></el-input>
        </el-form-item>
      </template>

      <template #footer>
        <el-button @click="submit">Submit</el-button>
        <el-button @click="submit">Return</el-button>
      </template>
    </FormList>
  </div>
</template>
<script>
import FormList from './index'
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
      elForm: {}, //表单组件表格 示例, 方便调用 resetField 等方法
      formItem: [
        {
          type: 'input',
          label: 'Input',
          prop: 'test',
          rules: [{ required: true }],
        },
        {
          type: 'select',
          label: 'Select',
          prop: 'testSelect',
          list: [
            {
              label: 'Option1',
              value: 1,
              disabled: false, //默认是false, 如果需要传true
            },
            {
              label: 'Option2',
              value: 2,
              disabled: false, //默认是false, 如果需要传true
            },
          ],
          rules: [{ required: true }],
        },
        // TODO多个多选框时有bug,多个时, 可以使用插槽方式
        {
          type: 'checkbox',
          prop: 'testCheckbox',
          label: 'testCheckbox',
          list: [
            {
              label: 'Option',
            },
          ],
        },
        {
          type: 'radio',
          label: 'testRadio',
          prop: 'testRadio',
          list: [
            {
              label: 'Option1',
              value: 0,
            },
            {
              label: 'Option2',
              value: 1,
            },
          ],
        },
        {
          type: 'switch',
          label: 'testSwitch',
          prop: 'testSwitch',
        },
        {
          type: 'date',
          label: 'testDate',
          prop: 'testDate',
          // dateType:year/month/date/week/ datetime/datetimerange/daterange
        },
        {
          type: 'slot',
          prop: 'testSlot',
          label: 'testSlot',
          rules: [{ required: true }],
        },
        {
          type: 'nativeSlot',
          prop: 'testNativeSlot',
        },
        { type: 'select', label: 'ayncSelect', prop: 'ayncSelect', list: [] },
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
        console.log(form, this.formItem)
      })
    },
    handleEvent(type, val, key) {
      switch (
        type
        // xxx
      ) {
      }
    },
  },
}
</script>
```

:::

# FormList Component Based on Element UI

### Attributes

| Parameter       | Description                                                      | Type    | Default  |
| ---------- | --------------------------------------------------------- | ------- | ----- |
| fieldList  | 	Required: Form items, see format below  | Array   |       |
| formData   |  Optional: Form data, initial value                                   | Object  |       |
| footer     | Optional: Default form footer with submit and return buttons (suggested for customizing)              | Boolean | true  |
| exhibit    | Optional: Remove form item borders and other styles, displaying as plain text               | Boolean | false |
| className  | Optional: Form class name                                          | String  |       |
| loading    | Optional: Form loading (to be improved)| Boolean | true  |
| elForm     | Optional: Form instance, returned to the parent component after mounting, needs to be used with sync  | Object  |       |
| labelWidth | 	Optional: Form label width, use label-width attribute of the el-form | String  | 130px |
| xxxx       | Optional: Any attribute that can be applied to el-form, can be directly passed to this component        |         |       |

**Note: The form data is always inside the child component until submission. If the parent component needs to validate the form before submission (e.g., checking if two password inputs match), pass formData to enable "two-way binding" between the parent and child components for easier manipulation.**

### FormItem

| Parameter      | Description                                                    | Type    | Optional                                                           |
| --------- | ------------------------------------------------------- | ------- | -------------------------------------------------------------- |
| type      | 	Required: Form item type                                        | String  | input/number/select/checkbox/radio/switch/date/slot/nativeSlot |
| label     | Required: Form item text portion                               | String  |                                                                |
| prop      | Required: Form field name                                      | String  |                                                                |
| list      | Sub-options for select/checkbox/radio and similar items| Array   |Assigned during asynchronous operations in the created hook                                |
| className |  Form item class name                                         | String  |                                                                |
| half      | Form item length halved                                          | Boolean |                                                                |
| xxx       | Different form item types come with different specific attributes. For details, refer to element form items documentation | String  |e.g., disabled, multiple (multiple selection), maxlength (input field), and so on              |

### Events

| Function Name                    | Parameters                                 | 	Description                                             |
| ------------------------- | ------------------------------------ | ------------------------------------------------ |
| submitForm                |	fn (function), formName (placeholder, not recommended)    | Submits the form with validation. fn is a callback function for successful validation, and its argument is the form data.|
| setDefaultVal             | props (field name), val (value)           | Allows the parent component to manually set the value of a specific form item. This method provides an "escape hatch."|
| handleEvent               | 	type (type), val (value for the item), key (corresponding field)| Event emitted by individual form items to communicate changes to the parent.         |
| cancel                    |                                      |	Event for a form cancel button (not commonly used).                        |
| clearValidate/resetFields |                                      | 	Common el-form functions for clearing validation and resetting fields.                            |

### Slot

| Slot Name                  | Description                                |
| ----------------------- | ----------------------------------- |
| append                  | Inserted after other regular form items.            |
| prop(field name) + 'Prefix' | Prefix slot for form items, akin to a CSS before pseudo-element. |
| prop(field name) + 'Suffix' |Suffix slot for form items, akin to a CSS after pseudo-element.  |

**Note:**CSS sibling selectors can be used to control form item elements, allowing the creation of accordion-like effects and other creative possibilities. Just like CSS pseudo-elements, the options are boundless.

### Example

```vue
<template>
  <div>
    <FormList @handle-event="handleEvent" :elForm.sync="elForm" ref="formList" :fieldList="formItem">
      <!-- Custom slot -->
      <!-- The original templateData method is no longer necessary. You can now use slots. Usage is the same as before. -->
      <template #testSlot="{ templateData }">
        <el-input v-model="templateData.testSlot"></el-input>
      </template>
      <!-- Prefix slot for input -->
      <template #testPrefix>
        <div>Prefix slot for the input</div>
      </template>
      <!-- Suffix slot for input -->
      <template #testSuffix>
        <div>Suffix slot for the input</div>
      </template>
      <!-- Native el-form-item slot -->
      <template #testNativeSlot="{ templateData }">
        <el-form-item prop="testNativeSlot" label="Native slot" :rules="[{ required: true }]">
          <el-input v-model="templateData.testNativeSlot"></el-input>
        </el-form-item>
      </template>

      <template #footer>
        <el-button @click="submit"> Submit </el-button>
        <el-button @click="submit"> Return </el-button>
      </template>
    </FormList>
    <el-button @click="getSelect">Get Asynchronous Data</el-button>
  </div>
</template>
<script>
import FormList from './index'
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
      elForm: {}, //表单组件表格 示例, 方便调用 resetField 等方法
      formItem: [
        {
          type: 'input',
          label: 'Input',
          prop: 'test',
          rules: [{ required: true }],
        },
        {
          type: 'select',
          label: 'testSelect',
          prop: 'testSelect',
          list: [
            {
              label: 'Option1',
              value: 1,
              disabled: false, //默认是false, 如果需要传true
            },
            {
              label: 'Option2',
              value: 2,
              disabled: false, //默认是false, 如果需要传true
            },
          ],
          rules: [{ required: true }],
        },
        // TODO多个多选框时有bug,多个时, 可以使用插槽方式
        {
          type: 'checkbox',
          prop: 'testCheckbox',
          label: 'testCheckbox',
          list: [
            {
              label: 'Option1',
            },
          ],
        },
        {
          type: 'radio',
          label: 'testRadio',
          prop: 'testRadio',
          list: [
            {
              label: 'Option1',
              value: 0,
            },
            {
              label: 'Option2',
              value: 1,
            },
          ],
        },
        {
          type: 'icon',
          label: 'testIcon',
          prop: 'testIcon',
        },
        {
          type: 'date',
          label: 'testDate',
          prop: 'testDate',
          // dateType:year/month/date/week/ datetime/datetimerange/daterange
        },
        {
          type: 'slot',
          prop: 'testSlot',
          label: 'testSlot',
          rules: [{ required: true }],
        },
        {
          type: 'nativeSlot',
          prop: 'testNativeSlot',
        },
        { type: 'select', label: 'ayncSelect', prop: 'ayncSelect', list: [] },
      ],
    }
  },

  methods: {
    getSelect() {
      // 异步的select
      this.formItem.filter((cur) => {
        if (cur.prop === 'ayncSelect') {
          cur.list = [
            {
              label: 'Option1',
              value: 1,
            },
            {
              label: 'Option2',
              value: 2,
            },
          ]
        }
      })
    },
    submit() {
      this.$refs.formList.submitForm((form) => {
        // 通过表单校验后,执行, form为表单数据
      })
    },
    handleEvent(type, val, key) {
      switch (type) {
      }
    },
  },
}
</script>
```

####

####  Recommendations

When encountering complex logic, use type with the value of slot or nativeSlot to increase flexibility.

For business components, the form exhibits high variability. Once you get used to it, it becomes a habit.
