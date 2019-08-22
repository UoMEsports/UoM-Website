<template>
  <div id="app">
    <Navbar/>
    <Header/>
    <div class="content">
      <Heading>{{this.$route.name}}</Heading>
      <router-view/>
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
  },
  data: () => {
    return {
      discord: null
    };
  },
  created () {
    this.discord = new Crate({
      server: '230727209202089984',
      channel: '479574193273438208',
      shard: 'http://admin.uomesports.co.uk:7000',
      color: '#6A2C91',
      notifications: true,
      indicator: true,
      defer: false
    });
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;

  font-family: serenity, sans-serif;
  font-style: normal;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: $dark;
      text-decoration: underline;
    }
  }

  .nav-link {
    margin-right: 20px;
    font-size: 40px;
  }
}
.content {
  max-width: 1200px;
  width: 80%;
  margin: auto;
  position: relative;
}
</style>
