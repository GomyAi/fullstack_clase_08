/* Joel tiene que pagar impuestos, él tiene una lista de ingresos y gastos, 
cada ingreso está representado en número y significan pesos, cada gasto tiene un concepto (texto) 
y el total del gasto en pesos. 
Los impuestos que debe pagar son el 16% de sus ingresos menos el total
 de sus gastos que estén bajo el concepto de: “salud”
*/


const lista_ingresos = {
    pesos: [15000, 15500]
}

const lista_gastos = [
    {
        gastos: "gym",
        totalgastos: 700
    },
    {
        gastos: " super",
        totalgastos: 2000
    },
    {
        gastos: "diversion",
        totalgastos: 3499
    },]

let i = 0;
let j = 0
let salario_total = 0
let gastos = 0

for (i; i < lista_ingresos.pesos.length; i++) {
    salario_total = salario_total + lista_ingresos.pesos[i]
} let impuestos = salario_total * 0.16
let total = salario_total - impuestos

for (j; j < lista_gastos.length; j++) {
    gastos = gastos + lista_gastos[j].totalgastos
}
let final = total - gastos
console.log('tu salario menos el 16%  es de: $' + total +
    ' pagas de impuestos $' + impuestos + '\n' +
    'tus gastos (concepto salud) : $' + gastos + '\n' +
    'Los impuestos que debe pagar son el 16% de sus ingresos menos el tota de gastos $' + final
)
