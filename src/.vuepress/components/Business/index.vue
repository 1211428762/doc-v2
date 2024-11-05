<template>
  <div>
    <p>
      {{ _tran("word.example2") }}
    </p>
    <img :src="$withBase('/img/business.gif')" alt="" />
    <el-divider></el-divider>
    <el-card>
      <el-button @click="operate(undefined)">
        {{ _tran("common.add") }}</el-button
      >
      <el-button @click="operate('id')"> {{ _tran("common.edit") }}</el-button>
      <el-button @click="detail('id')"> {{ _tran("common.add") }}</el-button>
    </el-card>
    <el-divider></el-divider>
    <p>
      {{ _tran("word.example3") }}
    </p>
    <div class="describe">
      <img :src="$withBase('/img/directory.png')" alt="" />
      <ol>
        <li>
          <span>add.vue</span>
          {{ _tran("word.fileDesc1") }}
        </li>
        <li><span>data.js</span> {{ _tran("word.fileDesc2") }}</li>
        <li><span>detail.vue</span> {{ _tran("word.fileDesc3") }}</li>
        <li><span>index.vue</span> {{ _tran("word.fileDesc4") }}</li>
        <li>
          <span>mixin</span> {{ _tran("word.fileDesc5") }}
          <a href="https://v3.vuejs.org/guide/mixins.html" target="_blank">
            {{ _tran("word.fileDesc6") }}</a
          >.
        </li>
      </ol>
    </div>
    <add ref="add" v-if="showAdd" @refresh="refresh"></add>
    <detail ref="detail" v-if="showDetail" @refresh="refresh"></detail>
  </div>
</template>

<script>
import { _tran } from "@/utils/i18n";
import add from "./add.vue";
import detail from "./detail.vue";
export default {
  components: {
    add,
    detail,
  },
  data() {
    return {
      showAdd: false,
      showDetail: false,
    };
  },
  methods: {
    refresh() {
      // 请求page数据
    },
    operate(id) {
      this.showAdd = true;
      this.$nextTick(() => {
        this.$refs.add.init(id);
      });
    },
    detail(id) {
      this.showDetail = true;
      this.$nextTick(() => {
        this.$refs.detail.init(id);
      });
    },
    _tran,
  },
};
</script>
<style lang="scss" scoped>
.describe {
  display: flex;
  li span {
    color: #769fcd;
  }
  img {
    float: left;
  }
}
</style>
