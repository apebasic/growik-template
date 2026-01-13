# Growik Animation Research Specification
## For AI Researcher - GSAP Animation Components Needed

**Target:** Find production-ready GSAP code for 5 specific animation types from GSAP documentation, CodePen, or official examples.

**Reference Site:** https://growik.webflow.io (live example with working animations)

---

## 🎯 MISSING ANIMATIONS (Priority Order)

### 1. ⭐⭐⭐⭐⭐ 3D CUBIC TEXT ROTATION (HIGHEST PRIORITY)

**Visual Description:**
- A text element that appears as a **4-sided 3D cube** with different words on each face
- The cube **rotates on the X-axis** (horizontal axis) to reveal different text
- Looks like a physical cube spinning to show different faces

**Behavior:**
- **Hero Section:** Continuously auto-rotates through 4 words (Marketing → Strategy → Branding → Consulting)
- **Section Titles:** Rotates **counter to scroll direction** (rotates UP as you scroll DOWN) - this creates visual emphasis
- Uses CSS 3D transforms: `perspective`, `transform-style: preserve-3d`, `rotateX()`

**HTML Structure Needed:**
```
<div class="_3d-wrapper">
  <div class="_3d-text-block" style="perspective: 5000px">
    <div class="_3d-text-box" style="transform-style: preserve-3d">
      <div class="_3d-text-front">Word 1</div>
      <div class="_3d-text-back">Word 2</div>
      <div class="_3d-text-top">Word 3</div>
      <div class="_3d-text-bottom">Word 4</div>
    </div>
  </div>
</div>
```

**GSAP Animation Needed:**
- Auto-rotating version: `gsap.to(box, { rotateX: 360, duration: 8, repeat: -1 })`
- Scroll-triggered version: Uses `ScrollTrigger` with `scrub` for smooth scroll-linked rotation

**Search Terms:**
- "GSAP 3D text rotation cube"
- "GSAP rotateX scroll trigger"
- "CSS 3D transform GSAP animation"
- "GSAP preserve-3d perspective"
- "3D flip text animation GSAP"

---

### 2. ⭐⭐⭐⭐⭐ INFINITE HORIZONTAL MARQUEE / TICKER

**Visual Description:**
- Text scrolls **horizontally** from right to left in an **infinite loop**
- Seamless - no gaps or jumps when it loops
- Multiple instances throughout the page

**Locations:**
- Hero section: "Made Simple" / "That Works" alternating phrases
- Brand logos section: Company logos scrolling
- Service names: "Strategy ✺ Branding ✺ Advertising ✺" with decorative symbols

**Behavior:**
- **Continuous smooth scrolling** (not scroll-triggered, always moving)
- Some marquees are **scroll-triggered** (speed linked to scroll position)
- Content is duplicated to create seamless loop

**GSAP Animation Needed:**
```javascript
// Auto-scrolling marquee
gsap.to(".marquee", {
  x: "-50%",
  duration: 20,
  repeat: -1,
  ease: "none"
});

// Scroll-linked marquee
gsap.to(".marquee", {
  x: "-50%",
  scrollTrigger: {
    trigger: ".section",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});
```

**Search Terms:**
- "GSAP infinite marquee"
- "GSAP horizontal ticker animation"
- "GSAP seamless loop text scroll"
- "GSAP infinite horizontal scroll"
- "GSAP text ticker ScrollTrigger"

---

### 3. ⭐⭐⭐⭐⭐ STACKING CARDS (SCROLL PIN)

**Visual Description:**
- 4 service cards that **stack on top of each other** as you scroll
- Each card **pins/sticks** at the top of the viewport
- Next card slides up and pushes the previous card away
- Previous cards **scale down and fade** slightly as new ones appear

**Behavior:**
- Card 1 pins at top → Card 2 slides up and pins → Card 3 slides up, etc.
- Uses `ScrollTrigger.create()` with `pin: true` and `pinSpacing: false`
- Previous cards animate: `scale: 0.95, opacity: 0.8`

**GSAP Animation Needed:**
```javascript
// Pin each card
ScrollTrigger.create({
  trigger: card,
  start: "top top",
  pin: true,
  pinSpacing: false,
  end: "bottom bottom"
});

// Scale down previous cards
gsap.to(previousCard, {
  scale: 0.95,
  opacity: 0.8,
  scrollTrigger: {
    trigger: nextCard,
    start: "top bottom",
    end: "top top",
    scrub: true
  }
});
```

**Search Terms:**
- "GSAP stacking cards scroll"
- "GSAP pin cards on scroll"
- "GSAP card stack animation"
- "ScrollTrigger pin stacking effect"
- "GSAP layered card scroll"

---

### 4. ⭐⭐⭐⭐ NUMBER ROLLING / SCRAMBLING EFFECT

**Visual Description:**
- Service card numbers that **roll vertically** like an odometer
- Shows: 00 → 01, then 00 → 01 → 02, then 00 → 01 → 02 → 03
- Creates a "counting up" effect with vertical translation

**Behavior:**
- Triggered when card enters viewport
- Numbers are stacked vertically, container translates Y position
- Uses `y: -100%` per number increment

**HTML Structure:**
```
<div class="roll-number-wrap">
  <div class="service-number">0</div>
  <div class="roll-number-item">
    <div class="service-number">0</div>
    <div class="service-number">1</div>
    <div class="service-number">2</div>
  </div>
</div>
```

**GSAP Animation Needed:**
```javascript
gsap.to(rollItem, {
  y: `-${index * 100}%`,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: card,
    start: "top center"
  }
});
```

**Search Terms:**
- "GSAP number rolling animation"
- "GSAP odometer counter"
- "GSAP vertical number scroll"
- "GSAP number flip animation"
- "GSAP counter roll effect"

---

### 5. ⭐⭐⭐⭐ EXPANDING CIRCLES ON SCROLL

**Visual Description:**
- Circular shapes that **scale up from center** as you scroll
- Alternating colors (orange and black circles)
- Creates a pulsing/expanding effect

**Behavior:**
- Triggered by scroll position in CTA section
- Circles start at `scale: 0` and expand to `scale: 1+`
- Uses `ease: "back.out(1.7)"` for bounce effect

**GSAP Animation Needed:**
```javascript
gsap.from(circle, {
  scale: 0,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".cta-section",
    start: "top center",
    scrub: 1
  }
});
```

**Search Terms:**
- "GSAP scale circle animation"
- "GSAP expanding shapes scroll"
- "GSAP scale from center"
- "GSAP circle reveal animation"
- "GSAP back.out ease"

---

## 📋 DELIVERABLE FORMAT

For each animation, please provide:

### 1. **Complete React/Next.js Component**
```tsx
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function AnimationName({ children, ...props }) {
  // Full implementation
}
```

### 2. **Standalone HTML/JS Example**
```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/ScrollTrigger.min.js"></script>
</head>
<body>
  <!-- Working demo -->
</body>
</html>
```

### 3. **Source Attribution**
- Link to original CodePen/example
- GSAP documentation reference
- Any licensing notes

---

## 🎯 SUCCESS CRITERIA

✅ **Animation works smoothly at 60fps**  
✅ **Code is production-ready (no console errors)**  
✅ **Uses GSAP 3.x syntax**  
✅ **Works with ScrollTrigger plugin**  
✅ **Includes both React and vanilla JS versions**

---

## 📚 RECOMMENDED SOURCES

1. **GSAP Official Docs:** https://gsap.com/docs/v3/
2. **GSAP ScrollTrigger Demos:** https://gsap.com/docs/v3/Plugins/ScrollTrigger/
3. **CodePen GSAP Examples:** Search "GSAP" + animation type
4. **GreenSock Forums:** https://gsap.com/community/
5. **GSAP YouTube Channel:** Official tutorials

---

## ⚠️ IMPORTANT NOTES

- **Avoid premium plugins** (SplitText, DrawSVG, MorphSVG) - use free GSAP core + ScrollTrigger only
- **Prioritize performance** - use `transform` and `opacity` properties
- **Include cleanup** - `return () => { tween.kill() }` in React useEffect
- **Test on scroll** - ensure ScrollTrigger animations work properly

---

## 🔄 WHAT WE ALREADY HAVE

From the existing component library:
- ✅ Line Reveal
- ✅ Character Reveal  
- ✅ Word Reveal
- ✅ Parallax
- ✅ Scroll Scale
- ✅ Fade + Slide
- ✅ Horizontal Scroll (basic version, but NOT infinite marquee)

---

## 📊 PRIORITY RANKING

1. **3D Cubic Text Rotation** - Most unique, hardest to find
2. **Infinite Marquee** - Essential for multiple sections
3. **Stacking Cards** - Key interaction pattern
4. **Number Rolling** - Nice detail effect
5. **Expanding Circles** - Visual polish

---

## 💬 QUESTIONS FOR RESEARCHER

If you find multiple implementations:
- Which has best performance?
- Which is most customizable?
- Any browser compatibility issues?
- Can it be simplified further?

---

**END OF SPECIFICATION**

Please return all 5 animation components with working code examples. Thank you!
