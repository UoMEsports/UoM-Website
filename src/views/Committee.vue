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
import CommitteeMember from '@/components/CommitteeMember';

export default {
  components: {
    CommitteeMember
  },
  data () {
    return {
      committee: [
        {
          'name': 'Meg "wings" Sunshine',
          'title': 'President, Inclusions Officer',
          'twitter': null
        },
        {
          'name': 'Yaser "tko survivor"',
          'title': 'Secretary, Social Secretary, League of Legends Rep',
          'twitter': null
        },
        {
          'name': 'Zoe "pandakat" Guo',
          'title': 'Treasurer',
          'twitter': null
        },
        {
          'name': 'Dimitris "CookiezFort" Tsioumanis',
          'title': 'Lead Game Rep',
          'twitter': null
        },
        {
          'name': 'abluey',
          'title': 'Broadcast Officer',
          'twitter': null
        },
        {
          'name': 'TJ "tjw"',
          'title': 'Overwatch Rep',
          'twitter': null
        },
        {
          'name': 'Danny "Paani" Islam',
          'title': 'VALORANT Rep',
          'twitter': null
        },
        {
          'name': 'Gareth "GM667" Meyes',
          'title': 'Rocket League Rep',
          'twitter': null
        },
        {
          'name': 'Max "Trydodis"',
          'title': 'Battle Royale Rep',
          'twitter': null
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
