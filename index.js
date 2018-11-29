var l = document.getElementById("canvas");
var lienzo = l.getContext("2d");
var botbo = document.getElementById("clear");
botbo.addEventListener("click", borrar);
var caja = document.getElementById("numero");
var boton = document.getElementById("boton");
boton.addEventListener("click", capturar);
var col = document.getElementById("color");
var botcho = document.getElementById("cho")
botcho.addEventListener("click", selectcolor);
var colorin;

function selectcolor(){
  colorin = col.value;
}

var ancho = 300;
var largo = 300;

function capturar(){
    numerolineas = parseInt(caja.value);
    var xi = 0;
    var yi = 0;
    var xf = ancho / numerolineas;
    var yf = largo;

    for(var i = 1; i <= numerolineas; i++){
    dibujar(colorin, xi, yi, xf, yf);
    yi += (largo / numerolineas);
    xf += (largo / numerolineas);
    }
}

function dibujar(color, xinicial, yinicial, xfinal, yfinal){
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}

function borrar(){
  lienzo.clearRect(0,0,ancho, largo);
}
