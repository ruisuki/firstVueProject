<template>
  <div class="userability">
    <van-grid :column-num="2">
      <van-grid-item icon="user-circle-o" text="账号设置" />
      <van-grid-item icon="revoke" text="退出登录" @click="logout('/home')"/>
    </van-grid>
  </div>
</template>

<script>
export default{
  name:'userability',
  methods:{
    logout(url){
      localStorage.removeItem('NOW');
      this.$router.push(url)
    }
  }
}
</script>