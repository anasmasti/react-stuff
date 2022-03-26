import { useState, useEffect } from "react";
import { list$ } from "./List";

export default function Item() {
  const [data, setData] = useState([]);

  useEffect(() => {
    list$.subscribe((item) => {
      setData(item);
    });
  }, []);

  return (
    <>
      <div>Item</div>
      <div>
        {data.map((item) => (
          <h3 key={item.id}> {item.title}</h3>
        ))}
      </div>
    </>
  );
}
