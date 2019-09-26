<template>
  <div class="heading-container uom-font" :class="{centered: align === 'center'}">
    <div class="heading">
      <h1 class="text"><slot></slot></h1>
      <hr class="underline">
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'align'
  ]
};
</script>

<style lang="scss" scoped>
.heading-container {
  width: 100%;
  text-align: left;
  padding-bottom: 35px;

  &.centered {
    text-align: center;

    .heading .underline {
      width: 100%;
    }
  }

  .heading {
    display: inline-block;

    .text {
      color: black;
      font-size: 50px;
      text-align: left;
      margin-bottom: 0;

      @media only screen and (max-width: 1000px) {
        font-size: 35px;
      }
    }

    .underline {
      border-top: 3px solid $dark;
      width: calc(100% + 80px);
    }
  }
}
</style>
