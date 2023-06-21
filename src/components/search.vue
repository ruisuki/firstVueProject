<template>
  <div>
    <van-search v-model="msg" placeholder="请输入搜索关键字并回车" @keydown.enter="getVal" />
    <p>{{ coderesult }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

import { getValrequest } from '../http/api.js'
import { URL_KEY } from '../http/address.js'

export default {


  name: 'searchcomp',
  data() {
    return {
      msg: null,
      coderesult: '',
    }
  },


  computed: {

  },

  methods: {
    async getVal() {
      if (this.msg == '') {
        alert('不可为空')
        return this.msg = ''
      } else {
        //按照API的要求将汉字转码为Uriencode
        let chineseCharacter = this.msg
        this.coderesult = chineseCharacter
      }




      await getValrequest({
        word: `${this.coderesult}`,
        dtype: '',
        key: URL_KEY
      })
        .then(
          res => {
            console.log('返回结果成功', res)
          }
        )
        .catch(
          err => {
            console.log('返回结果失败', err)
          }
        )
    },

  },


}
</script>

<style scoped></style>