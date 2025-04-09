export default function Myfxbook_com() {
  return (
    <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <iframe
        src="https://widget.myfxbook.com/widget/calendar.html?lang=en&impacts=0,1,2,3&symbols=AUD,CAD,CHF,CNY,EUR,GBP,JPY,MXN,NZD,USD"
        style={{ border: 0, width: '100%', height: '100%' }}></iframe>
    </div>
  );
}
