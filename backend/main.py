import os
import joblib
import pandas as pd
from pydantic import BaseModel, Field
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from typing import Literal


# A first Pydantic Model

class StudentData(BaseModel):
    
    Age:             int = Field(...,gt=10,le=70,description="Age must be between 10 and 70")
    Gender:          Literal["Male","Female"]
    Country:         str
    Academic_Level:  Literal['Undergraduate', 'Graduate', 'High School']
    Most_Used_Platform:Literal['Facebook', 'LinkedIn', 'Instagram', 'Snapchat', 'Twitter','YouTube', 'TikTok', 'LINE', 'KakaoTalk', 'VKontakte', 'WhatsApp', 'WeChat']
    Purpose_Of_Use:  Literal['Networking', 'Education', 'Entertainment', 'News']
    Avg_Daily_Usage_Hours:float = Field(...,ge=0,le=24)
    Daily_Unlocks:int = Field(...,ge=0)
    Study_Hours:float = Field(...,ge=0, le=24)
    Physical_Activity_Hours:float = Field(...,ge=0, le=24)
    Sleep_Hours_Per_Night:float = Field(...,ge=0, le=24)
    Stress_Level: Literal['Medium', 'Low', 'Very High', 'High']


class PredictionResponse(BaseModel):
    predicted_mental_health_score: float


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "..", "Mental_Health_Model.pkl")
if not os.path.exists(MODEL_PATH):
    MODEL_PATH = os.path.join(BASE_DIR, "Mental_Health_Model.pkl")

model = joblib.load(MODEL_PATH)
top_countries = ['Other','India','USA','Canada','Australia','UK','Germany','Mexico','Turkey','France']

app = FastAPI(title="Mind Pulse Predictor")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

FRONTEND_DIR = os.path.join(BASE_DIR, "..", "frontend")
if not os.path.exists(FRONTEND_DIR):
    FRONTEND_DIR = os.path.join(BASE_DIR, "frontend")


@app.get("/api/health")
def health():
    return {"status": "ok", "message": "Mind Pulse Predictor API is active."}


@app.post("/predict", response_model=PredictionResponse)
def predict(data: StudentData):

    country_group = data.Country if data.Country in top_countries else "Other"
    input_row = pd.DataFrame([{
        "Age": data.Age,
        "Gender": data.Gender,
        "Country": data.Country,
        "Academic_Level": data.Academic_Level,
        "Most_Used_Platform": data.Most_Used_Platform,
        "Purpose_Of_Use": data.Purpose_Of_Use,
        "Avg_Daily_Usage_Hours": data.Avg_Daily_Usage_Hours,
        "Daily_Unlocks": data.Daily_Unlocks,
        "Study_Hours": data.Study_Hours,
        "Physical_Activity_Hours": data.Physical_Activity_Hours,
        "Sleep_Hours_Per_Night": data.Sleep_Hours_Per_Night,
        "Stress_Level": data.Stress_Level,
        "Grouped_Country": country_group
    }])

    prediction = model.predict(input_row)[0]
    return PredictionResponse(predicted_mental_health_score=round(float(prediction), 2))


# Mount static frontend files for web serving
if os.path.exists(FRONTEND_DIR):
    app.mount("/", StaticFiles(directory=FRONTEND_DIR, html=True), name="frontend")






    
        
