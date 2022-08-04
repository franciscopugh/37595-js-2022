//localStorage.setItem('saludo', "Hola")
//console.log(localStorage.getItem('adios'))

const botonDark = document.getElementById('botonDarkMode')
const botonLight = document.getElementById('botonLightMode')

let darkMode

if(localStorage.getItem('darkMode')) { //Si existe el local storage
    darkMode = localStorage.getItem('darkMode') //Consulto el local storage
} else {
    localStorage.setItem('darkMode', "light") //Crearlo
}

if(darkMode == "dark") {
    document.body.classList.add("darkMode")
}

botonDark.addEventListener('click', () => {
    //document.body.style.backgroundColor = "#000"
    //document.body.style.color = "#fff"
    document.body.classList.add("darkMode")
    localStorage.setItem('darkMode', "dark")
})

botonLight.addEventListener('click', () => {
    //document.body.style.backgroundColor = "#fff"
    //document.body.style.color = "#000"
    document.body.classList.remove("darkMode")
    localStorage.setItem('darkMode', "light")
})

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
    }

    hablar() {
        console.log("Hola, estoy hablando")
    }
}

const persona1 = new Persona("Benja", "Maldonado")

localStorage.setItem('alumnos', JSON.stringify([persona1]))

const array= JSON.parse(localStorage.getItem('alumnos'))

console.log(array[0].hablar())