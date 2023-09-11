## Send data and forms

```jsx
import React, { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, correo }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      setMensaje('Datos enviados con éxito');
      setError('');
    } catch (error) {
      setMensaje('');
      setError('Error al enviar los datos');
    }
  };

  return (
    <div>
      <h1>Formulario de Envío</h1>
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
      <div>
        {mensaje && <p className="success">{mensaje}</p>}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default App;
```

## Render lists

```jsx
import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
```

```javascript
export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];
```
## Galería

```jsx
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}
```

```javascript
export const sculptureList = [{
  name: 'Homenaje a la Neurocirugía',
  artist: 'Marta Colvin Andrade',
  description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
  url: 'https://i.imgur.com/Mx7dA2Y.jpg',
  alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
}, {
  name: 'Floralis Genérica',
  artist: 'Eduardo Catalano',
  description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
  url: 'https://i.imgur.com/ZF6s192m.jpg',
  alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
}, {
  name: 'Eternal Presence',
  artist: 'John Woodrow Wilson',
  description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
  url: 'https://i.imgur.com/aTtVpES.jpg',
  alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
}, {
  name: 'Moai',
  artist: 'Unknown Artist',
  description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
  url: 'https://i.imgur.com/RCwLEoQm.jpg',
  alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
}, {
  name: 'Blue Nana',
  artist: 'Niki de Saint Phalle',
  description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
  url: 'https://i.imgur.com/Sd1AgUOm.jpg',
  alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
}, {
  name: 'Ultimate Form',
  artist: 'Barbara Hepworth',
  description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
  url: 'https://i.imgur.com/2heNQDcm.jpg',
  alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
}, {
  name: 'Cavaliere',
  artist: 'Lamidi Olonade Fakeye',
  description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
  url: 'https://i.imgur.com/wIdGuZwm.png',
  alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
}, {
  name: 'Big Bellies',
  artist: 'Alina Szapocznikow',
  description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
  url: 'https://i.imgur.com/AlHTAdDm.jpg',
  alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
}, {
  name: 'Terracotta Army',
  artist: 'Unknown Artist',
  description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
  url: 'https://i.imgur.com/HMFmH6m.jpg',
  alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
}, {
  name: 'Lunar Landscape',
  artist: 'Louise Nevelson',
  description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
  url: 'https://i.imgur.com/rN7hY6om.jpg',
  alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
}, {
  name: 'Aureole',
  artist: 'Ranjani Shettar',
  description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
  url: 'https://i.imgur.com/okTpbHhm.jpg',
  alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
}, {
  name: 'Hippos',
  artist: 'Taipei Zoo',
  description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
  url: 'https://i.imgur.com/6o5Vuyu.jpg',
  alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
}];
```
## Show modal
```jsx
import { useState } from 'react';
import ModalDialog from './ModalDialog.js';

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>
        Open dialog
      </button>
      <ModalDialog isOpen={show}>
        Hello there!
        <br />
        <button onClick={() => {
          setShow(false);
        }}>Close</button>
      </ModalDialog>
    </>
  );
}
```

```jsx
import { useEffect, useRef } from 'react';

export default function ModalDialog({ isOpen, children }) {
  const ref = useRef();

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog = ref.current;
    dialog.showModal();
    return () => {
      dialog.close();
    };
  }, [isOpen]);

  return <dialog ref={ref}>{children}</dialog>;
}
```

## useContext
```jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}
```

## Login y useContext
```jsx
import { createContext, useContext, useState } from 'react';

const CurrentUserContext = createContext(null);

export default function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser
      }}
    >
      <Form />
    </CurrentUserContext.Provider>
  );
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <LoginButton />
    </Panel>
  );
}

function LoginButton() {
  const {
    currentUser,
    setCurrentUser
  } = useContext(CurrentUserContext);

  if (currentUser !== null) {
    return <p>You logged in as {currentUser.name}.</p>;
  }

  return (
    <Button onClick={() => {
      setCurrentUser({ name: 'Advika' })
    }}>Log in as Advika</Button>
  );
}

function Panel({ title, children }) {
  return (
    <section className="panel">
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
```

## Toggle theme
```jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

export default function MyApp() {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
      <Button onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}>
        Toggle theme
      </Button>
    </>
  )
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
```

## Time passed (useRef)
```jsx
import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  );
}
```

## Login / Dashboard React Route

Para crear una aplicación web con React que permita iniciar sesión utilizando useContext y que gestione rutas para redirigir a un componente "Dashboard" cuando el usuario esté autenticado, puedes seguir estos pasos:

Asegúrate de tener React Router instalado en tu proyecto. Si aún no lo tienes instalado, puedes hacerlo ejecutando npm install react-router-dom o yarn add react-router-dom, según tu gestor de paquetes.

Configura el contexto de autenticación:
Crea un contexto para gestionar la autenticación en tu aplicación. Esto es similar a lo que se mostró en la respuesta anterior. Aquí, configuraremos un contexto de autenticación simple que rastree si el usuario está autenticado o no.

```jsx
// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

Configura las rutas:
Utiliza React Router para configurar las rutas en tu aplicación. Define rutas protegidas que requieran autenticación y redirige a la página de inicio de sesión si el usuario no está autenticado.

```jsx
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import LoginComponent from './LoginComponent';
import DashboardComponent from './DashboardComponent';
import { AuthProvider, useAuth } from './AuthContext';

const { Content } = Layout;

function App() {
  const { authenticated } = useAuth();

  return (
    <Router>
      <AuthProvider>
        <Layout style={{ minHeight: '100vh' }}>
          <Content style={{ padding: '50px' }}>
            <Switch>
              <Route path="/login">
                {authenticated ? <Redirect to="/dashboard" /> : <LoginComponent />}
              </Route>
              <PrivateRoute path="/dashboard" authenticated={authenticated}>
                <DashboardComponent />
              </PrivateRoute>
              <Redirect from="/" to="/login" />
            </Switch>
          </Content>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

const PrivateRoute = ({ children, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      authenticated ? (
        children
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )
    }
  />
);

export default App;
```

Componentes de inicio de sesión y dashboard:
Crea los componentes LoginComponent y DashboardComponent. LoginComponent debe permitir al usuario iniciar sesión y DashboardComponent es la página a la que se redirige cuando el usuario está autenticado.

```jsx
// LoginComponent.js
import React from 'react';
import { Button } from 'antd';
import { useAuth } from './AuthContext';

function LoginComponent() {
  const { login } = useAuth();

  const handleLogin = () => {
    login();
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <Button type="primary" onClick={handleLogin}>
        Iniciar Sesión
      </Button>
    </div>
  );
}

export default LoginComponent;
jsx
Copy code
// DashboardComponent.js
import React from 'react';
import { useAuth } from './AuthContext';

function DashboardComponent() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenido al panel de control.</p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
}

export default DashboardComponent;
```

En este ejemplo:

Configuramos rutas protegidas utilizando PrivateRoute, que redirige a la página de inicio de sesión si el usuario no está autenticado.

En App.js, utilizamos useAuth() para acceder al estado de autenticación en el componente principal y decidir qué componente renderizar en función del estado.

LoginComponent y DashboardComponent son componentes simples que interactúan con el contexto de autenticación para iniciar sesión y cerrar sesión.

Con estos pasos, has creado una aplicación web con React que permite iniciar sesión utilizando useContext y gestiona rutas para redirigir al usuario a un panel de control ("dashboard") cuando está autenticado. Asegúrate de adaptar la lógica de autenticación y los componentes según las necesidades de tu aplicación.

-------------------------------------------------------------------------------------

```jsx
// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Aquí podrías realizar la lógica de autenticación, por ejemplo, con una solicitud HTTP
    // En este ejemplo, simplemente establecemos un usuario si las credenciales son válidas
    if (username === 'usuario' && password === 'contraseña') {
      setUser({ username });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

Crea un componente de inicio de sesión utilizando Ant Design:
```jsx
// LoginComponent.js
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useAuth } from './AuthContext';

const LoginComponent = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Simula una solicitud HTTP de inicio de sesión
      await new Promise((resolve) => setTimeout(resolve, 1000));
      login(values.username, values.password);
      message.success('Inicio de sesión exitoso');
    } catch (error) {
      message.error('Credenciales incorrectas');
    }
    setLoading(false);
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      initialValues={{ username: '', password: '' }}
    >
      <Form.Item
        label="Usuario"
        name="username"
        rules={[{ required: true, message: 'Por favor, ingrese su usuario' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[{ required: true, message: 'Por favor, ingrese su contraseña' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Iniciar Sesión
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginComponent;
```

Crea un componente de aplicación principal que utilice AuthProvider para proporcionar el contexto de autenticación:
```jsx
// App.js
import React from 'react';
import { Layout } from 'antd';
import LoginComponent from './LoginComponent';
import { AuthProvider } from './AuthContext';

const { Content } = Layout;

function App() {
  return (
    <AuthProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Content style={{ padding: '50px' }}>
          <h1>Iniciar Sesión</h1>
          <LoginComponent />
        </Content>
      </Layout>
    </AuthProvider>
  );
}

export default App;
```

En este ejemplo:

AuthProvider proporciona el contexto de autenticación a todos los componentes descendientes.
LoginComponent utiliza el contexto de autenticación para realizar el inicio de sesión simulado.
Asegúrate de personalizar la lógica de autenticación según tus necesidades reales en la función login del contexto de autenticación. Este ejemplo utiliza una lógica de autenticación simple para demostración.
