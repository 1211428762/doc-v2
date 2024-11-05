<template>
  <div ref="cube"></div>
</template>

<script setup>
import inspiration from "@/inspiration/index.js";
import { ref, nextTick } from "vue";
const cube = ref(null);
// console.log("window.location--->", window.location.pathname);
// const isCN = window.location.pathname.includes("/zh/");
// const locale = isCN ? "zh-CN" : "en";
// 光nextTick有时候会失效
setTimeout(() => {
  nextTick(() => {
    inspiration.addCube(cube._value);
  });
}, 500);
</script>
