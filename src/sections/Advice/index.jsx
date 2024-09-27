import { useState, useEffect } from "react";

export default function AdviceSection() {
  const [favorites, setFavorites] = useState([]);
  const [advice, setAdvice] = useState("");

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((res) => setAdvice(res.slip.advice))
      .catch((error) => console.error("Error fetching advice:", error));
  };

  const saveToFavorites = () => {
    setFavorites([...favorites, advice]);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={fetchAdvice}>Get More Advice</button>
        <button onClick={saveToFavorites}>Save to Favourties</button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favorites.map((a, index) => (
            <li key={index}>{a}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
