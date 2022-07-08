import React, { useState } from "react";

interface IProps {
  items: number[];
}

function ListView(props: IProps) {
  const elements = props.items.map((elem) => {
    return <li>{elem}</li>;
  });

  return (
    <ul>
      {elements}
    </ul>
  );
}

function App() {
  const list = [10, 20, 30, 40, 50, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div>
        <ListView items={list} />
    </div>
  );
}

export default App;
