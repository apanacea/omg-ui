<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="logo"/>
      <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['1']"
          :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1" @click="onSelect('films')">
          影片
        </a-menu-item>
        <a-menu-item key="2" @click="onSelect('performers')">
          演员
        </a-menu-item>
        <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">
          <a-icon type="setting"/> 后台管理 </span>
          <a-menu-item key="setting:1">
            影片管理
          </a-menu-item>
          <a-menu-item key="setting:2" @click="onSelect('performerManage')">
            演员管理
          </a-menu-item>
          <a-menu-item key="setting:3" @click="onSelect('tagManage')">
            标签管理
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 24px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>


<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      selectedKeys: ['1']
    }
  },
  methods: {
    onSelect(s) {
      this.$router.push(s)
    }
  }
}
</script>
