DEV / INSIGHT — responsive website (viewport-tested)

Files:
- index.html — Home and Videos pages
- styles.css — responsive layout and styling
- script.js — mobile navigation and video player interaction
- assets/full-interview.mp4 — full interview supplied by the team
- assets/ — three student photos and four short video clips

Responsive checks were run in Chromium at viewport widths 320, 360, 375, 390, 430, 540, 768, 820, 900, 1024, 1280, 1440, and 1920 CSS pixels. The checks covered horizontal overflow, the home/video layouts, avatar bounds, video preview sizing, the mobile menu, and topic links. Physical devices may render differently depending on browser and OS.

Run locally:
1. Extract the ZIP fully.
2. Open a terminal in this folder.
3. Run: python -m http.server 8000
4. Visit http://localhost:8000

Keep styles.css, script.js, and the assets folder in the same directory structure as index.html.
