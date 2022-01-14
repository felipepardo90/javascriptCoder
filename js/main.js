// function solicitarPréstamos() {

//     if (montoInicial > 50000) {
//         alert("No están aprobados préstamos mayores a 50.000")
//     } else if (montoInicial < 10000) {
//         alert("No están aprobados préstamos menores a 10.000")
//     } else {
//         alert("Su préstamo personal fue aprobado")
//     }
// }


// function sumarIva(montoInicial, iva) {
//     let montoFinal = montoInicial * iva
//     return montoFinal
// }


// function valorFinal() {
//     alert(`El cálculo final de su préstamo con IVA es de ${montoFinal}`)
// }

// let montoInicial = parseInt(prompt("Ingresa un monto"))
// const iva = 1.215 //TNA 21.5
// let montoFinal = sumarIva(montoInicial, iva)
// solicitarPréstamos()
// sumarIva(montoInicial, iva)
// valorFinal()

class Prestamo {
    constructor(monto, cuotas) {

        // Tasa Nominal Anual (TNA) sin IVA: Mínima: 45% - Máxima 70%
        this.monto = monto
        this.cuotas = cuotas
        this.valorCuotas = 0
    }
    amortizacion() {
        if (this.monto >= 100000) {
            this.valorCuotas = (this.monto * 1.45) / this.cuotas
        } else {
            this.valorCuotas = (this.monto * 1.70) / this.cuotas
        }
    }

}


function calcular() {

    const seleccionarMonto = document.getElementById("monto").value
    const seleccionarCuotas = document.getElementById("cuotas").value

    // console.log(seleccionarMonto, seleccionarCuotas)

    nuevoPrestamo = new Prestamo(seleccionarMonto, seleccionarCuotas)

    // console.log(nuevoPrestamo)

    let valorCuotas = nuevoPrestamo.amortizacion()


    agregar()
}

let tablaPrestamo = []

function agregar() {
    tablaPrestamo.push(nuevoPrestamo)
    console.log(tablaPrestamo)
    document.getElementById("tabla").innerHTML += `<tbody><td>${nuevoPrestamo.monto}</td><td>${nuevoPrestamo.cuotas}</td><td>${nuevoPrestamo.valorCuotas}</td></tbody>`
    alert(`Solicitaste un préstamo por ${nuevoPrestamo.monto} a pagar en ${nuevoPrestamo.cuotas} cuotas. El valor final de cada cuota será de ${nuevoPrestamo.valorCuotas}. ¿Desea continuar? `)
}

tablaPrestamo.sort((a, b) => {
    if (a > b) {
        return -1
    }
    if (a < b) {
        return -1
    }
    return 0
})