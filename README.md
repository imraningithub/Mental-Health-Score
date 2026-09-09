# 🧠 Student Mental Health Score Predictor
> **End-to-End Machine Learning, FastAPI REST API, and Full-Stack Web Application**

[![Python 3.9+](https://img.shields.io/badge/Python-3.9+-3776AB?style=flat&logo=python&logoColor=white)](https://www.python.org/)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat&logo=scikit-learn&logoColor=white)](https://scikit-learn.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Pydantic v2](https://img.shields.io/badge/Pydantic-v2-E92063?style=flat&logo=pydantic&logoColor=white)](https://docs.pydantic.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📌 Project Overview

The **Student Mental Health Score Predictor** is an end-to-end Machine Learning and web application solution designed to estimate continuous mental health scores (ranging from ~3 to ~10) based on student demographics, screen time habits, study patterns, physical activity, sleep, and self-reported stress levels across a dataset of **5,000 student records**.

This repository demonstrates the complete lifecycle of a data science project: from initial raw data exploration and cleaning to leak-free feature engineering pipelines, model hyperparameter tuning, joblib pipeline serialization, and high-performance REST API deployment using FastAPI and Pydantic validation.

### 🎯 Key Project Objectives
1. **End-to-End Machine Learning Pipeline:** Build a leakage-free preprocessing and predictive regression pipeline using `scikit-learn`.
2. **Production-Ready FastAPI Backend:** Expose prediction models behind a high-performance REST API validated with `Pydantic` v2.
3. **Interactive Web Interface:** Provide an accessible, responsive HTML/CSS/JS frontend for real-time predictions *(Phase 04)*.
4. **Cloud Deployment:** Host the complete full-stack web application live on Render *(Phase 05)*.

---

## 🗺️ Master Blueprint & Roadmap

This project follows a 5-phase blueprint to transition from data science exploration to production cloud deployment:

```
┌──────────┐     ┌──────────┐     ┌───────────┐     ┌──────────┐     ┌────────────┐
│   DATA   │ ──► │  MODEL   │ ──► │  FASTAPI  │ ──► │    UI    │ ──► │ DEPLOYMENT │
│ Phase 01 │     │ Phase 01 │     │ Phase 02  │     │ Phase 04 │     │  Phase 05  │
└──────────┘     └──────────┘     └───────────┘     └──────────┘     └────────────┘
                                        │
                                  ┌─────┴─────┐
                                  │ PYDANTIC  │
                                  │ Phase 03  │
                                  └───────────┘
```

### 📋 Phase Breakdown

- [x] **Phase 01: Machine Learning Model Build** *(Completed)*
  - [x] Data Loading & Structure Overview
  - [x] Exploratory Data Analysis (EDA) & Visualizations
  - [x] Data Cleaning & Outlier Removal
  - [x] Skewness Check & Feature Transformations
  - [x] Feature Engineering & Encoding Strategy
  - [x] Train/Test Split (Preventing Data Leakage)
  - [x] Preprocessing Pipeline (`ColumnTransformer`)
  - [x] Model Selection & Baseline Training (Linear Regression & Random Forest)
  - [x] Hyperparameter Tuning (`RandomizedSearchCV` for Random Forest)
  - [x] Model Evaluation & Performance Comparison ($R^2$, MAE, RMSE)
  - [x] Pipeline Serialization (`joblib.dump()` → `Mental_Health_Model.pkl`)

- [x] **Phase 02: FastAPI Service Layer** *(Completed)*
  - [x] Model Pipeline Loading at Startup (`joblib.load()`)
  - [x] `/predict` POST Endpoint Implementation
  - [x] `/` Root Welcome Route
  - [ ] Static Frontend Mounting

- [x] **Phase 03: Pydantic Data Validation** *(Completed)*
  - [x] Request Schema (`StudentData`) & Response Schema (`PredictionResponse`)
  - [x] Value Constraints (`Field(gt=10, le=70)`, `Literal` categories) & Automatic 422 Error Handling

- [ ] **Phase 04: Frontend Interface** *(Upcoming)*
  - [ ] Responsive Form UI (`index.html`, `style.css`)
  - [ ] API Integration (`fetch()` in `script.js`)
  - [ ] Dynamic Prediction Display

- [ ] **Phase 05: Cloud Deployment** *(Upcoming)*
  - [ ] GitHub Repository Integration
  - [ ] Render Web Service Setup & Environment Config

---

## 📊 Dataset Features

| Feature | Type | Description |
| :--- | :--- | :--- |
| `Age` | Numerical | Age of student (Years) |
| `Gender` | Categorical | Gender identity (`Male`, `Female`) |
| `Country` | Categorical | Country of residence (111 raw countries) |
| `Academic_Level` | Categorical | `High School`, `Undergraduate`, `Graduate` |
| `Most_Used_Platform` | Categorical | Primary social media platform used |
| `Purpose_Of_Use` | Categorical | `Entertainment`, `Education`, `Networking`, `News` |
| `Avg_Daily_Usage_Hours` | Numerical | Daily social media screen time (hours) |
| `Daily_Unlocks` | Numerical | Phone unlocks per day |
| `Study_Hours` | Numerical | Daily study hours |
| `Physical_Activity_Hours` | Numerical | Daily exercise/activity hours |
| `Sleep_Hours_Per_Night` | Numerical | Nightly sleep duration (hours) |
| `Stress_Level` | Categorical | `Low`, `Medium`, `High`, `Very High` |
| **`Mental_Health_Score`** | **Numerical (Target)** | **Mental health score (Target continuous variable)** |

---

## ⚙️ Preprocessing & Technical Highlights

- **Data Cleaning:** Identified invalid boundary values (e.g. negative physical activity `-0.4`) and applied `clip(lower=0)` to preserve dataset volume while ensuring logical integrity.
- **High-Cardinality Optimization:** Engineered `Grouped_Country` by aggregating 111 raw countries into the Top 10 categories + `"Other"`, preventing sparse matrix bloat during one-hot encoding.
- **Skewness Correction:** Identified right-skewness in `Study_Hours` and integrated a log transformation (`FunctionTransformer(np.log1p)`) into the feature scaling workflow.
- **Leakage-Free Preprocessing Pipeline:** Built a modular `scikit-learn` `ColumnTransformer` combining:
  - Log transformation + `StandardScaler` for skewed features (`Study_Hours`).
  - `StandardScaler` for numerical features (`Age`, `Avg_Daily_Usage_Hours`, `Daily_Unlocks`, `Physical_Activity_Hours`, `Sleep_Hours_Per_Night`).
  - `OrdinalEncoder` with explicit rank order (`Low` < `Medium` < `High` < `Very High`) for `Stress_Level`.
  - `OneHotEncoder(handle_unknown="ignore")` for nominal features (`Gender`, `Academic_Level`, `Most_Used_Platform`, `Purpose_Of_Use`, `Grouped_Country`).
- **Model Tuning & Evaluation:** Evaluated baseline Linear Regression against Random Forest Regressor tuned via `RandomizedSearchCV`, assessing $R^2$, MAE, and RMSE metrics.
- **Pipeline Serialization:** Serialized the complete end-to-end preprocessing and model pipeline into `Mental_Health_Model.pkl` using `joblib`.
- **FastAPI REST API & Pydantic:** Created production-ready prediction service (`Roadmap/main.py`) with Pydantic v2 schemas (`StudentData`, `PredictionResponse`), enforcing range checks and enumeration validation with automatic HTTP 422 error handling.

---

## 📁 Repository Structure

```
.
├── Data/
│   └── Student Social Media And Mental Health Impact.csv
├── Roadmap/
│   ├── ML Project.html              # Interactive HTML project blueprint
│   └── main.py                      # FastAPI REST API Service & Prediction Endpoint
├── ML_Project.ipynb                  # End-to-End ML Jupyter Notebook workflow
├── Mental_Health_Model.pkl           # Serialized trained scikit-learn model pipeline (~25MB)
├── CV_PROJECT_SUMMARY.md             # CV & Server Project Technical Summary
├── .gitignore                        # Git ignore rules
└── README.md                         # Project documentation
```

---

## 🚀 Quickstart & Environment Setup

### Prerequisites
- Python 3.9+
- Virtual Environment tool (`venv`)

### Installation & Execution

1. **Clone the repository:**
   ```bash
   git clone https://github.com/imraningithub/Mental-Health-Score.git
   cd Mental-Health-Score
   ```

2. **Create and activate virtual environment:**
   ```bash
   # On Windows:
   python -m venv .venv
   .venv\Scripts\activate

   # On macOS/Linux:
   python3 -m venv .venv
   source .venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install numpy pandas matplotlib seaborn scikit-learn joblib fastapi uvicorn pydantic
   ```

4. **Launch the FastAPI Server:**
   ```bash
   python -m uvicorn Roadmap.main:app --reload
   ```

5. **Interact with the API:**
   - Base URL: `http://127.0.0.1:8000/`
   - Interactive Swagger API Documentation: `http://127.0.0.1:8000/docs`
   - POST Endpoint: `http://127.0.0.1:8000/predict`

---

## 📅 Daily Progress Log

- **Day 1:** Initialized project repository. Created Master Roadmap, `.gitignore`, and detailed `README.md`. Loaded raw dataset and began initial structure analysis in `ML_Project.ipynb`.
- **Day 2:** Conducted Exploratory Data Analysis (EDA), data cleaning, country feature aggregation, log transformations, leak-proof `ColumnTransformer` preprocessing pipeline, baseline Linear Regression and Random Forest models, hyperparameter tuning via `RandomizedSearchCV`, and model performance evaluation matrix.
- **Day 3:** Serialized trained Random Forest pipeline (`Mental_Health_Model.pkl`). Built production FastAPI REST service (`Roadmap/main.py`) with strict Pydantic v2 schemas (`StudentData`, `PredictionResponse`), tested `/predict` endpoint with sample payloads, updated documentation (`CV_PROJECT_SUMMARY.md` & `README.md`), and pushed codebase to GitHub.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
