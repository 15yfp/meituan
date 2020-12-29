<template>
  <div>
      <router-view></router-view>
       <van-tabbar v-model="active">
        <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="browsing-history-o" to="/found">发现</van-tabbar-item>
        <van-tabbar-item icon="more-o" to="/message">消息</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/info">我的</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="scss">
  .van-tabbar {
    background: #faab0c;
  }
  .van-tabbar-item {
    color: #5d5d5d;
  }
  .van-tabbar-item--active {
    background: #faab0c;
    color: #fff;
  }
</style>
