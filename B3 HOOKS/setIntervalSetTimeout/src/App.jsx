
import { useState, useEffect } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [key, setKey] = useState("");

  const handleChange = (e) => {
    setKey(e.target.value);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const filteredCountries = countries.filter((e) =>
    e.name.common.toLowerCase().includes(key.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <input
        type="text"
        value={key}
        onChange={handleChange}
        placeholder="Tìm kiếm"
      />

      <ul>
        {filteredCountries.length > 0 ? (
          filteredCountries.map((e) => (
            <li key={e.name.common}>{e.name.common}</li>
          ))
        ) : (
          key && <p>Không tìm thấy...</p>
        )}
      </ul>
    </div>
  );
}