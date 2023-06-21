<template>
  <div class="colletWorks-list">
    <br>
    <p> {{ works.length }} 个词</p>
    <br>

    <!-- 生词列表 -->

    <ul>
      <li v-for="(item, index) in works">
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  data() {
    return {
      works: ['典', '孝', '急', '乐', '蚌', '赢'],
    }
  },
}

</script>
<style scoped>
.colletWorks-list li {
  height: 1.125rem;
  /* border-top: 1px solid rgba(211, 211, 211, 0.5); */
  border-bottom: 1px solid rgba(211, 211, 211, 0.5);

  /* border: 1px solid #000; */
  /* background-color: cyan; */
  padding: 0.625rem;
}
</style>