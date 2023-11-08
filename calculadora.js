  function operador(operacion) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = 0;

    switch (operacion) {
        case 'suma':
            result = num1 + num2;
            break;
        case 'resta':
            result = num1 - num2;
            break;
        case 'multiplicacion':
            result = num1 * num2;
            break;
        case 'division':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Error en la división por cero";
            }
            break;
        default:
            result = "Error en la operacion";
    }

    document.getElementById('result').value = result;
}

 
/* function sumar(a,b){
    return a + b;
  }
  function restar(a,b){
    return a - b;
  }
  function dividir(a,b){
    return a / b;
  }
  function multi(a,b){
    return a * b;
  }
   */
  /* function calcular(x,y,operacion){
    return operacion(x,y);
  } */

   /* console.log(calcular(2,2,sumar));
  console.log(calcular(2,2,restar));
  console.log(calcular(2,2,multi));
  console.log(calcular(2,2,dividir)); */