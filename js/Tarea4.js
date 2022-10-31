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

RestaRecursiva(1000);
