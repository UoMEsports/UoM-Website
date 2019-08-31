<template>
  <div class="header">
    <img class="banner" src="@/assets/banner.jpg">
    <img class="logo" src="@/assets/logo.png">
    <div class="text uom-font">
      <h2>University of Manchester</h2>
      <h1>Esports Society</h1>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 650px;
  width: 100%;
  overflow: hidden;
  color: white;

  * {
    user-select: none;
  }
}
.banner {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -50;
  height: 100%;
}

.logo {
  position: absolute;
  width: 500px;

  right: 5%;
  top: 5%;
}

.text {
  position: absolute;
  width: 500px;
  right: 5%;
  bottom: 0;

  color: white;

  h2 {
    font-size: 42px;
    margin-bottom: 0;
  }

  h1 {
    font-size: 68px;
    margin-top: -15px;
    margin-bottom: 20px;
  }
}

@media only screen and (max-width: 1720px) {
  .banner {
    left: auto;
    right: -1334px;
  }
}
@media only screen and (min-width: 1721px) {
  .header {
    height: calc(650px + 15vw - (0.15 * 1720px));
  }
}
</style>
