export default function Button ({ increaseCount }) {
  return (
    <button className="custom-button" type="button" onClick={increaseCount}>Click Me!</button>
  );
}