import nltk
from nltk.corpus import movie_reviews
import random
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Download NLTK data if not already present
nltk.download('movie_reviews')

# Load movie reviews dataset
reviews = []
labels = []
for category in movie_reviews.categories():
    for fileid in movie_reviews.fileids(category):
        reviews.append(movie_reviews.raw(fileid))
        labels.append(category)

# Convert to DataFrame
reviews_df = pd.DataFrame({'review': reviews, 'label': labels})

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    reviews_df['review'], reviews_df['label'], test_size=0.2, random_state=42)

# Vectorize text
vectorizer = CountVectorizer(stop_words='english')
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

# Train classifier
clf = MultinomialNB()
clf.fit(X_train_vec, y_train)

# Predict and evaluate
y_pred = clf.predict(X_test_vec)
print('Accuracy:', accuracy_score(y_test, y_pred))
print(classification_report(y_test, y_pred))

# Demo: Predict sentiment for custom text
sample_text = [
    "This movie was fantastic! I loved the acting and the story.",
    "Terrible film. Waste of time.",
    "It was okay, not great but not bad either."
]
sample_vec = vectorizer.transform(sample_text)
predictions = clf.predict(sample_vec)
for text, pred in zip(sample_text, predictions):
    print(f"Review: {text}\nPredicted Sentiment: {pred}\n")
