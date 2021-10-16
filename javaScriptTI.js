function resumen() {
    var categ = document.getElementById("categoria");
    var texto = categ.options[categ.selectedIndex].text;
    var cant = document.getElementById("cantidad").value;
    var subtotal = 200*cant;
    switch (texto) {
        case "Estudiante":
            var descuento = 80/100;
            break;
    
        case "Trainee":
            var descuento = 50/100;
            break;

        case "Junior":
            var descuento = 15/100;
            break;

        default:
            console.log("algo salio mal");
            break;
    }
    var suma = subtotal*descuento;
    var total = subtotal - suma;
    console.log("Total a pagar: $"+total);
    var nuev = document.createElement('span');
    var relleno = document.createTextNode(total);
    nuev.appendChild(relleno);
    document.getElementById("total").appendChild(nuev);
}
function borrar(){
    var totoal = document.getElementById("total");
    totoal.removeChild(totoal.childNodes[1]);
}