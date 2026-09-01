# 🧠 Student Mental Health Score Prediction: ML → API → Web App

An end-to-end Machine Learning project to predict student **Mental Health Scores** based on social media usage, academic workload, sleep patterns, physical activity, and stress levels. 

This repository documents an iterative, step-by-step build from raw data exploration to a deployed full-stack web application.

---

## 📌 Project Overview

Mental health among students is heavily influenced by digital habits and lifestyle factors. The goal of this project is to build an accurate predictive machine learning model and deploy it via a FastAPI backend coupled with a modern interactive frontend interface.

- **Target Variable:** `Mental_Health_Score` (Continuous score from ~3 to ~10 — **Regression Task**)
- **Dataset:** `5,000` student entries with 13 features across demographics, usage habits, and lifestyle metrics.

---

## 🗺️ Master Blueprint & Roadmap

This project follows a 5-phase blueprint to transition from data science exploration to production deployment:

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

- [ ] **Phase 01: Machine Learning Model Build** *(In Progress)*
  - [x] Data Loading & Structure Overview
  - [ ] Exploratory Data Analysis (EDA) & Visualizations
  - [ ] Data Cleaning & Outlier Removal
  - [ ] Skewness Check & Feature Transformations
  - [ ] Feature Engineering & Encoding Strategy
  - [ ] Train/Test Split (Preventing Data Leakage)
  - [ ] Preprocessing Pipeline (`ColumnTransformer`)
  - [ ] Model Selection & Baseline Training
  - [ ] Hyperparameter Tuning (`RandomizedSearchCV`)
  - [ ] Model Evaluation & Feature Importance Analysis
  - [ ] Pipeline Serialization (`joblib.dump()`)

- [ ] **Phase 02: FastAPI Service Layer** *(Upcoming)*
  - [ ] Model Pipeline Loading at Startup
  - [ ] `/predict` Endpoint implementation
  - [ ] `/health` Check Route
  - [ ] Static Frontend Mounting

- [ ] **Phase 03: Pydantic Data Validation** *(Upcoming)*
  - [ ] Request & Response Schemas
  - [ ] Value Constraints & 422 Error Handling

- [ ] **Phase 04: Frontend Interface** *(Upcoming)*
  - [ ] Responsive Form UI (`index.html`, `style.css`)
  - [ ] API Integration (`fetch()` in `script.js`)
  - [ ] Dynamic Prediction & Confidence Display

- [ ] **Phase 05: Cloud Deployment** *(Upcoming)*
  - [ ] GitHub Repository Integration
  - [ ] Render Web Service Setup & Environment Config

---

## 📊 Dataset Features

| Feature | Type | Description |
| :--- | :--- | :--- |
| `Age` | Numerical | Age of student |
| `Gender` | Categorical | Gender identity |
| `Country` | Categorical | Country of residence |
| `Academic_Level` | Categorical | High School, Undergraduate, Graduate |
| `Most_Used_Platform` | Categorical | Primary social media platform used |
| `Purpose_Of_Use` | Categorical | Entertainment, Education, Networking, etc. |
| `Avg_Daily_Usage_Hours` | Numerical | Daily social media screen time (hours) |
| `Daily_Unlocks` | Numerical | Phone unlocks per day |
| `Study_Hours` | Numerical | Daily study hours |
| `Physical_Activity_Hours` | Numerical | Daily exercise/activity hours |
| `Sleep_Hours_Per_Night` | Numerical | Nightly sleep duration (hours) |
| `Stress_Level` | Categorical | Low, Medium, High, Very High |
| **`Mental_Health_Score`** | **Numerical (Target)** | **Mental health score (Target variable)** |

---

## 📁 Repository Structure

```
.
├── Data/
│   └── Student Social Media And Mental Health Impact.csv
├── Roadmap/
│   └── ML Project.html              # Interactive HTML project blueprint
├── ML_Project.ipynb                  # Main Jupyter Notebook for ML workflow
├── .gitignore                        # Git ignore rules
└── README.md                         # Project documentation
```

---

## 🚀 Quickstart & Environment Setup

### Prerequisites
- Python 3.9+
- Jupyter Notebook or VS Code

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/Mental-Health-Score.git
   cd Mental-Health-Score
   ```

2. **Create a virtual environment & install requirements:**
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate

   pip install numpy pandas matplotlib seaborn scikit-learn joblib fastapi uvicorn pydantic
   ```

3. **Run Jupyter Notebook:**
   ```bash
   jupyter notebook ML_Project.ipynb
   ```

---

## 📈 Daily Progress Log

- **Day 1:** Project repository initialized. Created Master Roadmap, `.gitignore`, and detailed `README.md`. Loaded raw dataset and began initial structure analysis in `ML_Project.ipynb`.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
