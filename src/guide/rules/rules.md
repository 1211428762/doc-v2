# Form Validation Rules

## Demonstration

### Common Cases

<rules-common/>

### Special Cases

<rule-special/>
**Note: The format for validation function parameters is as follows:**

1. Special rules: _param(special parameter), message, trigger_ (e.g., decimal precision, greater/less than 1).
2. Regular rules: message, trigger (e.g., email, phone number).

The default value for the message is a multilingual prompt located in src/i18n/page/validator, and the default trigger is ["change", "blur"].

The _rules.ts_ file is located in the _utils_ directory.

## Common Rule Validation

### Positive Integer Validation (int)

```js
// Example Configuration
import rules from "@/utils/rules.ts"
{
  prop: "test",
  model: "test",
  label: "test",
  rules: [rules.int("module.tip_error", ["change", "blur"])] // Default prompt available, can be omitted
  // You can pass a single function for a single rule, e.g., rules: rules.int()
  // The validation function's return value format is {trigger: xxx, message: xxx, validator: xxx}.
  // You can also use the spread operator to override error messages and triggers. The same applies to all validation functions.
  // rules: { ...rules.int(), message: "xxx", trigger: xxx }
}
```

### Positive Number Validation  (plusNumber)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.plusNumber()]
}
```

### Non-Zero Validation (nonzero)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.nonzero()]
}
```

### Number Validation(number)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.number()]
}
```

### Decimal/Decimal-Only Input Validation (float)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.float()]
}
```

### url Validation (url)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.url()]
}
```

### ip Validation (ip)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.ip()]
}
```

### ID Number Validation(identity)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.identity()]
}
```

### Postal Code Validation (postal)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.postal()]
}
```

### Email Validation(email)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.email()]
}
```

### Mobile Phone  Validation(mobile)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.mobile()]
}
```

###  Phone Number Validation(phone)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.phone()]
}
```

### Combined Mobile and  Phone  Validation (phoneAll)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.phoneAll()]
}
```

## Special Rule Validation

Note： that special rule parameters consist of a few initial constraints (usually only one rule). If there are multiple rules, they should be passed in order. The last two parameters are for validation messages and trigger methods (usually taking default values).

### Required Field Validation(required)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.required(Boolean)] //是否必填。默认必填

```

### Maximum String Length Validation (maxlength)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.maxlength(Number,Boolean)]//输入框最大长度， 第二个参数是否启用多语言长度校验，默认为否

```

### Minimum String Length Validation(minlength)

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.minlength(Number,Boolean)]//输入框最小长度， 第二个参数是否启用多语言长度校验，默认为否

```

### Numeric Precision Validation (precision(number))

```js
//配置案例
import rules from "@/utils/rules.ts"
{
prop:"test",
model:"test",
label:"test",
rules:[rules.precision(n)] //n位小数校验
}
```

### Numeric Range Validation (numCompare(numCompare("gt/gte/lt/lte"+number))

```js
//配置案例
import rules from "@/utils/rules.ts"
 {
   model: 'title',
   prop: 'title',
   label: 'Numeric Range',
   rules: [rules.numCompare('gte1/gt1/lt1/lte1')],  //单范围校验数字 大于等于/大于/小于/小于等于1
   //rules: [rules.numCompare(['gt1','lte100'])],  //区间校验数字 大于1 且小于等于100, 搭配方式自由组合共四种
   //  ['gt1','lt100']   1<x<100   ['gte1','lt100']   1<=x<100
   //  ['gt1','lte100']   1<x<=100  ['gte1','lte100']   1<=x<=100
 },
```

### Numeric Size Validation (numCompare("gt/gte/lt/lte"+number, message="If comparing two values, message is required")), must be combined with number validation

```js
//配置案例
import rules from "@/utils/rules.ts"
{
 prop:"test",
 model:"test",
 label:"test",
 rules:[rule.number(),rules.numCompare("gt1")] //带数字校验,输入数字必须大于1
 //rules:[rule.number(),rules.numCompare("gt"+(Number(b)||0),$t("a必须大于b")]  a大于b的使用场景
}
//数字区间校验
rules:[rule.number(),rules.numCompare(["gt1","lte100"])] //带数字校验,输入数字必须大于1,且小于等于100
```

### English Title Validation, recommended with multilingual length validation (enRequired)

```js
//配置案例
import rules from "@/utils/rules.ts"
 {
   slot: 'title',
   prop: 'title',
   label: '英文标题,长度小于24',
   rules: [rules.enRequired(), rules.maxLength(24,true)],  //长度默认24可传其他长度
 },
```

###  Future validation(hours)

```js
//配置案例
import rules from "@/utils/rules.ts"
  {
    prop: 'time',
    model: 'time',
    type: 'datetimerange/datetime', //兼容时间数组,单个时间 ,  校验时间区域时,默认校验创建时间(数组第一位)
    label: '时间',
    rules: [ rules.future(24)],  //接受小时参数, 默认1小时即 比当前时间大一小时才会通过,传24即 选择时间/创建时间 必须是比当前时间大24小时(即选择时间是明天才通过)
 },

```

<rule-special/>

::: tip
Some validation rules involve combined validation. For example, rules:[rules.number(), rules.numCompare('gt10')] first checks if it's a number and then validates the size. In combined validation rules, basic validation comes first, followed by more complex validation.
:::

::: details View Code

@[code](./rules-special.vue)

:::
