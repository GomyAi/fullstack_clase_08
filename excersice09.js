/*Problema bonos
Crea un algoritmo que imprima la suma de los bonos del objeto persona

*/

const persona = {
	nombre: "John Doe",
    bonos: [100, 500, 1300]
}

let suma = 0
for (let i=0; i < persona.bonos.length; i++){
    suma = suma + persona.bonos[i]
}
console.log (suma)
