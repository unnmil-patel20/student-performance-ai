import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import InputCard from './Components/InputCard';
import ResultCard from './Components/ResultCard';
import "./App.css";
function App() {
  return (
    <div className="app">
      {/* Background decoration */}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* Navigation */}
      <Navbar/>


      {/* Main Content */}
      <main className="main-content" id="home">

        {/* Hero Section */}
        <Hero/>

        {/* Prediction Area */}
        <section className="prediction-grid">

          {/* Input Card */}
          <InputCard/>

          {/* Result Card */}
          <ResultCard/>

                  </section>

        {/* Features */}
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

      {/* Footer */}
      <footer>
        <span>✦ StudentAI</span>
        <span>Powered by Machine Learning</span>
      </footer>

    </div>
  );
}

export default App;

