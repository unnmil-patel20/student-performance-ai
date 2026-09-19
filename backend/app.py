from fastapi import FastAPI
import joblib
import pandas as pd

app = FastAPI()

#load the trained AI model 
model = joblib.load("model/student_model.pkl")

@app.get("/")
def home():
    return{
        "message": "Student Performance AI is running!"
    }

@app.post("/predict")
def predict(
    study_hours: float,
    attendance: float,
    previous_marks: float,
    assignments:float

):
    #create student data
    student = pd.DataFrame([{
        "study_hours": study_hours,
        "attendance": attendance,
        "previous_marks": previous_marks,
        "assignments": assignments
    }])

    #make prediction
    prediction = model.predict(student)
    return{
            "predicted_marks": round(float(prediction[0]), 2)
    }