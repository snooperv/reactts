import React, { useState } from "react";

interface mainProps {
  page: string;
  example: number;
}

function MainContent(props: mainProps) {
  if (props.page == "главная") {
    return <div>Контент главной страницы</div>;
  } else if (props.page == "вторая") {
    return <div>Контент второй страницы</div>;
  } else if (props.page == "третья") {
    return <div>Контент третьей страницы</div>;
  }
  return <div></div>;
}

function App() {
  const [page, setPage] = useState("главная");

  return (
    <div>
      <a
        onClick={() => {
          setPage("главная");
        }}
      >
        Главная
      </a>
      <br />
      <a
        onClick={() => {
          setPage("вторая");
        }}
      >
        Вторая страница
      </a>
      <br />
      <a
        onClick={() => {
          setPage("третья");
        }}
      >
        Третья страница
      </a>
      <br />
      <MainContent page={page} example={10} />
    </div>
  );
}

export default App;
