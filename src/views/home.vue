<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in loop" :key="index">
        <div class="loopimg" :style="{ 'background-image': 'url(' + item + ')' }">></div>
      </van-swipe-item>
    </van-swipe>
    <searchcomp></searchcomp>

  </div>
</template>

<script>
import searchcomp from '@/components/search.vue'
import D1 from '@/assets/D1.jpg'
import D2 from '@/assets/D2.jpg'
import D3 from '@/assets/D3.jpg'
import D4 from '@/assets/LOGO.jpg'



export default {
  name: 'home',
  components: {
    searchcomp,

  },
  data() {
    return {
      loop: [D1, D2, D3, D4],
      
    }
  },

 


}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 17.1875rem;
  width: 22.8125rem;
  overflow: hidden;
}

.loopimg {
  height: 17.1875rem;
}
</style>