<template>
  <div class="userability">
    <van-grid :column-num="3">
      <van-grid-item v-for="value in 3" :key="value" icon="user-o" text="文字" />
    </van-grid>
  </div>
</template>

<script>
export default{
  name:'userability',
}
</script>