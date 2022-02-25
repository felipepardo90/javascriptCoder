$("body").css({
    "background-color": "orangered",
    "height": "100vh",
    "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
});


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

function calcular() {

    const seleccionarMonto = document.getElementById("monto").value
    const seleccionarCuotas = document.getElementById("cuotas").value

    // console.log(seleccionarMonto, seleccionarCuotas)

    nuevoPrestamo = new Prestamo(seleccionarMonto, seleccionarCuotas)

    // console.log(nuevoPrestamo)

    let valorCuotas = nuevoPrestamo.amortizacion()

}



/* AGREGANDO TABLA AL LOCAL STORAGE*/

function getTablaPrestamo() {
    let storedList = localStorage.getItem('localTablaPrestamo')
    if (storedList == null) {
        tablaPrestamo = [];
    } else {
        tablaPrestamo = JSON.parse(storedList)
    }
    return tablaPrestamo
}



function localStorageTablaPrestamo(plist) {
    localStorage.setItem('localTablaPrestamo', JSON.stringify(plist))
}