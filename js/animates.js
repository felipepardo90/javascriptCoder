// ANIMACION CON jQUERY

$("#boton").click(function() {
    var formTitulo = $(".form__titulo");
    formTitulo.animate({
        fontSize: '48px',
        opacity: '0.6',
    }, "slow");
    formTitulo.animate({
        fontSize: '32px',
        opacity: '1',
    }, "slow");
    $("#tabla").fadeOut("slow");
    $("#tabla").fadeIn("slow");
});