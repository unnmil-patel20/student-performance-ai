function InputCard(){
    return(
        <div className="card input-card">
            <div className="card-heading">
              <div>
                <p className="eyebrow">STUDENT DATA</p>
                <h2>Your Details</h2>
              </div>

              <div className="card-icon">⌁</div>
            </div>

            <div className="form">

              <div className="input-group">
                <label>Study Hours</label>
                <div className="input-wrapper">
                  <input
                    type="number"
                    placeholder="e.g. 6"
                  />
                  <span>hrs/day</span>
                </div>
              </div>

              <div className="input-group">
                <label>Attendance</label>
                <div className="input-wrapper">
                  <input
                    type="number"
                    placeholder="e.g. 85"
                  />
                  <span>%</span>
                </div>
              </div>

              <div className="input-group">
                <label>Previous Marks</label>
                <div className="input-wrapper">
                  <input
                    type="number"
                    placeholder="e.g. 72"
                  />
                  <span>/100</span>
                </div>
              </div>

              <div className="input-group">
                <label>Assignments Completed</label>
                <div className="input-wrapper">
                  <input
                    type="number"
                    placeholder="e.g. 9"
                  />
                  <span>tasks</span>
                </div>
              </div>

              <button className="predict-button">
                <span>✦</span>
                Predict Performance
                <span className="arrow">→</span>
              </button>

            </div>
          </div>
    );
}

export default InputCard;