<div>
  <cube/><pet/>
  <h1>Badge</h1>
    <badge isDot  :value="99"><fButton>Default</fButton></badge>
    <badge isDot  left :value="99"><fButton>Top Left</fButton></badge>
    <badge isDot  bottom :value="99"><fButton>Bottom Right</fButton></badge>
    <badge isDot :overlap=false ><fButton>Not Overlapping</fButton></badge>
    <badge :max="99" :value="200"><fButton>Data</fButton></badge>
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

| Attribute | Description                    | Type          | Options (Default) |
| --------- | ------------------------------ | ------------- | ----------------- |
| value     | Badge value, can be a number or text | number/string |                |
| max       | Maximum value, applicable when value is a number | number        |                |
| isDot     | Display as a dot               | boolean       | false          |
| left      | Display badge on the left (by default, it's on the right) | boolean       | false          |
| bottom    | Display badge at the bottom    | boolean       | false          |
| overlap   | Overlap badges                 | boolean       | true           |

::: details View Code

```vue
<template>
  <badge isDot :value="99"><fButton>Default</fButton></badge>
  <badge isDot left :value="99"><fButton>Top Left</fButton></badge>
  <badge isDot bottom :value="99"><fButton>Bottom Right</fButton></badge>
  <badge isDot :overlap="false"><fButton>Not Overlapping</fButton></badge>
  <badge :max="99" :value="200"><fButton>Data</fButton></badge>
</template>
```

:::
