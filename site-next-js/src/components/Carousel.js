import { useState } from "react";
import Image from 'next/image'
import { sculptureList } from "@/utils/lists";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  const handleNext = () => {
    if (sculptureList[index + 1]) {
      setIndex(index + 1);
    }
  }

  const handleBack = () => {
    if (sculptureList[index - 1]) {
      setIndex(index - 1);
    }
  }

  const toggleDescription = () => {
    setShow(!show);
  };

  const sculpture = sculptureList[index];
  return (
    <div>
      <div>
        <button disabled={!sculptureList[index - 1]} type="button" onClick={handleBack}>Back</button>
        <button disabled={!sculptureList[index + 1]} type="button" onClick={handleNext}>Next</button>
      </div>
      <h2>
        <em>{sculpture.name}</em> by {sculpture.artist}
      </h2>
      <h4>{index + 1} of {sculptureList.length}</h4>
      <button type="button" onClick={toggleDescription}>
        {show ? 'Ocultar' : 'Mostrar'}
      </button>
      {show && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
}