
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd


app = FastAPI()


# Allow React frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://student-performance-q95usfhmy-personal-projects-0e43.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load trained ML model
model = joblib.load("model/student_model.pkl")


# Student input structure
class StudentData(BaseModel):
    study_hours: float
    attendance: float
    previous_marks: float
    assignments: float


# Home route
@app.get("/")
def home():
    return {
        "message": "Student Performance AI is running!"
    }


# Prediction route
@app.post("/predict")
def predict(data: StudentData):

    student = pd.DataFrame([{
        "study_hours": data.study_hours,
        "attendance": data.attendance,
        "previous_marks": data.previous_marks,
        "assignments": data.assignments
    }])

    # Get prediction from ML model
    prediction = model.predict(student)

    # Keep marks between 0 and 100
    predicted_marks = max(
        0,
        min(100, float(prediction[0]))
    )

    # Determine performance level
    if predicted_marks >= 85:
        performance_level = "Excellent"

    elif predicted_marks >= 70:
        performance_level = "Good"

    elif predicted_marks >= 50:
        performance_level = "Average"

    else:
        performance_level = "Needs Improvement"


    # Generate recommendation
    if data.study_hours < 4:
        recommendation = (
            "Try increasing your daily study time "
            "to improve your performance."
        )

    elif data.attendance < 75:
        recommendation = (
            "Try improving your attendance because "
            "regular classes can help your performance."
        )

    elif data.assignments < 6:
        recommendation = (
            "Complete more assignments regularly "
            "to strengthen your preparation."
        )

    elif data.previous_marks < 60:
        recommendation = (
            "Focus on strengthening your previous weak "
            "areas and revise important concepts."
        )

    else:
        recommendation = (
            "Your current academic habits are good. "
            "Maintain your study routine and attendance."
        )


    # Send result back to React
    return {
        "predicted_marks": round(predicted_marks, 2),
        "performance_level": performance_level,
        "recommendation": recommendation
    }

