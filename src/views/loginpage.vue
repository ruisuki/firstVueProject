<template>
  <div class="logincomp">
    <van-nav-bar title="" left-text="返回" @click-left="onClickLeft" left-arrow></van-nav-bar>

    <div class="logo" :style="{ 'background-image': 'url(' + LOGO + ')' }"></div>

    <van-form @submit="onSubmit">
      <van-field v-model="userID" name="用户手机号" label="用户手机号" :rules="[{ required: true, message: '请填写用户手机号' }]" />
      <van-field v-model="password" type="password" name="密码" label="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
      <van-button round block type="info" native-type="submit">登录</van-button>
    </van-form>

    <div style="margin: 16px;">
    </div>

    <router-link tag="span" to="/register"
      style="text-align: center; display: block; font-size: 14px; color: #8d8d8d;">注册</router-link>
  </div>
</template>

<script>
import logoimg from '@/assets/LOGO.jpg'
export default {


  data() {
    return {
      userID: '',
      password: '',
      LOGO: logoimg
    };
  },
  methods: {
    onSubmit() {
      let userInfo = localStorage.getItem('userInfo')

      console.log(userInfo);

      if (userInfo) {
        userInfo = JSON.parse(userInfo)
      }else{
        this.$router.push('/register')
      }
      for (let i = 0; i < userInfo.length; i++) {
        console.log(userInfo[i]);
        if (this.userID === userInfo[i].userID && this.password === userInfo[i].password) {
          this.$notify({
            type: 'success',
            message: '登录成功',
            duration: 3000
          })

          let now = userInfo[i].userID

          localStorage.setItem('NOW', JSON.stringify(now))
          setTimeout(() => {
            this.$router.push('/home')
          }, 2000)
          return
        }} 
          this.$notify({
            type: 'danger',
            message: '登陆失败',
            duration: 2000
          })
        },
        onClickLeft() {
          this.$router.go(-1)
        }
      },
    

  }


</script>

<style scoped>
.logincomp {
  position: fixed;
  width: 100%;
  height: 100%;

}

.logo {
  height: 18.75rem;
}

.userInfo {
  height: 9.375rem;
}
</style>




