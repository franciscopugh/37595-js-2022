const boton1 = document.getElementById("boton1")
const boton2 = document.getElementById("boton2")

boton1.addEventListener("click" , () => {
    Swal.fire({
        icon: 'success',
        title: '<h3 id="titulo-tarjeta">Compra finalizada<h3>',
        text: 'En breve vera en el siguiente link el estado de su envio',
        footer: '<a href="">Seguir envio</a>'
      })
})

boton2.addEventListener("click", () => {
    Toastify({
        text: "Producto agregado al carrito",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        //newWindow: false,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #061161, #780206)",
          color: "#FA8072",
        
        },
        onClick: function(){
            Swal.fire({
                title: '<h3>Carrito<h3>',
               
              })
        } // Callback after click
      }).showToast();
})