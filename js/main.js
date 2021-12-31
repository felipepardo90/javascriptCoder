// let numero1 = parseInt(prompt("Ingresa un número"))
// let operador = prompt("Escoge un operador (+, -, * o /)")
// let numero2 = parseInt(prompt("Ingresa otro número"))

// function calculadora(numero1, operador, numero2) {
//     switch (operador) {
//         case "+":
//             return numero1 + numero2
//             break
//         case "-":
//             return numero1 - numero2
//             break
//         case "/":
//             return numero1 / numero2
//             break
//         case "*":
//             return numero1 * numero2
//             break
//         default:
//             return 0
//             break
//     }
// }

// document.write(calculadora(numero1, operador, numero2))

var promedio = function(num1, num2, num3) {
    var num1 = parseInt(document.getElementById("num1").value)
    var num2 = parseInt(document.getElementById("num2").value)
    var num3 = parseInt(document.getElementById("num3").value)

    var resultado = (num1 + num2 + num3) / 3
    return resultado
}