<template>
  <div class="loginOrreg" @click="userLogin('/loginpage')"> 

    <div class="userInfo" to="/login/loginpage">

      <div class="userIcon">
        <!-- <img :src=""> -->
      </div>
      <p>点击登录</p>
    </div>
  </div>

  
</template>


<style scoped>
.loginOrreg {
  height: 12.5rem;
  width: 100%;
  
}

.userInfo {
  width: 6.375rem;
  /* height: 12.6875rem; */
  margin: 0 auto;
  padding-top: 2.5rem;
}

.loginOrreg .userIcon {
  width: 6.25rem;
  height: 6.25rem;
  background: url(../assets/userIcon.png) no-repeat;
  background-size: 6.25rem;
  border-radius: 50%;
}

.userInfo p {
  display: block;
  text-align: center;
}
</style>


<script>
export default {
  name: 'logincomp',
  methods: {
    userLogin(url) {
      this.$router.push({
        path: url,
      })
    }
  },
}
</script>