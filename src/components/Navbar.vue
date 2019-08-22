<template>
  <div id="nav" ref="nav" class="uom-font">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/events">Events</router-link>
    <router-link class="nav-link" to="/socials">Socials</router-link>
    <router-link class="nav-link" to="/committee">Committee</router-link>
    <router-link class="nav-link" to="/contact">Contact</router-link>
    <router-link class="nav-link" to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  mounted () {
  }
};
</script>

<style lang="scss" scoped>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px;
  z-index: 100;

  background-color: white;
  border-bottom: 2px solid $dark;

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
    margin-right: 30px;
    font-size: 40px;
  }
}
</style>
