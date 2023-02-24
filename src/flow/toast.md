  <div>
    <cube/><pet/>
    <h1>提示</h1>
    <fButton @click="info">默认toast</fButton>
    <fButton @click="success">成功</fButton>
    <fButton @click="fail">失败</fButton>
  </div>

<script>

export default {
  name: "f-toast",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    console.log(this)
  },
  methods: {
    info() {
      this.$ftoast.info({
        message: "信息",
      });
    },
    success() {
      this.$ftoast.success({
        message: "成功",
      });
    },
    fail() {
      this.$ftoast.fail({
        message: "失败",
      });
    },
  },
};
</script>

toast 推荐挂载到全局

### Event

| 类型    | 参数                  | 参数解释                                                                                      | 描述     |
| ------- | --------------------- | --------------------------------------------------------------------------------------------- | -------- |
| info    | message,duration,html | message 为文字描述<br />duration 为显示时间,默认 2s<br />html 接受 html 模版字符串效果同 slot | 标准提示 |
| success | 同 info               |                                                                                               | 成功提示 |
| fail    | 同 info               |                                                                                               | 失败提示 |

::: details 查看代码

```vue
<template>
  <div>
    <fButton @click="info">默认toast</fButton>
    <fButton @click="success">成功</fButton>
    <fButton @click="fail">失败</fButton>
  </div>
</template>
<script>
export default {
  methods: {
    info() {
      this.$ftoast.info({
        message: '信息',
      })
    },
    success() {
      this.$ftoast.success({
        message: '成功',
      })
    },
    fail() {
      this.$ftoast.fail({
        message: '失败',
      })
    },
  },
}
</script>
```

:::
