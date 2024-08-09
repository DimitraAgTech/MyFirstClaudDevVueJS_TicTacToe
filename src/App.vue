<template>
  <div id="app">
    <h1>Vue Tic-Tac-Toe</h1>
    <TicTacToe />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TicTacToe from '@/components/TicTacToe.vue'

export default defineComponent({
  name: 'App',
  components: {
    TicTacToe
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>