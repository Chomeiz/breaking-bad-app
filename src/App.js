import React, { useState, useEffect } from "react";
import Frase from "./componentes/Frase";
import Spinner from "./componentes/Spinner";

const initialFrase = {
  text: 'Modi vero debitis explicabo et.',
  autor: 'Franecki'
}

function App() {

  const [frase, setFrase] = useState(initialFrase);
  const [loading, setLoading] = useState(false);

  const updateFrase = async () => {
    setLoading(true);
    const url = "https://www.breakingbadapi.com/api/quote/random";
    const res = await fetch(url);
    const [nuevaFrase] = await res.json();
    console.log(nuevaFrase);
    const { quote: text, author: autor } = nuevaFrase;

    setFrase({
      text,
      autor,
    })

    setLoading(false);
  }

  useEffect(() => {
    updateFrase();
  }, []);

  return (
    <div className="app">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      <button onClick={() => updateFrase()}>Dame otra Frase</button>
      {
        loading ? <Spinner /> : <Frase frase={frase} />
      }
    </div>
  );
}

export default App;