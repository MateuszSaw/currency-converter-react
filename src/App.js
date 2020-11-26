import './App.css';

function App() {
  return (
    <div className="container">
    <header className="header">
      <h2>Przelicznik walut</h2>
    </header>
    <form className="form">
      <p>
        <label>
          <span className="form__labelText">Kwota w zł:</span>
          <input
            className="form__field"
            type="number"
            placeholder="Kwota"
            step="0.01"
            required
          />
        </label>
      </p>
      <p>
        <label>
          <span className="form__labelText">Waluta:</span>
          <select className="form__field">
            <option value="EUR">Euro</option>
            <option value="GBP">Funt brytyjski</option>
            <option value="USD">Dolar amerykański</option>
          </select>
        </label>
      </p>
      <button className="button">Przelicz</button>
      <p><strong className="result"></strong></p>
    </form>
  </div>
  )
}

export default App;
