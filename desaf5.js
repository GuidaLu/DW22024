//En este desafío, practicaremos el uso de arrays y bucles en JavaScript para gestionar productos en un e-commerce.
//Vamos a empezar creando un array de Productos:
//Para mostrar el contenido del array vamos a utilizar un “bucle for” para recorrer el mismo e imprimir en la consola cada uno de los productos.
//Ahora vamos a actualizar el stock:
//Utilizaremos otro “bucle for” para simular la venta de productos. Reduce el stock de productos eliminando el último con el método “pop” e imprime en la consola el nuevo stock después de la venta.

console.log ("Productos disponibles:")
let arrayProductos = ["Iphone", "Samsung", "Motorola", "Nokia", "Xiaomi"];

for(let i=0; i<=arrayProductos.length; i++) {
   console.log(arrayProductos[i]);
}

for (let i = arrayProductos.length; i > 0; i--) {
    arrayProductos.pop(); 
    console.log("Nuevo stock:", arrayProductos);
}