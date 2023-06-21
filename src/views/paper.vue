<template>
  <div class="paperpage">

    <!-- 顶部样式 -->
    <van-nav-bar title="文章" left-text="返回" @click-left="onClickLeft" left-arrow></van-nav-bar>

  </div>
</template>

<script>
export default {

  methods: {
    onClickLeft() {
      this.$router.push('/home')
    }
  }


}
</script>

<style scoped></style>