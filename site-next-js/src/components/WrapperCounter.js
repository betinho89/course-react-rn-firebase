import { useState } from "react";

import Button from "./Button";
import Counter from "./Counter";

export default function WrapperCounter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <Button increaseCount={increaseCount} />
      <Counter value={count} />
    </div>
  )
}