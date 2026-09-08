# 🧠 CV Project Summary: Student Mental Health Score Predictor
> **Note for AI CV Builder:** This document is a structured technical summary of the project to help you write high-impact resume/CV bullet points for Machine Learning, Data Science, MLOps, and Full-Stack ML roles.

---

## 📌 Project Overview
- **Project Name:** Student Mental Health Score Prediction (ML → FastAPI → Web App)
- **GitHub Repository:** [Mental-Health-Score](https://github.com/imraningithub/Mental-Health-Score)
- **Project Type:** End-to-End Supervised Machine Learning & Web Application
- **Task Type:** Regression (Target: continuous `Mental_Health_Score` ranging ~3 to ~10)
- **Dataset Size:** 5,000 student records across 13 demographic, screen time, and lifestyle features
- **Current Development Status:** `In Active Development` (Phase 1 Data Engineering & Preprocessing Complete)

---

## 🛠️ Complete Tech Stack
- **Languages:** Python (3.9+)
- **Data Science & ML:** `scikit-learn`, `Pandas`, `NumPy`, `Matplotlib`, `Seaborn`, `Joblib`
- **Backend (Upcoming):** `FastAPI`, `Pydantic`, `Uvicorn`
- **Frontend (Upcoming):** HTML5, Vanilla CSS (Modern/Glassmorphism), JavaScript (Async/Fetch API)
- **DevOps & Cloud (Upcoming):** Git/GitHub, Cloud Hosting (Render)

---

## ⚡ Technical Highlights Completed So Far (Phase 1)

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

5. **Engineering Blueprint & Documentation:**
   - Created a 5-phase master roadmap, detailed `README.md`, and an interactive visual roadmap (`Roadmap/ML Project.html`).

---

## 🗺️ Project Roadmap & Status Tracking

- [x] **Phase 01: Data Engineering & Preprocessing** *(Completed)*
- [ ] **Phase 01: Model Selection & Hyperparameter Tuning** *(In Progress)*
  - Algorithms: Ridge, Random Forest, XGBoost / LightGBM
  - Tuning: `RandomizedSearchCV`
  - Metrics: $R^2$, RMSE, MAE, SHAP Feature Importance
  - Serialization: `joblib.dump()`
- [ ] **Phase 02 & 03: FastAPI & Pydantic Service Layer** *(Upcoming)*
  - Pydantic request/response validation
  - `/predict` & `/health` REST API endpoints
- [ ] **Phase 04: Interactive Web Frontend** *(Upcoming)*
  - Dynamic HTML/CSS form UI connected to API via JS `fetch()`
- [ ] **Phase 05: Cloud Deployment** *(Upcoming)*
  - GitHub integration & live hosting on Render

---

## 📄 Pre-written CV Bullet Points for AI CV Generators

### Option A: Current Status (As of Today — In Active Development)
> • **Student Mental Health Score Predictor | End-to-End ML Pipeline** *(Sept 2026 – Present | In Active Development)*
> - Developing an end-to-end regression application predicting student mental health scores based on daily screen time and lifestyle habits across 5,000+ records.
> - Engineered a leak-free scikit-learn preprocessing pipeline (`ColumnTransformer`) integrating log transformations, ordinal ranking for stress levels, and one-hot encoding for high-cardinality demographics.
> - Conducted exploratory data analysis and feature engineering, reducing nominal cardinality by 90% (111 countries to Top 10 + Other) and correcting invalid data boundaries.
> - Currently implementing ensemble model training (Random Forest / XGBoost) and developing a FastAPI service layer for cloud deployment on Render.

### Option B: Future Status (When All Phases Are Completed)
> • **Student Mental Health Score Predictor | Full-Stack ML Web App** *(Sept 2026)*
> - Architected and deployed an end-to-end ML web application predicting continuous student mental health scores based on lifestyle metrics across 5,000+ student records.
> - Built a leak-free scikit-learn preprocessing pipeline (`ColumnTransformer`) with log scaling, ordinal encoding, and country category aggregation.
> - Trained and tuned ensemble regression models (Random Forest / XGBoost) using `RandomizedSearchCV` to achieve optimized prediction metrics ($R^2$, RMSE).
> - Built a high-performance REST API using FastAPI and Pydantic validation schemas, serving real-time model inference with sub-50ms latency.
> - Created a responsive HTML/CSS/JS frontend dashboard and deployed the full application live on Cloud (Render).
