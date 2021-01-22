//Declaración de variables
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const nueve = document.getElementById("nueve");
const cero = document.getElementById("cero");
let visor = document.getElementsByClassName("visor");
const limpiar = document.getElementById("limpiar");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multiplica = document.getElementById("multiplica");
const divide = document.getElementById("divide");
const igual = document.getElementById("resultado");
let visorContenido = "";

let primero = 0;
let segundo = 0;
let resul = 0;
let operacion = "";

//Declaración de Funciones Botones Numericos
uno.addEventListener("click", function () {
visor[0].textContent = visor[0].textContent + uno.textContent; //debe conservar el valor actual (visor[0].textContent) y a su vez el contenido del boton 1
});

dos.addEventListener("click", function () {
visor[0].textContent += dos.textContent;//esto es una abreviacion de la sentencia de la linea 25 de codigo
});
tres.addEventListener("click", function () {
visor[0].textContent += tres.textContent;
  });
cuatro.addEventListener("click", function () {
visor[0].textContent += cuatro.textContent;
  });
cinco.addEventListener("click", function () {
visor[0].textContent += cinco.textContent;
  });
seis.addEventListener("click", function () {
visor[0].textContent += seis.textContent;
  });
siete.addEventListener("click", function () {
visor[0].textContent += siete.textContent;
  });
ocho.addEventListener("click", function () {
visor[0].textContent += ocho.textContent;
  });
nueve.addEventListener("click", function () {
visor[0].textContent += nueve.textContent;
  });
cero.addEventListener("click", function () {
visor[0].textContent += cero.textContent;
  });
//Declaración de funcion boton limpiar
limpiar.addEventListener("click", function () {
  visor[0].textContent = "";
});

const sumar = function() {
    primero = parseFloat(visor[0].textContent); //parseFloat:transforma cadena de texto string a decimales y parseInt:transforma cadena de texto string a entero
    operacion = "+";
    visor[0].textContent = "";
}

const restar = function() {
    primero = parseFloat(visor[0].textContent);
    operacion = "-";
    visor[0].textContent = "";
}

const dividir = function() {
    primero = parseFloat(visor[0].textContent);
    operacion = "/";
    visor[0].textContent = "";
}

const multiplicar = function() {
    primero = parseFloat(visor[0].textContent);
    operacion = "*";
    visor[0].textContent = "";
}

igual.addEventListener("click", function(){
    segundo = parseFloat(visor[0].textContent);
       switch(operacion){       //condicional igual a if pero mas cerrada ya que acepta solo una variable bajo casos predefinidos
        case "+":
            result = primero + segundo;
            break;            //le dice a switch que ya encontro el caso que necesita y que ignore el resto de los casos. Pone fin al switch.

        case "/":
              result = primero / segundo;
              break;
        case "-":
            result = primero - segundo;
            break;

        case "*":
            result = primero * segundo;
            break;

       
    }


    primero = 0;
    segundo = 0;
    operacion = "";
    visor[0].textContent = ""+result;
});

suma.addEventListener("click", sumar);
resta.addEventListener("click", restar);
divide.addEventListener("click", dividir);
multiplica.addEventListener("click", multiplicar);
