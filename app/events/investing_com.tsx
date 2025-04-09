export default function Investing_com() {
  return (
    <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <iframe
        src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&category=_employment,_economicActivity,_inflation,_confidenceIndex&importance=2,3&features=datepicker,timezone,filters&countries=25,32,6,37,72,22,17,39,14,10,35,43,56,36,110,11,26,12,4,5&calType=week&timeZone=8&lang=1"
        style={{ border: 0, width: '100%', height: '100%' }}></iframe>

      <div
        className="poweredBy"
        style={{fontFamily: 'Arial, Helvetica, sans-serif'}}
      >
    <span
      style={{
        fontSize: '11px',
        color: '#333333',
        textDecoration: 'none'
      }}
    >
      Real Time Economic Calendar provided by{' '}
      <a
        href="https://www.investing.com/"
        rel="nofollow"
        target="_blank"
        className="underline_link"
        style={{
          fontSize: '11px',
          color: '#06529D',
          fontWeight: 'bold'
        }}
      >
        Investing.com
      </a>.
    </span>
      </div>
    </div>
  );
}
