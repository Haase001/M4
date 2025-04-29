const viajesButton = document.getElementById('viajes')

viajesButton.addEventListener ('click', () => {
    window.location.href = './Viajes/viajes.html'
})

//Clase 1
//ECMA Script nos da las pautas para programar. en su última versión tenemos muchas funcinalidades muy útiles que evitan problemas con el código y herramientas que reducen el tamaño del código

//Arrow functions
//Estas no necesitan la palabra reservada "function" y deben ser declaradas dentro de alguna variable o funcion

function saludar (nombre) {
    console.log('Hola ', nombre, 'bienvenido a la clase');
}

saludar('Mike')

const saludo = (nombre) => {
    console.log('Hola ', nombre, 'bienvenido a la clase');
}

saludo('Pedro')

setTimeout (() => {
    console.log('Terminó el tiempo');    
}, 2000)

//Template literals
//Son para crear cadenas de texto interpoladas de manera mas legible, esta consiste en encerrar cadenas de texto entre comillas invertidas e incluir expresiones de JS usando ${ }

const saludoConTemplate = (nombre)=>{
    console.log(`Hola ${nombre}, bienvenido!`);
    
}

saludoConTemplate('Juan')

//Symbol
//Es un nuevo tipo de dato primitivo para crear identificadores únicos, Es un valor único e inmutable. Se crean usando la funcion constructora "Symbol()"

//Cada Symbol es único
console.log(Symbol() === Symbol());
console.log(Symbol('💀') === Symbol('💀'));

//Symbol.for crea un symbol global
console.log(Symbol.for('🤺') === Symbol.for('🤺'));

//Revisamos el tipo de dato que es
console.log(typeof Symbol());

//Podemos Desestructurar objetos y arreglos

let options = {
    tittle: 'Menu',
    width: 100,
    height: 200,
}

//Extraemos el título como una variable
let { tittle } = options

console.log(tittle);

//Módulos para importar y exportar codigo entre archivos 

//Promesas para trabajar con operaciones asincronas de manera mas estructurada. Una promesa permite tener casos donde se resuelva o rechaze una situación

function pedirComida (plato) { //SOmos un restaurante, al pedir comida regresaremos una promesa la cual nos dirá si se pudo preparar el plato pedido o no
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (plato === 'pizza') {
                resolve(`Tu ${plato} estará listo pronto`)
            } else{
                reject(`Lo sentimos, no tenemos ${plato}`)
            }
        }, 3000)
    })
}

function pedirConPromesa() {
    console.log(`Esperando el pedido`);
    pedirComida('hamburguesa')
    .then(respuesta => console.log(respuesta))
    .catch(error=> console.log(error))
}

pedirConPromesa();

//Funciones asincrónicas (async/await) para escribir promesas de forma mas legible y estructurada

async function pedirConAsync () {
    try {
        console.log('Esperando el pedido');
        const resultado = await pedirComida('pizza')
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

/* Ejercicio generador de tarjetas de presentacion
1. Crear un arreglo de objetos
    Define un arreglo llamado contactos que contenga al menos 3 objetos, cada uno representando la información de una persona (Nombre, puesto, empresa, correo electrónico, teléfono)
2. Función de flecha para generar la tarjeta
    Escribe una funcion de flecha llamada generarTarjeta que reciba un objeto contacto como parametro y utilice template literals para construir una cadena de texto que represente la cadena de presentación
3. Mostrar las tarjetas
    Utiliza un bucle para recorrer el arreglo de contactos y para cada contacto, llama a la funcion generar tarjetay muestra la tarjeta resultante en la consola */

const personas = [
    {
        nombre: 'Juan Perez',
        puesto: 'Desarrollador',
        empresa: 'ABC inc.',
        email: 'juan@abc.com',
        telefono: 4433205151,
    },
    {
        nombre: 'Ana Lopez',
        puesto: 'Ingeniera en sistemas',
        empresa: 'Software int.',
        email: 'ana@sofware.com',
        telefono: 4434502169,
    },
    {
        nombre: 'Pedro Smith',
        puesto: 'Diseñador Gráfico',
        empresa: 'Diseños SA de CV',
        email: 'pedro@diseños.com',
        telefono: 4438906475,
    }
]

const generarTarjeta = (contacto) => {
    
        console.log(
            `
            *********************
            *${contacto.nombre}          *
            *${contacto.puesto}   *
            *${contacto.empresa}      *
            *${contacto.email}    *
            *${contacto.telefono}         *
            *********************`);
}

personas.forEach(element => {
generarTarjeta(element)})