<div align="center">
  <img src="public/logo.png" alt="Guna's Master Quest Logo" width="150" />
  <h1>Guna's Master Quest: A Python Adventure</h1>
  <p>A gamified, story-driven web application for learning the fundamentals of Python, set in the mystical Kingdom of Bhutan.</p>
  <p>
    <a href="https://jeearkay.github.io/pythin_basics/">
      <img src="https://img.shields.io/badge/Live%20Demo-View%20Site-brightgreen?style=for-the-badge&logo=github" alt="Live Demo">
    </a>
  </p>
</div>

# Guna's Master Quest: A Python Adventure

This project is an interactive, gamified web application designed to teach the fundamentals of Python programming. Follow the journey of a young monk named Guna through the mystical landscapes of Bhutan, from the Paro Airport to the high monasteries. Each location unlocks a new Python concept, from basic variables and printing to more complex topics like functions and error handling.

The application is built with React and TypeScript, and it uses Pyodide to run Python code directly in the browser via WebAssembly, providing a live, interactive sandbox experience without needing a server-side backend.

## Run Locally

**Prerequisites:**
*   [Node.js](https://nodejs.org/) (v18 or later recommended)
*   An active internet connection (to load the Pyodide WebAssembly module)

1. Install dependencies:
   `npm install`

2.  Run the development server:
   `npm run dev`

3.  Open your browser and navigate to `http://localhost:5173` (or the address provided in your terminal).

> **Note:** This project does not require a `GEMINI_API_KEY` to run locally as all Python execution is handled client-side by Pyodide.
