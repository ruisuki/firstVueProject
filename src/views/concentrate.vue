<template>
  <div class="all">

    <!-- 路由出口 -->
    <router-view />

    <!-- 导航栏 -->
    <van-tabbar v-model="active" v-cloak>
      <van-tabbar-item @click="jumpHome('/home')">
        <span>主页</span>
        <template #icon="props">
          <img :src="props.active ? icon.homeactive : icon.homeinactive" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item @click="jumpHome('/collect')">
        <span>生字本</span>
        <template #icon="props">
          <img :src="props.active ? icon.worksactive : icon.worksinactive" />

        </template>
      </van-tabbar-item>

      <van-tabbar-item @click="jumpHome('/paper')">
        <span>文章</span>
        <template #icon="props">
          <img :src="props.active ? icon.collectactive : icon.collectinactive" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item @click="jumpHome('/login')">
        <span>登陆</span>
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

    }
  },

  watch: {
    //该方法为底部导航栏侦听路由并给active赋值
    
    '$route'(to) {
      if (to.path === '/home' || to.path === '/') {
        this.active = 0
        console.log('跳转到home了');
      } else if (to.path === '/collect') {
        this.active = 1
      } else if (to.path === '/paper') {
        this.active = 2
      } else if (to.path === '/login') {
        this.active = 3
      }
    },
  },
  
  methods: {
    jumpHome(url) {
      this.$router.push({
        path: url,
      })
    }
  }
};


  
</script>