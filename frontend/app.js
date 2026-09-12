document.addEventListener('DOMContentLoaded', () => {
    // Configurable API URL: Use window.BACKEND_API_URL if set, or fallback to localhost
    const API_URL = window.BACKEND_API_URL || 'http://127.0.0.1:8000/predict';

    // -------------------------------------------------------------
    // Live Range Slider Value Syncing
    // -------------------------------------------------------------
    const sliders = [
        { id: 'age', valId: 'age-val', suffix: ' yrs' },
        { id: 'avg_usage', valId: 'usage-val', suffix: ' hrs' },
        { id: 'daily_unlocks', valId: 'unlocks-val', suffix: ' unlocks' },
        { id: 'study_hours', valId: 'study-val', suffix: ' hrs' },
        { id: 'physical_activity', valId: 'activity-val', suffix: ' hrs' },
        { id: 'sleep_hours', valId: 'sleep-val', suffix: ' hrs' }
    ];

    sliders.forEach(({ id, valId, suffix }) => {
        const slider = document.getElementById(id);
        const valElem = document.getElementById(valId);

        if (slider && valElem) {
            slider.addEventListener('input', (e) => {
                valElem.textContent = `${e.target.value}${suffix}`;
            });
        }
    });

    // -------------------------------------------------------------
    // Segmented Buttons (Gender)
    // -------------------------------------------------------------
    const genderGroup = document.getElementById('gender-group');
    const genderInput = document.getElementById('gender');
    if (genderGroup && genderInput) {
        genderGroup.querySelectorAll('.segment-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                genderGroup.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                genderInput.value = btn.dataset.value;
            });
        });
    }

    // -------------------------------------------------------------
    // Chip Groups (Academic Level & Purpose)
    // -------------------------------------------------------------
    function setupChipGroup(groupId, inputId) {
        const group = document.getElementById(groupId);
        const input = document.getElementById(inputId);
        if (group && input) {
            group.querySelectorAll('.chip-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    group.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    input.value = btn.dataset.value;
                });
            });
        }
    }

    setupChipGroup('academic-group', 'academic_level');
    setupChipGroup('purpose-group', 'purpose_of_use');

    // -------------------------------------------------------------
    // Platform Cards Selection
    // -------------------------------------------------------------
    const platformGrid = document.getElementById('platform-grid');
    const platformInput = document.getElementById('most_used_platform');
    if (platformGrid && platformInput) {
        platformGrid.querySelectorAll('.platform-card').forEach(card => {
            card.addEventListener('click', () => {
                platformGrid.querySelectorAll('.platform-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                platformInput.value = card.dataset.value;
            });
        });
    }

    // -------------------------------------------------------------
    // Stress Level Selection
    // -------------------------------------------------------------
    const stressGrid = document.getElementById('stress-grid');
    const stressInput = document.getElementById('stress_level');
    if (stressGrid && stressInput) {
        stressGrid.querySelectorAll('.stress-card').forEach(card => {
            card.addEventListener('click', () => {
                stressGrid.querySelectorAll('.stress-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                stressInput.value = card.dataset.value;
            });
        });
    }

    // -------------------------------------------------------------
    // Form Submission & API Integration
    // -------------------------------------------------------------
    const form = document.getElementById('prediction-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('.btn-icon');
    const btnSpinner = submitBtn.querySelector('.btn-spinner');

    const resultsCard = document.getElementById('results-card');
    const scoreValElem = document.getElementById('score-val');
    const gaugeFill = document.getElementById('gauge-fill');
    const interpTitle = document.getElementById('interp-title');
    const interpText = document.getElementById('interp-text');
    const recalculateBtn = document.getElementById('recalculate-btn');

    // Insights elements
    const insightSleep = document.getElementById('insight-sleep');
    const insightDigital = document.getElementById('insight-digital');
    const insightActivity = document.getElementById('insight-activity');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Prepare JSON payload
        const payload = {
            Age: parseInt(document.getElementById('age').value),
            Gender: document.getElementById('gender').value,
            Country: document.getElementById('country').value,
            Academic_Level: document.getElementById('academic_level').value,
            Most_Used_Platform: document.getElementById('most_used_platform').value,
            Purpose_Of_Use: document.getElementById('purpose_of_use').value,
            Avg_Daily_Usage_Hours: parseFloat(document.getElementById('avg_usage').value),
            Daily_Unlocks: parseInt(document.getElementById('daily_unlocks').value),
            Study_Hours: parseFloat(document.getElementById('study_hours').value),
            Physical_Activity_Hours: parseFloat(document.getElementById('physical_activity').value),
            Sleep_Hours_Per_Night: parseFloat(document.getElementById('sleep_hours').value),
            Stress_Level: document.getElementById('stress_level').value
        };

        // Loading state
        setLoading(true);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`Server returned status ${response.status}`);
            }

            const data = await response.json();
            const predictedScore = data.predicted_mental_health_score;

            // Render Results
            renderResults(predictedScore, payload);

        } catch (error) {
            console.error('Prediction Error:', error);
            alert(`Unable to connect to FastAPI Backend at ${API_URL}.\n\nPlease ensure your FastAPI app is running with:\npython -m uvicorn main:app --reload`);
        } finally {
            setLoading(false);
        }
    });

    function setLoading(isLoading) {
        if (isLoading) {
            submitBtn.disabled = true;
            btnText.textContent = 'Analyzing Inputs...';
            btnIcon.classList.add('hidden');
            btnSpinner.classList.remove('hidden');
        } else {
            submitBtn.disabled = false;
            btnText.textContent = 'Generate Machine Learning Prediction';
            btnIcon.classList.remove('hidden');
            btnSpinner.classList.add('hidden');
        }
    }

    // -------------------------------------------------------------
    // Score & Insights Renderer
    // -------------------------------------------------------------
    function renderResults(score, inputs) {
        // Show results section
        resultsCard.classList.remove('hidden');
        resultsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Animate counter
        animateScoreCounter(scoreValElem, 0, score, 1500);

        // Animate Gauge SVG (stroke-dasharray = 534)
        // Score is out of 10, so normalize to percentage 0 - 100%
        const normalizedPercent = Math.min(Math.max((score / 10) * 100, 0), 100);
        const dashOffset = 534 - (534 * (normalizedPercent / 100));
        setTimeout(() => {
            gaugeFill.style.strokeDashoffset = dashOffset;
        }, 100);

        // Dynamic Color Gradient on gauge based on score (scale 0 - 10)
        let strokeColor = '#10b981'; // Green (Optimal)
        if (score < 4.5) {
            strokeColor = '#f43f5e'; // Red (High Risk)
        } else if (score < 7.0) {
            strokeColor = '#f59e0b'; // Amber (Moderate)
        }
        gaugeFill.style.stroke = strokeColor;

        // Interpret Score Range (scale 0 - 10)
        if (score >= 7.0) {
            interpTitle.textContent = 'High Mental Resilience & Wellness';
            interpTitle.style.color = '#10b981';
            interpText.textContent = `Your predicted score of ${score.toFixed(2)} / 10 reflects strong emotional balance, healthy sleep habits, and a manageable digital footprint. Continue maintaining physical movement and regular rest.`;
        } else if (score >= 4.5) {
            interpTitle.textContent = 'Moderate Stress & Mental Workload';
            interpTitle.style.color = '#f59e0b';
            interpText.textContent = `Your predicted score of ${score.toFixed(2)} / 10 indicates moderate psychological pressure. Consider setting screen-time boundaries and scheduling structured breaks during intensive study sessions.`;
        } else {
            interpTitle.textContent = 'Elevated Risk of Overwhelm & Fatigue';
            interpTitle.style.color = '#f43f5e';
            interpText.textContent = `Your predicted score of ${score.toFixed(2)} / 10 suggests high mental fatigue or strain. Factors like excessive daily unlocks, high stress perception, or short sleep cycles are contributing to burnout risks.`;
        }

        // Generate Contextual Insights
        if (inputs.Sleep_Hours_Per_Night >= 7.5) {
            insightSleep.textContent = 'Optimal 7.5+ hours rest per night supports cognitive recovery.';
        } else if (inputs.Sleep_Hours_Per_Night >= 6) {
            insightSleep.textContent = 'Moderate rest. Aim for 7-8 hours to improve focus and mood.';
        } else {
            insightSleep.textContent = 'Sleep deficit detected (<6 hrs). High impact on stress levels.';
        }

        if (inputs.Avg_Daily_Usage_Hours > 6 || inputs.Daily_Unlocks > 120) {
            insightDigital.textContent = `High screen immersion (${inputs.Avg_Daily_Usage_Hours}h/day, ${inputs.Daily_Unlocks} unlocks). High digital fatigue risk.`;
        } else {
            insightDigital.textContent = 'Healthy digital usage balance and phone interaction frequency.';
        }

        if (inputs.Physical_Activity_Hours >= 1.5) {
            insightActivity.textContent = 'Excellent daily movement! Physical exercise acts as an anti-stress buffer.';
        } else {
            insightActivity.textContent = 'Low physical movement. Adding 30 mins daily activity will elevate energy & mood.';
        }
    }

    function animateScoreCounter(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = (progress * (end - start) + start).toFixed(2);
            element.textContent = current;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    if (recalculateBtn) {
        recalculateBtn.addEventListener('click', () => {
            form.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
