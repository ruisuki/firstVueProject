<template>
  <div class="loginPage" v-cloak>
    <logincomp></logincomp>
    <userability></userability>
  </div>
</template>

<script>

import logincomp from '@/components/logincomp.vue';
import userability from '@/components/userability.vue'

export default {
  components: {
    logincomp,
    userability
  }
}
</script>
