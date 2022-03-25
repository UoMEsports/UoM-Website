<template>
  <div id="app">
    <Navbar/>
    <Header/>
    <div class="content-container">
      <Heading class="page-heading">{{this.$route.name}}</Heading>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';
import Heading from '@/components/Heading.vue';

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

.page-heading {
  @media only screen and (min-width: 1001px) {
    display: none;
  }
}
.content-container {
  max-width: 1200px;
  width: 80%;
  margin: auto;
  position: relative;

  @media only screen and (max-width: 1000px) {
    margin-bottom: 72px;
  }

  @media only screen and (min-width: 1001px) {
    margin-top: 45px;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
