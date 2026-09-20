import pandas as pd
import numpy as np
import joblib
import os

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, r2_score


# -----------------------------
# 1. Create student dataset
# -----------------------------

np.random.seed(42)

students = 500

study_hours = np.random.uniform(1, 10, students)
attendance = np.random.uniform(50, 100, students)
previous_marks = np.random.uniform(35, 95, students)
assignments = np.random.randint(2, 11, students)


# Create realistic final marks
final_marks = (
    0.30 * previous_marks
    + 2.5 * study_hours
    + 0.25 * attendance
    + 1.5 * assignments
    + np.random.normal(0, 4, students)
)


# Keep marks between 0 and 100
final_marks = np.clip(final_marks, 0, 100)


# -----------------------------
# 2. Create DataFrame
# -----------------------------

data = pd.DataFrame({
    "study_hours": study_hours,
    "attendance": attendance,
    "previous_marks": previous_marks,
    "assignments": assignments,
    "final_marks": final_marks
})


# -----------------------------
# 3. Separate input and output
# -----------------------------

X = data[
    [
        "study_hours",
        "attendance",
        "previous_marks",
        "assignments"
    ]
]

y = data["final_marks"]


# -----------------------------
# 4. Split data
# -----------------------------

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)


# -----------------------------
# 5. Train model
# -----------------------------

model = LinearRegression()

model.fit(X_train, y_train)


# -----------------------------
# 6. Evaluate model
# -----------------------------

predictions = model.predict(X_test)

mae = mean_absolute_error(y_test, predictions)
r2 = r2_score(y_test, predictions)

print("Model Training Complete!")
print(f"Mean Absolute Error: {mae:.2f}")
print(f"R² Score: {r2:.2f}")


# -----------------------------
# 7. Save model
# -----------------------------

os.makedirs("model", exist_ok=True)

joblib.dump(model, "model/student_model.pkl")

print("Model saved successfully!")