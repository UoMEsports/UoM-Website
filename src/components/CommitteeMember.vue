<template>
  <div class="committee-member-container">
    <hr class="line" v-show="index !== 0">
    <div class="committee-member" :class="{right: index % 2}">
      <img :src="member.img ? imgs[member.img] : imgs['def']" class="image" :class="{right: index % 2}">
      <div class="text" :class="{right: index % 2}">
        <h1 class="name">{{member.name}}</h1>
        <h2 class="title">{{member.title}}</h2>
        <!-- <h2 v-if="member.twitter" class="twitter"><a target="_blank" :href="'https://twitter.com/' + member.twitter">@{{member.twitter}}</a></h2> -->
      </div>
    </div>
  </div>
</template>

<script>
import * as committeeImgs from '../assets/committee'

export default {
  props: [
    'side',
    'member',
    'index'
  ],
  data() {
    return {
      imgs: committeeImgs.default
    }
  }
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

  @media only screen and (max-width: 650px) {
    display: block;
    height: auto;

    .image {
      margin-bottom: -25px;
    }

    .text {
      text-align: center !important;
    }
  }

  > * {
    position: relative;
  }

  &.right {
    justify-content: flex-end;
  }

  .image {
    width: 250px;
    flex-shrink: 0;
  }
  .text {
    margin: 0 25px;
    text-align: left;
    &.right {
      order: -1;
      text-align: right;
    }

    .twitter {
      margin-top: 0;
      a {
        color: #1da1f2;
      }
    }

    .title {
      margin-bottom: 10px;
    }
  }
}
.line {
  border: 0;
  height: 1px;
  //background: $dark;
  background-image: linear-gradient(to right, rgba($light, 0.2), $dark, rgba($light, 0.2));
}
</style>
