/* function calculate(){
    fetch("scripts/items.json")  // Consultamos el json
    .then(res => res.json()) // Le damos el formato
    .then(data => console.log(data);  // Mostramos por consola los datos
}
 */
// Fetch es el nombre de una nueva API para Javascript con la cuál podemos realizar peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco más sencillo y menos verbose

const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');

// Fetch Exchange Rate and Update the DOM
const calculate = () => {
    const moneda_one = monedaEl_one.value; // Traemos el valor de la moneda que queremos convertir
    const moneda_two = monedaEl_two.value; // Moneda a la cual queremos convertir el valor de arriba
    
    fetch(`https://open.er-api.com/v6/latest/${moneda_one}`)  //
    .then(res => res.json())
    .then(data => {
        const taza = data.rates[moneda_two];
       
    cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

    cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2)
    });
}

// Event listeners
monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

taza.addEventListener('click', () =>{
    const temp = monedaEl_one.value;
    monedaEl_one.value = monedaEl_two.value
    monedaEl_two.value = temp;
    calculate();
})


calculate();

