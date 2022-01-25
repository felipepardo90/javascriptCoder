class Prestamo {
    constructor(monto, cuotas) {

        // Tasa Nominal Anual (TNA) sin IVA: Mínima: 45% - Máxima 70%
        this.monto = monto
        this.cuotas = cuotas
        this.valorCuotas = 0
    }
    amortizacion() {
        if (this.monto >= 100000) {
            this.valorCuotas = ((this.monto * 1.45) / this.cuotas).toFixed(3)
        } else {
            this.valorCuotas = ((this.monto * 1.70) / this.cuotas).toFixed(3)
        }
    }

}


let tablaPrestamo = []


const boton = document.getElementById("boton")

boton.addEventListener("click", function agregar() {
    tablaPrestamo.push(nuevoPrestamo)
    console.log(tablaPrestamo)
    document.getElementById("tabla").innerHTML += `<tbody><td>${nuevoPrestamo.monto}</td><td>${nuevoPrestamo.cuotas}</td><td>${nuevoPrestamo.valorCuotas}</td></tbody>`
    alert(`Solicitaste un préstamo por ${nuevoPrestamo.monto} a pagar en ${nuevoPrestamo.cuotas} cuotas. El valor final de cada cuota será de ${nuevoPrestamo.valorCuotas}. ¿Desea continuar? `)
})


function calcular() {

    const seleccionarMonto = document.getElementById("monto").value
    const seleccionarCuotas = document.getElementById("cuotas").value

    // console.log(seleccionarMonto, seleccionarCuotas)

    nuevoPrestamo = new Prestamo(seleccionarMonto, seleccionarCuotas)

    // console.log(nuevoPrestamo)


    let valorCuotas = nuevoPrestamo.amortizacion()


    agregar()
}