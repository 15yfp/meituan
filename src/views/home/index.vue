<template>
  <div class="home">
      <van-nav-bar
        title="首页"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <svgIcon icon-class="search" className="searchSvg"></svgIcon>
        </template>
      </van-nav-bar>
  </div>
</template>

<script>

import Vue from 'vue';
import { NavBar } from 'vant';
Vue.use(NavBar);
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push('/search');
    }
  }
}

</script>

<style lang="scss">
.home {
  font-size: 20px;
  color: red;
  .van-nav-bar {
    background: #faab0c;
    .van-icon {
      color: #5d5d5d;
    }
  }
  .searchSvg {
    fill: #5d5d5d;
    width: 2.933333rem;
    height: 933333rem;
  }
}

</style>
