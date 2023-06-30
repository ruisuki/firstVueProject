<template>
  <div class="all">

    <!-- 路由出口 -->
    <transition :name="transitionName" mode="out-in">
      <keep-alive>

        <router-view />
      </keep-alive>
    </transition>

    <!-- 导航栏 -->
    <van-tabbar v-model="active" class="navBar">
      <van-tabbar-item @click="jumpHome('/home')">
        <span>主页</span>
        <template #icon="props">
          <img :src="props.active ? icon.homeactive : icon.homeinactive" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item @click="jumpHome('/collect')">
        <span>生词本</span>
        <template #icon="props">
          <img :src="props.active ? icon.worksactive : icon.worksinactive" />

        </template>
      </van-tabbar-item>

      <van-tabbar-item @click="jumpHome('/paper')">
        <span>翻译</span>
        <template #icon="props">
          <img :src="props.active ? icon.collectactive : icon.collectinactive" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item @click="jumpHome('/login')">
        <span>用户</span>
        <template #icon="props">
          <img :src="props.active ? icon.loginactive : icon.logininactive" />
        </template>
      </van-tabbar-item>

    </van-tabbar>



  </div>
</template>

<script>

import homeicon from '../assets/wap-home.png'
import homeactive from '../assets/wap-home-o.png'
import worksicon from '../assets/edit-o.png';
import worksactive from '../assets/edit.png'
import collecticon from '../assets/newspaper.png';
import collectactive from '../assets/newspaper-o.png'
import loginicon from '../assets/contact-o.png'
import loginactive from '../assets/contact.png'




export default {
  name: 'concentrate',
  data() {
    return {
      active: null,
      icon: {
        homeactive: homeicon,
        homeinactive: homeactive,
        collectactive: collecticon,
        collectinactive: collectactive,
        worksactive: worksicon,
        worksinactive: worksactive,
        loginactive: loginicon,
        logininactive: loginactive
      },
      futrueAct: 0,
      showNav: true,


    }
  },

  created() {
    this.handleRouteChange(this.$route)
  },


  watch: {
    //该方法为底部导航栏侦听路由并给active赋值
    '$route'(to) {
      this.handleRouteChange(to)
    },
  },

  methods: {
    jumpHome(url) {
      this.$router.push({
        path: url,
      })
    },

    handleRouteChange(to) {
      if (to.path === '/home' || to.path === '/') {
        this.active = 0;
      } else if (to.path === '/collect') {
        this.active = 1;
      } else if (to.path === '/paper') {
        this.active = 2;
      } else if (to.path === '/login') {
        this.active = 3;
      }
    },
  },
  computed: {
    transitionName() {
      if (this.active > this.futrueAct) {
        this.futrueAct = this.active
        return 'fadeRL'
      } else if (this.active < this.futrueAct) {
        this.futrueAct = this.active
        return 'fadeLR';
      } else {
        return '';
      }
    },
  }
};



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