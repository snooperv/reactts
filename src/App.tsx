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
  const mainForm:JSX.Element= (
    <div>
      <h3>Вы не авторизованны, пройдите небольшую регистрацию</h3>
      <form>
        <label>
          Имя{" "}
          <input
            type="text"
            required
            onChange={(event) => setPerconalData({ name: event.target.value })}
          />
        </label>{" "}
        <br />
        <label>
          Фамилия{" "}
          <input
            type="text"
            required
            onChange={(event) =>
              setPerconalData({ surname: event.target.value })
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
              setPerconalData({ password: event.target.value })
            }
          />
        </label>
        <br />
        <label>
          Е-майл{" "}
          <input
            type="email"
            onChange={(event) => setPerconalData({ email: event.target.value })}
          />
        </label>
        <br />
        <label>
          Город{" "}
          <input
            type="text"
            onChange={(event) => setPerconalData({ city: event.target.value })}
          />
        </label>
        <br />
        <input type="submit" value="Зарегистрировать" />
      </form>
    </div>
  );
  return { mainForm };
}

export default App;
