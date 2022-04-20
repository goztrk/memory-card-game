<script setup lang="ts">
  import { useGameStore } from '../stores/game';

  const gameStore = useGameStore()

  const handleGameButton = () => {
    gameStore.isStarted
      ? gameStore.stop()
      : gameStore.start()
  }
</script>

<template>
  <button type="button" class="game-button" @click="handleGameButton">
    <template v-if="gameStore.isStarted">Bitir</template>
    <template v-else>Başlat</template>
  </button>
</template>

<style scoped>
  .game-button {
    border: none;
    padding: 0.8em 2.5em;
    outline: none;
    color: white;
    font-style: 1.2em;
    position: relative;
    z-index: 1;
    cursor: pointer;
    background: none;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
  }

  .game-button::before,
.game-button::after {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 10em;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: 105%;
  height: 105%;
  content: "";
  z-index: -2;
  background-size: 400% 400%;
  background: linear-gradient(
    60deg,
    #f79533,
    #f37055,
    #ef4e7b,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );
}
</style>
