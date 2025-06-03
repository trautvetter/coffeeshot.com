export default function Myfxbook_com() {
  return (
    <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <iframe
        src="https://widget.myfxbook.com/widget/calendar.html?lang=en&impacts=2,3&symbols=AUD,CAD,CHF,EUR,GBP,JPY,NZD,USD"
        style={{ border: 0, width: '100%', height: '100%' }}></iframe>
    </div>
  );
}
