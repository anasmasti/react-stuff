import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";

export default function NavItems() {
  const [username, setUsername] = useState([1]);

  const param = () => {
    console.log("done");
  };

  useEffect(param, username);

  let nameItems = [
    {
      link: "home",
      title: "home",
    },
    {
      link: "about",
      title: "about",
    },
    {
      link: "contact",
      title: "contact",
    },
  ];

  function ChangeUsername() {
    const array = [2];
    return setUsername(array);
  }

  const generatedItems = (items) => {
    return items.map((item, index) => {
      return (
        <div key={index}>
          <NavItem link={item.link} title={item.title} />
        </div>
      );
    });
  };

  return (
    <>
      <li>{generatedItems(nameItems)}</li>
      <button onClick={() => ChangeUsername()}>Change </button>
    </>
  );
}
