console.log("Hola Mundo");
const SumaRecursiva = (numero) => {
    // condicion de Salida
    if (numero === 101) return;
    console.log("Este es el numero" + numero);
    SumaRecursiva(  numero + 1);
}
// Parte en el numero 1000
const RestaRecursiva = (numero) => {
    // condicion de Salida
    if (numero === 498) return;
    console.log("Este es el numero" + numero);
    RestaRecursiva(  numero - 2);
}
// Debe ser invocado partiendo en 0
const SumaRecursivaPares = (numero) => {
    // condicion de Salida
    if (numero === 1002) return;
    console.log("Este es el numero" + numero);
    SumaRecursivaPares(  numero + 2);
}
// Debe ser invocado partiendo en 1
const SumaRecursivaImPares = (numero) => {
    // condicion de Salida
    if (numero === 1001) return;
    console.log("Este es el numero" + numero);
    SumaRecursivaImPares(  numero + 2);
}

// Obtener el promedio de notas de un alumno, considerando que la suma de notas debe ser
// el retorno de una funcion y el promedio el retorno de otra funcion

const SumaNotas = (numero) => {
   suma = 0;
   for( nota of numero){
    suma = suma + nota;
   }      
    return suma;

}
const promedioNotas = (numero) => {
promedio = 0;
promedio = numero/6;
return promedio;

} 

const array = [6,8,9,2,5,10];
numero = SumaNotas(array);
console.log("Notas Alumno " + array)
console.log("Suma de Notas" + SumaNotas(array));
console.log("Promedio de Notas" + promedioNotas(numero));

