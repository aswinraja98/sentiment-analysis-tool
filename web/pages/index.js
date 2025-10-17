import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const samples = [
    {
      label: "Positive Review",
      text: "This product is amazing! I absolutely love it and would recommend to everyone."
    },
    {
      label: "Negative Review",
      text: "Terrible experience. The quality was awful and I hated the service."
    },
    {
      label: "Neutral Review",
      text: "It was okay, not great but not bad either."
    }
  ];

  function handleSample(sampleText) {
    setText(sampleText);
    setCharCount(sampleText.length);
    setResult("");
  }

  function handleChange(e) {
    setText(e.target.value);
    setCharCount(e.target.value.length);
    setResult("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.sentiment) {
          setResult(data.sentiment);
        } else {
          setResult("Error: " + (data.error || "Unknown error"));
        }
        setLoading(false);
      })
      .catch(err => {
        setResult("Error: " + err.message);
        setLoading(false);
      });
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-10 px-2">
      <div className="max-w-4xl w-full">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-teal-400 mb-2 flex items-center gap-2">
            <span>🧠</span> Sentiment Analysis Demo
          </h1>
          <p className="text-lg text-gray-300 mb-2">Try out the AI-powered sentiment analysis system.</p>
          <div className="flex gap-2 mb-4">
            <span className="bg-teal-700 text-white px-3 py-1 rounded-full text-xs font-semibold">Interactive Demo</span>
            <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-xs font-semibold">NLP</span>
            <span className="bg-purple-800 text-white px-3 py-1 rounded-full text-xs font-semibold">Machine Learning</span>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
            <h2 className="text-lg font-semibold text-teal-300 mb-1">About This Demo</h2>
            <p className="text-gray-400 text-sm">This is a <span className="font-bold">simplified frontend demo</span> of the Sentiment Analysis System. The full system uses advanced NLP techniques and can be integrated with a backend API. For the complete implementation, visit the <a href="https://github.com/yourusername/sentiment-analysis-tool" className="text-teal-400 underline">GitHub repository</a>.</p>
          </div>
        </div>

        {/* Main Two-Column Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Input Column */}
          <div className="flex-1">
            <h3 className="text-md font-semibold text-gray-300 mb-2">Input Text</h3>
            <div className="flex gap-2 mb-3">
              {samples.map(s => (
                <button
                  key={s.label}
                  type="button"
                  className="bg-gray-700 hover:bg-teal-600 text-white px-3 py-1 rounded text-xs font-semibold"
                  onClick={() => handleSample(s.text)}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <textarea
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-teal-400"
                rows={6}
                placeholder="Paste your text here..."
                value={text}
                onChange={handleChange}
                required
              />
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-400">{charCount} characters</div>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 rounded bg-teal-500 hover:bg-teal-600 text-white font-semibold mt-2"
                disabled={loading}
              >
                {loading ? "Analyzing..." : "Analyze Sentiment"}
              </button>
            </form>
          </div>
          {/* Result Column */}
          <div className="flex-1">
            <h3 className="text-md font-semibold text-gray-300 mb-2">Sentiment</h3>
            <div className="w-full min-h-[120px] bg-gray-800 border border-gray-700 rounded p-4 flex items-center justify-center">
              {!result && <span className="text-gray-500">Your sentiment result will appear here...</span>}
              {result && (
                <span className={
                  result === "positive"
                    ? "text-green-400 text-2xl font-bold"
                    : result === "negative"
                    ? "text-red-400 text-2xl font-bold"
                    : "text-yellow-400 text-2xl font-bold"
                }>
                  {result.charAt(0).toUpperCase() + result.slice(1)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Technical Implementation Section */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold text-teal-300 mb-2">Technical Implementation</h2>
          <div className="text-gray-300 text-sm mb-2">Full System Features:</div>
          <ul className="list-disc pl-6 text-gray-400 text-sm mb-2">
            <li>Text Classification: Uses keyword-based logic for demo; full system uses machine learning models.</li>
            <li>Customizable: Easily extend to use advanced NLP or connect to backend API.</li>
            <li>Evaluation Metrics: Accuracy, precision, recall, and F1-score for model-based implementation.</li>
            <li>Technologies: React, Next.js, Python, NLTK, scikit-learn.</li>
          </ul>
          <div className="flex gap-2 flex-wrap mt-2">
            <span className="bg-blue-900 text-white px-2 py-1 rounded text-xs font-semibold">Python</span>
            <span className="bg-purple-900 text-white px-2 py-1 rounded text-xs font-semibold">React</span>
            <span className="bg-teal-900 text-white px-2 py-1 rounded text-xs font-semibold">Next.js</span>
            <span className="bg-blue-800 text-white px-2 py-1 rounded text-xs font-semibold">NLTK</span>
            <span className="bg-yellow-800 text-white px-2 py-1 rounded text-xs font-semibold">scikit-learn</span>
          </div>
        </div>
      </div>
    </main>
  );
}
