<template>
<div class="searchWarp">
  <div class="searchHeader">
    <svgIcon icon-class="prev" className="prevIcon"></svgIcon>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      left-icon=""
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
  </div>
  <div class="hisoryRecord" v-if="list">
    暂无历史记录
  </div>
</div>
</template>

<script>

import Vue from 'vue';
import { Search } from 'vant';
Vue.use(Search);
export default {
  data() {
    return {
      value: '',
      list: [],
    }
  },
  methods: {
    onSearch () {
      console.warn('1111');
    },
    onCancel () {
      this.$router.go(-1);
    }
  }
}

</script>

<style lang="scss" scoped>
  .searchHeader {
    display: flex;
    align-items: center;
    padding: 0 15px;
    .prevIcon {
      width: 22px;
      height: 22px;
    }
    .van-search {
      flex: 1;
    }
    .van-search__content {
      border-radius: 8px;
    }
    .van-search__action {
      padding: 0 0 0 8px;
      font-size: 18px;
      color: #5d5d5d;
    }
  }
  .hisoryRecord {
    
  }
</style>
