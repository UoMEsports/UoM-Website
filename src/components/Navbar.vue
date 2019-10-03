<template>
  <div class="container">
    <div class="events">
      <a target="_blank" href="https://lan.uomesports.co.uk"><img src="@/assets/lan-logo.png"></a>
      <a target="_blank" href="https://kotn.uomesports.co.uk"><img src="@/assets/kotn-logo.png"></a>
      <a target="_blank" href="https://hiveaid.uomesports.co.uk"><img src="@/assets/hiveaid-logo.png"></a>
    </div>
    <div class="socials">
      <a target="_blank" href="https://discord.gg/uomesports"><img src="@/assets/discord-logo.svg"></a>
      <a target="_blank" href="https://www.facebook.com/groups/uomesports"><img src="@/assets/facebook.png"></a>
      <a target="_blank" href="https://twitch.tv/uomesports"><img src="@/assets/twitch.png"></a>
      <a target="_blank" href="https://twitter.com/uomesports"><img src="@/assets/twitter-small.png"></a>
      <a target="_blank" href="https://instagram.com/uomesports"><img src="@/assets/instagram.png"></a>
    </div>
    <div id="nav" ref="nav" class="uom-font">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/events">Events</router-link>
      <router-link class="nav-link" to="/committee">Committee</router-link>
      <router-link class="nav-link" to="/contact">Contact</router-link>
      <!--<router-link class="nav-link" to="/about">About</router-link>-->
    </div>
    <div id="mobile-nav">
      <router-link class="nav-link" to="/"><font-awesome-icon class="fas" icon="home"/></router-link>
      <router-link class="nav-link" to="/events"><font-awesome-icon class="fas" icon="trophy"/></router-link>
      <router-link class="nav-link" to="/committee"><font-awesome-icon class="fas" icon="user-friends"/></router-link>
      <router-link class="nav-link" to="/contact"><font-awesome-icon class="fas" icon="envelope-open-text"/></router-link>
      <!--<router-link class="nav-link" to="/about"><font-awesome-icon class="fas" icon="question-circle"/></router-link>-->
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
  }
};
</script>

<style lang="scss" scoped>
.events {
  position: fixed;
  top: 0;
  left: 0;

  margin: 40px 0;

  z-index: 500;

  a {
    margin-left: 20px;
  }

  img {
    height: 35px;
  }
}

.socials {
  position: fixed;
  top: 0;
  right: 0;

  margin: 40px 0;

  z-index: 500;

  a {
    margin-right: 20px;
  }

  img {
    height: 35px;
  }
}

#nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 0;
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
    margin: 0 15px;
    font-size: 40px;
  }
}

#mobile-nav {
  display: none;

  background-color: white;

  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  padding: 15px 0;
  justify-content: space-around;

  border-top: 2px solid $dark;

  a {
    color: #2c3e50;
    &.router-link-exact-active {
      color: $dark;
      text-decoration: underline;
    }
  }

  .nav-link {
    font-size: 34px;
  }
}

@media only screen and (max-width: 850px) {
  #nav {
    display: none;
  }
  #mobile-nav {
    display: flex;
  }
}

@media only screen and (max-width: 1250px) {
  .events, .socials {
    display: none;
  }
}
</style>
