<template>
  <div class="loginOrreg" @click="userLogin('/loginpage')">

    <div class="userInfo" to="/login/loginpage">

      <div class="userIcon">
        <van-image round width="100px" height="100px" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <p v-if="!isShow">点击登录</p>
      <p v-if="isShow">{{ username }}</p>
    </div>



  </div>
</template>


<script>

export default {
  name: 'logincomp',

  data() {
    return {
      userInfo: null,
      isShow: false,
      username: '',

    }
  },

  created() {
    const loggedInUser = localStorage.getItem('NOW');
    if (loggedInUser) {
      const loggedInUserID = localStorage.getItem('NOW').split('"')[1];

      if (loggedInUserID !== null && loggedInUserID !== undefined) {
        const userInfoData = localStorage.getItem('userInfo');

        if (userInfoData) {
          this.userInfo = JSON.parse(userInfoData);

          const loggedInUser = this.userInfo.find(user => user.userID === loggedInUserID);


          if (loggedInUser) {
            this.isShow = true;
            this.username = loggedInUser.username;
          } else {
            console.log("当前登录用户不存在");
          }
        } else {
          console.log('用户数据未找到');
        }
      } else {
        console.log('NOW 数据未找到');
      }
    }
  },

  methods: {
    userLogin(url) {
      this.$router.push({
        path: url,
      })
    },
  },
}
</script>





<style scoped>
.loginOrreg {
  height: 200px;
  width: 100%;
  background-color: #1989fa;

}



.userInfo {
  width: 102px;
  /* height: 203px; */
  margin: 0 auto;
  padding-top: 40px;
}

.loginOrreg .userIcon {
  width: 100px;
  height: 100px;
  background-size: 100px;
  border-radius: 50%;
}

.userInfo p {
  display: block;
  text-align: center;
  color: white;
}
</style>

