<template>
  <div class="board">
    <div v-for="(cell, index) in board" :key="index" class="cell" @click="makeMove(index)">
      {{ cell }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Board',
  setup() {
    const store = useStore()

    const board = computed(() => store.getters.board)

    const makeMove = (index: number) => {
      store.dispatch('makeMove', index)
    }

    return {
      board,
      makeMove
    }
  }
})
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  width: 300px;
  margin: 0 auto;
}

.cell {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
  background-color: #f0f0f0;
  cursor: pointer;
}

.cell:hover {
  background-color: #e0e0e0;
}
</style>