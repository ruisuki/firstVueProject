<template>
  <div class="resultpage">
    <van-nav-bar class="custom-nav-bar" title="" @click-left="onClickLeft('/home')" left-arrow
      style="background-color: #1D82D4;"></van-nav-bar>
    <div class="title">

      <p>{{ msg }}</p>

    </div>
    <div class="detail">
     <p>{{content }}</p>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '未查询到该单词',
      content: '请检查单词拼写是否有错误.'
    }
  },

  methods: {
    onClickLeft(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
.custom-nav-bar ::v-deep .van-nav-bar__arrow {
  color: white;
}


.van-hairline--bottom:after {
  border-bottom-width: 0;
}


.title {
  height: 5.5rem;
  background-color: #1D82D4;
  padding-top: 4rem;
  padding-left: 1rem;
}

.title p {
  color: white;
  font-size: 1.875rem;
}

.detail p{
  margin: 0.625rem 1rem;
  height: 1.5625rem;
  line-height: 1.5625rem;
  font-size: 1.25rem;
  
}

</style>