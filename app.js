new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame() {
      this.gameIsRunning = true
      this.monsterHealth = 100
      this.playerHealth = 100
    },
    attack() {

      this.monsterHealth -= this.damageAttack(3, 10)
      if (this.checkWin()) {
        return
      }
      this.monsterAttack()
    },
    specialAttack() {
      this.monsterHealth -= this.damageAttack(10, 20)
      if (this.checkWin()) {
        return
      } this.monsterAttack()

    },
    heal() { },
    giveUp() { },
    monsterAttack() {
      this.playerHealth -= this.damageAttack(5, 15)
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