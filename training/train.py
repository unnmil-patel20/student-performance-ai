import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error

#Student Dataset

data = {
    "study_hours": [2, 3, 4, 5, 6, 7, 8, 9, 10],
    "attendance": [60, 65, 70, 75, 80, 82, 85, 90, 95],
    "previous_marks": [45, 50, 55, 60, 65, 70, 75, 82, 88],
    "assignments": [4, 5, 6, 6, 7, 8, 8, 9, 10],
    "final_marks": [48, 52, 57, 62, 68, 72, 77, 84, 91]
}

df = pd.DataFrame(data)

print("Student Dataset:")
print(df)

# Inputs
X = df[["study_hours", "attendance", "previous_marks", "assignments"]]

# Output
y = df["final_marks"]

# Split data into training and testing
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create AI model
model = LinearRegression()

# Train the model
model.fit(X_train, y_train)

# Test the model
predictions = model.predict(X_test)

# Calculate error
error = mean_absolute_error(y_test, predictions)

print("\nActual Marks:")
print(y_test.values)

print("\nPredicted Marks:")
print(predictions)

print("\nMean Absolute Error:", error)

# Predict for a new student
new_student = [[6, 85, 72, 9]]

prediction = model.predict(new_student)

print("\nNew Student:")
print("Study Hours: 6")
print("Attendance: 85%")
print("Previous Marks: 72")
print("Assignments: 9")

print("\nPredicted Final Marks:", round(prediction[0], 2))

#saved the model
joblib.dump(model,"model/student_model.pkl")

print("\n model saved successfully...")