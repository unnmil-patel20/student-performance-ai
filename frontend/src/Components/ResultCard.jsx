
function ResultCard({ prediction }) {
  const hasPrediction = prediction !== null;

  return (
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

          <span className="prediction-number">
            {hasPrediction ? prediction.predicted_marks : "--"}
          </span>

          <span className="prediction-label">
            / 100
          </span>

        </div>
      </div>


      <h3>
        {hasPrediction
          ? `${prediction.performance_level} Performance`
          : "Waiting for prediction"}
      </h3>


      <p className="result-description">

        {hasPrediction ? (
          <>
            Your predicted final marks are
            <strong>
              {" "}
              {prediction.predicted_marks}/100
            </strong>.
          </>
        ) : (
          <>
            Fill in your academic details and click
            <strong> Predict Performance </strong>
            to generate your result.
          </>
        )}

      </p>


      {hasPrediction && (
        <div className="recommendation">
          <span>💡</span>

          <div>
            <strong>AI Recommendation</strong>

            <p>
              {prediction.recommendation}
            </p>
          </div>
        </div>
      )}


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
