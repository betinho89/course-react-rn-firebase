# JavaScript

## Introducción

Inicialmente se hizo para hacer paginas web mas dinámicas e interactivas. Su nombre viene de un derivado de Java, pero solo se le cambio el nombre por la popularidad que este tenia en su momento, anteriormente se llamaba LiveScript.

Toda la sintaxis, nuevas funciones, métodos, etc., son especificados por [ECMAScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/).

Actualmente en su mayoría todos los navegadores manejan el mismo engine de JavaScript V8, lo que ayuda en la compatibilidad de tu código para que se ejecute correctamente en estos navegadores, hay algunas excepciones pero hacer las adaptaciones suele ser sencillo, afortunadamente ya no hay que dar soporte a IE11.

Una buena pagina para revisar compatibilidades de funciones JavaScript, reglas de estilo o hasta atributos HTML es [CanIUse](https://caniuse.com/)

Otra buena pagina para revisar documentación de JavaScript sigue siendo la de [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).

Para trabajar con JavaScript lo mejor es usar un IDE reconocido en mi opinion para tener la mayor compatibilidad con complementos que te ayuden a facilitarte la vida al momento de programar. Entre ellos están los siguientes:

1. Visual Studio Code o VSCode.
2. SublimeText, muy bueno en su momento.
3. WebStorm, este tiene su version de paga muy buena.
4. Ya si se quieren ver muy mataditos Notepad++.

Hay mas pero esos son los mas conocidos. Personalmente me gusta mucho VSCode, pero hay una cosa que no puede hacer tan bien, que es abrir archivos de texto plano muy grandes, tiene problemas con ellos, se llega a trabar.

Otra cosa muy importante para un desarrollador JavaScript es, saber usar la herramienta de desarrollo de los navegadores por lo regular todas se abren con la tecla `F12` salvo en Mac que primero se tiene que activar el modo desarrollador.

Para el caso de este curso tenemos que instalar una extensión que se llama [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## Declaración de Variables

Se entienden como un nombre que se le da a un espacio de memoria.

Hay que recordar cosas básicas acerca de las variables.

1. Que el nombre represente su contenido.
2. No pueden empezar con dígitos.
3. No se pueden llamar como las palabras reservadas propias del lenguaje.

Hay 3 tipos de formas de declarar una variable en JavaScript.

1. Usando `var` que muchos suelen asociarlo con la vieja escuela, porque ya no se suele usar, lo único que hay que saber de esto, es que depende de donde lo declares puede ser global o local a un bloque de código (scope).
2. Usando `let` que no es mas que la version nueva y mejorada de `var`, y lo que la diferencia es que suele estar limitada a un bloque de código (scope), y es aquí donde reside la diferencia con `var`, ya que puedes definir dos variables con el mismo nombre pero en diferente scope. Ejemplo:

```javascript
let message = 'Hola';
if (true) {
  let message = 'Mundo';
  console.log(message);
}
console.log(message);
```

3. Y por ultimo usando `const`, se resume a que son variables constantes que no van a cambiar su valor en su bloque de código que sean declaradas (scope).

## Tipos de Datos

Solo vamos a mencionarlos sin adentrarnos tanto en ellos. Existen dos tipos de datos en JavaScript.

Los primitivos.
1. number
2. bigint
3. string
4. boolean
5. undefined
6. null

Y los no primitivos
1. object
2. array

La diferencia mas grande entre estos dos tipos de datos, se da al momento de declarar las variables, mientras que los primitivos son un espacio de memoria los no primitivos apuntan solo a este espacio de memoria. Veamos con un ejemplo simple:

```javascript
let message = "Hola";
let messageTwo = message;

message = "Mundo";
console.log(message);
console.log(messageTwo);
```
Pero si hacemos lo mismo pero con un dato no primitivo:
```javascript
let persona = { name: 'Beto', lastName: 'Salas' };
let personaTwo = persona;

persona.name = "Francisco";
console.log(persona);
console.log(personaTwo);
```
>Puedes utilizar `typeof` para obtener el tipo de dato de una variable.

## JavaScript avanzado

Ahora vamos a ver algunas sintaxis que veremos en el código de React y React Native, y daremos un repaso muy rápido.

1. Operador condicional.

```javascript
let accessAllowed = age > 18 ? true : false;

let message = hour < 12 ? 'Buenos Dias' :
  hour < 18 ? 'Buenas tardes' : 'Buenas noches';
```

2. Asignación condicional.

```javascript
let result = value1 || value2 || value3;
```

3. Operador de fusion. Lo que hace es evitar que tengas que verificar que una variable sea diferente de nulo o indefinida.

```javascript
let result = (a !== null && a !== undefined) ? a : b;

// En lugar de usar lo anterior, usar:

let result = a ?? b;
```

4. Arrow functions.

```javascript
const sum = (a, b) => a + b;
```

5. Optional chaining

```javascript
let user = { name: 'Beto' };

console.log(user?.address?.street);
```

6. Template literals

```javascript
let people = { name: 'Beto', age: 34 };
let message = `Hey ${people.name} tu tienes ${people.age} años`;
```

7. Array methods
```javascript
let arr = ["t", "e", "s", "t"];
console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

arr = [1, 2];
// create an array from: arr and [3,4], then add values 5 and 6
console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

arr.forEach(function(item, index, array) {
  // ... do something with item
});

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);
console.log(user.name); // John

let someUsers = users.filter(item => item.id < 3);
console.log(someUsers.length); // 2

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

arr = [ 1, 2, 15 ];
arr.sort(compareNumeric);
console.log(arr);  // 1, 2, 15

arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15

arr = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(arr.some(even));

arr = [1, 30, 39, 29, 10, 13];
const isBelowThreshold = (currentValue) => currentValue < 40;
console.log(arr.every(isBelowThreshold));
```
8. Destructuring assignment
```javascript
let [firstName, surname] = "John Smith".split(' ');

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

console.log(user.name); // John
console.log(user.surname); // Smith

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2

let options = {
  title: "Menu",
  width: 100,
  height: 200
};
let {width: w, height: h, title} = options;

console.log(title);  // Menu
console.log(w);      // 100
console.log(h);      // 200

{title, ...rest} = options;

// now title="Menu", rest={height: 200, width: 100}
console.log(rest.height);  // 200
console.log(rest.width);   // 100
```

9. Objects Methods
```javascript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.keys(object1)); // Array ["a", "b", "c"]
console.log(Object.values(object1)); // Array ["somestring", 42, false]

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
// "a: somestring"
// "b: 42"
// "c: false"
```

10. Encadenamiento de Promesas
```javascript
fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise(function(resolve, reject) {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .catch(error => {
    console.error('Error: ', error);
  })
  .finally(() => {
    console.log('Finish');
  });
```

11. Async / Await

Con la instrucción `async` le indicas al script que tu función va a retornar una promesa.
```javascript
async function f() {
  return 1;
}

f().then(alert); // 1
```

Con la instrucción `await` le indicamos al script que espere hasta que una promesa termine.
```javascript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)
  console.log(result); // "done!"
}

f();
```

## Export and Import

Algunos ejemplos para exportar variables / funciones.

```javascript
// export an array
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}

// say.js
function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

function sayBye(user) {
  console.log(`Bye, ${user}!`);
}

export { sayHi, sayBye }; // a list of exported variables
```

Algunos ejemplos para importar variables / funciones.

```javascript
import {sayHi, sayBye} from './say.js';
import * as say from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

say.sayHi('John');
say.sayBye('John');
```

Export default
```javascript
// 📁 user.js
export default class User { // just add "default"
  constructor(name) {
    this.name = name;
  }
}

// 📁 main.js
import User from './user.js'; // not {User}, just User

new User('John');
```
>Referencia [JavaScript Info](https://javascript.info/)