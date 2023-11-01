<div>
    <cube/><pet/>
    <h1>Dialog</h1>
    <fButton @click="clickEvt">Open Dialog</fButton>
    <fDialog v-model:show="show"> Dialog Content</fDialog>
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

| Attribute          | Type    | Options (Default) | Description                |
| ------------------ | ------- | ------------------- | -------------------------- |
| clickOverlayClose  | boolean | true                | Close the dialog by clicking the overlay |
| closeIcon          | boolean | true                | Display the close (x) icon |
| show               | boolean | false               | Control the visibility of the dialog |
| showOverlay        | boolean | false               | Show the overlay |
| width              | string  | 400px               | Dialog width |

### Event

| Name   | Description       |
| ------ | ------------------ |
| opened | Callback after the dialog is opened |
| closed | Callback after the dialog is closed |

::: details View Code

```vue
<template>
  <div>
    <fButton @click="clickEvt">Open Dialog</fButton>
    <fDialog :show.sync="show"> Dialog Content</fDialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    clickEvt(evt) {
      this.show = true
    },
  },
}
</script>
```

:::
