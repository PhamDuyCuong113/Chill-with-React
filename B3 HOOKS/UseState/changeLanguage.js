import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lang, setLang] = useState("vi");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleChange2 = (e) => {
    setLang(e.target.value);
  };

  return (
    <div className="App">
      <select value={lang} onChange={handleChange2}>
        <option value="vi">VIE</option>
        <option value="en">ENG</option>
      </select>
      <input onChange={handleChange} />
      {lang == "vi" ? <h2>xin chao {name}</h2> : <h2>hello {name} </h2>}
    </div>
  );
}
export default App;
