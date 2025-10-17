# 🚀 Demo Screenshots

### UI Overview
![Sentiment Analysis Demo UI]
<img width="1460" height="985" alt="Demo" src="https://github.com/user-attachments/assets/e36e4b7b-f00b-42cb-8ad1-2ccefd89d240" />


### Example Prediction
![Sentiment Prediction Example](docs/screenshot-prediction.png)

---
## 🛠️ Tech Stack

**Core Technologies**
- **Python 3.8+**
- **NLTK** - Natural language processing
- **pandas** - Data handling
- **scikit-learn** - Machine learning
- **Flask** - REST API
- **Next.js/React** - Web frontend

**Model Used**
---


|-------------|--------|
| Accuracy    | 0.82   |
| Precision   | 0.83   |
| Recall      | 0.80   |
| F1-score    | 0.81   |

*Tested on NLTK movie reviews dataset*

### Example Predictions
```
Input: This movie was fantastic! I loved the acting and the story.
Prediction: positive

Input: Terrible film. Waste of time.
Prediction: negative

Input: It was okay, not great but not bad either.
```

---

## ⚡ Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/aswinraja98/sentiment-analysis-tool.git
# Create virtual environment
python -m venv .venv
# Install dependencies
```

### Run the Backend API

```bash
# or, if using the venv:
.venv\Scripts\python.exe api.py
```

### Run the Frontend Demo
```bash
cd web
npm install
npm run dev


---


[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-ML-orange.svg)](https://scikit-learn.org/)
[![NLTK](https://img.shields.io/badge/NLTK-NLP-yellowgreen.svg)](https://www.nltk.org/)

An end-to-end sentiment analysis system for classifying text as **positive**, **negative**, or **neutral**. Built with Python (NLTK, pandas, scikit-learn) and a modern Next.js web UI. Ideal for analyzing reviews, comments, or messages. Fully portfolio-ready.


## 🚀 Interactive Demo

<img width="492" height="863" alt="Sentiment Analysis Demo UI" src="docs/screenshot-ui.png" />

Try the live demo interface to see the sentiment analysis system in action! Paste text and get instant predictions.

📍 **[View Demo Interface](./web/)** - Next.js/React frontend for interactive sentiment analysis

> **Note**: The `web` folder contains a web interface that can be integrated with this Python backend to create a full-stack application. See [web/README.md](./web/README.md) for integration instructions.

---

## 🎯 Problem Statement

In today's digital world, understanding the sentiment behind user reviews, comments, and messages is crucial for businesses and researchers. There's a growing need for automated systems that can:
- Accurately classify text as positive, negative, or neutral
- Work on real-world, noisy data
- Integrate easily with modern web applications

---

## 💡 Solution

This project implements a **machine learning-based sentiment analysis system** using:

- **NLTK Movie Reviews Dataset** for training
- **Text preprocessing** with NLTK and pandas
- **Feature extraction** using scikit-learn's `CountVectorizer`
- **Naive Bayes classifier** (`MultinomialNB`) for robust predictions
- **Flask API** for serving predictions
- **Next.js/React** frontend for a beautiful, interactive demo

---

## Features
- Real sentiment classification using a trained machine learning model (Naive Bayes, NLTK movie reviews dataset)
- Modern, professional Next.js web interface (see `/web` folder)
- Live demo: input text and get instant predictions
- Easy integration into your portfolio website
- Well-documented, production-quality code

---

## Screenshots

### Demo UI
![Sentiment Analysis Demo UI](docs/screenshot-ui.png)

### Example Prediction
![Sentiment Prediction Example](docs/screenshot-prediction.png)

---

## Project Architecture

**Backend (Python):**
- Uses NLTK to load and preprocess the movie reviews dataset
- Vectorizes text with scikit-learn's `CountVectorizer`
- Trains a Naive Bayes classifier (`MultinomialNB`)
- Flask API (`api.py`) exposes a `/predict` endpoint for real-time predictions
- CORS enabled for frontend integration

**Frontend (Next.js):**
- Modern React UI for text input and displaying results
- Calls the Flask API for real sentiment predictions
- Styled for portfolio-quality presentation

---

## Installation & Usage

### 1. Clone the repository
```bash
git clone https://github.com/aswinraja98/sentiment-analysis-tool.git
cd sentiment-analysis-tool
```

### 2. Install Python backend dependencies
```bash
python -m venv .venv
.venv\Scripts\activate  # On Windows
pip install -r requirements.txt
```

### 3. Start the Flask API
```bash
python api.py
# or, if using the venv:
.venv\Scripts\python.exe api.py
```

### 4. Install and run the Next.js frontend
```bash
cd web
npm install
npm run dev
```

### 5. Open the demo
Go to [http://localhost:3000](http://localhost:3000) in your browser. Enter text and click "Analyze Sentiment" to see results.

---

## Example Output
```
Input: This movie was fantastic! I loved the acting and the story.
Result: positive

Input: Terrible film. Waste of time.
Result: negative

Input: It was okay, not great but not bad either.
Result: neutral
```

---

## Portfolio Integration

You can:
- Use the `/web/pages/index.js` as a standalone demo page in your portfolio
- Or, deploy the full project (backend + frontend) for a live interactive demo
- Customize styles, add your own branding, or extend the model as needed

---

## License
MIT

---
*For a professional blog/Medium post or further documentation, just ask!*
