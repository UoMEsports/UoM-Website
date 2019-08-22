<template>
  <div class="heading-container uom-font">
    <div class="heading">
      <h1 class="text"><slot></slot></h1>
      <hr class="underline">
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.heading-container {
  width: 100%;
  text-align: left;
  padding-bottom: 35px;
}

.heading {
  display: inline-block;
}

.text {
  color: black;
  font-size: 50px;
  text-align: left;
  margin-bottom: 0;
}

.underline {
  border-top: 3px solid $dark;
  width: calc(100% + 80px);
}
</style>
