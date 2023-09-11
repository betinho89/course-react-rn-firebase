import { useState, useRef } from "react";

export default function MovingDot (
  { color = 'red', size = 20 }
) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const wrapper = useRef(null);

  const handlePointerMove = event => {
    setPosition({
      x: event.clientX - wrapper?.current?.offsetLeft,
      y: event.clientY - wrapper?.current?.offsetTop,
    });
  };

  return (
    <div className="movingWrapper" style={{
      backgroundColor: '#CCC',
      height: 300,
      overflow: 'hidden',
      width: '100%'
    }} ref={wrapper} onPointerMove={handlePointerMove}>
      <div className="dot" style={{
        backgroundColor: `${color}`,
        borderRadius: '50%',
        height: `${size}px`,
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: `${size}px`,
      }}></div>
    </div>
  );
}