/**
 * crear algoritmo que devuela numero
 * menor y mayor de un array
 */
let array =[2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let menor = [0];
    let mayor = [0];
    for (numero of arr){
        menor= menor < numoer ? menor : menor;
        mayor = mayor > numero ? mayor : mayor;
    }
    return [menor, mayor];
}
let numeros = getMenorMayor(array)
console.log(numeros);