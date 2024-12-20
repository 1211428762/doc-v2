# Use Cases

## Radio Toggle Form

<cube/><pet/>
<FormList-example-radio></FormList-example-radio>
::: tip
In general, for a more pleasant HTML structure, it's better to import form item data through external JS or Vue mixins. The code will look cleaner this way.
<br>
Instant gratification with code verbosity might feel good for a while, but when it comes time for maintenance, it can be a tearjerker! :joy:
:::

::: details View Code

```vue
<template>
  <FormList :fieldList="formItem" @handle-event="handleEvent"></FormList>
</template>
<script>
export default {
  data() {
    return {
      // Form Items
      formItem: [
        {
          type: 'radio',
          label: 'Toggle Form Items',
          prop: 'radio',
          list: [
            {
              value: 0,
              label: 'Username and Password',
            },
            {
              value: 1,
              label: 'Age and Gender',
            },
          ],
        },
        {
          type: 'input',
          label: 'Username',
          prop: 'account',
        },
        {
          type: 'password',
          label: 'Password',
          prop: 'password',
        },
      ],
      // Another set of form items for toggling
      formItemChange: [
        {
          type: 'radio',
          label: 'Toggle Form Items',
          prop: 'radio',
          list: [
            {
              value: 0,
              label: 'Username and Password',
            },
            {
              value: 1,
              label: 'Age and Gender',
            },
          ],
        },
        {
          type: 'input',
          label: 'Age',
          prop: 'account',
        },
        {
          type: 'radio',
          label: 'Gender',
          prop: 'sex',
          list: [
            {
              label: 'Male',
              value: 0,
            },
            {
              label: 'Female',
              value: 1,
            },
          ],
        },
      ],
    }
  },
  methods: {
    handleEvent(type, val, key) {
      switch (type) {
        case 'radio':
          this.radioCase(val, key)
          break
        default:
          break
      }
    },
    radioCase(val, key) {
      if (key === 'radio') {
        ;[this.formItem, this.formItemChange] = [this.formItemChange, this.formItem]
      }
    },
  },
}
</script>

```

:::

<FormList-example-radioAppend></FormList-example-radioAppend>
::: tip
Insert the original form item writing. It's not limited to inserting form items; you can also insert other elements. It provides a high degree of flexibility but may result in more complex code. Use at your discretion.
:::
::: details View Code

```vue
<template>
  <div>
    <FormList :footer="false" :fieldList="formItem" @handle-event="handleEvent">
      <!-- Use v-if to switch and append items; templateData is the form values of the child component -->
      <template v-if="showSlot" #append="{ templateData }">
        <el-form-item label="Age">
          <el-input v-model="templateData.age"></el-input>
        </el-form-item>
        <el-form-item label="Gender">
          <el-radio-group v-model="templateData.sex">
            <el-radio label="0">Male</el-radio>
            <el-radio label="1">Female</el-radio>
          </el-radio-group>
        </el-form-item>
      </template>
    </FormList>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSlot: false,
      formItem: [
        {
          type: 'radio',
          label: 'Toggle Form Items',
          prop: 'radio',
          list: [
            {
              value: 0,
              label: 'Username and Password',
            },
            {
              value: 1,
              label: 'Age and Gender',
            },
          ],
        },
        {
          type: 'input',
          label: 'Username',
          prop: 'account',
        },
        {
          type: 'password',
          label: 'Password',
          prop: 'password',
        },
      ],
    }
  },
  methods: {
    handleEvent(type, val, key) {
      switch (type) {
        case 'radio':
          this.radioCase(val, key)
          break
        default:
          break
      }
    },
    radioCase(val, key) {
      this.showSlot = key === 'radio' ? val === 0 ? false : true : this.showSlot
    },
  },
}
</script>
```

:::

## Asynchronous Operations

<FormList-example-sync></FormList-example-sync>

::: details View Code

```vue
<template>
  <div>
    <FormList :footer="false" :fieldList="formItem" @handle-event="handleEvent"></FormList>
    <el-button @click="getSelect">Get Asynchronous Data</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formItem: [
        {
          type: 'select',
          label: 'Asynchronous Dropdown',
          prop: 'syncSelect',
          list: [],
        },
      ],
    }
  },
  methods: {
    getSelect() {
      // 异步的select
      this.formItem.filter((cur) => {
        if (cur.prop === 'syncSelect') {
          cur.list = [
            {
              label: 'Option 1',
              value: 1,
            },
            {
              label: 'Option 2',
              value: 2,
            },
          ]
        }
      })
    },
  },
}
</script>
```

:::

## Example of Add, Edit, and View Business Scenarios

<Business-index></Business-index>

::: details View Code

```vue
index----
<template>
	<!-- Prevent the first parameter from becoming an event object by passing undefined -->
	<el-button @click="operate(undefined)"> Add </el-button>
	<el-button @click="operate('id')"> Edit </el-button>
	<el-button @click="detail('id')"> View </el-button>
	<add ref="add" v-if="showAdd" @refresh="refresh"></add>
	<detail ref="detail" v-if="showDetail" @refresh="refresh"></detail>
</template>

<script>
	export default {
		data() {
			return {
				showAdd: false,
				showDetail: false,
			};
		},
		methods: {
			refresh() {
				// Request page data
			},
			operate(id) {
				this.showAdd = true;
				this.$nextTick(() => { this.$refs.add.init(id); });
			},
			detail(id) {
				this.showDetail = true;
				this.$nextTick(() => { this.$refs.detail.init(id); });
			},
		},
	};
</script>

add---
<template>
	<el-dialog :close-on-click-modal="false" :title="form.id ? 'Edit' : 'Add'" :visible.sync="visible">
		<FormList :formData="form" :elForm.sync="elForm" ref="formList" :fieldList="formItem" label-width="120px">
			<template #testSlot="{ templateData }">
				<el-input v-model="templateData.testSlot"></el-input>
			</template>
			<template #testPrefix>
				<div>Input Slot for Prefix</div>
			</template>
			<template #testSuffix>
				<div>Input Slot for Suffix</div>
			</template>
			<template #testNativeSlot="{ templateData }">
				<el-form-item prop="testNativeSlot" label="Native Slot" :rules="[{ required: true }]">
					<el-input v-model="templateData.testNativeSlot"></el-input>
				</el-form-item>
			</template>
			<template #footer="{ form }">
				<el-button @click="submit(form)">Submit</el-button>
				<el-button @click="visible = false">Cancel</el-button>
			</template>
		</FormList>
	</el-dialog>
</template>
<script>
	import mixin from "./mixin";
	export default {
		mixins: [mixin],
		methods: {
			init(id) {
				id ? (this.form.id = id) : delete this.form.id;
				this.visible = true;
				this.$nextTick(() => {
					this.elForm.resetFields();
					id ? this.getDetail(id) : "";
				});
			},
			submit(form) {
				// 1. Using scoped slots, you can directly get the form's values and manually validate.
				this.elForm.validate((valid) => {
					if (valid) {
						this.form.id ? this.edit(form) : this.add(form);
					} else {
						return false;
					}
				});
				// 2. You can also call the submit function inside the FormList component
				this.refs.formList.submitForm((form) => {
					// The form parameter is the validated result, so no need for manual validation.
				});
			},
			add(form) {
				// Upload interface
				console.log(form);
			},
			edit(form) {
				// Edit interface
				console.log(form);
			},
		},
	};
</script>

```

:::
mixin - Common Code
::: details  View Code

```js
import mock from './data'
export default {
  data() {
    return {
      visible: false,
      elForm: {},
      form: {
        id: '',
        test: '',
        testSelect: '',
        testCheckbox: [],
        testRadio: '',
        testSwitch: false,
        testDate: '',
        testSlot: '',
        testNativeSlot: '',
        ayncSelect: '',
      },
      // 可以通过调整数组顺序,来映射表单项顺序, 删改操作也不用去改复杂的html结构
      formItem: [
        {
          type: 'input',
          label: 'Iuput',
          prop: 'test',
          rules: [{ required: true }],
        },
        {
          type: 'select',
          label: 'Select',
          prop: 'testSelect',
          list: [
            {
              label: 'Option1 ',
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
        {
          type: 'checkbox',
          prop: 'testCheckbox',
          label: 'testCheckbox',
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
          rules: [{ required: true }],
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
          rules: [{ required: true }],
        },
        {
          type: 'switch',
          label: 'testSwitch',
          prop: 'testSwitch',
          rules: [{ required: true }],
        },
        {
          type: 'date',
          label: 'testDate',
          prop: 'testDate',
          rules: [{ required: true }],
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
        {
          type: 'select',
          label: 'ayncSelect',
          prop: 'ayncSelect',
          list: [],
        },
      ],
    }
  },
  methods: {
    getDetail(id) {
      if (mock.msg === 'success') {
        Object.keys(mock.data.form).forEach((key) => {
          // 字段一致才行,这里方法,不固定
          this.form[key] = mock.data.form[key]
        })
      } else {
        this.$message.error(mock.msg)
      }
    },
  },
}
```

:::

<div>
ps: When you see this, you might be curious about what the "detail" code looks like. It's similar to "add.vue" but with an additional "exhibit" attribute. With the "exhibit" attribute, the original input elements (including various types) have their borders removed, and non-selected items are displayed as plain text.

<br>
<p><b>Q: Why should we use the FormList component? </b>  
<br>
<br>A: To reduce the weight of single Vue files, exercise Vue component thinking, and cultivate the concept of automation tools.<b>"Any repetitive work can be replaced by tools."</b></p>

<p><b>Q: So, what are the benefits of doing this? 	　</b> 
<br>A:
				<ol>
 				<li> It follows the separation of behavior and structure principle during development.</li> 
				<li> It reduces code coupling, enhances reusability and readability.</li>
				<li> It may not necessarily increase "maintenance willingness," but at least, after some time, looking at this code won't be a headache.</li>
				<li> It reduces extensive repetition of tags and "v-if modules" in single files and separates complex logic from structure.</li>
				 </ol>
				</p>
				  </div> 
