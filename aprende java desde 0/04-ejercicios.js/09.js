/**
 * crear algoritmo que devuelva un 
 * array de objetos en base de pares
 */

let pares = [
    [1, {id: 1, name: "nicolas"}],
    [2, {id: 2, name: "felipe"}],
    [3, {id: 3, name: "chanchito"}],
];

let array = [{
    id: 1,
    name: "nicolas",
    },  { 
        id: 2,
        name: "felipe",
    }, {
            id:3,
            name: "chanchito",
}];

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento =arr [idx];
        collection[idx] = elemento [1]
        collection [idx].id = elemento [0];

    }
    return collection;

}
let resultado = toCollection(pairs);
console.log(resultado);
