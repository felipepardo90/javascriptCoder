$("body").css({
  "background-color": "orangered",
  height: "100vh",
  "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
});

/*

CONSTRUCTOR de CLASE

*/

class Prestamo {
  constructor(monto, cuotas, nombre, apellido, dni) {
    // Tasa Nominal Anual (TNA) sin IVA: Mínima: 45% - Máxima 70%
    this.monto = monto;
    this.cuotas = cuotas;
    this.valorCuotas = 0;
    //Agregar a lista posterior los siguientes datos del solicitante
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
  }
  amortizacion() {
    if (this.monto >= 100000) {
      this.valorCuotas = ((this.monto * 1.45) / this.cuotas).toFixed(3);
    } else {
      this.valorCuotas = ((this.monto * 1.7) / this.cuotas).toFixed(3);
    }
  }
}

/*

FUNCION DESDE EL BOTÓN DEL FORM EN HTML

*/

function pushDatos() {

  // PRÉSTAMO

  const seleccionarMonto = document.getElementById("monto").value;
  const seleccionarCuotas = document.getElementById("cuotas").value;

  // PERSONA

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const dni = document.getElementById("dni").value;

  nuevoPrestamo = new Prestamo(seleccionarMonto, seleccionarCuotas, nombre, apellido, dni);

  let valorCuotas = nuevoPrestamo.amortizacion();

  
}

/* AGREGANDO TABLA AL LOCAL STORAGE*/

function getTablaPrestamo() {
  let storedList = localStorage.getItem("localTablaPrestamo");
  if (storedList == null) {
    tablaPrestamo = [];
  } else {
    tablaPrestamo = JSON.parse(storedList);
  }
  return tablaPrestamo;
}

function localStorageTablaPrestamo(plist) {
  localStorage.setItem("localTablaPrestamo", JSON.stringify(plist));
}
