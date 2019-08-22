<template>
  <div class="events">
    <Event>
      <template v-slot:image>
        <a href="https://kotn.uomesports.co.uk" target="_blank"><img src="@/assets/kotn.jpg"></a>
      </template>

      King of the North is UoM Esports' biggest yearly event, with previous years playing host to up to 350 players and attracting hundreds of thousands of views on Twitch.
    </Event>
    <Event>
      <template v-slot:image>
        <a href="https://hiveaid.uomesports.co.uk" target="_blank"><img src="@/assets/hiveaid.jpg"></a>
      </template>

      HiveAid was only added to our event calendar last year, but has already been a big success. The 2 day charity livestream beat our £500 target and was in aid of SpecialEffect. The main attraction is the all-star lineups from teams across the UK University esports scene.
    </Event>
  </div>
</template>

<script>
import Event from '@/components/Event';

export default {
  components: {
    Event
  }
};
</script>
