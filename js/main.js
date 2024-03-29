$("body").css({
  "background-color": "#fffdff",
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

  nuevoPrestamo = new Prestamo(
    seleccionarMonto,
    seleccionarCuotas,
    nombre,
    apellido,
    dni
  );

  let valorCuotas = nuevoPrestamo.amortizacion();
}

/*

 push de datos a array
 
 */

let tablaPrestamo = [];

const botonTabla = document.getElementById("botonTabla");

botonTabla.addEventListener("click", () => {
  tablaPrestamo.push(nuevoPrestamo);
  document.getElementById(
    "tabla"
  ).innerHTML += `<tbody><td>${nuevoPrestamo.nombre} ${nuevoPrestamo.apellido}</td><td>${nuevoPrestamo.dni}</td><td>${nuevoPrestamo.monto}</td><td>${nuevoPrestamo.cuotas}</td><td>${nuevoPrestamo.valorCuotas}</td></tbody>`;
  // alert(`Solicitaste un préstamo por ${nuevoPrestamo.monto} a pagar en ${nuevoPrestamo.cuotas} cuotas. El valor final de cada cuota será de ${nuevoPrestamo.valorCuotas}. ¿Desea continuar? `)

  localStorageTablaPrestamo(tablaPrestamo);

  // console.log(tablaPrestamo)
});


/* AGREGANDO TABLA AL LOCAL STORAGE*/

function getTablaPrestamo() {
  let storedList = localStorage.getItem("localTablaPrestamo");

    if (storedList === "") {
    tablaPrestamo = []
  } else {
    tablaPrestamo = JSON.parse(storedList)
  }
  return tablaPrestamo
}



function localStorageTablaPrestamo(plist) {
  localStorage.setItem("localTablaPrestamo", JSON.stringify(plist));
}

/*

VALIDACIÓN

*/

const btnEnviar = document.getElementById("boton");

const validate = (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const dni = document.getElementById("dni");
  const monto = document.getElementById("monto");
  const cuotas = document.getElementById("cuotas");
  if (nombre.value === "") {
    alert("Por favor, escribe tu nombre");
    nombre.focus();
    return false;
  } else if (apellido.value === "") {
    alert("Por favor, escribe tu apellido");
    apellido.focus();
    return false;
  } else if (dni.value === "") {
    alert("Por favor, ingresa tu DNI");
    dni.focus();
    return false;
  } else if (monto.value === "") {
    alert("Por favor, ingresa un monto");
    monto.focus();
    return false;
  } else if (cuotas.value === "") {
    alert("Por favor, ingresa la cantidad de cuotas");
    cuotas.focus();
    return false;
  } else {
    return true;
  }
};

btnEnviar.addEventListener("click", validate);


  
  


