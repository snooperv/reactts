import React from "react";

/* Нащ\ш собственный тип данных, который нужен для работы функции format() */
interface formatUser {
  firstName: string;
  secondname: string;
  patronymic?: string;
}

function App() {
  /* Функция (просто выглядит немного по-другому) */
  const format = (user: formatUser) => {
    let name = user.firstName + " " + user.secondname;
    if (user.patronymic) {
      name += " " + user.patronymic;
    }
    return name;
  };

  /* Переменная user - словарь, который имеет три поля (ключа) */
  const user = {
    firstName: "Ivan",
    patronymic: "Ivanovich",
    secondname: "Ivanov",
  };

  const user2 = {
    firstName: "Petr",
    secondname: "Petrov",
  };

  /* Константа (неизменяемая переменная) */
  const elem = <h1>Привет, {format(user)}!</h1>;

  return elem; /* Отображаем элемент elem */
}

export default App;
