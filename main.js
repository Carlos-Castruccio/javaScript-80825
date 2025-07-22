const productos = [
    { nombre: 'Notebook'     , precio: 2500000 },
    { nombre: 'Monitor'    , precio:  450000 },
    { nombre: 'Teclado'    , precio:   55000 },
    { nombre: 'Ratón'      , precio:   18000 }, 
    { nombre: 'Auriculares', precio:    9000}
];

let carrito= []

function menu () {
    alert("Bienvenidos a la Tienda de Tecnologia-Productos Infomaticos")
    console.log("Bienvenido a la Tienda")
}


function elegirProductos(producto) {
    let mensaje ="Productos disponibles-Elija por el numero de orden del producto\n";
    for (let i = 0; i < producto.length; i++) {
    mensaje += `${i + 1} .  ${producto[i].nombre} :   $${producto[i].precio}\n `;
    }

    let opcion = prompt(mensaje);
    let indice = parseInt(opcion) - 1;

    if (indice >= 0 && indice < producto.length) {
    let cantidad = parseInt(
        prompt(`¿Cuantas unidades de ${producto[indice].nombre} desea comprar`)
    );

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida.");
    } else {
        carrito.push({
            nombre: producto[indice].nombre,
            precio: producto[indice].precio,
            cantidad: cantidad,
            subtotal: producto[indice].precio * cantidad,
        });
    }
    alert(`${cantidad} unidad/es de ${producto[indice].nombre} agregadas al carrito.`);
    } else {
    alert("Opcion inválida. Intente otro nuevamente");
    }
}

function mostrarResumen(){
    if (carrito.length === 0){
        alert("El carrito está vacío");
        return;
    }

    let resumen= "Resumen de compra: \n";
    let total = 0;

    for (let i=0; i<carrito.length; i++){
        resumen += `${carrito[i].cantidad} ${carrito[i].nombre} = $ ${carrito[i].subtotal}\n`;
        total += carrito[i].subtotal;
    }

    resumen+=`\n Total a pagar: $ ${total}`;
    alert (resumen);
    console.log(resumen)
}

    function iniciarCommpra(){
        menu();

        let seguirComprando=true
        while(seguirComprando){
            elegirProductos(productos);
            seguirComprando = confirm("¿Desea seguir comprando?");
        }
        mostrarResumen();
    }

    iniciarCommpra();
    