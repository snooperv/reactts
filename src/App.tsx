import React, { useState } from "react";

interface IProps {
  items: {
    id: number;
    data: string;
  }[];
}

function ListView(props: IProps) {
  const elements = props.items.map((elem) => {
    return <li key={elem.id}>{elem.data}</li>;
  });

  return <ul>{elements}</ul>;
}

function App() {
  const list = [
    { id: 1, data: "Ivan" },
    { id: 2, data: "Petr" },
    { id: 3, data: "Vasilii" },
    { id: 4, data: "Evgenii" },
    { id: 5, data: "Anastasia" },
  ];

  return (
    <div>
      <ListView items={list} />
    </div>
  );
}

export default App;
