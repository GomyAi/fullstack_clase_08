/* Joel tiene que pagar impuestos, él tiene una lista de ingresos y gastos, 
cada ingreso está representado en número y significan pesos, cada gasto tiene un concepto (texto) 
y el total del gasto en pesos. 
Los impuestos que debe pagar son el 16% de sus ingresos menos el total
 de sus gastos que estén bajo el concepto de: “salud”
*/


const lista_ingresos = {
    pesos: [15000, 15500],
    lista_gastos: [
        {
            concepto: "gym",
            gasto: 700,
        },
        {
            concepto: "despensa",
            gasto: 1500,
        },{
            concepto: "cine",
            gasto: 500,
        },
        {
            concepto: "salud",
            gasto: 2000,
        },


    ]
}
let i = 0
let j = 0
let salario_total = 0
let gastos = 0
for (i; i < lista_ingresos.pesos.length; i++) {
    salario_total = salario_total + lista_ingresos.pesos[i]
} 
for (j; j < lista_ingresos.lista_gastos.length; j++) {
    if (lista_ingresos.lista_gastos[j].concepto == 'salud'){
        gastos +=  lista_ingresos.lista_gastos[j].gasto;
        //console.log(gastos)
    }

}
    let impuestos = (salario_total - gastos) * 0.16
    //let total = salario_total - impuestos
    console.log('impuestos a pagar $' + impuestos)

