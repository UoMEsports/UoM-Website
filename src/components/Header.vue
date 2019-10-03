<template>
  <div class="header">
    <div class="banner-container">
      <img class="banner" src="@/assets/banner.jpg">
    </div>
    <img class="header-logo" src="@/assets/header-logo.png">
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: -101;
  margin-top: 113px;

  @media only screen and (max-width: 850px) {
    margin-top: 0;
  }

  * {
    user-select: none;
  }

  .banner-container {
    background-color: #321545;
    overflow: hidden;
    z-index: -100;
    max-height: 50vh;

    .banner {
      display: block;
      z-index: -50;
      position: static;
      width: 100%;
      min-height: 100%;

      @media only screen and (max-width: 850px) {
        width: 120%;
        margin-left: -20%;
      }
    }
  }

  .header-logo {
    position: absolute;
    height: 90%;
    top: 5%;
    right: 5%;
  }
}

</style>
