<template>
  <div class="tic-tac-toe">
    <h2>Current Player: {{ currentPlayer }}</h2>
    <Board />
    <div v-if="winner" class="mt-3">
      <h3 v-if="winner === 'Draw'">It's a draw!</h3>
      <h3 v-else>Player {{ winner }} wins!</h3>
      <b-button @click="resetGame" variant="primary">New Game</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import Board from '@/components/Board.vue'

export default defineComponent({
  name: 'TicTacToe',
  components: {
    Board
  },
  setup() {
    const store = useStore()

    const currentPlayer = computed(() => store.getters.currentPlayer)
    const winner = computed(() => store.getters.winner)

    const resetGame = () => {
      store.dispatch('resetGame')
    }

    return {
      currentPlayer,
      winner,
      resetGame
    }
  }
})
</script>

<style scoped>
.tic-tac-toe {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>