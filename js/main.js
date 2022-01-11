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


function capturar() {

    function Prestamo(monto, cuotas) {

        this.monto = monto
        this.cuotas = cuotas
        alert(`Vas a solicitar un préstamo de ${monto} a pagar en ${cuotas} cuotas. ¿Deseas continuar?`)

    }

    let seleccionarMonto = document.getElementById("monto").value
    let seleccionarCuotas = document.getElementById("cuotas").value

    console.log(seleccionarMonto, seleccionarCuotas)

    nuevoPrestamo = new Prestamo(seleccionarMonto, seleccionarCuotas)
    console.log(nuevoPrestamo)
    agregar()
}

let database = []

function agregar() {
    database.push(nuevoPrestamo)
    console.log(database)
}