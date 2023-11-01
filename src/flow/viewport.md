  <div>
  <cube/><pet/>
  <h1>Elements with Entering Viewport Animations</h1>
    <p>
     When an element enters the viewport (with a slow scroll for a better demonstration, supported on both PC and mobile devices), it triggers an animation. Currently, there are four supported directions:
    </p>
    <ClientOnly>
      <section class="viewport-demo">
        <viewport direction="free" class="scroll-bar">
          <div class="test">1</div>
          <div class="test">2</div>
          <div class="test">3</div>
          <p>Entering from the left and right</p>
        </viewport>
        <viewport direction="left" class="scroll-bar">
          <div class="test">1</div>
          <p>Entering from the left</p>
        </viewport>
        <viewport direction="right" class="scroll-bar">
          <div class="test">1</div>
          <p>Entering from the right</p>
        </viewport>
        <viewport direction="bottom" class="scroll-bar">
          <div class="test">1</div>
          <p>Entering from the bottom</p>
        </viewport>
        <!-- <p>使用案例</p>
        <viewport direction="bottom" class="scroll-bar viewport-example">
          <div  class="test" >
            <img
              src="https://img0.baidu.com/it/u=3093440885,1425730067&fm=26&fmt=auto&gp=0.jpg"
              alt=""
            />
            <p>绿叶图片</p>
            <p>绿色意味着生机,和无限的希望</p>
          </div>
          <p>从底下进入</p>
        </viewport> -->
      </section>
    </ClientOnly>
  </div>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    clickEvt(evt) {
      console.log("clickEvt-------", evt);
    },
  },
};
</script>
<style lang='scss' >
.viewport-demo {
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  .viewport {
    width: 49%;
    height: 300px;
    overflow-y: scroll;
    > div:first-child,
    > section:first-child {
      margin-top: 500px;
    }
  }
  .test {
    width: 50px;
    height: 50px;
    margin: 50px auto;
    text-align: center;
    color: white;
    line-height: 50px;
    background: deepskyblue;
    /* transition-duration: 1s !important; */
  }
}
.scroll-bar {
  border: 1px silver solid;
  position: relative;
  p {
    position: absolute;
    top: 0;
    left: 50%;
  }
}
.viewport-example {
  figure {
    width: 90%;
    height: 100px;
  }
  img {
    width: 50%;
    object-fit: cover;
  }
}  

</style>

### Attributes

| Attribute  | Type   | Optional Values (Default)     | Description                                 |
| ---------  | ------ | ------------------------------ | ------------------------------------------- |
| direction  | string | (left, bottom, right, free)   | The animation triggered when the element enters the viewport |
| element    | array  |                                | Elements to be observed, optional           |

::: details View Code

```vue
<template>
  <div class="viewport-demo">
   // If `element` is not provided, the first-level child elements within the viewport component must be div/section (recommended) and will be automatically observed.
    // To manually observe elements when they enter the viewport, provide the `element` attribute and use IntersectionObserver (not recommended).
    // The component can handle single or multiple elements.
    <viewport direction="free" class="scroll-bar">
      <div class="test">1</div>
      <section class="test">2</section>
      <div class="test">3</div>
      <p>Entering from the left and right</p>
    </viewport>
    <viewport direction="left" class="scroll-bar">
      <div class="test">1</div>
      <p>Entering from the left</p>
    </viewport>
    <viewport direction="right" class="scroll-bar">
      <div class="test">1</div>
      <p>Entering from the right</p>
    </viewport>
    <viewport direction="bottom" class="scroll-bar">
      <div class="test">1</div>
      <p>Entering from the bottom</p>
    </viewport>
  </div>
</template>
```

:::
