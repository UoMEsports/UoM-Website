<template>
  <div class="contact">
    <div class="primary">
      <img class="contact-image" src="@/assets/discord-banner-colour.svg" @click="openDiscord()">
      <h2>Our Discord is our main focus when communicating with our members.</h2>
      <h2></h2>
      <h2>Make sure you're in here to keep up with our latest events and discussions!</h2>
    </div>
    <img class="contact-image facebook" src="@/assets/facebook-banner.svg" @click="openFacebook()">
    <h2>We also have a facebook group where we post announcements and events.</h2>

    <h1 class="other-header uom-font">Other Contact Methods</h1>
    <div class="other">
      <div class="button"><a target="_blank" href="https://twitter.com/uomesports"><img src="@/assets/twitter.png"></a></div>
      <div class="button"><a target="_blank" href="https://twitch.tv/uomesports"><img src="@/assets/twitch.png"></a></div>
      <div class="button"><a target="_blank" href="https://instagram.com/uomesports"><img src="@/assets/instagram.png"></a></div>
    </div>
    <h1 class="email"><a href="mailto:info@uomesports.co.uk">info@uomesports.co.uk</a></h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      facebookGroup: process.env.VUE_APP_FACEBOOK_GROUP,
      discordInvite: process.env.VUE_APP_DISCORD_INVITE
    };
  },
  methods: {
    openDiscord () {
      window.open(this.discordInvite, '_blank');
    },
    openFacebook () {
      window.open(this.facebookGroup, '_blank');
    }
  }
};
</script>

<style lang="scss" scoped>
.contact {
  width: 600px;
  max-width: 100%;
  margin: auto;

  .header {
    margin-bottom: 0;
  }
  .underline {
    border-top: 3px solid $dark;
  }

  .primary {
    margin-bottom: 65px;

    .contact-image {
      margin-bottom: -30px;
      width: 100% !important;
    }
  }

  .contact-image {
    width: 80%;
    cursor: pointer;
  }

  .other-header {
    text-decoration: underline;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  .other {
    margin: auto;
    width: 300px;
    max-width: 100%;

    display: flex;
    justify-content: space-around;

    .button {
      flex-basis: 25%;

      img {
        max-width: 100%;
      }
    }
  }

  .email {
    margin-top: 0;
    margin-bottom: 50px;
  }
}
</style>
