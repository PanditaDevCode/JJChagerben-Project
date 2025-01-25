import React from "react";
import PriceMentoring from "../components/PriceItems";

const PriceContent = () => {
  const services = [
    {
      title: "Pools De Liquidez",
      description: "Herramienta Gráfica",
      price: "$200",
      payment: "Por Mes",
      features: [
        "Mapa de calor de liquidación",
        "Gráfico de alta frecuencia",
        "Cuadro histórico",
        "TrenDiff: Indicador de tendencia",
        "Complemento BitXpander",
        "ETF y empresas: titulares de Bitcoin",
      ],
      link: "https://tradingdifferent.com/?ref=YELgWNnX",
    },
    {
      title: "Mentoría Premium",
      description: "Precio VIP",
      price: "$150",
      payment: "UN SOLO PAGO",
      features: [
        "Si te equivocas yo te daré una pu#@da",
        "Aprende a Reconocer estafas",
        "Como crear tus wallets",
        "Como guardar tus llaves privadas",
        "Como comprar BTC al mejor precio del mercado",
        "Mis estrategias de inversión",
        "Acceso al grupo de difusión exclusivo para ALUMNOS",
      ],
      link: "https://api.whatsapp.com/send/?phone=593998177135&text=Información+sobre+la+MENTORIA+PREMIUM",
    },
    {
      title: "No Hagas Trading",
      description: "BitMex",
      price: "0$",
      payment: "No Hagas TRADING",
      features: [
        "Si pierdes dinero te P#t3o",
        "No hacer TRADING",
        "Compra y Guarda",
        "Deja de ser P3nd3j0",
        "Si haces Trading te P#t3o",
        "No valgas V3rg4",
      ],
      link: "https://www.bitmex.com/app/register",
    },
  ];

  return <PriceMentoring services={services} />;
};

export default PriceContent;