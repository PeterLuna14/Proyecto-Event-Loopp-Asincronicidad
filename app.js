const botonAgregar = document.getElementById('add-order-btn');
const contenedorDePedidos = document.getElementById('orders-container');

let numeroDePedido = 0;

botonAgregar.addEventListener('click', async () => {
    
    numeroDePedido++;
    const idDelPedidoActual = numeroDePedido;

    // --- Parte 1: Crear y mostrar el pedido "En Proceso" ---

    // Creamos un nuevo 'div' en la memoria para nuestro pedido.
    const tarjetaDePedido = document.createElement('div');
    
    // Le ponemos una ID única para encontrarlo después (ej: "pedido-1")
    tarjetaDePedido.id = `pedido-${idDelPedidoActual}`;
    
    // Le ponemos las clases de CSS para que se vea amarillo (en proceso).
    tarjetaDePedido.className = 'order-card en-proceso';
    
    // Escribimos lo que va a decir adentro con HTML.
    tarjetaDePedido.innerHTML = `
        <h3>Pedido #${idDelPedidoActual}</h3>
        <p>Estado: <span class="status">En Proceso</span></p>
    `;
    
    // Finalmente, metemos la tarjeta que creamos en el contenedor de la página.
    contenedorDePedidos.appendChild(tarjetaDePedido);
    console.log(`Se agregó el Pedido #${idDelPedidoActual}.`);

    //Parte 2: Simular la espera y completar el pedido

    // Llamamos a la función que simula la espera y usamos "await"
    // para que el código se detenga aquí hasta que la promesa se resuelva.
    await prepararPedido(idDelPedidoActual);

    // Una vez que 'await' termina, significa que el pedido ya está listo.
    // Buscamos la tarjeta que creamos antes por su ID.
    const tarjetaParaActualizar = document.getElementById(`pedido-${idDelPedidoActual}`);
    
    // Le cambiamos la clase para que se ponga verde (completado).
    tarjetaParaActualizar.className = 'order-card completado';
    
    // Buscamos el texto del estado y lo cambiamos a "Completado".
    tarjetaParaActualizar.querySelector('.status').textContent = 'Completado';
    console.log(`El Pedido #${idDelPedidoActual} está listo! ✅`);
});


// Esta función simula el tiempo que tarda en hacerse un café.
// Devuelve una "Promesa", que es como un ticket de "te avisaré cuando termine".
function prepararPedido(id) {
    console.log(`El Pedido #${id} comenzó a prepararse...`);
    // La promesa le avisa al "await" cuándo debe continuar.
    return new Promise(resolve => {
        // Calculamos un tiempo de espera al azar (entre 1 y 6 segundos).
        const tiempoDeEspera = Math.random() * 5000 + 1000;
        
        // setTimeout es el que realmente hace la espera.
        setTimeout(() => {
            // Cuando el tiempo de espera termina, llamamos a resolve().
            // Esto le dice a la promesa: "¡Ya terminé!", y el await lo sabe.
            resolve();
        }, tiempoDeEspera);
    });
}