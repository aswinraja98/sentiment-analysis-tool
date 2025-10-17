<img width="1460" height="985" alt="Demo" src="https://github.com/user-attachments/assets/7c74ce84-84ee-44ad-b1ad-bc63a12938ef" />
# Sentiment Analysis Tool

A demo NLP tool to classify text as positive, negative, or neutral using simple keyword logic (for portfolio/web integration). Includes a working web UI for live sentiment analysis.

## Features
- Classifies text as positive, negative, or neutral
- Modern Next.js web interface (see `/web` folder)
- Instant demo: no backend required
- Easy to integrate into your portfolio website

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sentiment-analysis-tool.git
   cd sentiment-analysis-tool
   ```
2. Install frontend dependencies:
   ```bash
   cd web
   npm install
   ```

## Usage (Demo)

1. Start the Next.js demo UI:
   ```bash
   cd web
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser.
3. Enter any text and click "Analyze Sentiment" to see instant results.

## Example Output
```
Input: This movie was fantastic! I loved the acting and the story.
Result: positive

Input: Terrible film. Waste of time.
Result: negative

Input: It was okay, not great but not bad either.
Result: neutral
```

## Screenshots

![Demo UI Screenshot](docs/demo-screenshot.png)
<img width="1460" height="985" alt="Demo" src="https://github.com/user-attachments/assets/58d8b952-7374-4460-9166-90f1660c4016" />

## Portfolio Integration

To add this demo to your portfolio website:
- Copy the `/web/pages/index.js` file to your portfolio Next.js project (or use as a standalone page)
- Customize styles and layout as needed
- No backend required for demo functionality

## License
MIT

---
*For professional documentation or blog/Medium post, ask as needed.*
