<script setup lang="ts">
import Grid from "./components/Grid.vue";
import GameButton from "./components/GameButton.vue";
</script>

<template>
  <header>
    <h1>MEM6</h1>
    <div class="game-button-holder">
      <GameButton />
    </div>
  </header>
  <Grid />
</template>

<style>
@import './assets/base.css';

#app {
  width: 620px;
  margin: 0 auto;
}

header {
  display: flex;
  margin: 4rem 0;
}

header h1 {
  flex-grow: 1;
}

.game-button-holder {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
