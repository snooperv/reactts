import React, { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      {isAuth ? (
        <p>Добро пожаловать: Пользовать 1</p>
      ) : (
        <p>Вы не авторизованы</p>
      )}
      {!isAuth && (
        <button
          onClick={() => {
            setIsAuth(true);
          }}
        >
          Авторизоваться
        </button>
      )}
    </div>
  );
}

export default App;
