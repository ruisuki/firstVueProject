<template>
  <div class="colletWorks-list">
    <br>
    <br>
    <br>

    <!-- 不再复习 -->

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
      works: ['典', '孝', '急',],
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