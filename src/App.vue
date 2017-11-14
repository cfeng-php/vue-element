<template>
  <div id="app">

    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <el-container>
      <!-- 顶栏容器 START -->
      <el-header>
        <el-row :gutter="10">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">LOGO</div></el-col>
          <el-col :xs="4" :sm="12" :md="16" :lg="18" :xl="22"><div class="grid-content bg-purple-light">TITLE</div></el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">SET</div></el-col>
        </el-row>
      </el-header>
      <!-- 顶栏容器 END -->

      <!-- 主要区域容器 start -->
      <el-main>
        <router-view/>
      </el-main>
      <!-- 主要区域容器 end -->
    </el-container>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
}
body{
  padding:0px;
  margin:0px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height:36px;
}
</style>
