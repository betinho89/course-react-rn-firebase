# React

React no es más que una biblioteca de JavaScript que permite crear interfaces de usuario interactivas y dinámicas, tanto en aplicaciones web como móviles.

## Instalación

Para comenzar con el desarrollo de React lo primero que se debe de tener instalado es la ultima version estable de [NodeJS](https://nodejs.org/en).

También se debe elegir un buen editor de código, en mi caso recomiendo ampliamente [VS Code](https://code.visualstudio.com/download).

Junto con el editor existen varios complementos que se pueden usar para mejorar el código.

* **Bookmarks**
* **Code Spell Checker**
  * **Spanish - Code Spell Checker**
* **ESLint**
* **Prettier - Code formatter**
* **Sort lines**
* **GitLens**

Dicho por la propia plataforma de React ellos recomiendan el uso de frameworks en lugar de hacer una aplicación desde 0, entre los frameworks más famosos están:

1. **NextJS**. Es un framework de React que sirve para construir aplicaciones FullStack. Prácticamente con este framework tu solo deberías por construir tus componentes de React y construir tus pantallas, NextJs ya se encargaría de la optimización. Ademas que ya tiene todo configurado para la compilación y la construcción de tu aplicación.

> Para crear una aplicación React con Next solo se tiene que ejecutar el siguiente comando `npx create-next-app`

2. **Gatsby**. Este otro framework se suele utilizar para crear sitios CMS, este ya provee todo el soporte del backend para conectarse a diferentes tipos de base de datos desde PostgresSQL hasta MongoDB, ademas de que todo el front esta hecho con React.

> Para crear una aplicación React con Gatsby solo se tiene que ejecutar el siguiente comando `npx create-gatsby`

3. **Antd**. Este no es un framework pero me gustaría mencionarlo porque se va a usar durante el curso, este es una librería de componentes pre-diseñados que te ayudan a construir interfaces de usuario en una aplicación mucho mas rápido.

Y los anteriores son solo algunos de los muchos frameworks y librerias que existen en el mercado que se pueden utilizar.

Algo importante por mencionar es que tenemos disponible el comando `create-react-app` para poder crear aplicaciones de react con plantillas ya disponibles, para mayor información consultar el [sitio oficial](https://create-react-app.dev).

## DOM y DOM Virtual

El manejo del DOM (Document Object Model) y el uso del DOM Virtual son dos enfoques diferentes para actualizar y manipular la interfaz de usuario en aplicaciones web.

### **DOM (Document Object Model) Tradicional**:

   * **Actualización directa**: En el manejo tradicional del DOM, las actualizaciones en la interfaz de usuario implican la manipulación directa del árbol DOM del navegador. Esto significa que cada vez que se realiza un cambio en la interfaz de usuario, se actualiza el DOM del navegador de manera inmediata.

   * **Ineficiente**: Las actualizaciones directas del DOM pueden ser ineficientes, especialmente en aplicaciones con muchas actualizaciones de elementos, ya que cada manipulación del DOM puede ser costosa en términos de rendimiento.

   * **Problemas de rendimiento**: En aplicaciones complejas con muchas actualizaciones, las actualizaciones frecuentes del DOM pueden llevar a problemas de rendimiento y latencia.

### **DOM Virtual**:

   * Virtual DOM: En React, se utiliza un DOM Virtual como intermediario entre la lógica de la aplicación y el DOM del navegador. El Virtual DOM es una representación virtual de la estructura del DOM real.

   * Reconciliación eficiente: React compara el Virtual DOM anterior con el nuevo Virtual DOM después de que ocurra un cambio en la interfaz de usuario. Esto se hace de manera eficiente, ya que React minimiza la cantidad de manipulaciones directas del DOM real.

   * Actualizaciones parciales: En lugar de actualizar todo el DOM cada vez que cambia algo, React determina las diferencias (deltas) entre el Virtual DOM anterior y el nuevo y aplica solo las actualizaciones necesarias en el DOM real. Esto reduce significativamente la carga en el navegador y mejora el rendimiento.

   * Reutilización de componentes: React promueve la reutilización de componentes, lo que facilita la creación de interfaces de usuario modulares y la actualización eficiente de partes específicas de la aplicación.

En resumen, la principal diferencia entre el manejo del DOM tradicional y el uso del DOM Virtual en React radica en cómo se gestionan y aplican las actualizaciones en la interfaz de usuario. React utiliza un enfoque más eficiente al mantener una representación virtual del DOM y actualizar el DOM real de manera inteligente, lo que resulta en una mejor optimización de rendimiento y una experiencia de desarrollo más cómoda. Esto hace que React sea especialmente adecuado para aplicaciones web complejas y dinámicas.

![Real & Virtual DOM](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/virtual-real-dom.png "Real & Virtual DOM")

## JSX

JSX (JavaScript XML) es una extensión de JavaScript que permite escribir código HTML y XML de manera declarativa dentro de archivos de JavaScript. JSX es una característica esencial en React y se utiliza para definir la estructura de la interfaz de usuario de tus componentes de manera más legible y similar a HTML.

A continuación veremos algunas reglas importantes a considerar cuando se usa JSX.

1. **Sintaxis de JSX**:

   * En React, puedes utilizar JSX para definir elementos de interfaz de usuario como si estuvieras escribiendo HTML dentro de tu código JavaScript.

```jsx
const element = <h1>Hello, world!</h1>;
```

2. **Expresiones en JSX**:

   * Puedes utilizar expresiones JavaScript dentro de llaves {} en JSX. Estas expresiones se evalúan y se pueden utilizar para calcular dinámicamente el contenido o los atributos de un elemento.

```jsx
const name = "John";
const element = <p>Hello, {name}!</p>;
```

3. **Atributos en JSX**:

   * Los atributos en JSX se escriben de manera similar a HTML, pero se usan en formato camelCase en lugar de kebab-case.

```jsx
const element = <input type="text" className="my-input" placeholder="Enter your name" style={{ marginTop: 10, paddingLeft: 5, display: 'flex' }} />;
```

4. **Elementos JSX anidados**:

   * Puedes anidar elementos JSX dentro de otros elementos JSX, similar a cómo lo haces con HTML. Esto permite construir estructuras de árbol de componentes en React de manera intuitiva.

```jsx
const element = (
  <div>
    <h1>Titulo</h1>
    <p>Contenido del párrafo</p>
  </div>
);
```

5. **Componentes JSX**:

   * En React, los componentes también se definen utilizando JSX. Puedes crear tus propios componentes personalizados y utilizarlos en otros componentes.

```jsx
function MyComponente({ message }) {
  return <p>{message}</p>;
}
```

> Tener en cuenta que para los componentes en React la norma no escrita dice que todos los nombres de componentes tienen que empezar con la primera letra en mayúsculas.

6. **Un solo elemento Root**:

   * Todos los componentes siempre tienen que estar englobados por un solo elemento, en caso de que no se tenga uno, se puede usar los empty tags `<></>`.

```jsx
export default function Bio() {
  return (
    <div className="wrapper">
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br><br>
        <b>And <i>pictures</b></i> of scientists!
      </p>
    </div>
  );
}
```

7. **Cerrar todas las etiquetas**:

   * A diferencia de HTML todas las etiquetas en JSX tienen que estar cerradas.

```jsx
export default function Image() {
  return <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Hedy Lamarr"
    className="photo"
  />;
}
```

## Estados

Los estados en React son una parte fundamental de la gestión de datos y el comportamiento dinámico en tus aplicaciones. El estado es una propiedad especial que puedes usar en componentes de React para almacenar y rastrear datos que pueden cambiar con el tiempo.

### ¿Qué es el estado en React?

El estado es un objeto JavaScript que contiene datos relevantes para un componente de React específico. Estos datos pueden cambiar a lo largo del tiempo, y cuando el estado de un componente cambia, React vuelve a renderizar ese componente para reflejar los nuevos datos en la interfaz de usuario.

### Cómo funcionan los estados en React:
1. **Definición del estado**:

Para usar el estado en un componente de React, primero debes inicializarlo en el constructor del componente (si estás utilizando una clase) o mediante el hook useState (si estás utilizando una función).

Con una clase (uso de setState):
```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // ...
}
```
Con una función (uso de useState):
```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // ...
}
```

2. **Lectura del estado**:

Puedes acceder a los valores del estado utilizando this.state (en una clase) o las variables devueltas por useState (en una función). Por ejemplo:
```jsx
// En una clase
this.state.count;

// En una función
count;
```

3. **Actualización del estado**:

Para actualizar el estado, debes utilizar la función setState (en una clase) o la función que devuelve useState (en una función) y proporcionar el nuevo valor que deseas asignar al estado. React se encarga de manejar la actualización y el proceso de renderizado.

En una clase:
```jsx
// En una clase
this.setState({ count: 1 });

// En una función
setCount(1);
```
En el caso de la actualización del estado entraremos más a detalle porque existen diferentes casos que se nos pueden presentar, a continuación les muestro varios ejemplos.

```jsx
import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  );
}
```

```jsx
import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}
```

```javascript
const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});

setPerson({
  ...person, // Copy other fields
  artwork: { // but replace the artwork
    ...person.artwork, // with the same one
    city: 'New Delhi' // but in New Delhi!
  }
});
```

4. **Re-renderizado**:

Cuando actualizas el estado, React detecta automáticamente el cambio y vuelve a renderizar el componente. Los cambios en el estado se reflejarán en la interfaz de usuario de manera eficiente, ya que React utiliza su Virtual DOM para minimizar la manipulación directa del DOM.
```jsx
import React, { useState } from 'react';

function Contador() {
  // Declaramos una variable de estado llamada "count" y su función para actualizarlo
  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    // Actualizamos el estado sumándole 1
    setCount(count + 1);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default Contador;
```

## Props

Los props (abreviatura de "propiedades") son una forma de pasar datos de un componente principal a un componente secundario en React. Los props son argumentos que se pasan a componentes funcionales y permiten que esos componentes reciban y utilicen datos externos.

### ¿Qué son los props en React?

Los props son objetos que contienen datos o configuraciones específicas que un componente necesita para funcionar correctamente. Estos objetos se pasan desde un componente principal (padre) a un componente secundario (hijo) y se utilizan para comunicar información entre componentes.

### Cómo se usan los props

1. **Paso de props desde el componente principal**:

En el componente principal (el componente que incluye al componente secundario), puedes pasar props como atributos al componente secundario dentro del JSX.
```jsx
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const message = 'Hola desde el padre';

  return (
    <div>
      <h1>Componente Padre</h1>
      <ChildComponent message={message} />
    </div>
  );
}

export default ParentComponent;
```

2. **Recepción de props en el componente secundario**:

En el componente secundario, puedes recibir y utilizar los props como argumentos de la función.
```jsx
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <h2>Componente Hijo</h2>
      <p>{props.message}</p>
    </div>
  );
}

export default ChildComponent;
```

Otras formas para recibir las propiedades es destructurando el objeto, también se muestra como inicializar algunas propiedades.
```jsx
export default function Profile({ person, size = 100, isSepia = false, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}
```
Lo anterior todavía se puede simplificar utilizando el operador `...` (spread).
```jsx
export default function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```

3. **Utilización de props en el componente secundario**:

Dentro del componente secundario, puedes acceder a los valores de `props` utilizando la notación de puntos, como `props.message`. Puedes utilizar estos valores en tu JSX para mostrar datos o configuraciones específicas en el componente secundario.

### Default Props

En React son valores predeterminados que puedes establecer para las props de un componente. Estos valores se utilizan cuando no se proporciona un valor específico para una prop en una instancia particular del componente. Los Default Props son útiles para garantizar que un componente funcione correctamente incluso si no se le pasan todas las props requeridas.

Para definir Default Props en un componente de React, puedes utilizar la propiedad `defaultProps`.
```jsx
import React from 'react';

function MyComponent(props) {
  return (
    <div>
      <p>Nombre: {props.name}</p>
      <p>Edad: {props.age}</p>
    </div>
  );
}

// Definición de Default Props
MyComponent.defaultProps = {
  name: 'John Doe',
  age: 30,
};

export default MyComponent;
```
## Listas

En React, las listas son una forma fundamental de representar datos repetitivos o colecciones de elementos en la interfaz de usuario. Las listas son muy comunes en aplicaciones web y pueden contener elementos como elementos de menú, publicaciones de blog, productos en una tienda en línea y más. Para trabajar con listas en React, puedes utilizar el método `map()` o `filter()` de JavaScript junto con JSX para generar componentes de manera dinámica.

### ¿Por qué son importantes las listas en React?

1. **Renderizar datos dinámicos**: Las listas te permiten mostrar datos dinámicos en tu aplicación, como elementos de una base de datos, entradas de un formulario, comentarios de usuarios, etc.

2. **Crear componentes reutilizables**: Puedes crear componentes reutilizables que se encarguen de renderizar los elementos de la lista, lo que facilita el mantenimiento y la escalabilidad de tu aplicación.

### Cómo usar listas

1. Crear una lista de elementos: En React, primero debes tener una lista de elementos que quieras renderizar. Esto podría ser un array de objetos o cualquier otro tipo de colección.
```jsx
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist',
}, {
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];
```

2. Usar el método `map()` y `filter()`: El método `map()` itera sobre cada elemento de la lista y devuelve un nuevo array de componentes y el metodo `filter()` filtra los elementos de una lista por el criterio que se proporcione.
```javascript
export const people = [{
  id: 0, // Used in JSX as a key
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1, // Used in JSX as a key
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2, // Used in JSX as a key
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3, // Used in JSX as a key
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4, // Used in JSX as a key
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];
```
```jsx
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );

  const listItems = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  return <ul>{listItems}</ul>;
}
```

## Ciclo de vida de un Componente

Los componentes funcionales en React no tienen un ciclo de vida tan completo como los componentes de clase, pero aún así tienen ciertas etapas importantes en su "ciclo de vida funcional" que se gestionan mediante hooks. Aquí tienes una descripción de las principales etapas en el ciclo de vida de un componente funcional en React:

1. **Montaje (Mounting)**:

   * `useEffect(() => {}, [])`: Este hook se ejecuta una vez después de que el componente se haya montado en el DOM. Se utiliza principalmente para tareas de inicialización, como la configuración de efectos secundarios, solicitudes de red o suscripciones.

```jsx
import React, { useEffect } from 'react';

function MountComponent() {
  useEffect(() => {
    console.log('El componente se ha montado.');
    // Realiza tareas de inicialización aquí
  }, []);

  return (
    <div>
      {/* Contenido del componente */}
    </div>
  );
}

export default MountComponent;
```

2. **Actualización (Updating)**:

   * `useEffect(() => {})`: Puedes utilizar este hook para realizar tareas cuando el componente se actualiza debido a cambios en el estado o las props. Se ejecuta después de cada renderizado.

```jsx
import React, { useEffect, useState } from 'react';

function UpdateComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('El componente se ha actualizado.');
    // Realiza tareas de actualización aquí
  });

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default UpdateComponent;
```

3. **Desmontaje (Unmounting)**:

   * `useEffect(() => { return () => {} })`: Si devuelves una función en el hook useEffect, esta se ejecutará cuando el componente se desmonte. Es útil para limpiar efectos secundarios, como desconectar eventos o cancelar solicitudes de red.

```jsx
import React, { useEffect } from 'react';

function UnmountingComponent() {
  useEffect(() => {
    console.log('El componente se ha montado.');

    return () => {
      console.log('El componente se desmontará.');
      // Realiza limpieza de recursos aquí
    };
  }, []);

  return (
    <div>
      {/* Contenido del componente */}
    </div>
  );
}

export default UnmountingComponent;
```

Estas son las principales etapas en el ciclo de vida de un componente funcional en React. Los hooks, como useEffect, te permiten gestionar estas etapas de manera más simple y declarativa en componentes funcionales. Ten en cuenta que los componentes funcionales no tienen métodos de ciclo de vida como los componentes de clase, y el ciclo de vida funcional se gestiona principalmente mediante los hooks disponibles en React.

## Formularios

El manejo de formularios en React es una tarea común en muchas aplicaciones web. A continuación, te mostraré un ejemplo práctico de cómo manejar un formulario en React utilizando componentes funcionales y hooks, en particular, el hook `useState`. Crearemos un formulario simple para ingresar el nombre y el correo electrónico de un usuario y luego mostraremos los datos ingresados en la pantalla.

```jsx
import React, { useState } from 'react';

function Formulario() {
  // Definimos estados para el nombre y el correo electrónico
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    // Aquí puedes realizar acciones como enviar los datos al servidor
    console.log(`Nombre: ${nombre}, Correo Electrónico: ${correo}`);
  };

  return (
    <div>
      <h1>Formulario React</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {/* Mostrar los datos ingresados */}
      <div>
        <h2>Datos Ingresados:</h2>
        <p>Nombre: {nombre}</p>
        <p>Correo Electrónico: {correo}</p>
      </div>
    </div>
  );
}

export default Formulario;
```

## Componentes Controlados y no Controlados

En React, los componentes controlados y no controlados son dos enfoques diferentes para gestionar los datos en formularios y otros elementos de entrada de usuario. Cada uno tiene sus propias ventajas y casos de uso. Aquí te explico las diferencias entre ellos:

### Componentes Controlados:

Un componente controlado es aquel en el que React controla y mantiene el estado de un elemento de entrada, como un campo de texto o un cuadro de selección. Para crear un componente controlado, debes vincular el valor del elemento de entrada al estado de React y proporcionar una función de control para manejar los cambios en ese valor. Esto permite a React tener un control total sobre el valor y su comportamiento.

Ejemplo de un componente controlado con un campo de entrada de texto:
```jsx
import React, { useState } from 'react';

function ComponenteControlado() {
  const [valor, setValor] = useState('');

  const handleChange = (event) => {
    setValor(event.target.value);
  };

  return (
    <input
      type="text"
      value={valor}
      onChange={handleChange}
    />
  );
}
```
Ventajas de los componentes controlados:

* React mantiene el estado y el valor del elemento de entrada, lo que facilita la sincronización con otros componentes y la manipulación de datos.

* Puedes realizar validaciones en tiempo real y controlar las interacciones de usuario de manera más precisa.

### Componentes No Controlados:

Un componente no controlado es aquel en el que React no controla directamente el valor del elemento de entrada. En lugar de eso, el valor se maneja a través del DOM y se accede a él cuando sea necesario utilizando referencias (ref). Los componentes no controlados son útiles en situaciones donde deseas un acceso directo al DOM o cuando necesitas trabajar con bibliotecas o código legado que no se adapta bien a la filosofía de React.

Ejemplo de un componente no controlado con un campo de entrada de texto:
```jsx
import React, { useRef } from 'react';

function ComponenteNoControlado() {
  const inputRef = useRef(null);

  const handleClick = () => {
    alert(`Valor del campo de entrada: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Mostrar Valor</button>
    </div>
  );
}
```

Ventajas de los componentes no controlados:

* Puedes acceder directamente al DOM y a los valores de los elementos de entrada.
* Son útiles en situaciones específicas, como la integración con bibliotecas de terceros o código legacy.

En resumen, la elección entre componentes controlados y no controlados depende de las necesidades específicas de tu aplicación y de si deseas que React controle y mantenga el estado de los elementos de entrada o si prefieres un control más directo sobre el DOM y los valores de entrada. Ambos enfoques son válidos y tienen sus propios casos de uso.

## Hooks

React ofrece una variedad de hooks que te permiten añadir funcionalidad a tus componentes funcionales. A continuación, te presento algunos de los hooks más importantes y ampliamente utilizados.

### 1. useEffect

El hook `useEffect` en React se utiliza para realizar efectos secundarios en componentes funcionales. Un efecto secundario es cualquier operación que no esté directamente relacionada con la renderización de tu componente, como hacer solicitudes HTTP, suscribirse a eventos, manipular el DOM, etc. `useEffect` es esencial para gestionar ciclos de vida, suscripciones y tareas asíncronas en componentes funcionales.

La sintaxis general de `useEffect` es la siguiente:
```jsx
useEffect(() => {
}, [dependencias]);
```

* La función que pasas como primer argumento a useEffect contiene el código para tus efectos secundarios.
* El segundo argumento es un array de dependencias (opcional). Si este array está presente, el efecto se ejecutará cada vez que una de las dependencias cambie. Si se omite, el efecto se ejecutará después de cada renderizado.

#### Mounting Effect

```jsx
import React, { useState, useEffect } from 'react';

function TestMounting() {
  const [count, setCount] = useState(0);

  // Efecto de montaje
  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default TestMounting;
```
En este ejemplo, utilizamos `useEffect` para actualizar el título del documento cada vez que el contador cambia. El efecto se ejecutará cuando el componente se monte inicialmente y cuando contador cambie.

#### Request Data

```jsx
import React, { useState, useEffect } from 'react';

function TestRequestHttp() {
  const [data, setData] = useState(null);

  // Efecto de solicitud HTTP
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Datos de la Solicitud HTTP</h1>
      {data ? (
        <p>Título: {data.title}</p>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default TestRequestHttp;
```

#### Cleaning functions

```jsx
import { useState, useEffect } from 'react';

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('pointermove', handleMove);
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, []);

  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity: 0.6,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />
  );
}
```

Estos ejemplos ilustran cómo puedes utilizar useEffect en componentes funcionales de React para gestionar efectos secundarios, como actualizaciones del título del documento, solicitudes HTTP y tareas de limpieza. El hook useEffect es una herramienta poderosa que te permite agregar funcionalidad adicional a tus componentes funcionales y controlar el ciclo de vida de tus componentes de manera efectiva.

### 2. useContext

El hook useContext en React se utiliza para acceder a un contexto específico desde cualquier lugar en un componente funcional. Los contextos son una forma de compartir datos entre componentes en un árbol de componentes sin tener que pasar explícitamente props a través de cada nivel de la jerarquía. useContext simplifica la forma en que puedes acceder a esos datos globales.

### Creación de un Contexto

Para utilizar useContext, primero debes crear un contexto utilizando React.createContext. Esto se hace normalmente en un archivo separado para mantener tu código organizado.
```jsx
// context.js
import React from 'react';

const MiContexto = React.createContext();

export default MiContexto;
```

### Proveedor de Contexto

Luego, en el componente superior de tu aplicación, debes proporcionar un valor al contexto utilizando el componente Context.Provider.

```jsx
// App.js
import React from 'react';
import MiContexto from './context';

function App() {
  const valorContexto = "¡Hola desde el contexto!";

  return (
    <MiContexto.Provider value={valorContexto}>
      {/* Aquí van tus componentes */}
    </MiContexto.Provider>
  );
}

export default App;
```

### Consumo de Contexto con useContext

Ahora, puedes consumir el contexto en cualquier componente funcional que esté debajo del MiContexto.Provider utilizando el hook useContext.
```jsx
// Componente.js
import React, { useContext } from 'react';
import MiContexto from './context';

function Componente() {
  const valorContexto = useContext(MiContexto);

  return <div>{valorContexto}</div>;
}

export default Componente;
```

En este ejemplo, el componente Componente puede acceder al valor del contexto MiContexto utilizando useContext y mostrarlo en su renderizado.

### 3. useCallback

El hook useCallback en React se utiliza para memorizar funciones y evitar que se re-creen en cada renderizado de un componente funcional. Cuando una función se crea de nuevo en cada renderizado, puede causar problemas de rendimiento en componentes hijos que dependen de esta función como prop, ya que los componentes pueden volver a renderizarse innecesariamente. useCallback soluciona este problema al garantizar que la función se mantenga constante a menos que sus dependencias cambien.

La sintaxis general de useCallback es la siguiente:
```jsx
const memoizedCallback = useCallback(
  () => {
    // Código de la función
  },
  [dependencias]
);
```

* El primer argumento es la función que deseas memorizar.
* El segundo argumento es un array de dependencias. La función se memorizará nuevamente si alguna de estas dependencias cambia.

Supongamos que tenemos un componente que muestra una lista de elementos y un botón que permite agregar un nuevo elemento a la lista. Utilizaremos useCallback para memorizar la función que maneja la adición de elementos.

```jsx
import React, { useState, useCallback } from 'react';

function ListaDeElementos() {
  const [elementos, setElementos] = useState([]);
  const [nuevoElemento, setNuevoElemento] = useState('');

  // Usamos useCallback para memorizar la función de agregar elementos
  const agregarElemento = useCallback(() => {
    setElementos([...elementos, nuevoElemento]);
    setNuevoElemento('');
  }, [elementos, nuevoElemento]);

  return (
    <div>
      <ul>
        {elementos.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
      <input
        type="text"
        value={nuevoElemento}
        onChange={(e) => setNuevoElemento(e.target.value)}
      />
      <button onClick={agregarElemento}>Agregar</button>
    </div>
  );
}

export default ListaDeElementos;
```
1. Creamos una función `agregarElemento` que agrega un nuevo elemento a la lista elementos. Utilizamos `useCallback` para memorizar esta función.

2. Dentro de `useCallback`, incluimos elementos y nuevoElemento como dependencias. Esto asegura que la función agregarElemento se memorizará nuevamente solo cuando estas dependencias cambien.

3. Cuando se hace clic en el botón "Agregar", la función `agregarElemento` se ejecutará sin problemas, y no se volverá a crear en cada renderizado del componente.

`useCallback` es útil en situaciones donde deseas evitar que las funciones se vuelvan a crear innecesariamente, especialmente cuando estas funciones se pasan como props a componentes hijos y quieres optimizar el rendimiento de tu aplicación.

### 4. useRef

El hook useRef en React se utiliza para crear y mantener una referencia mutable a un elemento del DOM o para almacenar valores mutables que no provocan una nueva renderización cuando cambian. useRef es especialmente útil para acceder a elementos del DOM directamente y para mantener datos que no deben afectar el ciclo de vida o el rendimiento del componente.

### Creación de una referencia a un elemento del DOM:

Puedes utilizar useRef para obtener una referencia a un elemento del DOM asignándolo a la propiedad ref de un elemento JSX. A continuación, se muestra un ejemplo:

```jsx
import React, { useRef, useEffect } from 'react';

function ComponenteConRef() {
  const miRef = useRef(null);

  useEffect(() => {
    // Acceder al elemento del DOM utilizando la referencia
    miRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={miRef} />
    </div>
  );
}
```
### Almacenamiento de valores mutables:

Además de las referencias de elementos del DOM, useRef se puede utilizar para almacenar valores mutables que no causarán una nueva renderización cuando cambien.

```jsx
import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}
```

### Notas importantes:
1. Cuando se actualiza una referencia a un elemento del DOM utilizando useRef, React no volverá a renderizar el componente. Esto puede ser útil cuando necesitas realizar operaciones imperativas en el DOM.

2. Las referencias de useRef persisten entre renderizaciones. Esto significa que el valor almacenado en una referencia se mantendrá constante entre renderizaciones del componente.

En resumen, useRef es una herramienta versátil en React que se utiliza para mantener referencias a elementos del DOM y almacenar valores mutables que no deben causar nuevas renderizaciones. Puedes usarlo para realizar operaciones imperativas en el DOM o para mantener datos que no afecten el ciclo de vida o el rendimiento de tu componente.

### 5. useMemo

El hook useMemo en React se utiliza para memorizar valores calculados y evitar su recalculación en cada renderizado de un componente funcional. Su objetivo principal es optimizar el rendimiento de la aplicación al reducir el costo de cálculos costosos que no deben realizarse repetidamente. useMemo toma una función de cálculo y una matriz de dependencias y devuelve el resultado memorizado de esa función.

```jsx
const memoizedValue = useMemo(() => {
  // Código para calcular el valor
}, [dependencias]);
```
   * El primer argumento es una función que calcula el valor que deseas memorizar.
   * El segundo argumento es una matriz de dependencias. El valor memorizado se recalcula solo si alguna de estas dependencias cambia.

Supongamos que tenemos un componente que muestra el factorial de un número dado. El cálculo del factorial es una operación costosa, por lo que queremos memorizar el resultado para evitar cálculos innecesarios.

```jsx
import React, { useState, useMemo } from 'react';

function FactorialCalculadora({ numero }) {
  // Utilizamos useMemo para memorizar el cálculo del factorial
  const factorial = useMemo(() => {
    console.log(`Calculando factorial de ${numero}`);
    let result = 1;
    for (let i = 1; i <= numero; i++) {
      result *= i;
    }
    return result;
  }, [numero]);

  return (
    <div>
      <p>Factorial de {numero}: {factorial}</p>
    </div>
  );
}
```
**Donde:**

1. Creamos un componente FactorialCalculadora que toma un número como prop.
2. Utilizamos useMemo para calcular y memorizar el factorial del número. La función de cálculo se ejecutará solo cuando numero cambie.
3. En el renderizado, mostramos el valor memorizado del factorial.

Cada vez que cambia el número, useMemo vuelve a calcular el factorial y memoriza el resultado. Si el número no cambia, el resultado memorizado se reutiliza y no se realiza un nuevo cálculo. Esto mejora el rendimiento, especialmente en situaciones donde los cálculos son costosos.

### Usos comunes de useMemo:
   * **Optimización de renderizaciones**: Cuando tienes cálculos costosos en componentes que no deben ejecutarse en cada renderizado.
   * **Memorización de componentes**: Puedes memorizar componentes enteros para evitar su recreación en cada renderizado.

```jsx
const memoizedComponent = useMemo(() => <Componente />, []);
```

   * **Optimización de props**: Si tienes props que son objetos grandes y cambian raramente, puedes memorizarlos para evitar que los componentes secundarios se vuelvan a renderizar innecesariamente.

En resumen, useMemo es una herramienta poderosa para optimizar el rendimiento de componentes funcionales en React al memorizar valores calculados. Debes utilizarlo en situaciones donde los cálculos sean costosos y no necesites recalcularlos en cada renderizado. Sin embargo, ten en cuenta que su uso excesivo puede aumentar la complejidad de tu código, por lo que debes aplicarlo con prudencia.

### 6. useReducer

El hook `useReducer` en React es una función que se utiliza para gestionar el estado de un componente mediante la aplicación de un patrón de diseño llamado "Reducer". Este hook es especialmente útil cuando el estado del componente es más complejo o necesita lógica más avanzada para ser actualizado. Funciona de manera similar a `useState`, pero en lugar de manejar un solo valor de estado, `useReducer` maneja un estado que puede ser un objeto o una estructura de datos más compleja.

La sintaxis básica de `useReducer` es la siguiente:

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

- `state` es el estado actual.
- `dispatch` es una función que se utiliza para enviar acciones (objetos que describen qué cambio debe realizarse en el estado).
- `reducer` es una función pura que especifica cómo debe actualizarse el estado en respuesta a las acciones.
- `initialState` es el estado inicial del componente.

Aquí hay un ejemplo simple de cómo usar `useReducer` en un componente de React:

```javascript
import React, { useReducer } from 'react';

// Define el reducer
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {
  // Utiliza useReducer con el reducer y el estado inicial
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

export default Counter;
```

En este ejemplo, hemos creado un contador simple que utiliza `useReducer`. El reducer `counterReducer` toma el estado actual y una acción, y devuelve un nuevo estado basado en la acción. Luego, en el componente `Counter`, usamos `useReducer` para inicializar el estado del contador y obtener la función `dispatch` para enviar acciones que actualizan el estado.

Cuando hacemos clic en los botones "Increment" y "Decrement", enviamos acciones al reducer, que luego actualiza el estado y provoca una re-renderización del componente con el nuevo valor del contador.

En resumen, `useReducer` es útil cuando se necesita gestionar un estado más complejo en un componente y cuando las actualizaciones del estado implican lógica más avanzada que la proporcionada por `useState`.

## Patrones de Diseño

A continuación listo los diferentes tipos de patrones de diseño que se suelen usar al momento de desarrollar una aplicación con React, esto también aplica para React Native, son reglas que se pueden seguir para tener un código mas limpio, ordenado y legible.

1. **Patrón de Componentes Funcionales**: React fomenta el uso de componentes funcionales para construir interfaces de usuario. Estos componentes son simples funciones de JavaScript que toman props como argumentos y devuelven elementos JSX. Este enfoque es más claro y conciso en comparación con los componentes de clase.
```jsx
import React from 'react';

// Componente funcional de botón
function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;
```
```jsx
import React from 'react';
import Button from './Button';

function App() {
  const handleClick = () => {
    alert('¡Botón clickeado!');
  };

  return (
    <div>
      <h1>Ejemplo de Componente Funcional</h1>
      <Button label="Haz clic" onClick={handleClick} />
    </div>
  );
}

export default App;
```
2. **Patrón de Elevación de Estado (Lifting State Up)**: Cuando varios componentes necesitan compartir estado o comunicarse entre sí, se utiliza el patrón de elevación de estado. Consiste en mover el estado compartido a un componente padre común y pasarlo como props a los componentes hijos. Esto facilita la sincronización de datos entre los componentes.
```jsx
import React, { useState } from 'react';

// Componente hijo A
function ChildA({ count, onIncrement }) {
  return (
    <div>
      <h2>Hijo A</h2>
      <p>Contador: {count}</p>
      <button onClick={onIncrement}>Incrementar</button>
    </div>
  );
}

// Componente hijo B
function ChildB({ count, onIncrement }) {
  return (
    <div>
      <h2>Hijo B</h2>
      <p>Contador: {count}</p>
      <button onClick={onIncrement}>Incrementar</button>
    </div>
  );
}

// Componente padre (contenedor)
function Parent() {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Lifting State Up en React</h1>
      <ChildA count={count} onIncrement={increaseCounter} />
      <ChildB count={count} onIncrement={increaseCounter} />
    </div>
  );
}

export default Padre;
```
3. **Patrón Render Props**: Este patrón implica pasar una función como prop a un componente hijo para permitir que el componente hijo obtenga datos o lógica de representación del componente padre. Es especialmente útil para crear componentes reutilizables que pueden adaptarse a diferentes casos de uso.
```jsx
import React, { useState } from 'react';

// Componente Mouse
function Mouse({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

export default Mouse;
```
```jsx
import React from 'react';
import Mouse from './Mouse';

// Componente Consumidor que utiliza Render Props
function MouseTracker() {
  return (
    <div>
      <h1>Posición del Mouse (Render Props con funciones)</h1>
      <Mouse
        render={(mouse) => (
          <p>
            La posición actual del mouse es: ({mouse.x}, {mouse.y})
          </p>
        )}
      />
    </div>
  );
}

export default MouseTracker;
```

4. **Patrón de Alto Orden (Higher-Order Component, HOC)**: Los HOC son funciones que toman un componente y devuelven un nuevo componente con funcionalidad adicional. Se utilizan para compartir lógica entre componentes, como la lógica de autenticación o la lógica de manejo de errores.
```jsx
import React from 'react';

// HOC para el seguimiento de clics
function withClickTracking(WrappedComponent) {
  return function ClickTracking(props) {
    const handleClick = () => {
      console.log('Hiciste clic en el componente:', WrappedComponent.name);
    };

    return (
      <div onClick={handleClick}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withClickTracking;
```
```jsx
import React from 'react';
import withClickTracking from './withClickTracking';

// Componente de botón
function Button(props) {
  return <button>{props.label}</button>;
}

// Aplicamos el HOC al componente Button
const ButtonClickTracking = withClickTracking(Button);

function App() {
  return (
    <div>
      <h1>Ejemplo de HOC en React (funciones)</h1>
      <ButtonClickTracking label="Haz clic en mí" />
    </div>
  );
}

export default App;
```

5. **Patrón de Renderizado Condicional**: React permite renderizar componentes de manera condicional basados en ciertas condiciones o estados. Esto es esencial para mostrar diferentes partes de la interfaz de usuario en función de la lógica de la aplicación.
```jsx
import React from 'react';

function MostrarMensaje(props) {
  const { isLoggedIn } = props;

  // Renderizado condicional basado en la condición isLoggedIn
  if (isLoggedIn) {
    return <p>Bienvenido, usuario registrado.</p>;
  } else {
    return <p>Inicia sesión para ver el contenido.</p>;
  }
}

function App() {
  // Simulamos el estado de inicio de sesión (true o false)
  const isLoggedIn = true;

  return (
    <div>
      <h1>Ejemplo de Renderizado Condicional en React</h1>
      <MostrarMensaje isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
```

## Metodologías de Diseño

En react como tal no existe como tal estas metodologías estrictas como en otros lenguajes sino que son sugerencias para el diseño de tu aplicación para que al igual que los patrones de diseño tu codigo sea limpio, ordenado y legible.

Entre las mas comunes y las que veremos en este curso se encuentran las siguientes:

1. **Atomic Design**: Aunque es principalmente un enfoque de diseño de UI, el Atomic Design también se puede aplicar a la organización de componentes en React. Divide tu interfaz de usuario en átomos, moléculas, organismos, plantillas y páginas, y crea componentes React correspondientes para cada nivel.

2. **DRY (Don't Repeat Yourself)**: Este principio de desarrollo promueve la reutilización de código y la reducción de duplicación. En React, puedes lograr esto creando componentes reutilizables y abstrayendo la lógica común en funciones o hooks.

3. **KISS (Keep It Simple, Stupid)**: KISS aboga por mantener las soluciones simples y fáciles de entender. En React, esto significa escribir componentes que hagan una sola cosa y sean fáciles de entender y mantener. Evita la complejidad innecesaria.

4. **Responsive Design**: Al desarrollar aplicaciones web con React, es esencial aplicar principios de diseño responsivo para garantizar que tu interfaz de usuario sea adecuada para diferentes dispositivos y tamaños de pantalla.