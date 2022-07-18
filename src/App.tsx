import React, { useState } from "react";

interface IData {
  name?: string;
  surname?: string;
  password?: string;
  email?: string;
  city?: string;
}

function App() {
  const [perconalData, setPerconalData] = useState<IData>();
  const [flag, setFlag] = useState(false);

  function toggleFlag(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFlag(true);
  }

  function process() {
    return (
      <div>
        <p>
          Добро пожаловать, {perconalData?.name} {perconalData?.surname}!
        </p>
        {perconalData?.email ? <p>Ваш email: {perconalData.email}</p> : ""}
        {perconalData?.city ? <p>Ваш город: {perconalData.city}</p> : ""}
      </div>
    );
  }

  const mainForm: JSX.Element = (
    <div>
      <h3>Вы не авторизованны, пройдите небольшую регистрацию</h3>
      <form onSubmit={(event) => toggleFlag(event)}>
        <label>
          Имя{" "}
          <input
            type="text"
            required
            onChange={(event) =>
              setPerconalData({
                name: event.target.value,
                surname: perconalData?.surname,
                password: perconalData?.password,
              })
            }
          />
        </label>{" "}
        <br />
        <label>
          Фамилия{" "}
          <input
            type="text"
            required
            onChange={(event) =>
              setPerconalData({
                name: perconalData?.name,
                surname: event.target.value,
                password: perconalData?.password,
              })
            }
          />
        </label>
        <br />
        <label>
          Пароль{" "}
          <input
            type="password"
            required
            onChange={(event) =>
              setPerconalData({
                name: perconalData?.name,
                surname: perconalData?.surname,
                password: event.target.value,
              })
            }
          />
        </label>
        <br />
        <label>
          Е-майл{" "}
          <input
            type="email"
            onChange={(event) =>
              setPerconalData({
                name: perconalData?.name,
                surname: perconalData?.surname,
                password: perconalData?.password,
                email: event.target.value,
              })
            }
          />
        </label>
        <br />
        <label>
          Город{" "}
          <input
            type="text"
            onChange={(event) =>
              setPerconalData({
                name: perconalData?.name,
                surname: perconalData?.surname,
                password: perconalData?.password,
                email: perconalData?.email,
                city: event.target.value,
              })
            }
          />
        </label>
        <br />
        <input type="submit" value="Зарегистрировать" />
      </form>
    </div>
  );

  return <div>{flag ? process() : mainForm}</div>;
}

export default App;
