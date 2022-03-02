/* botón Cotización dólar jQuery
la acción que realizará el botón es deslizar las cotizaciones en tiempo real del precio del dólar, obtenidas de un archivo json con ajax hacia el div #app
*/

$(document).ready(function () {
  $("#dolarToggle").click(function () {
    $("#app").slideToggle();
  });
});

/*ANIMACIóN PARA NAVBAR RESPONSIVE --  jQuery
en este caso la función abrirá un ícono que se muestra en dispositivos pequeños*/

$(document).ready(function () {
  $("#icon").click(function () {
    $("ul").toggleClass("show"); // clase especificada en media queries en _navbar.scss
  });
});

/*MOSTRAR mediante un botón  el valor de las cuotas del préstamo jQuery*/

// $(document).ready(function () {
//   $("#boton").click(function () {
//     $("#valorCuotas").fadeIn(4000);
//   });
// });

const boton = document.getElementById("boton");

boton.addEventListener("click", simulation);

function simulation (seleccionarMonto, seleccionarCuotas){
  
  
    document.getElementById(
      "valorCuotas"
    ).innerHTML = `<h6 style="color:#0064e0">Tus cuotas a pagar serán de</h6><br><p style="color:#2a80f1;font-size: 48px;">${nuevoPrestamo.valorCuotas}</p>`;
  
  }


