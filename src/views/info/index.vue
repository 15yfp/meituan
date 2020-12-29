<template>
  <div class="home">
      <div>个人信息</div>
      <svgIcon icon-class="search" className="searchSvg"></svgIcon>
  </div>
</template>

<script>

import Vue from 'vue'
import { Button } from 'vant';
Vue.component(Button.name, Button);
export default {}

</script>

<style lang="scss">
.home {
  font-size: 20px;
  color: red;
  h1 {
    color: yellow;
  }
  .searchSvg {
    color: red;
  }
}

</style>
