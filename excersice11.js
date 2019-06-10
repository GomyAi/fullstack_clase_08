/*
Problema el teléfono más barato
Crea un algoritmo que imprima la marca, modelo y precio del teléfono más barato del arreglo stock
*/

const stock = [
    { marca: "Huawei", modelo: "P30", precio: 13500 },
	{ marca: "Apple", modelo: "iPhone x", precio: 20000 },
	{ marca: "Motorola", modelo: "Moto X", precio: 10000 }
]

let menor= stock[0];


for (let i =0; i < stock.length; i++){
    if(stock[i].precio < menor.precio) {
       menor = stock[i];
    }
}   
console.log (menor)