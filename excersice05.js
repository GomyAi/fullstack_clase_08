/*Problema partidas ganadas
Crea un algoritmo que imprima la cantidad de partidas ganadas por el objeto jugador

*/

const jugador = {
	nombre: "John Doe",
	partidas: [true, false, true, true]
}


let total_partidas =0

for (let i=0; i < jugador.partidas.length; i +=1){
    if (jugador.partidas[i]){
        total_partidas = total_partidas + 1
    }
}
console.log(total_partidas)


