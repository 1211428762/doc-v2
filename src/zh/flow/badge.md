  <div>
  <cube/><pet/>
  <h1>徽标</h1>
    <badge isDot  :value="99"><fButton>默认</fButton></badge>
    <badge isDot  left :value="99"><fButton>左上</fButton></badge>
    <badge isDot  bottom :value="99"><fButton>右下</fButton></badge>
    <badge isDot :overlap=false ><fButton>不重叠</fButton></badge>
    <badge :max="99" :value="200"><fButton>数据</fButton></badge>
  </div>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

### Attributes

| 属性    | 说明                         | 类型          | 可选值(默认值) |
| ------- | ---------------------------- | ------------- | -------------- |
| value   | 徽标值,可输入数字.文本       | number/string |                |
| max     | 最大值, value 为 number 生效 | number        |                |
| isDot   | 是否以点显示                 | boolean       | false          |
| left    | 徽标左边显示(默认在右)       | boolean       | false          |
| bottom  | 徽标在下边显示               | boolean       | false          |
| overlap | 是否重叠                     | boolean       | true           |

::: details 查看代码

```vue
<template>
  <badge isDot :value="99"><fButton>默认</fButton></badge>
  <badge isDot left :value="99"><fButton>左上</fButton></badge>
  <badge isDot bottom :value="99"><fButton>右下</fButton></badge>
  <badge isDot :overlap="false"><fButton>不重叠</fButton></badge>
  <badge :max="99" :value="200"><fButton>数据</fButton></badge>
</template>
```

:::
