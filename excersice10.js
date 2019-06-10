/*Problema crédito total
Crea un algoritmo que imprima la suma de el total de crédito que tiene en tarjetas el objeto persona

*/

const alumnos = {
	nombre: "John Doe",
    tarjetas: [
        {
            credito: 19000 
        },
        {
            credito: 50000
        },
        {
            credito: 50000
        }
    ]
}

//console.log(alumnos.tarjetas[1].credito)
let suma_tarjetas = 0
for (let i =0; i < alumnos.tarjetas.length; i++ ){
    //suma_tarjetas = suma_tarjetas + persona.tarjetas[i].credito
    suma_tarjetas += alumnos.tarjetas[i].credito
}
console.log( 'la suma total de las tarjetas es: '+ suma_tarjetas)
