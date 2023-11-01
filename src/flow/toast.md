  <div>
    <cube/><pet/>
    <h1>Toast</h1>
    <fButton @click="info">Default Toast</fButton>
    <fButton @click="success">Success</fButton>
    <fButton @click="fail">Failure</fButton>
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
        message: "Information",
      });
    },
    success() {
      this.$ftoast.success({
        message: "Success",
      });
    },
    fail() {
      this.$ftoast.fail({
        message: "Failure",
      });
    },
  },
};
</script>

toast is recommended to be globally mounted.

### Event

| Type    | Parameters            | Parameter Description                                                                                  | Description |
| ------- | ---------------------  | ---------------------------------------------------------------------------------------------            | --------    |
| info    | message, duration, html | message is text description<br />duration is display time, default 2s<br />html accepts html template string, same effect as slot | Standard prompt |
| success | Same as info           |                                                                                                         | Success prompt |
| fail    | Same as info           |                                                                                                         | Failure prompt |

::: details View Code


```vue
<template>
  <div>
    <fButton @click="info">Default Toast</fButton>
    <fButton @click="success">Success</fButton>
    <fButton @click="fail">Failure</fButton>
  </div>
</template>
<script>
export default {
  methods: {
    info() {
      this.$ftoast.info({
        message: 'info',
      })
    },
    success() {
      this.$ftoast.success({
        message: 'success',
      })
    },
    fail() {
      this.$ftoast.fail({
        message: 'fail',
      })
    },
  },
}
</script>
```

:::
