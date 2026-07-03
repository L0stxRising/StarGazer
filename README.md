<p align="center">
  <img src="Resources/banner.png" alt="StarGazer Banner" width="100%">
</p>

A minimal, lightweight frontend for NASA's Astronomy Picture of the Day (APOD), featuring a custom starfield background animation rendered on HTML5 Canvas.

---

### Features & Implementation
* **Media Agnostic Rendering:** Dynamically detects the API payload to render static images via `<img>` or video content using an embedded `<iframe>`.
* **Robust Error & Timeout Handling:** Includes custom error boundaries for API failures and a strict 7-second timeout fallback to prevent silent loading hangs.
* **Historical Lookup:** A calendar interface allowing users to query and fetch APOD data for any valid historical date.
* **Canvas-Driven Animation:** A lightweight JavaScript animation loop rendering responsive, twinkling stars without external heavy graphics libraries.
* **Secure Config:** Built using Vite environment variables to ensure API keys remain separated from the source code during build time.

---

### Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Build Tool:** Vite
* **Deployment:** GitHub Pages

---

### Getting Started

**Live Demo:** Explore the universe at [l0stxrising.github.io/StarGazer/](https://l0stxrising.github.io/StarGazer/)

#### Running Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/L0stxRising/StarGazer.git](https://github.com/L0stxRising/StarGazer.git)
   cd StarGazer
