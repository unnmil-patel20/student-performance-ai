from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd

app = FastAPI()

# Allow React frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained AI model
model = joblib.load("model/student_model.pkl")


# Data received from React
class StudentData(BaseModel):
    study_hours: float
    attendance: float
    previous_marks: float
    assignments: float


@app.get("/")
def home():
    return {
        "message": "Student Performance AI is running!"
    }


@app.post("/predict")
def predict(data: StudentData):

    # Create student data
    student = pd.DataFrame([{
        "study_hours": data.study_hours,
        "attendance": data.attendance,
        "previous_marks": data.previous_marks,
        "assignments": data.assignments
    }])

    # Make prediction
    prediction = model.predict(student)

    return {
        "predicted_marks": round(float(prediction[0]), 2)
    }