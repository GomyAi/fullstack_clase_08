/*Joel tiene que dar un reconocimiento al alumno con mejor promedio de su clase,
 él tiene una lista de alumnos, cada alumno tiene un nombre y una lista de materias, 
 cada materia tiene su nombre y su calificación. Haz un algoritmo que escriba el nombre del alumno que tenga el promedio más alto
*/

const lista_alumnos = [
    {
        nombre: 'yesi',
        materias: [ {nombe: 'mate', cal: 9}, {nombe: 'historia', cal: 9}, {nombe: 'ingles', cal: 9}]   
    }, 
    {
        nombre: 'Mary',
        materias: [ {nombe: 'mate', cal: 8}, {nombe: 'historia', cal: 8}, {nombe: 'ingles', cal: 8}]   
    }, 
    {
        nombre: 'Candi',
        materias: [ {nombe: 'mate', cal: 10}, {nombe: 'historia', cal: 10}, {nombe: 'ingles', cal: 10}]   
    }, 
]


//const a = lista_alumnos[0].materias[0]
let suma = 0
let i=0
let j =0
let alumno = lista_alumnos[i];
promMayor = 0

for ( i = 0; i < lista_alumnos.length; i++){
    // console.log(lista_alumnos[i].materias)
    suma = 0
    for( j = 0; j < lista_alumnos[i].materias.length; j++ ){
        suma = suma + lista_alumnos[i].materias[j].cal  // 3
    }
    promedio = suma/lista_alumnos[i].materias.length
   // console.log("promedio: " + promedio)
    if (promMayor < promedio){
        promMayor = promedio
       // alumno = lista_alumnos[i]
       // console.log(alumno)
    }
}               
console.log( 'El alumno con el promedio mas alto es: ' +alumno.nombre)
