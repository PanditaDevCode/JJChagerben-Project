import React from "react";

const TrilemaInformation = ({ items }) => {
    return (
        <section className="information container">
            {items.map(item => (
                <div className="information-1" key={item.id}>
                    <h3><strong>{item.title}</strong></h3>
                    <p>{item.content}</p>
                </div>
            ))}
        </section>
    );
};

const TrilemaContent = () => {
    const items = [
        {
            id: 1,
            title: 'Escalabilidad:',
            content: 'La escalabilidad se refiere al objetivo de construir una blockchain que pueda admitir más y más transacciones por segundo.'
        },
        {
            id: 2,
            title: 'Seguridad:',
            content: 'Una buena red de blockchain debe ser resistente a los ataques de entidades maliciosas.'
        },
        {
            id: 3,
            title: 'Descentralización:',
            content: 'Toda la estructura está organizada para que no haya una única persona u organización a cargo, sino que es descentralizada.'
        }
    ];

    return (
        <TrilemaInformation items={items} />
    );
};

export default TrilemaContent;