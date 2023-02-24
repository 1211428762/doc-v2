<template>
  <div class="pet-select-wrap">
    <el-popover placement="top" :width="200">
      <div class="pet-select-panel">
        <el-tag @click="changePet('dog')">Dog</el-tag>
        <el-tag @click="changePet('white')">Cat white</el-tag>
        <el-tag @click="changePet('black')">Cat black</el-tag>
      </div>
      <template #reference>
        <p class="pet-change-tip">Change your pet *</p>
      </template>
    </el-popover>
  </div>

  <div ref="dog" v-show="showDog"></div>
</template>

<script setup>
import inspiration from '@/inspiration/index.js'
import { ref, nextTick, onBeforeUnmount } from 'vue'
import { inject } from 'vue'
let L2DwidgetSelf
let changePet = () => {}
const dog = ref(null)
const showDog = ref(false)
// setTimeout(() => {
//   L2DwidgetSelf = inject('$L2Dwidget')
//   console.log(window.L2Dwidget)
// }, 0)
inspiration.loadCatDependence().then((res) => {
  L2DwidgetSelf = window.L2Dwidget
  // 光nextTick有时候会失效
  //let script = document.createElement('script')
  //script.type = 'text/javascript'
  //script.src = '/cat-live2d/l2dwidget.min.js'
  //document.head.appendChild(script)
  let catPath = {
    white: '/doc-v2/cat-live2d/tororo/assets/tororo.model.json',
    black: '/doc-v2/cat-live2d/hijiki/assets/hijiki.model.json',
  }

  let config = {
    model: {
      jsonPath: catPath.white, // 加载模型的json路径
    },
    name: {
      div: 'cat_wrap',
    },
    display: {
      superSample: 1, // 超采样等级
      width: 150, // canvas的宽度
      height: 200, // canvas的高度
      position: '', // 显示位置：左或右
      hOffset: 0, // canvas水平偏移
      vOffset: 100, // canvas垂直偏移
    },
    mobile: {
      show: true, // 是否在移动设备上显示
      scale: 1, // 移动设备上的缩放
      motion: true, // 移动设备是否开启重力感应
    },
    react: {
      opacityDefault: 0.9, // 默认透明度
      opacityOnHover: 0.625, // 鼠标移上透明度
    },
  }
  setTimeout(() => {
    nextTick(() => {
      inspiration.addDog(dog._value)
    })
  }, 500)

  changePet = (pet) => {
    switch (pet) {
      case 'dog':
        showDog.value = true
        document.getElementById('cat_wrap')?.remove()
        break
      case 'white':
        showDog.value = false
        config.model.jsonPath = catPath.white
        L2DwidgetSelf?.init && L2DwidgetSelf.init(config)
        break
      case 'black':
        showDog.value = false
        config.model.jsonPath = catPath.black
        L2DwidgetSelf?.init && L2DwidgetSelf.init(config)
        break
    }
  }
  // 初始加载黑猫
  setTimeout(() => changePet('black'), 0)
})

onBeforeUnmount(() => {
  document.getElementById('cat_wrap')?.remove()
})
</script>
<style>
#cat_wrap > canvas {
  left: 90%;
  top: 15%;
}
.pet-select-wrap {
  position: fixed;
  left: 90%;
  top: 13%;
}
.pet-select-panel {
  display: flex;
  justify-content: space-between;
}
.pet-select-panel .el-tag {
  cursor: pointer !important;
}
.pet-change-tip {
  text-decoration: underline;
  cursor: pointer;
}
</style>
