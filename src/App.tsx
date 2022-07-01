import React from "react";
interface nameName {
  userName: string;
  secondName: string;
}

function App() {
  const formatName = (user: nameName) => {
    return user.userName + " " + user.secondName;
  };
  const name = {
    userName: "Maria",
    secondName: "Braga",
  };
  return <h1>Имя разработчика: {formatName(name)}</h1>;
}

export default App;
