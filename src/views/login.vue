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
  beforeRouteEnter(to, from, next) {
    const loggedInUser = localStorage.getItem('NOW');
    next(vm => {
      vm.isShow = !!loggedInUser;
    });
  },



  created() {
    this.checkNOW()
  },

  methods: {
    checkNOW() {
      const loggedInUser = localStorage.getItem('NOW');
      if (!loggedInUser) {
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  },


}
</script>
