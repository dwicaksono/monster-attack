new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame() {
      this.gameIsRunning = true
      this.monsterHealth = 100
      this.playerHealth = 100
      this.turns = []
    },
    attack() {
      let damage = this.damageAttack(3, 10)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: false,
        text: `Player hit monster ${damage}`
      })
      if (this.checkWin()) {
        return
      }
      this.monsterAttack()
    },
    specialAttack() {
      let damage = this.damageAttack(10, 20)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: false,
        text: `Player hit monster hard ${damage}`
      })
      if (this.checkWin()) {
        return
      } this.monsterAttack()

    },
    heal() {
      this.turns.unshift({
        isPlayer: true,
        text: `Player heal 10`
      })
      if (this.playerHealth <= 90) {
        this.playerHealth += 10
      } else {
        this.playerHealth = 100
      }
      this.monsterAttack()
    },
    giveUp() {
      this.gameIsRunning = false
      this.playerHealth = 100
      this.monsterHealth = 100
    },
    monsterAttack() {
      let damage = this.damageAttack(5, 15)
      this.playerHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: `Monster hit player  ${damage}`
      })
      this.checkWin()
    },
    damageAttack(min, max) {
      let damage = Math.max(Math.floor(Math.random() * max) + 1, min)
      return damage
    },
    checkWin() {
      if (this.monsterHealth <= 0) {
        if (confirm('you won! Hew Game ?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      } else if (this.playerHealth <= 0)
        if (confirm('you lost! New Game?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
      return false
    }
  }
})