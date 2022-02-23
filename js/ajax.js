
function fetchData() {
  fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")

    .then(response => {
      return response.json();
    })
    .then(data => {
      const filteredOutput = data.filter(item => {
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
      })
      let html = "";
      filteredOutput.forEach(item => {
        html += "<div class=\"user container\">";
        html += `<p>${item.casa.nombre}</p>`;
        html += `<p>Compra: ${item.casa.compra}</p>`;
        html += `<p>Venta: ${item.casa.venta}</p>`;
        html += `<p>Variación: ${item.casa.variacion}</p>`;
        html += "</div>";
      })

      document
        .querySelector('#app')
        .insertAdjacentHTML("afterbegin", html);
    });
}

fetchData();