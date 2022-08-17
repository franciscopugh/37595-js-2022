const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22";
const divClima = document.getElementById("divClima")
const form =document.getElementById("idForm")

/*
const divDolar = document.getElementById("divDolar")

function mostrarDolar() {
    fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({oficial, solidario, mep, ccl, blue}) => {
        divDolar.innerHTML = `
            <div>
                <h2>Cotizaciones del dolar </h2>
                <p>Oficial: $${oficial}</p>
                <p>Solidario: $${solidario} </p>
                <p>MEP: $${mep} </p>
                <p>CCL: $${ccl} </p>
                <p>Blue: $${blue} </p>
            <div>
        `
    })
}

mostrarDolar()

setInterval(() => {
    mostrarDolar()
}, 10000)
*/

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const datForm = new FormData(e.target)

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${datForm.get("ciudad")},${datForm.get("provincia")},${datForm.get("pais")}&limit=1&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data =>  {
        console.log(data)
        const {lat, lon, name: nombre, state : provincia, country : pais } = data[0]
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=sp&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(({weather, main}) => {
    
            console.log(main)
            console.log(weather)
            
            divClima.innerHTML = `
                <div>
                    <h2>Clima en ${nombre}, ${provincia}, ${pais}</h2>
                    <p>Temperatura: ${main.temp} °C</p>
                    <p>Sensacion Termica: ${main.feels_like} °C</p>
                    <p>Presion: ${main.pressure} hPa</p>
                    <p>Humedad: ${main.humidity}%</p>
                    <p>Descripcion: ${weather[0].description}</p>
                </div>
            
            `
        })
    })
})
