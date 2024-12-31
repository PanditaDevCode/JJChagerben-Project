import React, { useEffect } from "react";

const CryptoChart = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/tv.js";
        script.async = true;
        document.body.appendChild(script);

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