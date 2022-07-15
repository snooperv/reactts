import React, { useState } from "react";

function App() {
 
  return (
    <div>
      <h3>Вы не авторизованны, пройдите небольшую регистрацию</h3>
      <form>
        <label>
          Имя <input type="text" />
        </label>{" "}
        <br />
        <label>
          Фамилия <input type="text" />
        </label>
        <br />
        <label>
          Пароль <input type="password" />
        </label>
        <br />
        <label>
          Е-майл <input type="emall" />
        </label>
        <br />
        <label>
          Город <input type="text" />
        </label>
        <br />
        <input type="submit" value="Зарегистрировать" />
      </form>
    </div>
  );
}

export default App;
