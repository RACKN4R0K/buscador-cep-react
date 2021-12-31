import { FiSearch } from "react-icons/fi";
import "./style.css";
import { useState } from "react";
import api from "./complements/services/api.js";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState("");

  async function handleSearch() {
    if (input === "") {
      alert("Preencha algum CEP");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Ops erro ao buscar!");
      setInput("");
    }
  }
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>

        <button className="buttonSearch" onClick={handleSearch} type="submit">
          <FiSearch size={20} color="#FFF"></FiSearch>
        </button>
      </div>
      {Object.keys(cep).length > 0 && ( //verifica se a alguma coisa dentro do objeto caso nn retornara vazio
        <main className="main">
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>
            {cep.localidade}-{cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default App;
