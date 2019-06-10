/*Problema temperatura
Crea un algoritmo que imprima la temperatura más alta */
const temperaturas = [
    19, 24, 25, 30, 10
    ]
    
    let mayor = 0;
 
    for(let i = 0; i < temperaturas.length; i++){
        if (temperaturas[i] > mayor)
        {
            mayor = temperaturas[i];
        };
    }
    console.log(mayor)