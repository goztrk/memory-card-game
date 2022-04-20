<script setup lang="ts">
  import { useGameStore } from '../stores/game';
  import GameButton from './GameButton.vue';
  import Cell from './Cell.vue';

  const gameStore = useGameStore()
</script>

<template>
  <div class="game-container">
    <div class="cell-container" v-if="gameStore.isStarted">
      <template v-for="row in 6">
        <template v-for="column in 6">
          <Cell :row="row" :column="column" />
        </template>
      </template>
    </div>
    <div class="game-not-started" v-else>
      <p v-if="gameStore.gameWon">Tebrikler!<br /> Oyunu Kazandınız!</p>
      <p v-else>Oyun Başlamaya Hazır!</p>
      <GameButton />
    </div>
  </div>
</template>

<style scoped>
  .game-container {
    width: 620px;
    margin: 0 auto;
    padding: 10px;
    background-color: #bbada0;
    border-radius: 8px;
    color: #000022;
  }

  .cell-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }

  .game-not-started {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 600px;
    height: 600px;
    background-color: rgba(238, 228, 218, 0.35);
  }

  .game-not-started p {
    text-align: center;
    font-size: 3rem;
  }
</style>
