from flask import Flask, request, jsonify
from flask_cors import CORS
import nltk
from nltk.corpus import movie_reviews
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import threading

app = Flask(__name__)
CORS(app)

# Download NLTK data if not already present
nltk.download('movie_reviews')

# Load and train model once at startup
reviews = []
labels = []
for category in movie_reviews.categories():
    for fileid in movie_reviews.fileids(category):
        reviews.append(movie_reviews.raw(fileid))
        labels.append(category)
reviews_df = pd.DataFrame({'review': reviews, 'label': labels})
vectorizer = CountVectorizer(stop_words='english')
X_vec = vectorizer.fit_transform(reviews_df['review'])
clf = MultinomialNB()
clf.fit(X_vec, reviews_df['label'])

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    text = data.get('text', '')
    if not text:
        return jsonify({'error': 'No text provided'}), 400
    vec = vectorizer.transform([text])
    pred = clf.predict(vec)[0]
    return jsonify({'sentiment': pred})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
