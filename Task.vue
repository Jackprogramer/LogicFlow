<template>
  <div class="container" >
    <div class="textContainer">
      <span class="iconfont icon-renyuanguanli" style="font-size: 20px" />
      {{nodeName}}
    </div>    
  </div>
</template>

<script>

export default {
  name: "task",
  props: {
    nodeName: null,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  margin: auto;
  border: 1px solid #909399;
  border-radius: 4px;
  font-weight: 500;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  color: #f0f9eb;
  background: #909399;
}
.textContainer {
  display: inline-block;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>