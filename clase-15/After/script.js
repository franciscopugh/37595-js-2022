const divProductos = document.getElementById("divProductos")

const carrito = JSON.parse(localStorage.getItem('carrito')) ?? []
const botonCarrito = document.getElementById("botonCarrito")

async function consultarProductos() {
    const response = await fetch('./json/productos.json')
    const productos  = await response.json()
    return productos
}


fetch('./json/productos.json')
.then(response => response.json())
.then(productos => {
  productos.forEach((producto, indice) => {
    divProductos.innerHTML += `
    <div class="card border-secondary mb-3" id= "producto${indice}" style="width: 15rem;margin:3px;">
      <img src="./img/${producto.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Marca: ${producto.marca}</p>
        <p class="card-text">Modelo: ${producto.marca}</p>
        <p class="card-text">Precio: $${producto.precio}</p>
        <p class="card-text">Stock: ${producto.stock}</p>
        <button class="btn btn-dark">Comprar</button>
      </div>
    </div>
    
    `
  })

  productos.forEach((producto, indice) => {
    const cardProducto = document.getElementById(`producto${indice}`)
    cardProducto.children[1].children[5].addEventListener('click', () => {
        let index = carrito.findIndex((prod => prod.id == producto.id))  
        if(index !=1) {
          if(carrito[index].cantidad < producto.stock) {
            carrito[index].cantidad++
          } 
        } else {
          const prodCarrito = {id: producto.id, cantidad: 1}
          carrito.push(prodCarrito)
        }
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
  })
})

botonCarrito.addEventListener('click', async () => {
  const prodCarrito = JSON.parse(localStorage.getItem('carrito'))
  
  if(prodCarrito.length == 0) {
    console.log("Carrito vacio")
  } else {
    const productosBDD = await consultarProductos()
    console.log(productosBDD)
    prodCarrito.forEach((producto) => {
      
    })
  }
})