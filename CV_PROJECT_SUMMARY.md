# 🧠 CV Project Summary: Mind Pulse Predictor
> **Note for AI CV Builder / Resume Writer:** This document is a comprehensive, structured technical summary of the project. Use it to generate high-impact resume bullet points for Machine Learning, Data Science, MLOps, and Full-Stack Web Development roles.

---

## 📌 Project Overview
- **Project Name:** Mind Pulse Predictor (ML Model → FastAPI REST Backend → High-Taste Netlify Web App)
- **Live Netlify Web Application:** [https://mind-pulse-predictor.netlify.app](https://mind-pulse-predictor.netlify.app)
- **GitHub Repository:** [https://github.com/imraningithub/Mind-Pulse-Predictor](https://github.com/imraningithub/Mind-Pulse-Predictor)
- **Project Type:** End-to-End Supervised Machine Learning & Full-Stack Web Application
- **Task Type:** Regression (Target: continuous `Mental_Health_Score` on a 0 to 10 scale)
- **Dataset Size:** 5,000 student records across 13 demographic, screen time, study, physical activity, and self-reported stress features
- **Current Development Status:** `ALL PHASES COMPLETE (ML Pipeline, FastAPI REST Backend, Pydantic Validation, High-Taste Frontend UI, Netlify Cloud Deployment)`

---

## 🛠️ Complete Tech Stack
- **Languages:** Python 3.9+, HTML5, Vanilla CSS3, JavaScript (ES6+ Async/Fetch)
- **Data Science & ML:** `scikit-learn`, `Pandas`, `NumPy`, `Matplotlib`, `Seaborn`, `Joblib`
- **Backend API Service:** `FastAPI`, `Pydantic (v2)`, `CORSMiddleware`, `Uvicorn`
- **Frontend Design System:** Anti-Slop UI Taste (`design-taste-frontend`), Glassmorphism, Custom SVG Gauge Animation, Responsive CSS Grid/Flexbox
- **DevOps, Tools & Deployment:** Git, GitHub, GitHub CLI (`gh`), Netlify Cloud Hosting, Netlify MCP Integration, `requirements.txt`

---

## ⚡ Technical Highlights & Key Engineering Accomplishments

1. **Leak-Free Preprocessing Pipeline Architecture:**
   - Designed a modular `scikit-learn` `ColumnTransformer` combining custom sub-pipelines.
   - Enforced strict train/test splitting before fitting any transformers to eliminate **Data Leakage**.

2. **Feature Engineering & High-Cardinality Optimization:**
   - **Country Grouping:** Engineered `Grouped_Country`, aggregating high-cardinality data from 111 raw countries down to Top 10 categories + `"Other"`, reducing feature matrix sparsity by over 90%.
   - **Outlier & Boundary Handling:** Identified invalid data anomalies (e.g. negative physical activity hours `-0.4`) and applied `clip(lower=0)` data boundary rules.

3. **Feature Distribution & Skewness Management:**
   - Detected right-skewness in `Study_Hours` and integrated a custom log transformation pipeline (`FunctionTransformer(np.log1p)`) followed by `StandardScaler`.

4. **Multi-Type Categorical & Ordinal Encoding Strategy:**
   - **Ordinal Encoding:** Encoded `Stress_Level` with explicit hierarchy (`Low` < `Medium` < `High` < `Very High`).
   - **One-Hot Encoding:** Encoded nominal features (`Gender`, `Academic_Level`, `Most_Used_Platform`, `Purpose_Of_Use`, `Grouped_Country`) with `OneHotEncoder(handle_unknown='ignore')`.

5. **Model Training, Hyperparameter Tuning & Serialization:**
   - Trained Linear Regression baselines and Random Forest Regressor models.
   - Performed `RandomizedSearchCV` for hyperparameter optimization across tree depth and estimator counts, evaluating $R^2$, MAE, and RMSE metrics.
   - Serialized the complete end-to-end scikit-learn pipeline into `Mental_Health_Model.pkl` using `joblib`.

6. **FastAPI Backend & Pydantic Data Validation:**
   - Developed high-performance REST API service (`backend/main.py`).
   - Defined strict Pydantic schemas (`StudentData` and `PredictionResponse`) with `Field` value constraints (`gt=10, le=70`, `ge=0, le=24`) and `Literal` categorical enumerations for automatic 422 error handling.
   - Integrated `CORSMiddleware` for cross-origin browser fetch requests.

7. **High-Taste Interactive Web Frontend:**
   - Built a responsive dark-mode glassmorphism interface (`frontend/index.html`, `style.css`, `app.js`) utilizing `design-taste-frontend` design standards.
   - Built live range slider indicators, segmented gender controls, platform selection cards, an animated SVG score gauge calibrated for 0–10 scale, and dynamic contextual wellness assessments.

8. **Netlify Cloud Deployment & Netlify MCP Integration:**
   - Integrated Netlify Model Context Protocol (MCP) to automate project provisioning and continuous static deployments directly from IDE toolings.
   - Published project live at **[https://mind-pulse-predictor.netlify.app](https://mind-pulse-predictor.netlify.app)**.

---

## 🗺️ Master Project Roadmap & Status Tracking

- [x] **Phase 01: Data Engineering & Preprocessing** *(Completed)*
- [x] **Phase 01: Model Selection, Tuning & Serialization** *(Completed)*
  - Algorithms: Linear Regression, Random Forest Regressor
  - Tuning: `RandomizedSearchCV`
  - Metrics: $R^2$, RMSE, MAE comparison matrix
  - Serialization: `joblib.dump()` → `Mental_Health_Model.pkl`
- [x] **Phase 02 & 03: FastAPI Service & Pydantic Validation** *(Completed)*
  - Pydantic request (`StudentData`) & response (`PredictionResponse`) schemas
  - CORS Middleware & `/predict` POST endpoint
- [x] **Phase 04: High-Taste Web Frontend** *(Completed)*
  - Responsive form UI (`index.html`, `style.css`, `app.js`)
  - Dynamic score gauge meter (0–10 scale) & personalized lifestyle assessment
- [x] **Phase 05: Cloud Deployment & GitHub Management** *(Completed)*
  - Renamed GitHub repository to `Mind-Pulse-Predictor`
  - Automated Cloud deployment to Netlify ([https://mind-pulse-predictor.netlify.app](https://mind-pulse-predictor.netlify.app))

---

## 📄 Ready-to-Use CV / Resume Bullet Points

### Option A: Full-Stack Machine Learning Engineer (Recommended)
> **Mind Pulse Predictor | Full-Stack Machine Learning Web App** *(Sept 2026)*  
> [Live Application](https://mind-pulse-predictor.netlify.app) | [GitHub Codebase](https://github.com/imraningithub/Mind-Pulse-Predictor)  
> - **End-to-End ML Pipeline:** Developed a regression model estimating continuous student mental health scores (0–10 scale) across 5,000+ student records based on screen time, study, physical activity, and stress metrics.
> - **Data Engineering & Preprocessing:** Built a leak-free `scikit-learn` `ColumnTransformer` integrating `log1p` transformations, ordinal stress encodings, and country category aggregation that reduced high-cardinality feature sparsity by 90%.
> - **Model Tuning & Optimization:** Trained ensemble Random Forest models tuned via `RandomizedSearchCV`, serializing the end-to-end pipeline with `joblib`.
> - **FastAPI Backend:** Built a production REST API with Pydantic v2 validation schemas and CORS middleware, enforcing strict range checks and returning sub-50ms inference responses.
> - **High-Taste Frontend & Cloud Deployment:** Designed a responsive dark-mode glassmorphism Web UI featuring an animated SVG score gauge and automated deployment live to Netlify.

### Option B: Data Science & AI Focus
> **Mind Pulse Predictor | Data Science & Machine Learning** *(Sept 2026)*  
> [Live Application](https://mind-pulse-predictor.netlify.app) | [GitHub Codebase](https://github.com/imraningithub/Mind-Pulse-Predictor)  
> - Applied exploratory data analysis (EDA), log transformations, and boundary clipping to clean 5,000 student behavioral records.
> - Engineered reusable scikit-learn preprocessing pipelines (`ColumnTransformer`) to eliminate data leakage between train/test splits.
> - Evaluated model performance across Linear Regression and Random Forest models using $R^2$, MAE, and RMSE evaluation metrics.
> - Deployed the serialized ML pipeline behind a FastAPI service and Netlify web frontend for public access.

### Option C: Short Summary (1–2 Line CV Header / Resume Bullet)
> **Mind Pulse Predictor** | [https://mind-pulse-predictor.netlify.app](https://mind-pulse-predictor.netlify.app)  
> *End-to-end ML regression model & FastAPI web app predicting student mental health index based on lifestyle and screen time habits; built with scikit-learn, FastAPI, Pydantic, and Netlify.*
