import { useEffect } from "react";
import { useState } from "react";

export default function ArtsSection() {
  const [art, setArt] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/art")
      .then((res) => res.json())
      .then((res) => setArt(res))
      .catch((error) => console.error("Error fetching art:", error));
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {art.map((a) => (
            <li key={a.id}>
              <div className="frame">
                <img
                  src={`https://boolean-uk-api-server.fly.dev${a.imageURL}`}
                />
              </div>
              <h3>{a.title}</h3>
              <p>Artist: {a.artist}</p>
              <h4>Publication History:</h4>
              <ul>
                {a.publicationHistory.map((publication, index) => (
                  <li key={index}>{publication}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
