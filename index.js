// ARREGLOS
const arrayVacio = [];

const arrayNumero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayNumerosPares = [0, 2, 4, 6, 8];

const arrayBidimensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];

// FUNCIONES
function suma(a, b) {
  return a + b;
}

function potencia(a, b) {
  return a ** b;
}
const separarPalabras = (string) => {
  return string.split(" ");
};

const repetirString = (string, num) => {
  return string.repeat(num);
};
const esPrimo = (num) => {
  for (let i = 2; num < i; ++i) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

// Mezclando arreglos y funciones

const ordenarArray = (arrayNum) => {
  return arrayNum.sort();
};

const obtenerPares = (arrayNum) => {
  for (let num of arrayNum) {
    if (num % 2 == 0) {
      return num;
    }
  }
};

const pintarArray = (array) => {
  for (let string of arrayNum) {
    return string.toString();
  }
};

const arrayMapi = (array) => {
  return array.map((x) => x * 2);
};

const eliminarDuplicados = (array) => {
  const dataArray = new Set(array);
  return [...dataArray];
}
// arreglos
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

const holaMundo = ["Hola", "Mundo"];

const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

const arrayDeArrays = [
  [756, "nombre"],
  [225, "apellido"],
  [298, "direccion"],
]

// Funciones
const multiplicacion = (a, b) => {
  return a * b;
}

const division = (a, b) => {
  return a / b;
}

const esPar = (x) => {
  if (x % 2 == 0) {
    return x;
  } else return false;
}

const arrayFunciones = (x,y,oper) => {
    if(oper == '+') {
        return x + y
    } else if (oper == '-') {
        return x - y
    } else if (oper == '*') {
        return x * y
    } else return 'operacion no disponible'

}

// Mezclando arreglos y funciones

const ordenarArray2 = (arrayNum) => {
    return arrayNum.sort().reverse();

}
const obtenerImpares = (arrayNum) => {
    for(let impar of arrayNum) {
        if(impar %2 != 0) {
            return impar
        }
    }
}

const sumarArray = (arrayNum) => {
    let sum = arrayNum.reduce(function(a, b){
        return a + b;
    })            
    }
const multiplicarArray = (arrayNum) => {
    let multiply = arrayNum.reduce(function(a, b){
        return a * b;
    })            
}


