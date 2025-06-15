import {memo, useEffect, useRef} from "react";

function ForexHeatmap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      if (!containerRef.current) return;

      containerRef.current.innerHTML = '';

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
          {
            "width": "100%",
            "height": "100%",
            "currencies": [
            "EUR",
            "USD",
            "JPY",
            "GBP",
            "CHF",
            "AUD",
            "CAD",
            "NZD",
            "CNY"
            ],
            "isTransparent": false,
            "colorTheme": "light",
            "locale": "en",
            "backgroundColor": "#ffffff"
          }`;
      containerRef.current.appendChild(script);
    },
    []
  );
  return (
    <>
      <div className="tradingview-widget-container" ref={containerRef} style={{height: "100%", width: "100%"}}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow"
                                                     target="_blank"><span className="blue-text">Track all markets on TradingView</span></a>
        </div>

      </div>
    </>
  )
}

export default memo(ForexHeatmap)
