/*setTimeout(() => {
    console.log("Buenos dias")
}, 3000)

setTimeout(() => {
    console.log("Buenas tardes")
}, 3000)

setTimeout(() => {
    console.log("Buenas noches!")
}, 3000)

let cant = 0
const intervalo = setInterval(() => {
    cant++
    setTimeout(() => {
        console.log("Datos de servidor")
    }, 2000)

    if(cant == 6) {
        console.log("Fin interval")
        clearInterval(intervalo)
    }
}, 1000)*/

class Producto {
    constructor(id, nombre, marca, precio, stock, img) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
        this.img = img
    }
}

const producto1 = new Producto(1, "Manteca", "Mantequin", 440, 20, "https://www.puntadelagua.com.ar/wp-content/uploads/2020/08/manteca-200.jpg")
const producto2 = new Producto(2, "Ravioles", "Seloivar", 320, 22, "https://www.puntadelagua.com.ar/wp-content/uploads/2020/08/manteca-200.jpg")
const producto3 = new Producto(3, "Queso crema", "Re queson", 250, 25, "https://www.puntadelagua.com.ar/wp-content/uploads/2020/08/manteca-200.jpg")
const producto4 = new Producto(4, "Oregano", "Oreganato", 140, 40, "https://www.puntadelagua.com.ar/wp-content/uploads/2020/08/manteca-200.jpg")
const producto5 = new Producto(5, "Jugo de manzana", "Manzanin", 200, 10, "https://www.puntadelagua.com.ar/wp-content/uploads/2020/08/manteca-200.jpg")
const producto6 = new Producto(6, "Harina", "Trigo feliz", 180, 30, "https://www.puntadelagua.com.ar/wp-content/uploads/2020/08/manteca-200.jpg")

const productos = [producto1, producto2, producto3, producto4, producto5, producto6]

const tBody = document.getElementById("tBody")

const consultaProductos = (estado) => {
    return new Promise((resolve, reject) => {
        if(estado == true) {
            resolve(productos)
        } else {
            reject("No tiene los permisos para acceder a esta informacion")
        }
    })
}

consultaProductos(true)
.then(productos => {
    productos.forEach(producto => {
        tBody.innerHTML += `
        <tr>
            <th scope="row">${producto.id}</th>
            <td>${producto.nombre}</td>
            <td>${producto.marca}</td>
            <td>$${producto.precio}</td>
            <td>${producto.stock}</td>
            <td><img src=${producto.img}></td>
            <td><button class="btn btn-primary">Comprar</button></td>
        </tr>
    `
    });
    
    
})
.catch(error => {
    console.error(error)
})