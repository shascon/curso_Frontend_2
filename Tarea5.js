// Serie de Fibonacci


const SFibinacci = (n) => {
    // condicion de Salida
    if ((n == 0) || (n == 1))
    return 1;
 else
return SFibinacci(n-1) + SFibinacci(n-2);
}
// A Entre los numeros de 0 y 1000
var Pares = [];
var impares = [];
for(var i = 0; i < 16; i++){
    console.log(SFibinacci(i));
    const valor = SFibinacci(i);
    if(valor%2==0){
        Pares.push(valor);
    }else{
        impares.push(valor);
    }
}

console.log("Pares"+Pares);

console.log("impares"+impares);
