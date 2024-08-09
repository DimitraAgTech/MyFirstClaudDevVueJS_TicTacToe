import { createStore } from 'vuex'

export interface State {
  board: string[]
  currentPlayer: 'X' | 'O'
  winner: string | null
}

export default createStore({
  state: {
    board: Array(9).fill(''),
    currentPlayer: 'X',
    winner: null
  } as State,
  mutations: {
    makeMove(state, index: number) {
      if (state.board[index] === '' && !state.winner) {
        state.board[index] = state.currentPlayer
        state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X'
      }
    },
    checkWinner(state) {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
      ]

      for (const pattern of winPatterns) {
        const [a, b, c] = pattern
        if (state.board[a] && state.board[a] === state.board[b] && state.board[a] === state.board[c]) {
          state.winner = state.board[a]
          return
        }
      }

      if (state.board.every(cell => cell !== '')) {
        state.winner = 'Draw'
      }
    },
    resetGame(state) {
      state.board = Array(9).fill('')
      state.currentPlayer = 'X'
      state.winner = null
    }
  },
  actions: {
    makeMove({ commit }, index: number) {
      commit('makeMove', index)
      commit('checkWinner')
    },
    resetGame({ commit }) {
      commit('resetGame')
    }
  },
  getters: {
    board: state => state.board,
    currentPlayer: state => state.currentPlayer,
    winner: state => state.winner
  }
})