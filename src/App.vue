<template>
  <div id="app" v-cloak>
    <concentrate v-show="allShow"></concentrate>
    <loginpage v-show="!allShow"></loginpage>
  </div>
</template>

<style scoped>
@import url(./css/index.css);

#app {
  height: 56.25rem;
}
</style>

<script>
import concentrate from './views/concentrate.vue'
import loginpage from './views/loginpage.vue';

export default{
  components:{
    concentrate,
    loginpage
  },

  data() {
    return {
      allShow:true
    }
  },

  watch:{
    '$route'(to){
      if(to.path === '/loginpage'){
        this.allShow = !this.allShow
      }else{
        this.allShow = true
      }
    }
  }
}

</script>
