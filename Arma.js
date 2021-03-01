module.exports = class Arma {
    constructor(dano, peso, velocidade, chanceCritica) {
        this.dano = dano || 10
        this.peso = peso || 0.1
        this.velocidade = velocidade || 2
        this.chanceCritica = chanceCritica || 0.3
    }

    returnDano()
    {
        if(Math.random() <= this.chanceCritica)
            return this.dano * 2
        else
            return this.dano
    }
}