<template>
  <div class="logincomp">
    <van-nav-bar title="" left-text="返回"  @click-left="onClickLeft('/login')" left-arrow></van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {

    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
      },

      onClickLeft(url){
        this.$router.push(url)
      }
    },
 
}
</script>

<style scoped>
.logincomp{
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>