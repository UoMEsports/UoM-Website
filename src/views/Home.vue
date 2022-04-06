<template>
  <div class="home">
    <div class="description">
      <p>UoM Esports Society aims to promote grassroot esports in the university scene. We enter our members into national student-only leagues such as <a target="_blank" href="https://thenuel.com/">NUEL</a> and <a target="_blank" href="https://www.nse.gg/">NSE</a>. We also host socials such as casual meetups or viewing parties.</p>
      <p>We run tryouts for as many teams as we can create, so it doesn't matter if you're a high skilled competitive player or a more relaxed casual player-- there will be a team for you.</p>
      <p>Anyone can join our <a target="_blank" href="https://discord.gg/uomesports">Discord</a>, but be sure to visit the University of Manchester <a target="_blank" href="https://manchesterstudentsunion.com/activities/view/esport">Student Union website</a> to sign up as an official member of the society for additional perks!</p>
    </div>
    <Heading class="heading">Games We Support</Heading>
    <div class="games">
      <div class="column">
        <div class="game">
          <img src="@/assets/games/LoL.png">
          <h1>League of Legends</h1>
        </div>
        <div class="game">
          <img src="@/assets/games/overwatch.png">
          <h1>Overwatch</h1>
        </div>
        <div class="game">
          <img src="@/assets/games/valo.png">
          <h1>VALORANT</h1>
        </div>
        <div class="game">
          <img src="@/assets/games/br.png">
          <h1>Battle Royales</h1>
        </div>
      </div>
      <div class="column">
        <div class="game">
          <img src="@/assets/games/csgo.png">
          <h1>Counter Strike: Global Offensive</h1>
        </div>
        <div class="game">
          <img src="@/assets/games/rl.png">
          <h1>Rocket League</h1>
        </div>
        <div class="game">
          <img src="@/assets/games/r6s.png">
          <h1>Rainbow Six: Siege</h1>
        </div>
        <!-- <div class="game">
          <img src="@/assets/games/tekken.png">
          <h1>Fighting Games</h1>
        </div> -->
        <div class="game">
          <h1>... and more!</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading.vue';
export default {
  components: {
    Heading
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 1000px;
  max-width: 100%;
  margin: auto;
  font-size: 24px;

  .heading {
    margin-bottom: -20px;
  }
}

.description {
  text-align: left;
}

.games {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-bottom: 50px;

  .column {
    width: 450px;
    max-width: 100%;

    .game {
      h1 {
        font-size: 30px;
        text-align: left;
        line-height: 50px;

        @media only screen and (max-width: 850px) {
          line-height: 30px;
        }
      }

      img {
        float: left;
        height: 50px;
        margin-right: 20px;

        @media only screen and (max-width: 850px) {
          height: 30px;
        }
      }
    }
  }
}
</style>
