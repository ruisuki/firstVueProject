<template>
  <div class="colletWorks-list">
    <br>
    <p>共计 {{ works.length }} 个词</p>
    <br>

    <!-- 生词列表 -->

    <ul>
      <li v-for="(item, index) in works" :key="index" @click="getVal('resultpage', item)"
        v-long-press="() => tonoReview(item, index)">
        <span>{{ item }}</span>
      </li>
    </ul>

    
  </div>
</template>

<script>
import { getValrequest } from '../http/api.js'
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
      userInfo: null,
      resultData: '',
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

          this.works = user.review;

          console.log('Logged in user:', user.username);
        } else {
          console.log('Invalid user!');
        }
      } else {
        console.log('No logged in user found!');
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

    tonoReview(item, index) {
      // 找到当前登录用户的数据
      const loggedInUserID = localStorage.getItem('NOW').split('"')[1];
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      const user = userInfo.find(user => user.userID === loggedInUserID);

      if (user) {
        // 将被长按的单词添加到当前登录用户的 noreview 数组中
        user.noreview.push(item);

        this.works.splice(index,1)

        user.review.splice(index, 1);
        // 更新 localStorage 中的用户数据
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
      }
    },
  }
}


</script>
<style scoped>
.colletWorks-list li {
  height: 1.125rem;
  /* border-top: 1px solid rgba(211, 211, 211, 0.5); */
  border-bottom: 1px solid rgba(211, 211, 211, 0.5);

  /* border: 1px solid #000; */
  /* background-color: cyan; */
  padding: 0.625rem;
}
</style>