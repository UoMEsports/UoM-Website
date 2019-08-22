<template>
  <div class="event">
    <div class="image">
      <slot name="image"></slot>
    </div>
    <div class="info">
      <p><slot></slot></p>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.event {
  padding-bottom: 20px;
}
.image {
  img {
    width: 763px;
  }
}
.info {
  font-size: 24px;
}
</style>
