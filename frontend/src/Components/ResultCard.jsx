function ResultCard(){
    return(
        <div className="card result-card">

            <div className="result-top">
              <div>
                <p className="eyebrow">AI PREDICTION</p>
                <h2>Predicted Result</h2>
              </div>

              <div className="ai-icon">✦</div>
            </div>

            <div className="prediction-circle">
              <div className="circle-content">
                <span className="prediction-number">--</span>
                <span className="prediction-label">/ 100</span>
              </div>
            </div>

            <h3>Waiting for prediction</h3>

            <p className="result-description">
              Fill in your academic details and click
              <strong> Predict Performance </strong>
              to generate your result.
            </p>

            <div className="result-footer">
              <div>
                <span className="status-dot"></span>
                Model ready
              </div>

              <span>Linear Regression</span>
            </div>

          </div>


    );
}

export default ResultCard;