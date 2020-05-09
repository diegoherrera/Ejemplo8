
function sumaJavascript(a,b) {
    return a+b;
}
function sumaNormal(a:number, b:number): number {
    return a+b;
}

let sumaAnonima = function(a:number, b:number):number {
    return a+b;
}

let sumaFlecha = (a:number, b:number):number => {
    return a+b;
}



console.log("resultado de la suma sumaJavascript " + sumaJavascript(12,34));
console.log("resultado de la suma sumaNormal " + sumaNormal(12,34));
console.log("resultado de la suma sumaAnonima " + sumaAnonima(12,34));
console.log("resultado de la suma sumaFlecha " + sumaFlecha(12,34));

function sumaCallback(a, b, callback) {
    callback( a+b);
}

sumaCallback(12,34, function (retorno)  {
    let calculo = retorno + 23;
    console.log('salida de la funcion ' + calculo);
});


let sumaAnonimaCallback = function(a:number, b:number, callback) {
    callback(a+b);
}

sumaAnonimaCallback(12,34, function (retorno)  {
    let calculo = retorno + 13;
    console.log('salida de la funcion sumaAnonimaCallback ' + calculo);
});

interface ICallback {
	( dato: number ) : void;
}

let sumaFlechaCallback = function(a:number, b:number, callback:ICallback ) {
    callback(a+b);
}

sumaFlechaCallback(12,34,  (retorno) =>  {
    let calculo = retorno + 13;
    console.log('salida de la funcion sumaFlechaCallback ' + calculo);
});