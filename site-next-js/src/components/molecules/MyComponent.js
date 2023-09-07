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
