## Instalación de paquetes
Los paquetes de node se pueden gestionar utilizando [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/) y más recientemente [bun](https://bun.sh/), aunque este último solo compatible con sistemas UNIX.

Se puede identificar fácilmente un proyecto de node si tiene el archivo `package.json`, este archivo va a contener la configuración del proyecto, dependencias y scripts disponibles para ejecutar.

En esta documentación nos concentraremos en el manejador de paquetes `npm`.

## Comandos interesantes `npm`

1. Inicializar un proyecto desde cero.

   `npm init`

2. Instalar los paquetes definidos en el archivo `package.json`

   `npm install`

3. Instalar la ultima version de un paquete.

   `npm install [nombre-del-paquete]` ejemplo `npm install @react-navigation/native`

4. Instalar la version especifica de un paquete.

   `npm install [nombre-del-paquete]@[version]`

5. Instalar paquetes de forma global, usualmente se utiliza para lineas de comandos.

   `npm install -g [nombre-del-paquete]` ejemplo `npm install -g firebase-tools`

6. Instala paquete como dependencia de desarrollo.

   `npm install -D [nombre-del-paquete]`

7. Desinstalar un paquete (global, version especifica o local al proyecto).

   `npm uninstall [nombre-del-paquete]`

   `npm uninstall -g [nombre-del-paquete]`

   `npm uninstall [nombre-del-paquete]@[version]`

8. Borrar cache de NPM de tu equipo.

   `npm cache clean --force`

Si se desea conocer mas, ver la [documentación](https://docs.npmjs.com/) oficial.

## Expo

### Crear un proyecto de react-native con expo.

Para crear un proyecto de expo desde cero, lo mejor es utilizar la linea de comandos que ya nos proporciona `npm` que se llama `npx`.

Ejecutar el comando:

`npx create-expo-app my-first-project`

Una vez que haya finalizado el comando anterior ya puedes ejecutar el siguiente comando para iniciar la aplicación.

`npm run start` o `npx expo start`

Esto les mostrara un QR que hay que leer con la aplicación `Expo Go` disponible tanto para android como para ios. En la misma consola nos va a mostrar algunos comandos interesantes que podemos ejecutar presionando solo las teclas que nos dice ahí, por ejemplo si quisiéramos recargar se presiona la tecla `r`.

![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/expo-run.png)

Algunas veces pasa que queremos forzar la carga de la aplicación de expo, para ello tenemos que ejecutar o agregar la bandera `--clear` al comando para ejecutar la app. Es decir quedaría de la siguiente manera:

`npx expo start --clear`

### Construir aplicación utilizando la nube de expo (EAS)

Pueden seguir la documentación oficial en el siguiente [enlace](https://docs.expo.dev/eas-update/getting-started/).

1. Instalar el paquete de eas de forma global.

   `npm install --global eas-cli`

2. Iniciar sesión en nuestra cuenta de expo.

   `eas login`

3. Instalar las ultimas actualizaciones de expo.

   `expo install expo-updates`

4. Inicializa a configurar su proyecto.

   `eas update:configure`

   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/eas-configure.png)

5. Configurar el archivo para generar los builds.

   `eas build:configure`

   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/eas-build-config.png)

6. Y ahora simplemente correr el comando.

   `eas build`

   Esto comenzara a construir una version de nuestra aplicación utilizando la nube de Expo, esto quiere decir que dependerá de la disponibilidad de este constructor de aplicaciones en la nube. Para ver el progreso de nuestra construcción se puede ir al panel de Expo `https://expo.dev/accounts/[account]/projects/[projectName]/builds`.

### Otros datos interesantes y recursos.

- Iconos de [Expo](https://icons.expo.fyi/).
- Opciones y configuración de archivo [app.json](https://docs.expo.dev/versions/latest/config/app/).
- Paquetes interesantes para nuestros proyectos [SDK Expo](https://docs.expo.dev/versions/latest/).
- Configuración de navegación [Expo router](https://docs.expo.dev/router/advanced/root-layout/).
- Notificaciones [push](https://docs.expo.dev/push-notifications/overview/).

## Firebase

A continuación muestro lo pasos que hay que seguir para configurar un proyecto desde cero y ligarlo a nuestro proyecto de **React Native**.

1. Ir a la [consola de firebase](https://firebase.google.com/) (asegurarse de tener una cuenta de Google activa).
2. Dar clic en **Get Started**.
![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-get-started.png)
3. Esto nos abrirá un panel donde nos mostrara los proyectos que ya tenemos configurados o la opción para agregar uno nuevo.
4. Damos clic en la opción de **Add project**.
   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-projects.png)
   1. Colocamos el nombre a nuestro proyecto y damos clic en **Continue**.
   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-create-step-1.png)
   2. En el siguiente paso seleccionamos si queremos tener activo **Google Analytics** este nos sirve para llevar estadísticas de uso y algunas otras métricas de nuestras aplicaciones, es opcional.
   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-create-step-2.png)
   3. En el siguiente paso seleccionamos la cuenta a la que estará asociada la información de Google Analytics, se puede crear una nueva si asi se desea.
   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-create-step-3.png)
   4. Darle clic en el botón **Create Project** y esperar a que termine.
5. Ahora en la ventana que se nos presenta dar clic en el icono **</>** para crear un proyecto web, este nos servirá para hacer uso de la base de datos y del real time. A continuación se tiene que seguir los pasos.
   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-dashboard-project.png)

   1. Asignamos el nombre de nuestra aplicación web y habilitamos la configuración del **Hosting**.

   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-web-step-1.png)

   2. Ahora nos proporciona una parte de comandos y un código, el comando lo vamos a ejecutar en nuestro proyecto para instalar `firebase`, y el código nos va a servir para inicializar y conectar nuestra aplicación a nuestro proyecto de Firebase. Si nuestro proyecto lo tenemos con expo, instalamos firebase con el siguiente comando `npx expo install firebase`.

   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-web-step-2.png)

   > **NOTA** El código que nos proporcionan se sugiere que se guarde en un archivo llamado `firebase-config.js` (también puede ser `.ts` si se uso typescript) en la raíz del proyecto.

   3. En el siguiente paso solo nos pide que instalemos la linea de comandos que nos proporciona firebase, este se instalara de forma global, para ello ejecutamos el siguiente comando: `npm install -g firebase-tools`.

   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-web-step-3.png)

   4. El último paso nos lo vamos a saltar por el momento porque eso aplica para una aplicación web y no para la aplicación con expo.

   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-web-step-4.png)

   5. Al finalizar presionamos el botón **Continue to console** para cerrar el Wizard.

6. Siguiendo con la implementación de nuestro proyecto de **React Native** instalaremos el siguiente paquete

`npx expo install @react-native-async-storage/async-storage`

Este paquete nos permitirá mantener la sesión.

7. Nuestro archivo final de configuración de firebase debe quedar como sigue:

```javascript
// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "test-project-firebase-d3cd2.firebaseapp.com",
  projectId: "test-project-firebase-d3cd2",
  storageBucket: "test-project-firebase-d3cd2.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const database = getDatabase(app);
export const db = getFirestore(app);

```

8. Para el caso de nuestro proyecto vamos a incorporar el proveedor oAuth de Google, como este es un servicio que necesita correr de forma nativa tenemos que levantar nuestro proyecto de forma nativa. Esto es muy complicado de lograr en ambientes no controlados porque las versiones entre cada elemento tiene que ser compatible entre si. En el caso de Windows se debe tener lo siguiente:
   - Java 18
   - Android studio, aquí revisar que tengamos los siguientes plugins instalados y compatibles entre la version de Java que hayamos elegido.
      1. Para ello abrimos Android Studio y seleccionamos `SDK Manager`.

      ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/android-studio-sdk-manager.png)

      2. Seleccionamos el tab de `SDK Tools`.

      ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/android-studio-sdk-tools.png)

      3. En caso que no tengamos instalados los paquetes que vienen en la imagen de arriba, seleccionarlos y dar clic en **OK**.
      4. También en Android Studio asegurarnos de tener un dispositivo Android emulado con **Google Play**.
      5. Para lo anterior vamos a la opción de `Virtual Device Manager`.

      ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/android-studio-virtual-device-manager.png)

      6. Damos clic en el botón `Create device`.

      ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/android-studio-create-device.png)

      7. Y de la lista que se nos presenta buscamos el dispositivo que tenga activo **Google Play**.

      ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/android-studio-google-play.png)

      8. Damos clic en `Next` y finalizamos la configuración.
   - Gradle, compatible con la version de java seleccionada, revisar la compatibilidad en la siguiente [url](https://docs.gradle.org/current/userguide/compatibility.html).

9. Si todo salio bien podemos ejecutar el siguiente comando para ejecutar nuestra aplicación en Android, en caso de hacer el despliegue en un dispositivo android real (conectado por USB) tenemos que tener habilitado el modo desarrollador y las opciones de **USB debugging** e **Install via USB** habilitadas.

`npm run android` o `npx expo run:android`

10. Ahora vamos a activar la **Authentication** en nuestra consola de firebase, para ello volvemos a ir a nuestra consola, y presionamos en la opción **Build** y enseguida seleccionamos la opción **Authentication**.

![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-auth-enabled.png)

   1. Ahora damos clic en el botón **Get started**.

   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-auth-get-started.png)

   2. En el panel que se nos muestra vamos a habilitar nuevos proveedores, para ello damos clic en el boton **Add new provider**.

   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-auth-add-provider.png)

   3. Ahora seleccionamos **Email/Password**.

   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-auth-email-pass.png)

   4. Habilitamos y damos clic en **Save**.

   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-auth-enable-email-pass.png)
   5. Ahora agregamos otro nuevo proveedor, para ello volvemos a dar clic en el botón de **Add new provider**.
   6. Ahora seleccionamos **Google**.

   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-auth-oauth-google.png)

   8. Habilitamos, nos va a pedir que seleccionemos un email y damos clic en **Save**.

   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-auth-enable-oauht-google.png)

11. Ahora vamos a bajar nuestro archivo de configuración del servicio de Google. Para ello hacemos lo siguiente:

    1. Vamos nuevamente a nuestra consola de **Firebase**.
    2. Damos clic en el engrane que esta aun lado del texto **Project overview**.
    3. Luego damos clic en la opción **Project settings**.

    ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-project-settings.png)

    4. Ir a la sección de **Your apps** y dar clic en el botón **Add app**.

    ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-add-app.png)

    5. Seleccionamos **Android**, seguido de esto nos mostrara un Wizard para finalizar configuración.

    ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-add-android-app.png)

    6. Aquí nos pide 3 datos.
       - Nombre del paquete, ese lo obtenemos de nuestro archivo `app.json`, en la sección de android.

       ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-package-name.png)

       - Nombre de la aplicación (Nickname), puede llevar espacios y mayúsculas.
       - Certificado SHA-1, para obtener este debemos ya de tener en nuestra carpeta del proyecto la carpeta .android, que se genero en el paso 9. Nos tenemos que mover a nuestra carpeta de android y ejecutar el siguiente comando `./gradlew signingReport`. Este nos devolverá una lista de certificados, buscamos en donde diga `variant: debug`, suele estar hasta el principio de la ejecución del comando.

       ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-signing-report.png)

    7. Damos clic en el botón **Register app**.

    ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-register-android-step-1.png)

    8. En el siguiente paso nos da un archivo para bajar llamado `google-service.json`, lo descargamos y lo dejamos en la raíz de nuestro proyecto (al nivel de `app.json`). Damos clic en el botón **Next**.

    ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-register-android-step-2.png)

    9. Le damos clic al botón **Next** en el paso 3, y en el paso 4 le damos clic al botón **Continue to console**.

    ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-register-android-step-4.png)

12. Agregamos la referencia a nuestro archivo de `google-service.json` en el archivo `app.json` a nivel de `android`.
13. Instalamos el siguiente paquete, que nos va a permitir conectarnos con nuestro servicio de autenticación de Google.

`npx expo install @react-native-google-signin/google-signin`

> NOTA: Para mas información del plugin ir a la siguiente [liga](https://github.com/react-native-google-signin/google-signin#expo-installation).

14. Agregamos el paquete que instalamos anterior a nuestra lista de plugins de la configuración de nuestra aplicación de expo, para ello en el archivo app.json agregamos lo siguiente:

![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-add-plugin-google.png)

15. Ahora se crea un archivo `firebase.js` (O `.ts` en caso de ocupar TypeScript) y aquí se definirán todos los servicios que nos van a permitir iniciar sesión con Email/Password o con la cuenta de Google. Al final este archivo nos debe quedar como sigue:

```javascript
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Alert } from 'react-native';

import { auth, db } from '../firebase-config';

GoogleSignin.configure({
  offlineAccess: true,
  webClientId: '[google-web-client-id]',
});

export const loginWithGoogle = async () => {
  try {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = GoogleAuthProvider.credential(idToken);
    await signInWithCredential(auth, googleCredential);
  } catch (error: unknown) {
    Alert.alert('Error', JSON.stringify(error));
  }
};

export const logoutAuth = async () => {
  try {
    await auth.signOut();
  } catch (error: unknown) {
    Alert.alert('Error', JSON.stringify(error));
  }
};

export const registerEmailPass = async (user: {
  full_name: string;
  email: string;
  password: string;
}) => {
  try {
    const context = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    );
    const userRef = doc(db, 'users', context.user.uid);
    await setDoc(userRef, {
      email: user.email,
      full_name: user.full_name,
    });
  } catch (error: unknown) {
    console.log(error);
    Alert.alert('Error', JSON.stringify(error));
  }
};

export const loginWithEmailPass = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: unknown) {
    Alert.alert('Error', JSON.stringify(error));
  }
};
```

16. En el archivo anterior es donde se debe colocar el `Web Client ID` que obtuvimos al configurar la autenticación con Google. También se puede obtener de la siguiente manera.

    1. Vamos nuevamente a nuestra consola de **Firebase**.
    2. Damos clic en nuestro servicio de **Authentication** que ya debemos tener activado.

    ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-select-authentication.png)

    3. Luego damos clic en el tab de **Sign-in method**.

    ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-select-sign-in-method.png)

    4. Damos clic en el boton de editar de nuestro servicio de Google.

    ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-edit-google-auth-service.png)

    5. Damos clic en el texto **Web SDK configuration**.
    6. Copiamos el contenido del input **Web Client ID**.

    ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-copy-web-client-id.png)

Hasta este punto ya tenemos configurado nuestro proyecto en Firebase y habilitado el servicio de autenticación con Email/Password y el proveedor de oAuth de Google, ademas se proporciona el código final del archivo de firebase.js donde se encuentran todos los métodos que se pueden usar para este propósito.

### Configuración de base de datos

1. Ir a la consola de **Firebase**.
2. Damos clic en la opción de **Build** y enseguida en la opción **FireStore Database**.

![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-enable-firestore-db.png)

3. Ahora damos clic en el botón de **Create database**.

![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-firestore-started.png)

4. Seleccionamos la opción **Start in test mode**, esto no nos obligara a colocar reglas para el uso de la base de datos.

![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-start-test-mode.png)

5. En el siguiente paso se especifica la ubicación de nuestra base de datos, en este caso dejamos el valor default y presionamos el botón **Enable**.

![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-select-location-db.png)

6. Con estos sencillos pasos ya se tiene habilitado el servicio de base de datos.

> En la siguiente URL viene la documentación oficial para el uso de [FireStore database](https://firebase.google.com/docs/firestore).

#### Configurar permisos a nivel de la base de datos.

1. Ir a la consola de **Firebase**.
2. Seleccionar la opción **Firestore Database**.

![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-select-firestore-database.png)

3. Seleccionar el tab **Rules**.

![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-tab-rules.png)

4. A continuación se muestra un código de ejemplo de los permisos que se pueden especificar.

```javascript
rules_version = '2';
​
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read or edit any logued user
    match /states/{state} {
      allow read, write: if request.auth != null;
    }
​
    // Make sure the uid of the requesting user matches name of the user
    // document. The wildcard expression {userId} makes the userId variable
    // available in rules.
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

En la siguiente URL se puede ver la configuración que se puede realizar para los permisos y roles que se manejan a nivel de [base de datos](https://firebase.google.com/docs/firestore/security/get-started).

### Configuración de Hosting

La siguiente configuración aplica para proyectos que involucran aplicaciones web, que pueden estar construidos con React, Angular, Vue o Vainilla (HTML, CSS, JavaScript).

1. Ir a la consola de **Firebase**
2. Dar clic en la opción **Build** y seleccionar la opción **Hosting**.
3. Damos clic en el botón **Get started** y seguimos el Wizard que se nos muestra.

![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-hosting-get-started.png)

4. Instalamos de forma global la linea de comandos de firebase.

`npm install -g firebase-tools`

5. Ir a nuestro proyecto en **Visual Studio Code** y ejecutar los siguientes comandos:

El siguiente comando inicia sesión en la consola de firebase desde nuestra terminal.

`firebase login`

Este otro comando permite comenzar a configurar nuestra aplicación web.

`firebase init`

A continuación se muestran los pasos que hay que seguir del Wizard que se muestra en la terminal para finalizar la configuración.

   1. Nos pregunta si estamos seguros de iniciar nuestro proyecto en la carpeta actual `Are you ready to proceed? (Y/n)`.
   2. Nos muestra una lista de servicios / características para configurar en nuestra aplicación web, en este caso solo vamos a seleccionar la opción de `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`. Para ello moverse con las flechas del teclado y presionar la barra espaciadora para seleccionar, enseguida dar enter.

   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-hosting-init.png)

   3. Ahora nos pregunta como queremos utilizar nuestra configuración, seleccionamos `Use an existing project`.
   4. Ahora nos va a mostrar la lista de proyectos de Firebase que tenemos configurado, seleccionamos el nuestro de la lista (nos movemos con las flechas) y a continuación presionamos enter.
   5. Nos pregunta si queremos usar un framework, en nuestro caso estamos intentando deployear una aplicación web que ya esta hecha con **React**, por lo tanto escribimos que No.

   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-hosting-init-2.png)

   6. Ahora nos pide seleccionar la ruta donde se van a encontrar los archivos estaticos que se van a deployear con firebase, en nuestro caso colocamos que sera la carpeta de `build`.
   7. Ahora nos pregunta si lo que vamos a deployear es una `single web application`, en nuestro caso es un Y, debido a que al ser una aplicación **React** todas las rutas serán servidas por un solo archivo index.html.
   8. En el siguiente paso nos pregunta si queremos deployear nuestros builds con GitHub, en nuestro caso colocaremos N.
   9. Listo eso seria todo.

   ![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-hosting-init-3.png)

6. Una vez terminada la configuración podemos deployear nuestro sitio, pero primero tenemos que construir los archivos que se van a deployear, para ello ejecutaremos al nivel de nuestro proyecto el comando:

`npm run build`

![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/react-npm-run-build.png)

Y seguido de este comando solo escribiremos el siguiente comando:

`firebase deploy`

Una vez que acabe el deploy, en la consola se nos mostrara la URL donde vamos a poder ver el proyecto ejecutándose en la nube de **Firebase**.

![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/firebase-deploy.png)

### Ejemplos de código.

1. Borrar un documento

```javascript
const deleteRow = async (key) => {
   try {
      // Creamos primero la referencia al documento que vamos a editar
      const stateRef = doc(db, "states", key);
      // Eliminamos nuestro documento
      await deleteDoc(stateRef);
   } catch (error) {
   message.error(error.message);
   }
};
```

2. Crear o Editar un documento.

```javascript
const saveState = async (values) => {
   try {
   if (!selectedState) {
      // Con la siguiente instrucción creamos un nuevo documento en la colección a la que hagamos referencia
      await setDoc(doc(collection(db, "states")), values)
   } else {
      // Creamos primero la referencia al documento que vamos a editar
      const stateRef = doc(db, "states", selectedState.key);
      // Editamos nuestro documento
      await setDoc(stateRef, values, {
         merge: true,
      });
   }
   toggleModal();
   } catch (error) {
   message.error(error.message);
   }
};
```

3. Crear una suscripcion en tiempo real para escuchar cuando alguno de los documento sufra algun cambio o se inserte uno nuevo.

```javascript
useEffect(() => {
   // En la siguiente sección de código creamos una suscripción a una colección para escuchar en tiempo real los cambios que sufra
   const subscriber = onSnapshot(
   query(collection(db, "states"), orderBy("name")),
   querySnapshot => {
      const states = [];
      querySnapshot.forEach(doc => {
         states.push({
         ...doc.data(),
         key: doc.id,
         });
      });
      setData(states);
   },
   );
   return subscriber;
}, []);
```
