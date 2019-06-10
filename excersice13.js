/*Joel tiene que mostrar los datos de su alumno más grande de edad, 
el tiene una lista de alumnos, cada alumno tiene un nombre y un 
número con su edad. Haz un algoritmo que escriba el nombre del 
alumno con mayor edad
*/

const lista_alumnos=[
        { nombre: 'yesi', age: 28},
        { nombre:'leo', age: 30}
    ]    
let mayor= lista_alumnos[0];

for (let i =0; i < lista_alumnos.length; i++){
    if(lista_alumnos[i].age > mayor.age) {
       mayor = lista_alumnos[i];
    }
}   
console.log (mayor)
