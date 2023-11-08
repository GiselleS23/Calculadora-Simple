/* Ejercicio 1
Tengo desarrollada la siguiente función en javascript
function suma (a,b,callback){
let c = a +b;
callback( );
}

¿Que es el tercer parámetro recibido?
¿En qué casos es obligatorio desarrollar este tipo de funciones?
Realizar un llamado a la función de ejemplo.

1)El tercer parámetro recibido es un callback. Un callback es una función que se pasa como argumento a otra función (en nuestro caso es la suma), y se ejecuta luego de que se haya completado alguna operación.
2)Aunque no son obligatorias son útiles en situaciones específicas cuando se trabaja con operaciones asincrónicas, eventos o tareas que pueden tardar un tiempo desconocido en completarse.
*/

function suma(a, b, callback) {
    let c = a + b;
    callback(c);
}

// Llamada a la función de ejemplo
suma(5, 3, function(resultado) {
    console.log("El resultado de la suma es: " + resultado);
});

