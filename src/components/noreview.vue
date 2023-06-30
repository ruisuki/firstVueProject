<template>
  <div class="colletWorks-list">
    <br>
    <br>
    <br>

    <!-- 不再复习 -->

    <ul>
      <li v-for="(item, index) in works" :key="index" v-long-press="() => toReview(item, index)" @click="getVal('resultpage', item)">
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
      works: [],
    }
  },
  created() {
    this.checkLoginUser();

  },
  methods: {

    checkLoginUser() {
      const loggedInUser = localStorage.getItem('NOW');
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));

      if (loggedInUser) {
        const userID = JSON.parse(loggedInUser);

        // 遍历用户列表，查找与登录用户相匹配的userID
        const user = userInfo.find(user => user.userID === userID);

        if (user) {

          this.works = user.noreview;

          console.log('Logged in user:', user.username);
        } else {
          console.log('Invalid user!');
        }
      } else {
        console.log('No logged in user found!');
      }
    },

    toReview(item, index) {
      // 找到当前登录用户的数据
      const loggedInUserID = localStorage.getItem('NOW').split('"')[1];
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      const user = userInfo.find(user => user.userID === loggedInUserID);

      if (user) {
        // 将被长按的单词添加到当前登录用户的 noreview 数组中
        user.review.push(item);

        this.works.splice(index,1)

        user.noreview.splice(index, 1);
        // 更新 localStorage 中的用户数据
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
      }
    },

    async getVal(name, item) {
      try {
        const res = await getValrequest({
          q: item,
          num: 1,
          doctype: 'json'
        });
        this.resultData = res.data,
          console.log('返回结果成功', res);

        let getResult = this.resultData;
        console.log("结果为", getResult);
        if (this.resultData.result.code == 404) {

          this.$router.push('/notfound');

        } else {

          this.$router.push({ name: name, params: { data: getResult } });

        }
      } catch (err) {
        console.log('返回结果失败', err);
      }
    },

  }
}



</script>
<style scoped>
.colletWorks-list li {
  height: 18px;
  /* border-top: .0625rem solid rgba(211, 211, 211, 0.5); */
  border-bottom: .0625rem solid rgba(211, 211, 211, 0.5);

  /* border: .0625rem solid #000; */
  /* background-color: cyan; */
  padding: 10px;
}
</style>