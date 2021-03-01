const Arma = require('./Arma')

module.exports = class Heroina {
    constructor(arma, velocidade, vigor, hp, forca){
        this.arma = new Arma()
        this.velocidade = velocidade || 5
        this.vigor = vigor || 100
        this.hp = hp || 100
        this.forca = forca || 50
    }

    ataqueSimples() {
        if(20 < this.vigor) {
            let newDMG = this.forca + this.arma.returnDano()
            return newDMG
        } else {
            return null
        }
    }

    levarDano(dano) {
        this.hp -= dano
        this.checkIfDie()
    }

    checkIfDie() {
        if(this.hp <= 0)
            return "die"
        return
    }
}