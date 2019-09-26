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
          'twitter': '_Jon_Chia_',
          'img': 'jon'
        },
        {
          'name': 'Dan Shields',
          'title': 'Secretary, Live Events Officer, Tech Officer',
          'twitter': 'DanShieldsUK',
          'img': 'dan'
        },
        {
          'name': 'John Banks',
          'title': 'Treasurer, Rainbow 6 Siege Rep',
          'twitter': 'ThunderhawkU',
          'img': 'john'
        },
        {
          'name': 'Barbora "Barb" Salcman',
          'title': 'Game Rep Lead',
          'twitter': null,
          'img': 'barb'
        },
        {
          'name': 'Josh "Fill" Fillingham',
          'title': 'Broadcast Officer, Social Secretary',
          'twitter': 'Fill_30',
          'img': 'fill'
        },
        {
          'name': 'Devon Salopek',
          'title': 'CS:GO Rep',
          'twitter': null,
          'img': 'devon'
        },
        {
          'name': 'Jingyang "Carl" Zhong',
          'title': 'Overwatch Rep',
          'twitter': null,
          'img': 'carl'
        },
        {
          'name': 'Aiden Jenkins',
          'title': 'Battle Royale Rep',
          'twitter': null,
          'img': 'aiden'
        },
        {
          'name': 'Sum "Sumage" Chan',
          'title': 'Rocket League Rep',
          'twitter': null,
          'img': 'sum'
        },
        {
          'name': 'Kaung San',
          'title': 'General Committee',
          'twitter': null,
          'img': 'nas'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
