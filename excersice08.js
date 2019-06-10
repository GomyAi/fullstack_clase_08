/*Problema la calificación más alta
Crea un algoritmo que imprima la calificación más alta del objeto alumno

*/

const alumno = {
    nombre: "John Doe",
    calificaciones: [7, 10, 9, 15]
}
    
let calificacion_alta =0

for (let i=0; i < alumno.calificaciones.length; i +=1){
//console.log(alumno.calificaciones[i])
    if (alumno.calificaciones[i] > calificacion_alta)
    {
        calificacion_alta = alumno.calificaciones[i];
    };
}
console.log(calificacion_alta)

