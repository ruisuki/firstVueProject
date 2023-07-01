<template>
  <div>
    <van-search v-model="msg" placeholder="请输入需要查询的英语单词" @keydown.enter="getVal('resultpage')" />
    <div class="history">
    </div>
    <van-button round block type="info" native-type="submit" @click="getVal('resultpage')" class="btn">查询</van-button>
    <div class="news">
      <h3>今日外语阅读</h3>
      <ul>
        <li v-for="(item, index) in newsData.slice(0, visibleItems)" :key="index">
          <div class="titleInfo" :style="{ 'background-image': 'url(' + item.urlToImage + ')' }">
            <div class="mask"></div>
            <span class="title">{{ item.title }}</span>
          </div>
          <p class="des">{{ item.description }}</p>
        </li>
      </ul>
    </div>
    <div class="load"><span @click="loadMore">点击加载更多</span></div>
  </div>
</template>

<script>
// @ is an alias to /src

import { getValrequest } from '../http/api.js'
import { URL_KEY } from '../http/address.js'

import { getEngNews } from '../http/api.js'
import { eng_URL_KEY } from '../http/address.js'

import { wordData } from '@/http/wordDate.js'

export default {

  name: 'searchcomp',
  data() {
    return {
      msg: '',
      coderesult: '',
      resultData: '',
      nowDate: '',
      passDate: '',
      newsData: wordData,
      visibleItems: 10,
    }
  },
  created() {
    this.nowDate = this.getNowDate()
    console.log(this.nowDate);
    this.passDate = this.getPassDate()
    console.log(this.passDate);
    // this.getEngNews()
  },



  methods: {
    // async getVal(name) {
    //   if (this.msg == '') {
    //     alert('不可为空')
    //     return this.msg = ''
    //   } else {
    //     let character = this.msg
    //     this.coderesult = character
    //   }

    //   await getValrequest({
    //     q: `${this.coderesult}`,
    //     num: 1,
    //     doctype:'json'
    //   })
    //     .then(
    //       res => {
    //         this.resultData = res.data.result
    //         console.log('返回结果成功',res)


    //         let getResult = this.resultData
    //         console.log("结果为", getResult);
    //         this.$router.push({ name: name, params: { data: getResult } })

    //       }
    //     )
    //     .catch(
    //       err => {
    //         console.log('返回结果失败', err)
    //       }
    //     )
    //   // let getResult = this.resultData
    //   // this.$router.push({ name: name, params: { data: getResult } })

    // },

    async getVal(name) {
      if (this.msg === '') {
        this.$notify({
            type: 'danger',
            message: '不可为空',
            duration: 2000
          })
        return this.msg = '';
      } else {
        let character = this.msg;
        this.coderesult = character;
      }

      try {
        const res = await getValrequest({
          q: `${this.coderesult}`,
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

    getNowDate() {
      let nowYear = new Date().getFullYear()
      let nowMon = new Date().getMonth() + 1
      let nowDay = new Date().getDate() - 2

      nowMon = nowMon < 10 ? "0" + nowMon : nowMon
      nowDay = nowDay < 10 ? "0" + nowDay : nowDay
      return `${nowYear}-${nowMon}-${nowDay}`
    },

    getPassDate() {
      let passDate = new Date();
      passDate.setDate(passDate.getDate() - 7);

      let passYear = passDate.getFullYear();
      let passMon = passDate.getMonth() + 1;
      if (passMon < 10) {
        passMon = '0' + passMon
      }
      let passDay = passDate.getDate() - 1;


      // 检查是否减去7天后是上一年
      if (passDate.getFullYear() !== passYear) {
        passYear = passDate.getFullYear();
      }

      // 检查是否减去7天后不是当前月
      if (passDate.getMonth() + 1 !== passMon) {
        passMon = passDate.getMonth() + 1;
      }

      passMon = passMon < 10 ? "0" + passMon : passMon
      passDay = passDay < 10 ? "0" + passDay : passDay

      // 格式化日期
      return `${passYear}-${passMon}-${passDay}`;
    },

    async getEngNews() {
      try {
        const res = await getEngNews({
          q: 'techcrunch',
          from: this.nowDate,
          sortBy: 'publishedAt',
          language: 'en',
          apiKey: eng_URL_KEY
        });
        this.newsData = res.data.articles
        console.log('返回结果成功', this.newsData);
      } catch (err) {
        console.log('返回结果失败', err);
      }
    },

    loadMore() {

      this.visibleItems += 10; // 增加可见条目的数量
    }

  },

}


</script>

<style scoped>
.history {
  height: 0.7rem;
}

.news {
  width: 100%;
  height: auto;
  padding: 0.625rem;
}

.news h3 {
  margin-bottom: .9375rem;
}

.news ul li {
  width: 22.1875rem;
  height: 17.5rem;
  /* background-color: cyan; */
  margin-bottom: .9375rem;
  border-radius: .3125rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0.1875rem 0.1875rem 0.3125rem #ccc;
}

.news ul li .des {
  height: 2.5rem;
  overflow: hidden;
  padding: .625rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.titleInfo {
  height: 14rem;
  background-size: cover;
  background-position-x: 0rem;
  position: relative;
  padding-left: .625rem;
}

.titleInfo .mask::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  /* 设置遮罩层的颜色和透明度 */
}

.titleInfo span {
  color: white;
  position: absolute;
  bottom: .625rem;
  font-size: 1.25rem;
}

.title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

.load {
  height: 6.25rem;
  width: 100%;
  text-align: center;
}
</style>