<p align="center">
  <img src="Resources/banner.png" alt="StarGazer Banner" width="100%">
</p>

<p align="center">
  <b>Explore the universe one day at a time.</b><br>
  A modern web application that brings NASA's Astronomy Picture of the Day (APOD) to your browser with a clean, immersive interface.
</p>

---

## ✨ Features

### 🌠 Astronomy Picture of the Day

* Fetches the latest APOD directly from NASA.
* Displays the image or video, title, and full explanation.
* Automatically loads today's featured astronomy picture when the website opens.

---

### 📅 APOD Archive

* Browse NASA's APOD archive using a built-in calendar.
* Instantly load astronomy pictures from any available date.
* Date selection is limited to valid APOD dates.

---

### 🖼️ Media Support

* High-quality image support.
* Video support for APOD entries that are published as videos.
* Automatic media detection based on NASA's response.

---

### 🚀 Splash Screen

* Custom startup splash screen with StarGazer branding.
* Provides a smooth loading experience before entering the website.

---

### 🛡️ Smart Error Handling

* Detects invalid API responses.
* Handles slow API requests with an automatic timeout.
* Displays user-friendly messages for:

  * Network connection issues
  * NASA API errors
  * Request timeouts
  * Unexpected failures

---

### ⚡ Fast & Lightweight

* Built with Vanilla JavaScript.
* No external frameworks.
* Simple and responsive design.

---

## 🛠️ Built With

* HTML5
* CSS3
* JavaScript (ES6)
* Vite
* NASA APOD API

---

## 📸 Preview

> Add screenshots of your application here.

```
Home Page
Calendar View
Different APOD Example
Error Screen
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/yourusername/StarGazer.git
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
VITE_NASA_API_KEY=YOUR_API_KEY
```

Get your API key from the NASA API portal.

### Run the development server

```bash
npm run dev
```

---

## 📂 Project Structure

```text
StarGazer/
│
├── Resources/
│   ├── banner.png
│   └── ...
│
├── src/
│   ├── main.js
│   ├── style.css
│   └── ...
│
├── .env
├── index.html
├── package.json
└── README.md
```

---

## 💡 Future Improvements

* Search by keyword
* Save favorite APODs
* Dark/Light theme toggle
* HD image downloads
* Share APOD directly to social media
* Infinite APOD timeline
* Astronomy fact cards
* Daily notifications

---

## 🌍 API

This project uses NASA's **Astronomy Picture of the Day (APOD)** API.

Information retrieved includes:

* Title
* Date
* Image or Video
* Explanation
* Copyright (when available)

---

## ⭐ Why StarGazer?

StarGazer was created to make exploring NASA's Astronomy Picture of the Day simple, elegant, and interactive. Instead of simply displaying today's image, it allows users to travel through NASA's archive and discover the beauty of the universe from any available date.

---

<p align="center">
Made with ❤️ using the NASA APOD API.
</p>
