import React, { useState } from "react";
interface IProp {
  item: {
    id: string;
    title: string;
    content: string;
    imgUrl: string;
  };
}

function Elem(props: IProp) {
  return (
    <div>
      <h3>{props.item.title}</h3>
      <img src={props.item.imgUrl} alt="No img" />
      <p>{props.item.content}</p>
    </div>
  );
}

function App() {
  const blog = [
    {
      id: "1",
      title: "Отдых в июле на Черном море",
      content:
        "В самый разгар лета, многие берут отпуск, и едут на природу, берег реки, море и другие места, где можно отдохнуть и снять с себя накопившуюся усталость после тяжелых рабочих дней. Особенно привлекательным местом…",
      imgUrl:
        "https://moretraveler.com/wp-content/uploads/2022/06/chernoe-more-300x300.jpg",
    },
    {
      id: "2",
      title: "Самые лучшие студии йоги по всему миру",
      content:
        "С каждым годом все больше людей начинает практиковать йогу и глубже знакомиться с этой эффективной древней наукой. Появляется все больше студий, центров, где можно заниматься с преподавателями. Те, кто давно практикуют йогу для…",
      imgUrl:
        "https://moretraveler.com/wp-content/uploads/2022/01/ytrennyaya-yoga-2-300x300.jpg",
    },
    {
      id: "3",
      title: "Что посмотреть в Алании",
      content:
        "Аланья – небольшой уютный городок, с притягательной энергетикой. Это самая южная точка Турции, поэтому тут пляжный сезон длится дольше, чем во многих других турецких курортах. А помимо пляжа тут есть много других интересных…",
      imgUrl:
        "https://moretraveler.com/wp-content/uploads/2021/08/alaniya-300x300.jpg",
    },
    {
      id: "4",
      title: "Переезд и жизнь в Саудовской Аравии",
      content:
        "Она знает все о жизни в Саудовской Аравии! Анна, блогер, мама 4-х деток, много лет живет в этом государстве, и с радостью делиться с нами своим опытом переезда и жизни в КСА.",
      imgUrl:
        "https://moretraveler.com/wp-content/uploads/2021/07/saydovskaya-araviya8-300x300.jpg",
    },
    {
      id: "5",
      title: "Живописный каньон Кепрюлю в Турции",
      content:
        "Живописный каньон Кепрюлю в Турции – прекрасное место для прогулок, знакомства с первозданной природой, и популярное место для рафтинга.",
      imgUrl:
        "https://moretraveler.com/wp-content/uploads/2021/07/keprele3-300x300.jpg",
    },
  ];
  const elems = blog.map((elem) => {
    return <Elem item={elem} />;
  });
  return <div>{elems}</div>;
}

export default App;
