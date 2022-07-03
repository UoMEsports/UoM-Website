<template>
  <div class="committee">
    <CommitteeMember
      v-for="(member, index) in committee"
      :key="member.img"
      :index="index"
      :member="member"/>
  </div>
</template>

<script>
import CommitteeMember from '@/components/CommitteeMember.vue';

export default {
  components: {
    CommitteeMember
  },
  data () {
    return {
      committee: [
        {
          'name': 'Zoe "abluey"',
          'title': 'President',
          'twitter': null
        },
        {
          'name': 'Dennis "denoose"',
          'title': 'Secretary',
          'twitter': null
        },
        {
          'name': 'Yaser "tko survivor"',
          'title': 'Treasurer',
          'twitter': null
        },
        {
          'name': 'Bobby "Wheely" Kent',
          'title': 'Inclusions Officer, Lead Game Rep, Nintendo Rep',
          'twitter': null
        },
        {
          'name': 'Eden "shpleden"',
          'title': 'Socials Secretary',
          'twitter': null
        },
        {
          'name': 'Nabiel "Indigo Violet"',
          'title': 'Broadcast Officer, Teamfight Tactics Rep',
          'twitter': null
        },
        {
          'name': '"AngusM"',
          'title': 'CSGO Rep',
          'twitter': null
        },
        {
          'name': 'Luke "Luke" Barlow',
          'title': 'Overwatch Rep',
          'twitter': null
        },
        {
          'name': 'Seobin "Narko"',
          'title': 'VALORANT Rep',
          'twitter': null
        },
        {
          'name': 'Gareth "GM667" Meyes',
          'title': 'Rocket League Rep',
          'twitter': null
        },
        {
          'name': '"Gamago"',
          'title': 'Rainbow 6 Siege Rep, Battle Royale Rep',
          'twitter': null
        },
        {
          'name': 'Hasan "Quagmire" Adil',
          'title': 'Genshin Impact Rep',
          'twitter': null
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
