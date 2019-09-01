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
          'name': 'Jon Chia',
          'title': 'President',
          'img': 'jon'
        },
        {
          'name': 'Dan Shields',
          'title': 'Secretary, Live Events Officer and Tech Officer',
          'img': 'dan'
        },
        {
          'name': 'John Banks',
          'title': 'Treasurer, Rainbow 6 Siege Rep',
          'img': 'john'
        },
        {
          'name': 'Barbora "Barb" Salcman',
          'title': 'Lead Game Rep',
          'img': 'barb'
        },
        {
          'name': 'Josh "Fill" Fillingham',
          'title': 'Social Secretary and Broadcast Officer',
          'img': 'fill'
        },
        {
          'name': 'James "Stallzy" Lara-Burston',
          'title': 'Media Officer',
          'img': 'stallzy'
        },
        {
          'name': 'Devon Salopek',
          'title': 'CS:GO Rep',
          'img': 'devon'
        },
        {
          'name': 'Jingyang "Carl" Zhong',
          'title': 'Overwatch Rep',
          'img': 'carl'
        },
        {
          'name': 'Aiden Jenkins',
          'title': 'Battle Royale Rep',
          'img': 'aiden'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
