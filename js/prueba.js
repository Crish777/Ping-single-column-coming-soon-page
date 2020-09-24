let prueba = function restock(itemCount, target) {
    // Write your code here
    cantidad = 0;
    itemCount.forEach(function(itemCount) {
        cantidad += itemCount;
    });
    if (cantidad < target) {
        return target - cantidad;
    }
    console.log(cantidad);

}

console.log(prueba([6, 1, 2, 1], 100));