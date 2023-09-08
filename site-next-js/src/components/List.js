import { sculptureList } from "@/utils/lists";

export default function List () {
  return (
    <div>
      {sculptureList.length ? (
        <ul>
          {sculptureList.map(item => (
            <li key={item.artist}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <span>No hay elementos en la lista</span>
      )}
    </div>
  );
}