<template>
  <div class="spectrogram-container">
    <a-breadcrumb style="margin: 5px 0">
      <a-breadcrumb-item>
        <icon-check-circle />
      </a-breadcrumb-item>
      <a-breadcrumb-item>频谱分析</a-breadcrumb-item>
      <a-breadcrumb-item>频谱图</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="spectrogram-container-echarts">
      <div class="pectrogram-container-echarts-3d"></div>
      <div class="pectrogram-container-echarts-else"></div>
    </div>
    <div class="spectrogram-container-function"> </div>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: 'Monitor',
  };
</script>

<style scoped lang="less">
  .spectrogram-container {
    padding: 0 10px 0px 10px;
    // margin-bottom: 20px;
    background-color: red;
    height: 86vh;
    display: flex;
    flex-direction: column;
  }

  .spectrogram-container-echarts {
    flex: 3;
    background-color: blueviolet;
    display: flex;
    flex-direction: row;

    .pectrogram-container-echarts-3d {
      flex: 4;
      background-color: chartreuse;
    }

    .pectrogram-container-echarts-else {
      flex: 2;
      background-color: blue;
    }
  }

  .spectrogram-container-function {
    flex: 1;
    background-color: aqua;
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
