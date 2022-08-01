/*const boton1 = document.getElementById("boton1")

boton1.addEventListener("dblclick", () => {
    console.log("diste click en add Event")
})

boton1.addEventListener('dblclick', () => {
    console.log("diste click en otro add Event")
})

boton1.onclick = () => console.log("Diste click desde onclick")

boton1.onclick = () => console.log("Diste click desde otro onclick distinto")

const input1 = document.getElementById("input1")
const inputColor = document.getElementById("inputColor")
const boton1 = document.getElementById("boton1")

//Cuando el user me agrega texto
input1.addEventListener('input', () => {
    console.log(input1.value)
})

//Cuando el user me de enter
input1.addEventListener('change', () => {
    console.log(input1.value)
})

//Cuando el user de click
boton1.addEventListener("click", () => {
    console.log(input1.value)
})

inputColor.addEventListener('input', () => {
    let color = inputColor.value
   document.body.style.backgroundColor = color
})*/

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
}
const users = []
const formUser = document.getElementById("formUser")

formUser.addEventListener('submit', (event) => {
    event.preventDefault()
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    const user = new User(username, email, password)
    users.push(user)
    console.log(users)
    formUser.reset()
})