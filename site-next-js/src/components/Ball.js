import { useEffect, useState } from "react";

export default function Ball() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove (event) {
      setPosition({ x: event.clientX, y: event.clientY });
    }
    console.log('Se monto el componente');

    window.addEventListener('pointermove', handleMove);
    return () => {
      console.log('Se desmonto el componente');
      window.removeEventListener('pointermove', handleMove);
    }
  }, []);

  return (
    <div style={{
      background: 'red',
      borderRadius: '50%',
      height: 30,
      position: 'absolute',
      transform: `translate(${position.x}px, ${position.y}px)`,
      width: 30
    }}
    ></div>
  );
}