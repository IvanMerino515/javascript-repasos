
let number = 20;

// Operadores de asignacion

    //Operadores --  Suma (+=) --------------------- 
    number += 40; 
    console.log(number)

    //Operadores --  resta (-=) --------------------- 
    number -= 40; 
    console.log(number)

    //Operadores --  multiplicación (*=) --------------------- 
    number *= 40; 
    console.log(number)

    //Operadores --  division (/=) --------------------- 
    number /= 40; 
    console.log(number)

    //Operadores --  resto (%=) --------------------- 
    number %= 30; 
    console.log(number)

    //Operadores --  exponentes (**=) --------------------- se utiliza para sacar el cuadrado o el cubo de un numero.
    number **= 10; 
    console.log(number)


// concatenación utilizando (`)----------------------------

    const name = "Iván"
    const frase = `soy ${name} y estoy estudiando Javascript`;
    console.log(frase);

// Operadores de comparación --------------------------------
    
    const numbera = 40;
    const numberb = 40;

    //preguntamos si es igual numbera y numberb;   
    console.log(numbera == numberb);  

    // Preguntamos si son diferentes;  // Vale también para Strings
    console.log(numbera != numberb);

    const numberc = "40"
    //preguntamos si son extrictamente iguales // dato y valor
    console.log(numbera === numberc);

    // preguntamos si son extrictamente diferentes // Dato y valor
    console.log(numbera !== numberc );

    // preguntamos si es mayor, igual o menor;
    console.log(numbera > numberb);
    console.log(numbera >= numberb);
    console.log(numberb < numbera);

// Operadores lógicos 

    const numero = 12
    const numerob = 24

    const iguales = numero > numerob;
    const igualesb = numerob > numero
    

    // Preguntamos si las condiciones se cumplen muestra True (&&)
    console.log(iguales && igualesb);
    // Si hay algo verdadero, nos dará verdadero, con que se cumpla una de las condiciones nos dará TRUE (||)
    console.log(iguales || igualesb);
    // Nos devuelve lo contrario, si es falso nos dará verdadero (!)
    console.log(!iguales)
    

// en una operación primero se resuelven los parentesis;

    num1 = 12;
    num2 = 24;
    num3 = 25;
    num4 = 92;
    num5 = 91;

    op = (num1 < num2 || num2 < num3) && (!num1 && num5 != num3);
                //  op = (true|| true) && (false && true);
                //  op = true && false;
                //  op = false;
    console.log (op)


// Condicionales -- ejecuta bloques de codigo para validar. Los bloques están dentro de {}

  //   if ( 4 === 4 ){
  //  console.log ("correcto");
  //  }
  // else if (condicion){
  //      console.log(imprimimos)
  //  };

  //  else {
  //     console.log(imprimimos)
  //  } 
     

// arrays -- una variable donde almacenamos varios valores -- let array1 = ["fruta", 3, true, "coche"]

const array = ["fruta", "manzana", "sandia"]

console.log(array[0])

// variables asociativos

const pc = {
    nombre : "MacProBook",
    capacidad: "16gb",
    color: "rojo",
    precio: 1100,
    estrenado: true
    
}

const nombre = pc["nombre"];
const capacidad = pc["capacidad"];
const color = pc ["color"];
const precio = pc ["precio"];

console.log(`mi ordenador es un ${nombre} es ${color} y su precio es de ${precio} €`);

// bucles 

let numberbucle = 0;

// while (bucle indeterminado)
while (numberbucle < 5){
    numberbucle ++;
    console.log(numberbucle);
}

// do while (bucle indeterminado)


do {
    numberbucle ++;
    console.log(numberbucle + " mojones")

}

while (numberbucle <=50 -1);

let numberbucle2 = 2;

while (numberbucle2 <500){
    numberbucle2 ++ ;
    console.log(numberbucle2);
    
    if (numberbucle2 ==40){
        break;
    }
}

// for 
// -- Las tres partes del bucle for
// Declaramos
// inciamos
// iteramos
// --

let i = 6
for (let i =6; i>=0; i-- ){
    console.log(i)

}


// for in ---- el bucle está creado y te da la posición

let animals = ["gato", "perro", "tortuga", "elefante"]

for (animal in animals ) {
    console.log(animal)
}


// for of --- el bucle está creado y te da el valor

for (animal of animals){
    console.log(animal)
}

// funciones

 function suma (num1,num2){
    let resultado = num1 + num2;
    console.log(resultado)

 }

 suma (20,10)

// funciones de flecha. (la manera que hay que hacer) 
 const suma2 = (num1,num2) =>{
    let resultado = num1 + num2;
    console.log(resultado)

 }

const cuentaAtras = () =>{
    for (let number = 10; number >=0; number--){
        console.log(number);
    }
}

cuentaAtras()

// objetos -- Sirven para guardar por parejas

const object = {
    name: 'Laura',
    age: 23,
    isActive: true,
    automovil: ['nexus6','opel corsa' ]
}

console.log()

// DOM -- v