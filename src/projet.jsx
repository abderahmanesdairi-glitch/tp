
export default function Projet() {
  return (
    <div className="page">

      <nav className="navbar">
        <h2>BMW <span>M POWER</span></h2>
      </nav>

      <section className="hero" >
        <p className="subtitle">THE LEGENDARY MACHINE</p>
        <h1>BMW M3 <span>GTR</span></h1>
        <p>
          Born for the track. Built to dominate.
          Experience one of BMW's most legendary racing cars.
        </p>
      </section>

      <section className="about">
        <h2>THE LEGEND</h2>
        <p>
          The BMW M3 GTR E46 is one of the most iconic
          racing cars in BMW history. Introduced in 2001,
          it was developed to compete in the American
          Le Mans Series (ALMS).

          Its naturally aspirated 4.0-liter V8 engine,
          aggressive aerodynamic design and incredible
          racing performance made it a true motorsport legend.
        </p>
      </section>

      <section className="specs">
        <h2>TECHNICAL SPECIFICATIONS</h2>

        <div className="cards">
          <div className="card">
            <h3>4.0L</h3>
            <p>V8 Engine</p>
          </div>

          <div className="card">
            <h3>460 HP</h3>
            <p>Racing Version</p>
          </div>

          <div className="card">
            <h3>2001</h3>
            <p>Racing Debut</p>
          </div>

          <div className="card">
            <h3>7 / 10</h3>
            <p>ALMS GT Race Wins</p>
          </div>
        </div>
      </section>

      <footer>
        <h3>BMW M3 GTR</h3>
        <p>Power. Performance. Perfection.</p>
        <p>© 2026 - BMW Fan Page</p>
      </footer>

    </div>
  );
}

