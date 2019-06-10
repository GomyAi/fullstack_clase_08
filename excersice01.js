/*Crea un algoritmo que imprima la suma de los valores de este arreglo
///////SUMA//////*/

const suma = [1,2,4,6,9,10,50,30]

total_Suma = 0
for (let i =0; i < suma.length; i ++ ){
    total_Suma = total_Suma + suma[i]
}
console.log ('Tu suma es: ' + total_Suma)
