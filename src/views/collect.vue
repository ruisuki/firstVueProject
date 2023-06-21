<template>
  <div id="colletWorks">

    <!-- 顶部样式 -->
    <van-nav-bar title="生词表" left-text="返回"  @click-left="onClickLeft" left-arrow></van-nav-bar>

    <!-- 选项卡 -->
    <van-tabs @click="onClick" :color="'#1989fa'">
      <van-tab title="需复习" ></van-tab>
      <van-tab title="不再复习" ></van-tab>
    </van-tabs>

    <!-- 需复习 -->
    <worksreview v-if="isShow"></worksreview>
    <!-- 不再复习 -->
    <noworksreview v-if="!isShow"></noworksreview>
  </div>
</template>

<script>

import worksreview from '@/components/reviewworks.vue'
import noworksreview from '@/components/noreview.vue'

export default {

  name: 'collect',
  data() {
    return {
      isShow:true,    
    }
  },

  components: {
    worksreview,
    noworksreview
  },
  methods: {
    onClick() {
    this.isShow = !this.isShow
    },

    onClickLeft(){
      this.$router.push('/home')
    }
  },
}

</script>

<style scoped>

</style>