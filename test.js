function sumaJavascript(a, b) {
    return a + b;
}
function sumaNormal(a, b) {
    return a + b;
}
var sumaAnonima = function (a, b) {
    return a + b;
};
var sumaFlecha = function (a, b) {
    return a + b;
};
console.log("resultado de la suma sumaJavascript " + sumaJavascript(12, 34));
console.log("resultado de la suma sumaNormal " + sumaNormal(12, 34));
console.log("resultado de la suma sumaAnonima " + sumaAnonima(12, 34));
console.log("resultado de la suma sumaFlecha " + sumaFlecha(12, 34));
function sumaCallback(a, b, callback) {
    callback(a + b);
}
sumaCallback(12, 34, function (retorno) {
    var calculo = retorno + 23;
    console.log('salida de la funcion ' + calculo);
});
var sumaAnonimaCallback = function (a, b, callback) {
    callback(a + b);
};
sumaAnonimaCallback(12, 34, function (retorno) {
    var calculo = retorno + 13;
    console.log('salida de la funcion sumaAnonimaCallback ' + calculo);
});
var sumaFlechaCallback = function (a, b, callback) {
    callback(a + b);
};
sumaFlechaCallback(12, 34, function (retorno) {
    var calculo = retorno + 13;
    console.log('salida de la funcion sumaFlechaCallback ' + calculo);
});
