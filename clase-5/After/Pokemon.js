class Pokemon {
    constructor(nombre, vida, tipo ) {
        this.nombre = nombre
        this.vida = vida
        this.tipo = tipo
        this.nivel = 1
    }

    recibirAtaque(dañoAtaque) {
        this.vida -= dañoAtaque

        if(this.vida <=0) {
            console.log(`${this.nombre} se fue a dormir con los magikarp`)
        } else {
            console.log(`${this.nombre} sigue vivito y coleando con ${this.vida}`)
        }
    }

}

class Pikachu extends Pokemon {
    constructor(nombre, vida, tipo, danioImpactrueno) {
        super(nombre, vida, tipo)
        this.danioImpactrueno = danioImpactrueno
    }

    impactrueno(pokemonAtacado) {
        console.log(`${this.nombre} lanzo impactrueno con un daño de ${this.danioImpactrueno}`)
        pokemonAtacado.recibirAtaque(this.danioImpactrueno)
    }

}

class Charmander extends Pokemon {
    constructor(nombre, vida, tipo, danioLlamarada) {
        super(nombre, vida, tipo)
        this.danioLlamarada = danioLlamarada
    }

    llamarada(pokemonAtacado) {
        console.log(`${this.nombre} lanzo llamarada con un daño de ${this.danioLlamarada}`)
        pokemonAtacado.recibirAtaque(this.danioLlamarada)
    }
}

class Eevee extends Pokemon {
    constructor(nombre, vida, tipo, danioTackle) {
        super(nombre, vida, tipo)
        this.danioTackle = danioTackle
    }

    tackle(pokemonAtacado) {
        console.log(`${this.nombre} impacto con un tackle con un daño de ${this.danioTackle}`)
        pokemonAtacado.recibirAtaque(this.danioTackle)
    }
}
