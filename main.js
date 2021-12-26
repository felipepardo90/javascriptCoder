//Contador hasta 10

let numero = parseInt(prompt("Ingresa un número"))

for (i = numero; i <= 15; i++) {
    alert(`Contador hasta 15 --->${i}`)
}

// ingreso

let nombre = prompt("Ingrese un usuario válido: CARLOS, ANA, JUAN GABRIEL o MELINA. Escriba 'ESC' para salir")

while (nombre != "ESC") {
    switch (nombre) {

        case "CARLOS":
            alert("HOLA CARLOS");
            break;
        case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN GABRIEL":
            alert("HOLA JUAN GABRIEL");
            break;
        case "MELINA":
            alert("HOLA MELINA");
            break;
        default:
            alert("Usuario no válido")
            break
    }
    nombre = prompt(" Ingrese un usuario válido. Escriba 'ESC' para salir")
}

// repetición 

let numerox = parseInt(prompt("Ingresa un número menor o igual a 5"))

for (i = 1; i <= 5; i++) {
    alert(`Hola. Esta es la iteración N° --->${i}`)
    if (i == numerox) {
        break
    }
}
alert("Fin del ciclo")