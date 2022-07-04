import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Нажми меня
      </button>
      <br />
      счетчик={count}
    </div>
  );
}

export default App;
