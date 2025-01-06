import React, { useEffect } from "react";

const CryptoChart = () => {
    useEffect(() => {
        // Cargar el script de TradingView
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/tv.js";
        script.async = true;
        script.onload = () => {
            // Asegúrate de que TradingView esté definido antes de usarlo
            if (window.TradingView) {
                new window.TradingView.widget({
                    "autosize": true,
                    "symbol": "BINANCE:BTCUSDT",
                    "interval": "D",
                    "timezone": "Etc/UTC",
                    "theme": "dark",
                    "style": "1",
                    "locale": "en",
                    "backgroundColor": "rgba(0, 0, 0, 1)",
                    "hide_side_toolbar": false,
                    "allow_symbol_change": true,
                    "calendar": false,
                    "support_host": "https://www.tradingview.com",
                    "container_id": "tradingview-chart"
                });
            } else {
                console.error('TradingView is not defined');
            }
        };

        document.body.appendChild(script);

        // Limpiar el script al desmontar el componente
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section id="tradingview-chart">
            <div className="tradingview-widget-container" style={{ height: '100%', width: '100%' }}>
                <div className="tradingview-widget-container__widget" style={{ height: 'calc(100% - 32px)', width: '100%' }}></div>
                <div className="tradingview-widget-copyright">
                    <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
                        <span className="blue-text">Track all markets on TradingView</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CryptoChart;