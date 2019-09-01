<template>
  <div class="committee-member" :class="{right: index % 2}">
    <img :src="require('../assets/committee/' + member.img + '.jpg')" class="image" :class="{right: index % 2}">
    <div class="text" :class="{right: index % 2}">
      <h1 class="name">{{member.name}}</h1>
      <h2 class="title">{{member.title}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'side',
    'member',
    'index'
  ]
};
</script>

<style lang="scss" scoped>
.committee-member {
  padding: 10px;
  width: 100%;
  height: 250px;
  position: relative;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;

  > * {
    position: relative;
  }

  &.right {
    justify-content: right;
  }

  .image {
    height: 100%;
  }
  .text {
    margin: 0 25px;
    &.right {
      order: -1;
    }
  }
}

</style>
