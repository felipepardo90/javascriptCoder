/* botón Cotización dólar
la acción que realizará el botón es deslizar las cotizaciones en tiempo real del precio del dólar, obtenidas de un archivo json con ajax hacia el div #app
*/

$(document).ready(function () {
  $("#dolarToggle").click(function () {
    $("#app").slideToggle();
  });
});

/*ANIMACIóN PARA NAVBAR RESPONSIVE -- 
en este caso la función abrirá un ícono que se muestra en dispositivos pequeños*/

$(document).ready(function () {
  $("#icon").click(function () {
    $("ul").toggleClass("show");
  });
});

/**
 push de datos a array
 */

let tablaPrestamo = [];

const botonTabla = document.getElementById("botonTabla");

botonTabla.addEventListener("click", () => {
  tablaPrestamo.push(nuevoPrestamo);
  document.getElementById(
    "tabla"
  ).innerHTML += `<tbody><td>${nuevoPrestamo.nombre}</td><td>${nuevoPrestamo.apellido}</td><td>${nuevoPrestamo.dni}</td><td>${nuevoPrestamo.monto}</td><td>${nuevoPrestamo.cuotas}</td><td>${nuevoPrestamo.valorCuotas}</td></tbody>`;
  // alert(`Solicitaste un préstamo por ${nuevoPrestamo.monto} a pagar en ${nuevoPrestamo.cuotas} cuotas. El valor final de cada cuota será de ${nuevoPrestamo.valorCuotas}. ¿Desea continuar? `)

  localStorageTablaPrestamo(tablaPrestamo);

  // console.log(tablaPrestamo);
});
