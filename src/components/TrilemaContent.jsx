import React from "react";

const TrilemaInformation = ({ items }) => {
  return (
    <section
      className="information container flex justify-between pt-0 pb-0 pr-[100px] pl-[100px] gap-[10px] 
                            xxs:mt-5 xxs:p-[30px] xxs:pb-[150px] xxs:flex-col xxs:gap-8
                            mx:flex mx:flex-row mx:mt-[-8em] mx:m-[-.5em] mx:pb-[1em] mx:pr-[10px] mx:pl-[10px] mx:gap-0 
                            xl:ml-[4em] xl:mt-[-7em] xl:gap-3
                            2xl:ml-[10%] "
    >
      {items.map((item) => (
        <div
          className="information-1 mt-0 mb-0 ml-[15px] mr-{15px} bg-[#141418] p-[15px] rounded-[15px] z-2 "
          key={item.id}
        >
          <h3 className="text-white text-[18px]">
            <strong>{item.title}</strong>
          </h3>
          <p className="mb-[5px]">{item.content}</p>
        </div>
      ))}
    </section>
  );
};

const TrilemaContent = () => {
  const items = [
    {
      id: 1,
      title: "Escalabilidad:",
      content:
        "La escalabilidad se refiere al objetivo de construir una blockchain que pueda admitir más y más transacciones por segundo.",
    },
    {
      id: 2,
      title: "Seguridad:",
      content:
        "Una buena red de blockchain debe ser resistente a los ataques de entidades maliciosas.",
    },
    {
      id: 3,
      title: "Descentralización:",
      content:
        "Toda la estructura está organizada para que no haya una única persona u organización a cargo, sino que es descentralizada.",
    },
  ];

  return <TrilemaInformation items={items} />;
};

export default TrilemaContent;