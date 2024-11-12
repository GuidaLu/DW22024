//Crea una función llamada sumarProductos() que acepte dos parámetros: precioUnitario y cantidadDeseada.

//La función debe calcular y devolver mediante un console.log el total gastado en un producto multiplicando el precio por la cantidad comprada.

function sumarProductos(precioUnitario, cantidadDeseada) {
    let total = precioUnitario * cantidadDeseada;
    console.log("Total gastado:", total);
    return total

}
sumarProductos(2500, 6); 