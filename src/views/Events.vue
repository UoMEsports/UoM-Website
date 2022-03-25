<template>
  <div class="events">
    <Event>
      No upcoming events yet; check back later or join our <a target="_blank" href="https://discord.gg/uomesports">Discord</a> to follow out latest announcements!
    </Event>

    <!-- <Event>
      <template v-slot:image>
        <a href="https://lan.uomesports.co.uk" target="_blank"><img src="@/assets/lan.jpg"></a>
      </template>

      This is our latest addition to our event roster, and the first LAN of the year is just round the corner. Expect a whole day of PC gaming fun, either with your own machine or a borrowed ROG Laptop. Click <a href="https://lan.uomesports.co.uk">here</a> to learn more.
    </Event>
    <Event>
      <template v-slot:image>
        <a href="https://kotn.uomesports.co.uk" target="_blank"><img src="@/assets/kotn.jpg"></a>
      </template>

      King of the North is UoM Esports' biggest yearly event, with previous years playing host to up to 350 players, and attracting 600+ spectators in the audience, as well as hundreds of thousands of views on Twitch.
    </Event>
    <Event>
      <template v-slot:image>
        <a href="https://hiveaid.uomesports.co.uk" target="_blank"><img src="@/assets/hiveaid.jpg"></a>
      </template>

      HiveAid was only added to our event calendar last year, but has already been a big success. The 2 day charity livestream was in aid of SpecialEffect and we beat our £500 target. The main attraction of the event is the all-star lineups from teams across the UK University esports scene.
    </Event> -->
  </div>
</template>

<script>
import Event from '@/components/Event.vue';

export default {
  components: {
    Event
  }
};
</script>
