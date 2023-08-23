function fatorial(numero){
  if(numero > 1){
    return (numero * (numero-1)) * fatorial(numero-2);
  }
  return 1;
}
var resultadoFatorial = fatorial(5);

console.log(resultadoFatorial);