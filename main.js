let numero1 = parseInt(prompt("Ingrese un número mayor a 1000"))

if (numero1 > 1000) {
    alert("El número A ingresado es mayor a 1000")
} else {
    alert("El número ingresado no es mayor a 1000")
}

///

let nombreUsuario = prompt("Ingrese su nombre de usuario")

if (nombreUsuario == "Felipe") {
    console.log("Hola " + nombreUsuario);
} else {
    console.log("¿Quién ***** sos?");
}

///

let numero2 = parseInt(prompt("Ingrese un número entre 10 y 50"))

if ((numero2 > 10) && (numero2 < 50)) {
    alert("El valor ingresado es óptimo")
} else {
    alert("El número ingresado no está entre 10 y 50")
}