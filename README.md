# Proyecto: Simulador de Cafetería ☕

Este es un pequeño proyecto para practicar y entender cómo funciona JavaScript asíncrono.

## ¿Qué hace este proyecto?

Este simulador tiene una pantalla y un botón.

* Al hacer clic en el botón **"Agregar Nuevo Pedido"**, aparece una nueva tarjeta en la pantalla con el estado "En Proceso".
* Después de un tiempo de espera al azar (simulando la preparación), la tarjeta del pedido cambia de color y su estado se actualiza a **"Completado"**.

Todo esto ocurre sin que la página se congele, y se pueden agregar múltiples pedidos al mismo tiempo.

## Tecnologías Utilizadas ⚙️

* HTML
* CSS
* JavaScript
    * `setTimeout` para simular las esperas.
    * `Promises` y `async/await` para manejar el flujo asíncrono.

## ¿Cómo usarlo?

1.  Descarga o clona este repositorio.
2.  Abre el archivo `index.html` en cualquier navegador web.
