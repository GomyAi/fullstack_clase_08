/*Problema cotizando el teléfono más barato
Crea un algoritmo que imprima la marca, modelo, precio del teléfono más barato y 
el nombre de la tienda donde se puede comprar usando el arreglo store

*/
const stores = [{
    name: "Amazon",
    stock: [
		{ marca: "Huawei", modelo: "P30", precio: 11999 },
		{ marca: "Apple", modelo: "iPhone x", precio: 18000 },
		{ marca: "Motorola", modelo: "Moto X", precio: 9000 }
]
},
{
    name: "Liverpool",
    stock: [
		{ marca: "Huawei", modelo: "P30", precio: 13500 },
		{ marca: "Apple", modelo: "iPhone x", precio: 20000 },
		{ marca: "Motorola", modelo: "Moto X", precio: 10000 }
]
}
]       

let menor= stores[0].stock[0]
let tienda = stores[0].name
//console.log(menor)
for (let i =0; i < stores.length; i++){
    for (let j =0; j < stores[i].stock.length; j++){
       // console.log(stores[i].stock[j])
        if (stores[i].stock[j].precio < menor.precio ){
            menor = stores[i].stock[j]
            tienda = stores[i].name


        }
    } 
}   


console.log (menor, tienda)
