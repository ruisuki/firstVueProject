<template>
  <div class="registercomp">
    
    <van-nav-bar title="" left-text="返回" @click-left="onClickLeft" left-arrow></van-nav-bar>

    <van-form @submit="onSubmit">
      <van-field v-model="info.username" name="用户名" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="info.userID" name="用户手机号" label="用户手机号" placeholder="用户手机号"
        :rules="[{ required: true, message: '请填写手机号' }]" />
      <van-field v-model="info.password" type="password" name="密码" label="密码" placeholder="密码"
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
      info: {
        username: '',
        userID: '',
        password: '',
        review: [],
        noreview: [],
        all: [],
      }

    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
      console.log(this.info);

      let userInfo = localStorage.getItem('userInfo')

      if (userInfo) {
        userInfo = JSON.parse(userInfo)
      } else {
        userInfo = []
      }

      let inpUser = { ...this.info }
      userInfo.push(inpUser)

      localStorage.setItem('userInfo',JSON.stringify(userInfo))
      this.$notify({
        type:'success',
        message:'注册成功',
        duration:3000
      })
      this.$router.go(-1)
    },

    onClickLeft() {
      this.$router.go(-1)
    }
  },

}
</script>