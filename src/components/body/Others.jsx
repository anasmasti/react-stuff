import { useState, useEffect } from "react";
import { list$ } from "./List";

export default function Others() {
  const [data, setData] = useState([]);

  useEffect(() => {
    list$.subscribe((item) => {
      setData(item);
    });
  }, []);

  return (
    <>
      <div>Others</div>
      <div>
        {data.map((item) => (
          <h3 key={item.id}> {item.title}</h3>
        ))}
      </div>
    </>
  );
}
