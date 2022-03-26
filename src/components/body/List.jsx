
import { BehaviorSubject } from "rxjs";
import Item from "./Item";
import Others from "./Others";
export let list = [
  {
    id: 1,
    title: "item 1",
  },
  {
    id: 2,
    title: "item 2",
  },
  {
    id: 3,
    title: "item 3",
  },
];

export const list$ = new BehaviorSubject(list);

export default function List() {


  return (
    <>
      <div>List</div>
      <Item />
      <Others />
    </>
  );
}
