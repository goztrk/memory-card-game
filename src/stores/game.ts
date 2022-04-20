import { defineStore } from 'pinia';



export const useGameStore = defineStore({
  id: 'game',
  state: () => ({
    started: false,
    gameWon: true,
    cells: {} as {[key: string]: string},
    cellState: {} as {[key: string]: string},
    clicked: '',
    foundCount: 0,
  }),
  getters: {
    defaultValues: () => [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
      'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S'
    ],
    isStarted: (state) => state.started,
    cellValue: (state) => {
      return (row: number, column: number): string => state.cells[`${row}-${column}`]
    },
    getCellState: (state) => {
      return (row: number, column: number): string => state.cellState[`${row}-${column}`]
    },
  },
  actions: {
    start() {
      if (this.started) {
        return
      }

      this.started = true
      this.gameWon = false

      // Reset clicked cell state
      this.clicked = ''

      // Reset count of found cells
      this.foundCount = 0

      // Double the items in default values
      const letterArray = this.defaultValues.reduce(
        (res: string[], current: string) => res.concat([current, current]),
        []
      )

      this.cellState = {}

      // Fill cells with random values
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 6; col++) {
          const position = `${row}-${col}`
          this.cellState[position] = 'close'
          const rand = Math.floor(Math.random() * letterArray.length)
          this.cells[position] = letterArray[rand]
          letterArray.splice(rand, 1)
        }
      }
    },
    stop() {
      this.started = false
      this.gameWon = false
    },
    handleCellClick(position: string): void {
      if (this.cellState[position] !== 'close') {
        return
      } else if (this.clicked === '') {
        Object.keys(this.cellState).map((key) => {
          if (this.cellState[key] === 'open') {
            this.cellState[key] = 'close'
          }
        })
        this.clicked = position
        this.cellState[position] = 'open'
      } else {
        this.cellState[position] = 'open'
        if (this.cells[this.clicked] === this.cells[position]) {
          this.cellState[this.clicked] = this.cellState[position] = 'found'
          this.foundCount++

          if (this.foundCount == 18) {
            this.gameWon = true
            this.started = false
          }
        }
        this.clicked = ''
      }
    },
    getCellClass(position: string): string {
      if (this.cellState[position] !== 'close') {
        return this.cellState[position]
      }
      return 'close'
    },
  }
})
