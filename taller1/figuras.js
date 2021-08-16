// Fórmulas del cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => Math.pow(lado, 2);

// Triángulo
const perimetroTriangulo = (lado1, lado2, lado3) => lado1 + lado2 + lado3;
const areaTriangulo = (lado1, lado2, lado3) => {
    // p es es el semiperimetro
    const p = (lado1 + lado2 + lado3) / 2;
    // superficie es el área del triángulo
    //calculamos el area con el teorema de herón
    const superficie = Math.pow(p * (p-lado1) * (p-lado2) * (p-lado3), 1/2);
    return superficie;
};

// Círculo
const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => PI * Math.pow(radio, 2);

// Interacción con el usuario
function calcularPerimetroCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const value = Number(input.value);

    const perimetro = perimetroCuadrado(value);
    console.log(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const value = Number(input.value);

    const area = areaCuadrado(value);
    console.log(area); 
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("ladoTriangulo1");
    const input2 = document.getElementById("ladoTriangulo2");
    const input3 = document.getElementById("ladoTriangulo3");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    console.log(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("ladoTriangulo1");
    const input2 = document.getElementById("ladoTriangulo2");
    const input3 = document.getElementById("ladoTriangulo3");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);

    const area = areaTriangulo(value1, value2, value3);
    console.log(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("radio");
    const value = Number(input.value);

    const perimetro = perimetroCirculo(value);
    console.log(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("radio");
    const value = Number(input.value);

    const area = areaCirculo(value);
    console.log(area);
}