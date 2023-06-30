<template>
  <div id="colletWorks">

    <!-- 顶部样式 -->
    <van-nav-bar title="生词表" left-text="返回" @click-left="onClickLeft" left-arrow></van-nav-bar>

    <!-- 选项卡 -->
    <van-tabs @click="onClick" :color="'#1989fa'">
      <van-tab title="需复习"></van-tab>
      <van-tab title="不再复习"></van-tab>
    </van-tabs>

    <!-- 需复习 -->
    <transition :name="transitionName" mode="out-in">
    <worksreview v-if="active == 0 ? true : false"></worksreview>
    <!-- 不再复习 -->
    <noworksreview v-if="active == 1 ? true : false"></noworksreview>
    </transition>
  </div>
</template>

<script>

import worksreview from '@/components/reviewworks.vue'
import noworksreview from '@/components/noreview.vue'

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

  name: 'collect',
  data() {
    return {
      active: 0,
      pos:0,
    }
  },

  components: {
    worksreview,
    noworksreview
  },
  methods: {
    onClick(index) {
     if(index == 0 && this.active == 0){
      this.pos = index
      return
     }else if(index == 1 && this.active == 0){
      this.pos = index
      this.active = 1
     }else if(index == 1 && this.active == 1){
      return
     }else{
      this.active = 0
     }
    },

    onClickLeft() {
      this.$router.push('/home')
    },

  },
  computed:{
    transitionName() {
       if(this.active < this.pos){
        return 'fadeLR'
       }else if(this.active == this.pos){
        return 'fadeRL'
       }else{
        return ''
       }
    },
  }
}

</script>

<style scoped>
/* 从左到右 */
.all {
  overflow: hidden;
}

.fadeLR-enter {
  transform: translateX(-375px)
}

.fadeLR-enter-active {
  transition: all 0.2s;
}

.fadeLR-enter-to {
  transform: translateX(0px);
}

.fadeLR-leave {
  transform: translate(0px);
}

.fadeLR-leave-active {
  transition: all 0.4s;
}

.fadeLR-leave-to {
  transform: translate(375px);
}


/* 从右到左 */

.fadeRL-enter {
  transform: translateX(375px)
}

.fadeRL-enter-active {
  transition: all 0.2s;
}

.fadeRL-enter-to {
  transform: translateX(0px);
}

.fadeRL-leave {
  transform: translate(0px);
}

.fadeRL-leave-active {
  transition: all 0.4s;
}

.fadeRL-leave-to {
  transform: translate(-375px);
}
</style>