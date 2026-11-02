# Matoshree Lawns — 8-Second Cinematic Hero Video Specification

This document details the exact creative and technical specifications for generating or shooting the full-screen establishing video background for **Matoshree Lawns**.

---

## 1. Visual Direction & Concept

- **Core Vision**: A breathtaking royal Indian wedding venue during blue-hour twilight, transitioning into a warm golden illuminated atmosphere.
- **Key Visual Elements**: Sprawling outdoor wedding lawn, elegant architectural entrance, beautifully decorated floral mandap, sophisticated crystal chandeliers, and luxurious wedding decorations.
- **Atmospheric Quality**: Volumetric golden lighting, subtle atmospheric evening haze, rich natural contrast, deeply detailed floral textures, and no artificial CGI look.

---

## 2. Color Palette & Grading

| Color Tone | Hex Code | Role in Frame |
| :--- | :--- | :--- |
| **Deep Royal Maroon** | `#350707` | Drapes, floral accents, architectural shadows |
| **Rich Burgundy** | `#250606` | Twilight shadows, lawn peripheral boundary |
| **Antique Gold** | `#C99A3D` | Architectural trimmings, chandelier metalwork, mandap pillars |
| **Champagne Gold** | `#E5C378` | Ambient fairy lights, glowing chandeliers |
| **Warm Ivory** | `#FDFBF7` | Mandap floral arrangements, drapery, aisle flowers |
| **Blue-Hour Twilight** | `#1A2238` | Deep evening sky gradient balancing the warm golden ground |

---

## 3. Timeline & Camera Choreography (One Continuous Shot)

```
[0.0s] ─────────── [2.0s] ─────────── [4.0s] ─────────── [6.0s] ─────────── [8.0s]
 Wide Establishing       Forward Glide          Mandap & Chandelier      Composition Settle
 Twilight Lawn           Grand Entrance         Ivory & Maroon Flora     Left 35-40% uncluttered
 Fairy Lights Glow       Gold Architecture      Chandeliers Gleam        Hero Typography Zone
```

### 0–2 Seconds — Wide Establishing Shot
- **Frame**: Grand ultra-wide establishing view of the 50,000 sq.ft. lawn at blue-hour twilight.
- **Lighting**: Hundreds of tiny warm golden fairy lights illuminate the perimeter trees and pathways.
- **Mood**: Grand, tranquil, and magical.

### 2–4 Seconds — Forward Glide
- **Movement**: Slow, perfectly stabilized continuous cinematic forward glide towards the grand entrance.
- **Detail**: Reveal elegant floral arrangements, refined antique-gold architectural arches, and warm ground lanterns.

### 4–6 Seconds — The Royal Mandap Reveal
- **Subject**: Reveal a magnificent wedding mandap adorned with cascading ivory blooms, champagne gold accents, tasteful deep maroon floral highlights, and warm crystal chandeliers.

### 6–8 Seconds — Compositional Settle
- **Settling**: The camera gently stabilizes into a wide editorial composition.
- **Placement**: The illuminated mandap and central venue occupy the **center-right** of the frame.
- **Negative Space**: The **left 35–40%** remains relatively dark, uncluttered, and soft to allow large white and antique-gold website hero typography to stand out with crisp readability.

---

## 4. Cinematography Technical Settings

- **Duration**: Exactly 8.00 seconds.
- **Camera Profile**: Full-frame cinema camera look (e.g., Arri Alexa Mini LF / Sony FX9, Cooke Panchro / Anamorphic glass).
- **Framing**: 16:9 Landscape (3840×2160 4K or 1920×1080 Full HD).
- **Frame Rate**: 24.00 fps cinematic motion blur.
- **Transitions**: Strictly **one continuous shot**, zero cuts or rapid camera acceleration.
- **Depth of Field**: Natural optical falloff, sharp subject focus on mandap without artificial CGI sharpness.

---

## 5. Strict Negative Constraints

`no text, no typography, no captions, no watermarks, no logos, no signage, no distorted architecture, no unrealistic buildings, no oversaturated orange lighting, no excessive red lighting, no cartoon aesthetics, no plastic flowers, no rapid camera movement, no flashing lights, no transitions, no sudden zooms, no visible camera equipment`

---

## 6. How to Deploy the Video in This Website

When the 8-second MP4 video is rendered:
1. Place the optimized video file at:
   `src/assets/videos/hero-background.mp4`
2. Open `src/config/images.config.js`:
3. Change:
   ```javascript
   export const HERO_MEDIA_CONFIG = {
     type: 'video', // changed from 'image' to 'video'
     ...
   };
   ```
4. The website will automatically transition to using the video with lazy fallback to the static hero image.
