<template>
  <div id="app">
    <Navbar/>
    <Header class="header"/>
    <div class="content">
      <Heading>{{this.$route.name}}</Heading>
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Heading from '@/components/Heading';

export default {
  components: {
    Navbar,
    Header,
    Heading
  }
};
</script>

<style lang="scss">
$scrollbar-width: 20px;

html {
  background-color: $background;

  &::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: lighten($background, 5%);
  }

  &::-webkit-scrollbar
  {
    width: $scrollbar-width;
    background-color: lighten($background, 5%);
  }

  &::-webkit-scrollbar-thumb
  {
    border-radius: $scrollbar-width / 2;
    background-image: -webkit-gradient(linear,
                                       left bottom,
                                       left top,
                                       color-stop(0.15, $dark),
                                       color-stop(0.85, $light));
  }

  overflow-y: scroll;
}

.header {
  margin-top: 113px;
}
.content {
  max-width: 1200px;
  width: 80%;
  margin: auto;
  position: relative;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
