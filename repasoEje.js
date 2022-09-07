// Generar una variable con cada tipo de dato 
let num = 4;
let letras = 'Deni'
let FalsoVerdadero = true; 
let obj = {

};

let cochecito = {
    color: 'azul',
    modelo: 2018,
    tipo: 'hatchback',
    marca: 'toyota'
};

let arreglo = [1, 3, 5, 6, 8, 9, 23, 57];

let inicio = 0;

while (inicio >= 0 && inicio < 10) {
    console.log('Deni');
    inicio += 1; 
};



function lectorDeEdad(edad){
    if (edad < 18){
        console.log('no puedo usar tus datos personales');
    }else {
        console.log('Bienvenido');
    }
};

console.log(lectorDeEdad(18));

let usuario = {
    nombre: 'juan',
    edad: 20,
    contrasenia: 'password*2022'
};

for (const propiedad in usuario) {
   console.log(usuario[propiedad]);
}

let frutas = ['fresa', 'melon', 'mango', 'kiwi'];

for (const i  of frutas) {
    console.log(i);
}


