import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* FIRST SPINNER */}
      <div className="spinner">
        Loading
        <div className="spinner-sector spinner-sector-red"></div>
        <div className="spinner-sector spinner-sector-blue"></div>
        <div className="spinner-sector spinner-sector-green"></div>
        <div className="spinner-sector spinner-sector-teal"></div>
      </div>
      {/* SECOND SPINNER */}
      <div className="spinner-2">Loading</div>
    </div>
  );
}
