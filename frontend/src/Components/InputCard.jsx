
import { useState } from "react";

function InputCard({ setPrediction }) {

  const [studyHours, setStudyHours] = useState("");
  const [attendance, setAttendance] = useState("");
  const [previousMarks, setPreviousMarks] = useState("");
  const [assignments, setAssignments] = useState("");

  const [loading, setLoading] = useState(false);


  const handlePredict = async () => {

    if (
      studyHours === "" ||
      attendance === "" ||
      previousMarks === "" ||
      assignments === ""
    ) {
      alert("Please fill in all the details.");
      return;
    }

    setLoading(true);

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/predict",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            study_hours: Number(studyHours),
            attendance: Number(attendance),
            previous_marks: Number(previousMarks),
            assignments: Number(assignments)
          })
        }
      );


      if (!response.ok) {
        throw new Error("Prediction request failed");
      }


      const data = await response.json();

      setPrediction(data);


    } catch (error) {

      console.error(error);

      alert("Could not connect to the AI server.");

    } finally {

      setLoading(false);

    }
  };


  return (
    <div className="card input-card">

      <div className="card-heading">

        <div>
          <p className="eyebrow">STUDENT DATA</p>
          <h2>Your Details</h2>
        </div>

        <div className="card-icon">⌁</div>

      </div>


      <div className="form">

        {/* Study Hours */}
        <div className="input-group">

          <label>Study Hours</label>

          <div className="input-wrapper">

            <input
              type="number"
              placeholder="e.g. 6"
              value={studyHours}
              onChange={(e) => setStudyHours(e.target.value)}
            />

            <span>hrs/day</span>

          </div>

        </div>


        {/* Attendance */}
        <div className="input-group">

          <label>Attendance</label>

          <div className="input-wrapper">

            <input
              type="number"
              placeholder="e.g. 85"
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
            />

            <span>%</span>

          </div>

        </div>


        {/* Previous Marks */}
        <div className="input-group">

          <label>Previous Marks</label>

          <div className="input-wrapper">

            <input
              type="number"
              placeholder="e.g. 72"
              value={previousMarks}
              onChange={(e) => setPreviousMarks(e.target.value)}
            />

            <span>/100</span>

          </div>

        </div>


        {/* Assignments */}
        <div className="input-group">

          <label>Assignments Completed</label>

          <div className="input-wrapper">

            <input
              type="number"
              placeholder="e.g. 9"
              value={assignments}
              onChange={(e) => setAssignments(e.target.value)}
            />

            <span>tasks</span>

          </div>

        </div>


        {/* Predict Button */}
        <button
          className="predict-button"
          onClick={handlePredict}
          disabled={loading}
        >

          <span>✦</span>

          {loading ? "Predicting..." : "Predict Performance"}

          <span className="arrow">→</span>

        </button>

      </div>

    </div>
  );
}

export default InputCard;

