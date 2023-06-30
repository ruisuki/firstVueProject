<template>
  <div class="resultpage" v-long-press="toReview">
    <van-nav-bar class="custom-nav-bar" title="" @click-left="onClickLeft" left-arrow
      style="background-color: #1D82D4;"></van-nav-bar>
    <div class="title">

      <p>{{ resultJSON.data.query }}</p>

    </div>

    <div class="detail">
      <span>长按页面添加到复习列表</span>
      <ul>
        <li v-for="item in resultJSON.data.entries">
          <span>◎{{ item.entry }}</span>
          <br>
          <span>{{ item.explain }}</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>



export default {
  beforeRouteEnter(to, from, next) {
  // 在进入组件之前执行登录验证逻辑

  const loggedInUser = localStorage.getItem('NOW');
  if (!loggedInUser) {
    // 用户未登录，中止路由导航或跳转到登录页面
   

    next('/loginpage'); // 中止路由导航
    // 或者跳转到登录页面
    // next('/login'); // 假设登录页面的路由路径是 '/login'
  } else {
    // 用户已登录，继续路由导航
    next();
  }
},

  directives: {
    'long-press': {
      bind(el, binding) {
        let pressTimer = null;

        const start = (e) => {
          if (e.type === 'click' && e.button !== 0) {
            return;
          }

          if (pressTimer === null) {
            pressTimer = setTimeout(() => {
              binding.value();
            }, 500);
          }
        };

        const cancel = () => {
          if (pressTimer !== null) {
            clearTimeout(pressTimer);
            pressTimer = null;
          }
        };

        el.addEventListener('mousedown', start);
        el.addEventListener('touchstart', start);

        el.addEventListener('click', cancel);
        el.addEventListener('mouseout', cancel);
        el.addEventListener('touchend', cancel);
        el.addEventListener('touchcancel', cancel);
      },
    },
  },


  data() {
    return {

      resultJSON: null,

      userInfo: null,

    }
  },


  created() {
    this.resultJSON = this.$route.params.data

    const userInfoData = localStorage.getItem('userInfo');

    if (userInfoData) {
      this.userInfo = JSON.parse(userInfoData);
    } else {
      // 处理用户数据未找到的情况
      console.log('用户数据未找到');
    }
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },

    toReview() {
      // 找到当前登录用户的数据
      const loggedInUserID = localStorage.getItem('NOW').split('"')[1]
      console.log(this.userInfo);
      console.log(loggedInUserID);
      const loggedInUser = this.userInfo.find(user => user.userID === loggedInUserID);
      console.log(loggedInUser);

      if (loggedInUser) {
        loggedInUser.review = loggedInUser.review || []; // 确保 review 数组存在
        loggedInUser.all = loggedInUser.all || [];
        // 检查 review 数组中是否已经存在该值
        if (!loggedInUser.all.includes(this.resultJSON.data.query)) {
          loggedInUser.review.push(this.resultJSON.data.query);
          loggedInUser.all.push(this.resultJSON.data.query);
          this.$notify({
            type: 'success',
            message: '添加成功',
            duration: 2000
          })
        } else {
          this.$notify({
            type: 'warning',
            message: '该词已存在',
            duration: 2000
          })
        }

        // 更新 localStorage 中的用户数据
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
        console.log(this.userInfo);
      } else {
        console.log("当前登录用户不存在");
      }
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
  font-size: 3.75rem;
}

.detail ul li {
  margin: 0.625rem 1rem;

}

.detail ul li span {
  height: 1.5625rem;
  line-height: 1.5625rem;
  font-size: 1.25rem;

}
</style>