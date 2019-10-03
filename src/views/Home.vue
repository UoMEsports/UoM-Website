<template>
  <div class="home">
    <div class="description">
      <p>UoM Esports Society aims to promote grassroot esports in the university scene. We do this by entering our members into student only leagues such as the NUEL and NSE. We also host regular socials from casual meetups or viewing parties to bowling and other more organised events.</p>
      <p>We run tryouts for as many teams as we can create, so it doesn't matter if you're a high skilled competitive player or a more relaxed casual player there will be a team for you.</p>
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
          <img src="@/assets/games/dota-2.jpg">
          <h1>Dota 2</h1>
        </div>
        <div class="game">
          <img src="@/assets/games/hearthstone.png">
          <h1>Hearthstone</h1>
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
          <img src="@/assets/games/r6s.png">
          <h1>Rainbow Six: Siege</h1>
        </div>
        <div class="game">
          <img src="@/assets/games/rl.png">
          <h1>Rocket League</h1>
        </div>
        <div class="game">
          <img src="@/assets/games/magic.png">
          <h1>Magic The Gathering Arena</h1>
        </div>
        <div class="game">
          <img src="@/assets/games/tekken.png">
          <h1>Fighting Games</h1>
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
  font-size: 20px;

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
