/*console.log(document.getElementsByClassName("parrafos")[0].firstElementChild)
console.log(document.getElementsByTagName("p")[0])
const user = {
   username: "Fran",
    email: "fran@fran.com"
}
const parrafo1 = document.getElementById("parrafo1")

parrafo1.innerText = `Hola ${user.username}`*/

class Producto {
    constructor(id, nombre, marca, precio , stock) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Producto(1, "Celular", "Samsung", 25000, 20)
const producto2 = new Producto(2, "TV", "LG", 65000, 18)
const producto3 = new Producto(3, "Parlante", "House of Marley", 35000, 25)
const producto4 = new Producto(4, "Guitarra", "Les Paul", 45000, 22)
const producto5 = new Producto(5, "Computadora", "HP", 95000, 30)

const productos = [producto1, producto2, producto3, producto4, producto5]

const divProductos = document.getElementById("divProductos")

/*
productos.forEach(producto => {
    divProductos.innerHTML += `
    <div class="card" id="producto${producto.id}" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Nombre: ${producto.nombre}</h5>
            <p class="card-text">Marca: ${producto.marca}</p>
            <p class="card-text">Precio: $${producto.precio}</p>
            <p class="card-text">Stock: ${producto.stock}</p>
        </div>
    </div>
    
    `
})
*/
productos.forEach(producto => {
    let productoDiv = document.createElement("div")
    productoDiv.id =  `producto${producto.id}`
    productoDiv.className = "card"
    productoDiv.innerHTML = `
    <div class="card-body">
        <h5 class="card-title">Nombre: ${producto.nombre}</h5>
        <p class="card-text">Marca: ${producto.marca}</p>
        <p class="card-text">Precio: $${producto.precio}</p>
        <p class="card-text">Stock: ${producto.stock}</p>
    </div>
    </div>
    `

    divProductos.appendChild(productoDiv)
})

document.getElementById('producto3').remove()