<script setup lang="ts">
  import { ref } from 'vue';
  import { useGameStore } from '../stores/game';

  const {row, column} = defineProps<{
    row: number,
    column: number
  }>()

  const pos = `${row-1}-${column-1}`

  const gameStore = useGameStore()

  const handleCellClick = () => {
    gameStore.handleCellClick(pos)
  }
</script>

<template>
  <div class="cell" :class="gameStore.getCellClass(pos)" @click="handleCellClick">
    <span v-if="gameStore.getCellClass(pos) !== 'close'">{{ gameStore.cells[pos] }}</span>
  </div>
</template>

<style>
  .cell {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    margin: 5px;
    font-size: 3rem;
    background-color: rgba(238, 228, 218, 0.35);
    border-radius: 8px;
    transition: all .3s ease-in-out;
    user-select: none;
    cursor: pointer;
  }

  .open {
    background-color: #eee4da;
  }

  .found {
    background-color: #edd073;
    color: #f9f6f2;
    cursor: initial;
  }
</style>
