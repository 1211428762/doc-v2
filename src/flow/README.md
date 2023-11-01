<div>
    <cube/><pet/>
    <h1>Button Group</h1>
    <fButton @click="clickEvt">primary</fButton>
    <fButton type="danger">danger</fButton>
    <fButton plain>plain</fButton>
    <fButton type="danger" plain>danger</fButton>
    <fButton disabled>disabled</fButton>
    <fButton type="danger" disabled>danger</fButton>
</div>

<script>

export default {
    name: "",
    data() {
        return {
            show: false
        };
    },
    mounted() {},
    methods: {
        clickEvt(evt) {
            this.show = true
            console.log("clickEvt-------", evt);
        },
    },
};
</script>

### Attributes

| Attribute | Type    | Options (Default)     |
| --------- | ------- | ---------------------- |
| plain     | boolean | false                  |
| disabled  | boolean | false                  |
| type      | string  | (primary, danger)/primary |

### Event

| Name  | Description |
| ----- | ----------- |
| click | Click event |

::: details View Code


```vue
<template>
  <div>
    <fButton @click="clickEvt">primary</fButton>
    <fButton type="danger">danger</fButton>
    <fButton plain>plain</fButton>
    <fButton type="danger" plain>danger</fButton>
    <fButton disabled>disabled</fButton>
    <fButton type="danger" disabled>danger</fButton>
    <viewport />
  </div>
</template>
```

:::
