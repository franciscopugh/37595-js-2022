class Tarea {
    constructor(nombre, descripcion, categoria) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.categoria = categoria
    }
}
/*const tarea = {nombre: "Cocinar",descripcion: "Ravioles",categoria: "Cocina"}*/

let tareas = []

if(localStorage.getItem("tareas")) {
    tareas = JSON.parse(localStorage.getItem("tareas"))
} else {
    localStorage.setItem("tareas", JSON.stringify(tareas))    
}

const formTareas = document.getElementById("formTareas")
const botonTareas = document.getElementById("mostrarTareas")
const divTareas = document.getElementById("divTareas")

formTareas.addEventListener("submit", (e) => {
    e.preventDefault()

    const datForm = new FormData(e.target)
    /*
    let nombre = document.getElementById("nombre").value
    let descripcion = document.getElementById("descripcion").value
    let categoria = document.getElementById("categoria").value
    */
    const tareaObj = new Tarea(datForm.get("nombre"), datForm.get("descripcion"), datForm.get("categoria"))

    tareas.push(tareaObj)
    localStorage.setItem("tareas", JSON.stringify(tareas))
    formTareas.reset()
})

botonTareas.addEventListener('click', () => {
    const tareasStorage = JSON.parse(localStorage.getItem("tareas"))

    divTareas.innerHTML = ""
    tareasStorage.forEach((tarea, indice) => {
        divTareas.innerHTML += `
        <div class="card border-primary mb-3" id="tarea${indice}" style="max-width: 14rem;margin:4px;">
            <div class="card-header"><h2>${tarea.nombre}<h2></div>
            <div class="card-body">
                <p class="card-text">${tarea.descripcion}</p>
                <button class="btn btn-info">${tarea.categoria}</button><br><br>
                <button class="btn btn-danger">Borrar tarea</button>
            </div>
        </div>
        `
    })

    tareasStorage.forEach((tarea, index) => {
        document.getElementById(`tarea${index}`).children[1].children[4].addEventListener('click', () => {
            document.getElementById(`tarea${index}`).remove()
            tareas.splice(index,1)
            localStorage.setItem("tareas", JSON.stringify(tareas))
        })
    })
})