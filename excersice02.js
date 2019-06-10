/*Crea un algoritmo que imprima la suma de los valores de esta matriz*/

const arreglo = [
    [1, 2, 3, 4], 
    [5, 6, 7, 8],
    [9, 10, 11, 12]

    ]
let  suma_matriz=0;
for (let i =0; i < arreglo.length; i++ ){
    for (let j =0 ;j< arreglo[i].length; j++){ //aqui debes de entrar al arreglo [i] para comenzar a leer los elementos dentro
        suma_matriz = suma_matriz + arreglo[i][j]
    }
}
console.log('suma' + suma_matriz)