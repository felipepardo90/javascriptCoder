/* botón Cotización dólar
la acción que realizará el botón es deslizar las cotizaciones en tiempo real del precio del dólar, obtenidas de un archivo json con ajax hacia el div #app
*/

$(document).ready(function(){
  $("#dolarToggle").click(function(){
    $("#app").slideToggle();
  });
});