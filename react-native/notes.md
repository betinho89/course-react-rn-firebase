// Paquetes para uso de Navegación
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install @react-navigation/drawer

// Corregir error
npm uninstall @react-navigation/stack
npx expo install react-native-gesture-handler react-native-reanimated

// babel.config.js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin'
    ]
  };
};

// Modificar script de "start" en "package.json"
"start": "expo start --clear",

// Agregar hasta el principio del index.js
import 'react-native-gesture-handler';

https://we.tl/t-Zo6eWSFQ6c

// Con clave Chango123
https://xd.adobe.com/view/22a45f0b-2787-43a0-7e13-5a7b9242e30d-5495/

// Configuración de aplicación (Incluido el splash)
https://docs.expo.dev/versions/latest/config/app/

// Iconos de Expo
https://icons.expo.fyi/


Ver documentacion de firestore para el manejo de la base de datos [liga](https://firebase.google.com/docs/firestore/query-data/get-data).

Configuración de permisos y reglas sobre la base de datos [liga](https://firebase.google.com/docs/rules/get-started)