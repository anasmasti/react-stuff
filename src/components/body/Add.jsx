import { useRef } from "react";
import { list$ } from "./List";
import { list } from "./List";

export default function Add() {
  const id = useRef("");
  const title = useRef("");

  const addItem = () => {
    let item = {
      id: id.current.value,
      title: title.current.value,
    };

    list$.next([item, ...list]);

    id.current.value = ''
    title.current.value = ''
  };

  return (
    <>
      <div>Add</div>
      <input type="text" ref={id} placeholder="id" />
      <input type="text" ref={title} placeholder="title" />
      <a onClick={() => addItem()}>Add new item</a>
    </>
  );
}
