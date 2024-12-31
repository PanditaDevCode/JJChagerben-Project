import React from "react";

const informationData = [
    {
        id: 1, 
        title: "Escalabilidad",
        content: "La escalabilidad se refiere al objetivo de construir una blockchain que pueda admitir más y más transacciones por segundo."
    },
    {
        id: 2,
        title: "Seguridad",
        content: "Una buena red de blockchain debe ser resistente a los ataques de entidades maliciosas."
    },
    {
        id: 3,
        title: "Descentralización",
        content: "Toda la estructura está organizada para que no haya una única persona u organización a cargo, sino que es descentralizada."
    }
];

const InformationContainer = () => {
    return (
        <section className="information container">
            {informationData.map((info) => (
                <div className="information-item" key={info.id}> 
                    <h3><strong>{info.title}:</strong></h3>
                    <p>{info.content}</p>
                </div>
            ))}
        </section>
    );
};

export default InformationContainer;