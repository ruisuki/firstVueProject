<template>
  <div id="app">




    <!-- <transition name="fadeLR" mode="out-in"> -->

    <concentrate v-if="active == 1 ? true : false" v-cloak></concentrate>

    <resultpage v-if="active == 3 ? true : false" v-cloak></resultpage>

    <notfound v-if="active == 4 ? true : false" v-cloak></notfound>

    <loginpage v-if="active == 2 ? true : false" v-cloak></loginpage>

    <register v-if="active == 5 ? true : false"></register>
    <!-- </transition> -->


  </div>
</template>

<style scoped>
@import url(./css/index.css);

#app {
  height: auto;
  overflow: hidden;
}

.fadeLR-enter {
  transform: translateX(100%);
}

.fadeLR-enter-active {
  transition: transform 0.5s;
}

.fadeLR-enter-to {
  transform: translateX(0);
}


.fadeLR-leave {
  transform: translateX(0);
}

.fadeLR-leave-active {
  transition: transform 0.5s;
}

.fadeLR-leave-to {
  transform: translateX(-100%);
}
</style>

<script>
import concentrate from './views/concentrate.vue'
import loginpage from './views/loginpage.vue';
import resultpage from './views/resultpage.vue';
import notfound from './views/notfound.vue';
import register from './views/register.vue';

export default {
  components: {
    concentrate,
    loginpage,
    resultpage,
    notfound,
    register
  },

  data() {
    return {
      active: 1,
      pos: ''
    }
  },

  watch: {
    '$route'(to) {
      if (to.path === '/home' || to.path === '/') {
        this.active = 1
        this.pos = 'fadeRL'
      } else if (to.path === '/loginpage') {
        this.active = 2
      } else if (to.path === '/resultpage') {
        this.active = 3
      } else if (to.path === '/notfound') {
        this.active = 4
      } else if (to.path === '/register') {
        this.active = 5
      } else {
        this.active = 1
      }

    }
  }
}

</script>

