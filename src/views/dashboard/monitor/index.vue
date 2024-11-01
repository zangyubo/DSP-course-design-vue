<template>
  <div class="container">
    <a-breadcrumb style="margin: 5px 0">
      <a-breadcrumb-item>
        <icon-check-circle />
      </a-breadcrumb-item>
      <a-breadcrumb-item>频谱分析</a-breadcrumb-item>
      <a-breadcrumb-item>频谱图</a-breadcrumb-item>
    </a-breadcrumb>
    <div style="background-color: red, width= 100%, height= 100%"></div>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: 'Monitor',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
    margin-bottom: 20px;
  }
</style>

<!--<style lang="less" scoped>
  // responsive
  @media (max-width: @screen-lg) {
    .layout {
      flex-wrap: wrap;
      &-left-side {
        flex: 1;
        flex-basis: 100%;
        margin-bottom: 16px;
      }

      &-content {
        flex: none;
        flex-basis: 100%;
        padding: 0;
        order: -1;
        margin-bottom: 16px;
      }

      &-right-side {
        flex-basis: 100%;
      }
    }
  }
</style>
-->
