let nombre;
const PI = 3.1416;
nombre = 'aldo';
let numero = 10;
let esNombre = true;
let usuario = undefined;
let auto = null;



let fruta = {
    color: 'roja',
    sabor: 'acido',
    precio: 97,
    hermana: {
        color: 'amarilla',
        sabor: 'dulce',
        precio: 110,
        hermana: {
            color: 'rosa',
            sabor: 'amarga',
            precio: 45,
            hermana: {
                color: 'azul',
                sabor: 'dulce',
                precio: 55
            }
        
        }
    
    },

    meses: ['enero','febrero']
};

let mesesDeCosecha = fruta.meses;
mesesDeCosecha[0];
mesesDeCosecha[1];
console.log(fruta.hermana.hermana.hermana.precio);

let result = 10 + 10;
console.log(result);

let concat = 'aldo' + 'aldaco';
console.log(concat);

let esHumano = true;
if(esHumano === true){
    console.log('aldo es humano');
}


// if (edad >= 18){
//     console.log('mayor de edad');
// } else {
//     console.log('es menor de edad');
// }

// switch (edad) {
//     case 18:
//         console.log('mayor de edad')
//         break;
//     case 60:
//         console.log('persona inapan')
//     default:
//         console.log('menor de edad')
//         break;
// }
let edad = 19;

while (edad > 18 && edad < 30) {
    console.log('mayor de edad');
    edad += 1; // o se puede usar operador de incrementar ++
}


for(let annie = 18; annie < 30; annie++){
    console.log('mayor de edad');
}
//primer valor es el valor inicial, segundo valor es el valor final, tercer valor es la accion que va a hacer.


const libro = {
    titulo: 'harry potter y el misterio de js',
    autor: 'aldo',
    paginas: 300
};
for (const propiedad in libro) { // i= al nombre de la propiedad de la variable el segundo valor es el nombre del objeto que queremos iterar 
    console.log(libro[propiedad]);
}

let frutas = ['fresa', 'mango', 'melon']; //El primera valor contiene el valor de las posiciones del arreglo el segundo valor es el nombre el objeto iterable 

for(let indice of frutas){ 
    
}

function imprimirNombre(nombre){
    console.log('mi nombre es' + nombre);
}

imprimirNombre('victor');


//Arrow funcions
// Los arrow funcions tienen un return por default

let correr = (numero1, numero2 ) => numero1 + numero2;//(Parametros) => Accion 
let sumar = correr(10,10);
console.log(sumar);

let saludo = () => 'hola koders';

console.log(saludo());

let operacion = (operacion, numeroUno, numeroDos) => {
    if (operacion === 'suma') {
        return numeroUno + numeroDos; //Regreso el valor a la funcion 
    } else if (operacion === 'resta'){
        return numeroUno - numeroDos;
    }
}

console.log(operacion('resta', 10, 60));

let generarObjeto = () =>{
    let objeto = {
        nombre: {
            apellidoPaterno: 'ramirez',
            apellidoMaterno: 'garcia'
        },
        edad: 25,
        genero: 'Femenino',
        direccion: 'Pachuca'
    } 
    return objeto
}

console.log(generarObjeto());

let nombreKoders = () =>{
    let nombres = ['Rafa', 'Fer', 'Manu', 'Cin'];
    return nombres;
}

console.log(nombreKoders());


let nombres = ['Rafa', 'Fer', 'Manu', 'Cin'];

let listado = (nombre) =>{
    for (let i of nombres) {
        if (i === nombre){
            return i;
    }
}
    for (let i of nombres) {
        if (i != nombre){
            return 'No existe';
    }
}
}
console.log((listado('Muanu')));




/*Objetos
Una estructura de de la vida real, con propiedades 
*/

let carro = {
    puerta: 5,
    color: 'negro',
    marca: 'BMW',
    llantas: 4
}; 
carro.duenio = 'Rafael ' // reasignarel valor 
// para validar si duenio  existe o no
if(carro.duenio !== undefined){
    console.log('La propiedad si existe')
}else{
    console.log('La propiedad no existe ')
}


// para entrar a uno en especifico  dos formas 
console.log(carro['puerta'])
console.log(carro.puerta)


//for in  recorremos objetos 
for( let caracteristicas in carro){
    console.log(caracteristicas, carro[caracteristicas])
}


//Clase con isra 
//Funcion constructora 
//El nombre de una funcion costructora tiene que iniciar con mayusculas
//La funcion costructora se debe crear con una funcion convencional
// Para una funcion convencional this se refiere al objeto que vamos a crear, en una funcion flecha no tiene un contexto definido y se tiene que ser mas literal
function CrearLapiz (tamanio, forma, color){
    this.tamanio = tamanio; //this hace referencia al nombre de la funcion constructora en este caso 'crear lapiz'
    this.forma = forma;
    this.color = color;
    this.escribir = (texto) => {
        return 'Con este lapiz se escribio' + texto;
    }

};

let lapizRojo = new CrearLapiz('pequeño', 'redondo', 'rojo');
console.log(lapizRojo);

//En una funcion constructora si se quiere ejecutar una funcion dentro de la funcion constructora se tiene que crear otra variable que contenga la funcion 

let textoRojo = lapizRojo.escribir('escribi con mi lapiz rojo');
console.log(textoRojo);

//Ejercicio de funcion constructora


function CrearDinosuario (tamanio, alimentacion, epoca, habitad){
    this.tamanio = tamanio;
    this.alimentacion = alimentacion;
    this.epoca = epoca;
    this.habitad = habitad;
    this.comer = (alimento) => 'este dinosaurio come' + alimento;

}

let dinosaurio = new CrearDinosuario ('Grande', 'carnivoro', 'cretacico', 'selva');
let comidaDino = dinosaurio.comer('carne')

console.log(dinosaurio, comidaDino);

//Metodos y prototipos y herencia y clases 
//La clase es el concepto abstracto de un objeto, mientras que el objeto es el elemento final que se basa en la clase.

class Animal{
    constructor (tieneOjos, ojos, corazon){ //Constructor es una palabra reservada 
        this.tieneOjos = tieneOjos;
        this.ojos = ojos;
        this.corazon = corazon;
    }

    comer(comida) { //asi se generan metodos dentro de una clase 
        return `este animal come ${comida}`;
    }
};

let perro = new Animal(true, 2, true);
let comerPerro = perro.comer('croquetas');
console.log(perro, comerPerro);

//Herencia extends es una palabra reservada para crear extenciones de un prototipo padre o clase padre 
//Cuando nosotros creamos herencia (extenciones) siempre tenemos que mandar a llamar a la funcion 'super' 

class Oviparo extends Animal{
    constructor(naceDeHuevo){ //si yo quisiera volver a asignar los valores de las propiedades tendria que pasarlo como parametro
        super(true, 3, true); //con el metodo super asigno los valores de la clase padre, asignar el nombre de los parametros
        this.naceDeHuevo = naceDeHuevo;
    };
};
let ave = new Oviparo(true);
console.log(ave)







