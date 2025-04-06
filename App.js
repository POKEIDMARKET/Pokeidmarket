
import React, { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Pok%C3%A9mon_GO_logo.png"
          alt="Pokemon GO Logo"
          style={{ width: "200px" }}
        />
        <h1>Buy & Sell Pokémon GO Accounts</h1>
        <p>Safe and secure platform to buy or sell your Pokémon GO ID.</p>
        <div>
          <button style={{ marginRight: "10px" }}>Buy Accounts</button>
          <button>Sell Account</button>
        </div>
      </div>

      <section>
        <h2>Available Accounts</h2>
        <input
          type="text"
          placeholder="Search by level, Pokémon, price..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          {[1, 2, 3].map((id) => (
            <div key={id} style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem" }}>
              <h3>Level 35 Trainer</h3>
              <p>Includes: Dragonite, Garchomp, Gyarados</p>
              <p style={{ color: "green" }}>$80</p>
              <button>Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: "center", fontSize: "12px", marginTop: "2rem" }}>
        * Pokémon GO is a trademark of Niantic, Inc. This site is not affiliated with or endorsed by Niantic.
      </footer>
    </main>
  );
}

export default App;
