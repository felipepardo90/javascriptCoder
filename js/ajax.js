/*
LLamada a API de cotización de dólar en tiempo real con fetch, 
filtrando datos en una constante y luego integrarlos al cuerpo con DOM
*/ 
function fetchData() {
  fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Filtrar datos en la constante filteredOutput (salida)
      const filteredOutput = data.filter((item) => {
        switch (item.casa.nombre) {
          case "Dolar Blue":
          case "Dolar Oficial":
          case "Dolar turista":
          case "Dolar Contado con Liqui":
          case "Dolar":
            return item;
            break;
          default:
            return null;
        }
      });
      let html = "";
      // Integrando datos de la API en el HTML
      filteredOutput.forEach((item) => {
        html += '<div class="user container">';
        html += `<p>💵${item.casa.nombre}</p>`;
        html += `<p>Compra: $${item.casa.compra}</p>`;
        html += `<p>Venta: $${item.casa.venta}</p>`;
        html += `<p>Variación:⬆️ ⬇️ ${item.casa.variacion}</p>`;
        html += "</div>";
      });

      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    });
}

fetchData();
