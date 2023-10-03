function setup() {
    canvas = createCanvas(640, 490);
    background("blue");
    cocos = ml5.objectDetector("cocossd", listo)
}
function preload() {
    foto = loadImage(localStorage.getItem("foto"));
}
function draw() {
    foto.resize(640, 480);
    image(foto, 0, 0, 648, 490)
    if (detect) {
        document.getElementById("status").innerHTML = lista.length + "objetos detectados";
        for (var i = 0; i < lista.length; i++) {
            elemento = lista[i];
            noFill()
            stroke("blue")
            strokeWeight(5)
            rect(elemento.x, elemento.y, elemento.width, elemento.height)
            fill("red")
            noStroke()
            textSize(25)
            confianza = Math.round(elemento.confidence * 100);
            texto = elemento.label + "" + confianza + "%"
            text(texto, elemento.x, elemento.y)
        }
    }
}
function listo() {
    console.log("cocossd esta listo")
    cocos.detect(foto, respuesta)
}
var detect = false;
var lista = [];
function respuesta(error, resultados) {
    if (!error) {
        console.log(resultados)
        detect = true
        lista = resultados;
    }
}
function siguiente(numero) {
    switch (numero) {
        case 1: localStorage.setItem("foto", "dog_cat.jpg"); break;

        case 2: localStorage.setItem("foto,personas.jfif"); break;
        case 3: localStorage.setItem("foto", "objetos de casa.jpg"); break;
        case 4: localStorage.setItem("foto", "autopista.jfif"); break;
        case 5: localStorage.setItem("foto", "perro casa auto.jfif"); break;
    }
    window.location = "cocosSD.html"
}