<template>
  <div class="loginPage" v-cloak>
    <logincomp></logincomp>
    <userability v-if="isShow"></userability>
  </div>
</template>

<script>

import logincomp from '@/components/logincomp.vue';
import userability from '@/components/userability.vue'

export default {
  components: {
    logincomp,
    userability
  },
  data() {
    return {
      isShow: false
    }
  },


  created() {
    const loggedInUser = localStorage.getItem('NOW');
    if (!loggedInUser) {
      this.isShow = false
    } else {
      this.isShow = true
    }
  }
}
</script>
