<template>
  <div>
    <p>Perhaps this scenario is all too familiar in a backend management system; prolonged "copy and paste" work makes the code cumbersome. It's a tearjerker, to say the least. Let's illustrate with an example:</p>
    <img :src="$withBase('/img/business.gif')" alt="" />
    <el-divider></el-divider>
    <el-card>
      <el-button @click="operate(undefined)">Add</el-button>
      <el-button @click="operate('id')">Edit</el-button>
      <el-button @click="detail('id')">Details</el-button>
    </el-card>
    <el-divider></el-divider>
    <p>Combining adding and editing, distinguishing based on whether the 'id' data is passed or not:</p>
    <div class="describe">
      <img :src="$withBase('/img/directory.png')" alt="" />
      <ol>
        <li><span>add.vue</span> is the file for adding and editing, coupled together.</li>
        <li><span>data.js</span> simulates API data.</li>
        <li><span>detail.vue</span> is the page for displaying details.</li>
        <li><span>index.vue</span> is the button display page.</li>
        <li>
          <span>mixin</span> is the file for shared components' data and functions. <a href="https://v3.vuejs.org/guide/mixins.html" target="_blank">Learn about mixins</a>.
        </li>
      </ol>
    </div>
    <add ref="add" v-if="showAdd" @refresh="refresh"></add>
    <detail ref="detail" v-if="showDetail" @refresh="refresh"></detail>
  </div>
</template>


<script>
import add from './add.vue'
import detail from './detail.vue'
export default {
  components: {
    add,
    detail,
  },
  data() {
    return {
      showAdd: false,
      showDetail: false,
    }
  },
  methods: {
    refresh() {
      // 请求page数据
    },
    operate(id) {
      this.showAdd = true
      this.$nextTick(() => {
        this.$refs.add.init(id)
      })
    },
    detail(id) {
      this.showDetail = true
      this.$nextTick(() => {
        this.$refs.detail.init(id)
      })
    },
  },
}
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
