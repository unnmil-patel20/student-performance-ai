
import { useState } from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import InputCard from "./Components/InputCard";
import ResultCard from "./Components/ResultCard";

import "./App.css";

function App() {
  const [prediction, setPrediction] = useState(null);

  return (
    <div className="app">
      <Navbar />

      <main className="main-content" id="home">
        <Hero />

        <section className="prediction-grid">
          <InputCard setPrediction={setPrediction} />
          <ResultCard prediction={prediction} />
        </section>

        <section className="features" id="about">
          <div className="feature">
            <span>01</span>
            <h3>Machine Learning</h3>
            <p>
              Predictions are generated using a trained
              regression model.
            </p>
          </div>

          <div className="feature">
            <span>02</span>
            <h3>Instant Results</h3>
            <p>
              Enter your details and receive a prediction
              within seconds.
            </p>
          </div>

          <div className="feature">
            <span>03</span>
            <h3>Simple Analytics</h3>
            <p>
              Understand how your academic inputs relate
              to your predicted marks.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <span>✦ StudentAI</span>
        <span>Powered by Machine Learning</span>
      </footer>
    </div>
  );
}

export default App;

