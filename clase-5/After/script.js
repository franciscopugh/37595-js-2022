const eevee1 = new Eevee("Duke", 13, "Normal", 11)
const pikachu1 = new Pikachu("Pika pika", 32, "Electrico", 6)
const charmander1 = new Charmander("Fueguito", 20, "Fuego", 4)

const pokemonesJugador1 = [pikachu1]
const pokemonesJugador2 = [charmander1, eevee1]

do {
    pikachu1.impactrueno(charmander1)
    if(charmander1.vida <= 0) {
        break
    }
    charmander1.llamarada(pikachu1)
} while(pikachu1.vida >0 || charmander1.vida > 0)

do {
    eevee1.tackle(pikachu1)
    if(pikachu1.vida <= 0) {
        break
    }
    pikachu1.impactrueno(eevee1)
} while(pikachu1.vida >0 || eevee1.vida > 0)


console.log(eevee1)
console.log(pikachu1)
console.log(charmander1)