# 使用场景

## radio 切换表单

<cube/><pet/>
<FormList-example-radio></FormList-example-radio>

::: tip
一般来说切换,html 看舒服,js 看着就冗杂了. 表单项的数据最好通过外部 js/vue-mixin 引入,代码看起来会很舒服:smiley:
<br>
一时 cv 一时爽, 一直 cv 一直爽, 但真的要维护的时候就要落泪了 :joy:
:::

::: details 查看代码

```vue
<template>
  <FormList :fieldList="formItem" @handle-event="handleEvent"></FormList>
</template>
<script>
export default {
  data() {
    return {
      // 表单项
      formItem: [
        {
          type: "radio",
          label: "切换表单项",
          prop: "radio",
          list: [
            {
              value: 0,
              label: "账号密码",
            },
            {
              value: 1,
              label: "年龄性别",
            },
          ],
        },
        {
          type: "input",
          label: "账号",
          prop: "account",
        },
        {
          type: "password",
          label: "密码",
          prop: "password",
        },
      ],
      // 准备切换的一套表单项
      formItemChange: [
        {
          type: "radio",
          label: "切换表单项",
          prop: "radio",
          list: [
            {
              value: 0,
              label: "账号密码",
            },
            {
              value: 1,
              label: "年龄性别",
            },
          ],
        },
        {
          type: "input",
          label: "年龄",
          prop: "account",
        },
        {
          type: "radio",
          label: "性别",
          prop: "sex",
          list: [
            {
              label: "male",
              value: 0,
            },
            {
              label: "female",
              value: 1,
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleEvent(type, val, key) {
      switch (type) {
        case "radio":
          this.radioCase(val, key);
          break;
        default:
          break;
      }
    },
    radioCase(val, key) {
      if (key === "radio") {
        [this.formItem, this.formItemChange] = [
          this.formItemChange,
          this.formItem,
        ];
      }
    },
  },
};
</script>
```

:::

<FormList-example-radioAppend></FormList-example-radioAppend>
::: tip
插入原本表单项写法. 不限于插入表单项,也可以插入其他元素.自由度高,但代码会变冗杂, 自行取舍
:::
::: details 查看代码

```vue
<template>
  <div>
    <FormList :footer="false" :fieldList="formItem" @handle-event="handleEvent">
      <!-- 通过 v-if切换追加项,templateData为子组件的form值-->
      <template v-if="showSlot" #append="{ templateData }">
        <el-form-item label="年龄">
          <el-input v-model="templateData.age"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="templateData.sex">
            <el-radio label="0">男</el-radio>
            <el-radio label="1">女</el-radio>
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
          type: "radio",
          label: "切换表单项",
          prop: "radio",
          list: [
            {
              value: 0,
              label: "账号密码",
            },
            {
              value: 1,
              label: "年龄性别",
            },
          ],
        },
        {
          type: "input",
          label: "账号",
          prop: "account",
        },
        {
          type: "password",
          label: "密码",
          prop: "password",
        },
      ],
    };
  },
  methods: {
    handleEvent(type, val, key) {
      switch (type) {
        case "radio":
          this.radioCase(val, key);
          break;
        default:
          break;
      }
    },
    radioCase(val, key) {
      if (key === "radio") {
        this.showSlot = val === 0 ? false : true;
      }
    },
  },
};
</script>
```

:::

## 异步操作

<FormList-example-sync></FormList-example-sync>

::: details 查看代码

```vue
<template>
  <div>
    <FormList
      :footer="false"
      :fieldList="formItem"
      @handle-event="handleEvent"
    ></FormList>
    <el-button @click="getSelect">获取异步数据</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formItem: [
        {
          type: "select",
          label: "异步下拉框",
          prop: "syncSelect",
          list: [],
        },
      ],
    };
  },
  methods: {
    getSelect() {
      // 异步的select
      this.formItem.filter((cur) => {
        if (cur.prop === "syncSelect") {
          cur.list = [
            {
              label: "选项一",
              value: 1,
            },
            {
              label: "选项二",
              value: 2,
            },
          ];
        }
      });
    },
  },
};
</script>
```

:::

## 增删改查业务场景示例

<Business-index></Business-index>

::: details 查看代码

```vue
index----
<template>
	<!-- 防止第一个参数变成event对象,传了undefined -->
	<el-button @click="operate(undefined)"> 新增 </el-button>
	<el-button @click="operate('id')">修改</el-button>
	<el-button @click="detail('id')">详情</el-button>
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
				// 请求page数据
			},
			operate(id) {
				this.showAdd = true;
				this.$nextTick(() => { this.$refs.add.init(id););
			},
			detail(id) {
				this.showDetail = true;
				this.$nextTick(() => { this.$refs.detail.init(id));
			},
		},
	};
</script>

add---
<template>
	<el-dialog :close-on-click-modal="false" :title="form.id ? '修改' : '新增'" :visible.sync="visible">
		<FormList :formData="form" :elForm.sync="elForm" ref="formList" :fieldList="formItem" label-width="120px">
			<template #testSlot="{ templateData }">
				<el-input v-model="templateData.testSlot"></el-input>
			</template>
			<template #testPrefix>
				<div>输入框的Prefix 插槽</div>
			</template>
			<template #testSuffix>
				<div>输入框的Suffix 插槽</div>
			</template>
			<template #testNativeSlot="{ templateData }">
				<el-form-item prop="testNativeSlot" label="原生插槽" :rules="[{ required: true }]">
					<el-input v-model="templateData.testNativeSlot"></el-input>
				</el-form-item>
			</template>
			<template #footer="{ form }">
				<el-button @click="submit(form)">提交</el-button>
				<el-button @click="visible = false">取消</el-button>
			</template>
		</FormList>
	</el-dialog>
	</div>
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
				// 1.利用作用域插槽,可直接获取表单的值,手动校验
				this.elForm.validate((valid) => {
					if (valid) {
						this.form.id ? this.edit(form) : this.add(form);
					} else {
						return false;
					}
				});
				//2.也可以调用FormList组件内的提交函数
				this.refs.formList.submitForm((form) => {
					// form 参数为校验成功的结果,无需手动校验
				});
			},
			add(form) {
				// 上传接口
				console.log(form);
			},
			edit(form) {
				// 修改接口
				console.log(form);
			},
		},
	};
</script>

```

:::
mixin 公共代码
::: details 查看代码

```js
import mock from "./data";
export default {
  data() {
    return {
      visible: false,
      elForm: {},
      form: {
        id: "",
        test: "",
        testSelect: "",
        testCheckbox: [],
        testRadio: "",
        testSwitch: false,
        testDate: "",
        testSlot: "",
        testNativeSlot: "",
        ayncSelect: "",
      },
      // 可以通过调整数组顺序,来映射表单项顺序, 删改操作也不用去改复杂的html结构
      formItem: [
        {
          type: "input",
          label: "输入框",
          prop: "test",
          rules: [{ required: true }],
        },
        {
          type: "select",
          label: "下拉框",
          prop: "testSelect",
          list: [
            {
              label: "选项一",
              value: 1,
              disabled: false, //默认是false, 如果需要传true
            },
            {
              label: "选项二",
              value: 2,
              disabled: false, //默认是false, 如果需要传true
            },
          ],
          rules: [{ required: true }],
        },
        {
          type: "checkbox",
          prop: "testCheckbox",
          label: "测试多选框",
          list: [
            {
              label: "选项一",
              value: 0,
            },
            {
              label: "选项二",
              value: 1,
            },
          ],
          rules: [{ required: true }],
        },
        {
          type: "radio",
          label: "测试单选",
          prop: "testRadio",
          list: [
            {
              label: "选项一",
              value: 0,
            },
            {
              label: "选项二",
              value: 1,
            },
          ],
          rules: [{ required: true }],
        },
        {
          type: "switch",
          label: "测试switch",
          prop: "testSwitch",
          rules: [{ required: true }],
        },
        {
          type: "date",
          label: "测试日期",
          prop: "testDate",
          rules: [{ required: true }],
        },
        {
          type: "slot",
          prop: "testSlot",
          label: "插槽",
          rules: [{ required: true }],
        },
        {
          type: "nativeSlot",
          prop: "testNativeSlot",
        },
        {
          type: "select",
          label: "异步下拉框",
          prop: "ayncSelect",
          list: [],
        },
      ],
    };
  },
  methods: {
    getDetail(id) {
      if (mock.msg === "success") {
        Object.keys(mock.data.form).forEach((key) => {
          // 字段一致才行,这里方法,不固定
          this.form[key] = mock.data.form[key];
        });
      } else {
        this.$message.error(mock.msg);
      }
    },
  },
};
```

:::

<div>
ps:　看到这，你会好奇detail代码是长什么样的, 和add.vue差不多,只是多了 "exhibit"属性,
添加exhibi属性后,将原本的input(含多种类型)除去边框,非选中项,显示纯文本

<br>
<p><b>Q:那我们为什么要使用FormList组件 </b>  
<br>　A:降低单vue文件重量,锻炼vue组件化思维 ,培养自动化工具理念,<b>"凡重复的工作,都可以被工具取代"</b></p>

<p><b>Q:那这么做到底有什么好处? 	　</b> 
<br>A:
				<ol>
 				<li> 遵循开发时行为结构分离原则</li> 
				<li>降低代码耦合度,提高复用性,和可读性,</li>
				<li>不能说提高"维护意愿",但至少一段时间后,看到这些代码不会头疼</li>
				<li>减少单文件大面积重复标签以及"v-if模块",将复杂的逻辑与结构分离开</li>
				 </ol>
				</p>
				  </div>
