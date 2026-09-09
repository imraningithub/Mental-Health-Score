# 🧠 CV Project Summary: Student Mental Health Score Predictor
> **Note for AI CV Builder:** This document is a structured technical summary of the project to help you write high-impact resume/CV bullet points for Machine Learning, Data Science, MLOps, and Full-Stack ML roles.

---

## 📌 Project Overview
- **Project Name:** Student Mental Health Score Prediction (ML → FastAPI → Web App)
- **GitHub Repository:** [Mental-Health-Score](https://github.com/imraningithub/Mental-Health-Score)
- **Project Type:** End-to-End Supervised Machine Learning & Web Application
- **Task Type:** Regression (Target: continuous `Mental_Health_Score` ranging ~3 to ~10)
- **Dataset Size:** 5,000 student records across 13 demographic, screen time, and lifestyle features
- **Current Development Status:** `Phase 1 (ML Model & Tuning), Phase 2 (FastAPI), & Phase 3 (Pydantic Validation) Complete`

---

## 🛠️ Complete Tech Stack
- **Languages:** Python (3.9+)
- **Data Science & ML:** `scikit-learn`, `Pandas`, `NumPy`, `Matplotlib`, `Seaborn`, `Joblib`
- **Backend Service Layer:** `FastAPI`, `Pydantic (v2)`, `Uvicorn`
- **Frontend (Upcoming):** HTML5, Vanilla CSS (Modern/Glassmorphism), JavaScript (Async/Fetch API)
- **DevOps & Cloud (Upcoming):** Git/GitHub, Cloud Hosting (Render)

---

## ⚡ Technical Highlights Completed So Far (Phases 1, 2, & 3)

1. **Leak-Free Preprocessing Pipeline Architecture:**
   - Designed a modular `scikit-learn` `ColumnTransformer` combining custom sub-pipelines.
   - Enforced strict train/test splitting before fitting any transformer to prevent **Data Leakage**.

2. **Feature Engineering & Cardinality Optimization:**
   - **Country Grouping:** Engineered `Grouped_Country`, reducing high-cardinality nominal data from 111 raw countries to Top 10 categories + `"Other"` to eliminate sparse matrix bloat.
   - **Outlier & Value Clipping:** Identified and corrected invalid boundary values (e.g., negative physical activity hours `-0.4` clipped to `0`).

3. **Feature Distribution & Skewness Management:**
   - Detected right-skewness in `Study_Hours` and integrated a custom log transformation pipeline using `FunctionTransformer(np.log1p)` followed by `StandardScaler`.

4. **Multi-Type Categorical & Ordinal Encoding Strategy:**
   - **Ordinal Encoding:** Encoded `Stress_Level` with explicit hierarchy (`Low` < `Medium` < `High` < `Very High`).
   - **One-Hot Encoding:** Encoded nominal features (`Gender`, `Academic_Level`, `Most_Used_Platform`, `Purpose_Of_Use`, `Grouped_Country`) with `OneHotEncoder(handle_unknown='ignore')`.

5. **Model Training, Hyperparameter Tuning & Serialization:**
   - Trained Linear Regression baseline and Random Forest Regressor models.
   - Performed `RandomizedSearchCV` for hyperparameter optimization across tree depth and estimator counts, evaluating $R^2$, MAE, and RMSE metrics.
   - Serialized the complete end-to-end scikit-learn pipeline into `Mental_Health_Model.pkl` using `joblib`.

6. **FastAPI Backend & Pydantic Data Validation:**
   - Developed high-performance REST API service in `Roadmap/main.py`.
   - Defined strict Pydantic schemas (`StudentData` and `PredictionResponse`) with `Field` value constraints (`gt=10, le=70`, `ge=0, le=24`) and `Literal` categorical enumerations for automatic 422 error handling.
   - Implemented `/predict` POST endpoint for real-time model inference.

---

## 🗺️ Project Roadmap & Status Tracking

- [x] **Phase 01: Data Engineering & Preprocessing** *(Completed)*
- [x] **Phase 01: Model Selection, Tuning & Serialization** *(Completed)*
  - Algorithms: Linear Regression, Random Forest Regressor
  - Tuning: `RandomizedSearchCV`
  - Metrics: $R^2$, RMSE, MAE comparison matrix
  - Serialization: `joblib.dump()` → `Mental_Health_Model.pkl`
- [x] **Phase 02 & 03: FastAPI & Pydantic Service Layer** *(Completed)*
  - Pydantic request (`StudentData`) / response (`PredictionResponse`) validation
  - `/predict` & `/` REST API endpoints
- [ ] **Phase 04: Interactive Web Frontend** *(Upcoming)*
  - Dynamic HTML/CSS form UI connected to API via JS `fetch()`
- [ ] **Phase 05: Cloud Deployment** *(Upcoming)*
  - Live hosting on Render

---

## 📄 Pre-written CV Bullet Points for AI CV Generators

### Option A: Current Status (Phases 1, 2, & 3 Complete)
> • **Student Mental Health Score Predictor | ML & FastAPI REST API** *(Sept 2026 – Present)*
> - Engineered an end-to-end regression model and REST API predicting student mental health scores based on lifestyle and screen time metrics across 5,000+ records.
> - Built a leak-free scikit-learn preprocessing pipeline (`ColumnTransformer`) integrating log transformations (`log1p`), ordinal encoding for stress levels, and one-hot encoding for demographics.
> - Trained and tuned Random Forest Regressor using `RandomizedSearchCV` to evaluate $R^2$, MAE, and RMSE metrics, serializing the full pipeline with `joblib`.
> - Developed a FastAPI backend (`/predict`) utilizing Pydantic v2 schemas for strict input validation and automated 422 error handling.

### Option B: Final Completed Status (When Frontend & Deployment are Finished)
> • **Student Mental Health Score Predictor | Full-Stack ML Web App** *(Sept 2026)*
> - Architected and deployed an end-to-end ML web application predicting continuous student mental health scores based on lifestyle metrics across 5,000+ student records.
> - Built a leak-free scikit-learn preprocessing pipeline (`ColumnTransformer`) with log scaling, ordinal encoding, and country category aggregation (reducing 111 raw countries by 90%).
> - Trained and tuned ensemble regression models (Random Forest) using `RandomizedSearchCV` to achieve optimized prediction metrics ($R^2$, RMSE).
> - Built a high-performance REST API using FastAPI and Pydantic validation schemas, serving real-time model inference with sub-50ms latency.
> - Created a responsive HTML/CSS/JS frontend dashboard and deployed the full application live on Cloud (Render).

