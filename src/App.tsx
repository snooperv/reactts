import React, { useState } from "react";

interface ITableData {
  /* Интерфейс для переменной table */
  profile: [{ name: string; surname: string }];
}

function App() {
  const [data, setData] = useState({
    name: "",
    surname: "",
  }); /* Здесь хранятся данные об одном пользователе, которые мы вводим в поля инпут */
  const [table, setTable] =
    useState<ITableData>(); /* Здесь хранятся данные обо всех пользователях */

  const message = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); /* Эта строчка отменяет перезагрузку страницы при отправке формы */

    if (table) {
      /* Есть в переменной table есть данные, то добавляем новые */
      table.profile.push({ name: data.name, surname: data.surname });
      setTable({ profile: table.profile });
    } else {
      /* Если данных нет, то записываем первую строчку */
      setTable({ profile: [{ name: data.name, surname: data.surname }] });
    }

    setData({
      name: "",
      surname: "",
    }); /* *Юзерфрендли интерфейс* Очищаем строки ввода */
  };

  return (
    <div>
      <form onSubmit={message}>
        {" "}
        {/* При отправке формы вызывается функция message */}
        <label>
          Введите свое имя:{" "}
          <input
            value={
              data.name
            } /* Здесь мы обновляем текстовое содержимое инпута */
            onChange={(
              event /* Здесь перезаписываем имя в переменной data */
            ) => setData({ name: event.target.value, surname: data.surname })}
          />
        </label>
        <br />
        <label>
          Введите свою фамилию:{" "}
          <input
            value={data.surname}
            onChange={(event) =>
              setData({ name: data.name, surname: event.target.value })
            }
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Отправить" />
      </form>
      <h3>Список пользователей:</h3>
      <ul>
        {table /* Для начала проверяется есть ли какие-нибудь данные в переменной table */ &&
          table.profile.map((people, index) => {
            /* Если данные есть, то выводим каждую строчку из массива (списка). Это делается с помозью функции map() */
            return (
              <li key={index}>
                {people.name} {people.surname}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
