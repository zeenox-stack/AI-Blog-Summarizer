# AI Blog Summarizer

An **AI-powered Blog Summarizer App** that converts blogs — provided either as text or via URL — into meaningful, concise summaries in multiple formats.

![AI Text Summarizer](./Frontend/src/assets/AI%20Blog%20Summarizer.png)

---

## 📚 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation & Setup](#installation--setup)

---

## 📌 Introduction

The AI Blog Summarizer simplifies long blog posts into clear, digestible content.  
You can input either **raw text** or a **URL**, and the app will produce summaries in different styles — from bullet points to detailed paragraphs — powered by **Cohere's AI**.

---

## ✨ Features

- **Multiple input formats** – Text or URL-based summarization.
- **Four summarization styles** – Brief, detailed, bullets, keywords.
- **Free forever** – No sign-in required.
- **AI-curated summaries** – High-quality, context-aware output.
- **Export options** – Copy to clipboard or download in Markdown format.

---

## ⚙️ Installation & Setup

### 1. Get your API token

you'll need **Cohere API token** before starting.

### 2. Clone the Repository.

```bash
git clone https://github.com/zeenox-stack/AI-Blog-Smmarizer.git
```

### 3. Install Dependencies

Open **two terminals** - one for the frontend and one for backend.

- **Frontend:**

```bash
cd Frontend
npm install
npm run dev
```

- **Backend:**

```bash
cd Backend
npm install
npm run dev
```

---

### 4. Environment Variables

- **Frontend**(`.env`):

```env
VITE_NODE_ENV=dev
```

- **Backend**(`.env`):

```env
COHERE_TOKEN=your_cohere_token
NODE_ENV=dev
```

---
