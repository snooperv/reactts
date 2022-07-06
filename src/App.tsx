import React, { useState } from "react";

function App() {
  const [isClick, setIsClick] = useState(false);
  const [example, setExample] = useState<string>();

  return (
    <div>
      <button
        onClick={() => {
          setIsClick(!isClick);
        }}
      >
        Нажми меня
      </button>

      {isClick ? (
        <p>Переменная isClick равна true</p>
      ) : (
        <p>А сейчас переменная равна false</p>
      )}
      {isClick && <p>Текст показан</p>}

      {example || (
        <div>
          <p>Переменная не определена</p>
          <button
            onClick={() => {
              setExample("Новый текст");
            }}
          >
            Назначить новый текст
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
