# Growik Template - Complete Animation Reference
## Master Documentation of All Animations

**Last Updated:** January 13, 2026  
**Sources:** Live site inspection + Claude's deep analysis + Manual extraction  
**Status:** Complete reference for all 11+ animations

---

## 📋 TABLE OF CONTENTS

1. [3D Cubic Text Rotation](#1-3d-cubic-text-rotation)
2. [Marquee Animations](#2-marquee-animations)
3. [Scroll Down Button](#3-scroll-down-button-animation)
4. [Service Card Headings](#4-service-card-heading-marquees)
5. [Counter Numbers](#5-counter-animation-count-up)
6. [Expanding Circles](#6-circles-expanding-animation)
7. [Text Reveal](#7-text-reveal-animation)
8. [Lateral Text Scrolling](#8-lateral-text-scrolling)
9. [Footer Logo](#9-footer-logo-animation)
10. [Stacking Cards](#10-stacking-cards-not-yet-implemented)
11. [Number Rolling](#11-number-rolling-not-yet-implemented)

---

## 1. 3D CUBIC TEXT ROTATION

### **Location:** Hero section + Section titles

### **HTML Structure (Hero):**
```html
<div class="_3d-text-block">
  <div class="_3d-text-box">
    <!-- Front Face -->
    <div class="_3d-text-front">
      <h1 class="_3d-block-text">Strategy</h1>
    </div>
    <!-- Back Face (rotated 180°) -->
    <div class="_3d-text-back">
      <h2 class="_3d-block-text">Marketing</h2>
    </div>
    <!-- Top Face (rotated 90° on X-axis) -->
    <div class="_3d-text-top">
      <h2 class="_3d-block-text">Consulting</h2>
    </div>
    <!-- Bottom Face (rotated -90° on X-axis) -->
    <div class="_3d-text-bottom">
      <h2 class="_3d-block-text">Branding</h2>
    </div>
  </div>
</div>
```

### **CSS:**
```css
._3d-text-block {
  perspective: 5000px;
  width: 60rem;
  height: 12rem;
  position: relative;
  transform: none;
}

._3d-text-box {
  transform-origin: 50%;
  transform-style: preserve-3d;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  /* Base 3D rotation slightly tilted */
  transform: rotateX(1deg) rotateY(0) rotateZ(0) translate(0);
}

._3d-text-front {
  z-index: 1;
  background-color: var(--primary-color--orange); /* #F36841 */
  transform-style: preserve-3d;
  justify-content: center;
  align-items: center;
  width: 55rem;
  height: 12rem;
  display: flex;
  position: absolute;
  /* Front face positioned 6rem forward */
  transform: translate3d(0, 0, 6rem);
}

._3d-text-back {
  background-color: var(--primary-color--orange);
  transform-style: preserve-3d;
  justify-content: center;
  align-items: center;
  width: 55rem;
  height: 12rem;
  display: flex;
  position: absolute;
  /* Back face rotated 180° and positioned 6rem backward */
  transform: translate3d(0, 0, -6rem) rotateX(180deg) rotateY(0) rotateZ(0);
}

._3d-text-top {
  background-color: var(--primary-color--orange);
  transform-style: preserve-3d;
  justify-content: center;
  align-items: center;
  width: 55rem;
  height: 12rem;
  display: flex;
  position: absolute;
  /* Top face rotated 90° on X-axis, positioned 6rem up */
  transform: translate(0, -6rem) rotateX(90deg) rotateY(0) rotateZ(0);
}

._3d-text-bottom {
  background-color: var(--primary-color--orange);
  transform-style: preserve-3d;
  justify-content: center;
  align-items: center;
  width: 55rem;
  height: 12rem;
  display: flex;
  position: absolute;
  /* Bottom face rotated -90° on X-axis, positioned 6rem down */
  transform: translate(0, 6rem) rotateX(-90deg) rotateY(0) rotateZ(0);
}

._3d-block-text {
  font-family: var(--_typography---font-family--primary);
  color: var(--primary-color--black);
  font-size: 12rem;
  line-height: 1;
  font-weight: 900;
}
```

### **Section Title Variant:**
```css
._3d-title-block {
  perspective: 5000px;
  width: 45rem;
  height: 10rem;
  position: relative;
}

._3d-title-front, ._3d-title-back, ._3d-title-top, ._3d-title-bottom {
  /* Same structure but with 5rem depth instead of 6rem */
  /* Front: translate3d(0, 0, 5rem) */
  /* Back: translate3d(0, 0, -5rem) rotateX(180deg) */
  /* Top: translate(0, -5rem) rotateX(90deg) */
  /* Bottom: translate(0, 5rem) rotateX(-90deg) */
}

._3d-title-front.alternate-background {
  background-color: var(--primary-color--black);
}
```

### **GSAP Animation:**
```javascript
// Hero 3D Text (Auto-rotating)
gsap.to('.hero-section ._3d-text-box', {
    rotateX: 360,
    duration: 8,
    repeat: -1,
    ease: "none"
});

// Section Titles (Scroll-triggered, rotates counter to scroll)
document.querySelectorAll('._3d-title-box').forEach((box) => {
    gsap.to(box, {
        rotateX: -360,
        scrollTrigger: {
            trigger: box.parentElement,
            start: "top 80%",
            end: "top 30%",
            scrub: 1.5
        }
    });
});
```

### **Key Parameters:**
| Parameter | Hero Text | Section Titles |
|-----------|-----------|----------------|
| Perspective | 5000px | 5000px |
| Width | 60rem | 45rem |
| Height | 12rem | 10rem |
| Z-depth | ±6rem | ±5rem |
| Y-offset | ±6rem | ±5rem |
| Rotation | 360° continuous | -360° on scroll |
| Duration | 8s | Scroll-linked |

---

## 2. MARQUEE ANIMATIONS

### **2A. Hero Marquee ("Made Simple" / "That Works")**

### **HTML Structure:**
```html
<div class="scroll-text-wrapper">
  <div class="scroll-text-block">
    <h2 class="heading-style-h1-large">Made Simple</h2>
    <h2 class="heading-style-h1-large">That Works</h2>
  </div>
  <div class="scroll-text-block">
    <h2 class="heading-style-h1-large">Made Simple</h2>
    <h2 class="heading-style-h1-large">That Works</h2>
  </div>
</div>
```

### **CSS:**
```css
.scroll-text-wrapper {
  justify-content: flex-start;
  align-items: center;
  display: flex;
  position: relative;
  overflow: hidden;  /* Key for marquee effect */
}

.scroll-text-block {
  flex: none;
  justify-content: center;
  align-items: center;
  display: flex;
  white-space: nowrap;
}

.heading-style-h1-large {
  font-family: var(--_typography---font-family--primary);
  color: var(--primary-color--black);
  font-size: 12rem;
  line-height: 1;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  margin-bottom: 0;
}
```

### **GSAP Animation:**
```javascript
gsap.to('.scroll-text-wrapper', {
    x: "-50%",
    duration: 20,
    repeat: -1,
    ease: "none"
});
```

### **2B. Brand Logos Marquee**
Same structure and animation as hero marquee, but with company logos instead of text.

---

## 3. SCROLL DOWN BUTTON ANIMATION

### **HTML Structure:**
```html
<div class="scroll-down-wrap">
  <div class="scroll-down-image">
    <!-- Arrow SVG or video -->
  </div>
  <div class="scroll-down-block">
    <!-- Circle with rotating text -->
  </div>
  <svg class="circular-text">
    <!-- Rotating circular text with path -->
  </svg>
</div>
```

### **CSS:**
```css
.scroll-down-wrap {
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  display: flex;
  position: relative;
}

.scroll-down-image {
  position: absolute;
  inset: 0%;
}

.scroll-down-block {
  z-index: 2;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  inset: 0%;
}

.arrow-video {
  border-radius: 100%;
  width: 4.5rem;
  height: 4.5rem;
}

.circular-text {
  z-index: 2;
  opacity: 0.9;
  width: 7.5rem;
  height: 7.5rem;
  position: absolute;
}
```

### **GSAP Animation:**
```javascript
// Continuous rotation
const starTween = gsap.to('.circular-text', {
    rotation: 360,
    duration: 4,
    repeat: -1,
    ease: "none"
});

// Speed up on scroll
ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "200px top",
    onUpdate: (self) => {
        starTween.timeScale(1 + (self.progress * 2)); // Speed up to 3x
    }
});

// Arrow bounce
gsap.to('.scroll-down-image', {
    y: 10,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});
```

---

## 4. SERVICE CARD HEADING MARQUEES

### **HTML Structure:**
```html
<div class="service-card">
  <div class="service-heading-wrapper">
    <h3 class="service-heading-animated">Strategy ✺ Strategy ✺ Strategy ✺</h3>
  </div>
</div>
```

### **CSS:**
```css
.service-heading-animated {
  font-family: var(--_typography---font-family--primary);
  color: var(--primary-color--white);
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
}
```

### **GSAP Animation:**
```javascript
document.querySelectorAll('.scrolling-text-wrapper').forEach((wrapper) => {
    gsap.to(wrapper.querySelector('.scroll-text-item'), {
        x: "-50%",
        scrollTrigger: {
            trigger: wrapper,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });
});
```

---

## 5. COUNTER ANIMATION (COUNT-UP)

### **HTML Structure:**
```html
<div class="stats-grid">
  <div class="stat-item">
    <h2 class="stat-number" data-target="13">+13</h2>
    <p>Of creative marketing experience</p>
  </div>
  <div class="stat-item">
    <h2 class="stat-number" data-target="98">98%</h2>
    <p>Customer happiness and loyalty rate</p>
  </div>
  <div class="stat-item">
    <h2 class="stat-number" data-target="200">200+</h2>
    <p>Brands we've partnered with worldwide</p>
  </div>
</div>
```

### **GSAP Animation:**
```javascript
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.stat-number').forEach((stat) => {
    const target = parseInt(stat.dataset.target);
    
    gsap.to(stat, {
        scrollTrigger: {
            trigger: stat,
            start: "top 80%",
            once: true
        },
        textContent: target,
        duration: 2,
        ease: "power1.out",
        snap: { textContent: 1 },
        onUpdate: function() {
            stat.textContent = Math.ceil(this.targets()[0].textContent);
        }
    });
});
```

---

## 6. CIRCLES EXPANDING ANIMATION

### **HTML Structure:**
```html
<div class="circles-expand-section">
  <svg class="circles-wrapper">
    <circle class="circle-outer" r="250"/>
    <circle class="circle-middle" r="180"/>
    <circle class="circle-inner" r="100"/>
  </svg>
</div>
```

### **CSS:**
```css
.circles-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
}

.circles-expand-section {
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 100% 100%, #dd23bb40, #0000 40%), 
              radial-gradient(circle at 0 100%, #2d62ff4d, #0000 60%);
}
```

### **GSAP Animation:**
```javascript
gsap.to(".circle-outer", {
    scrollTrigger: {
        trigger: ".circles-expand-section",
        start: "top center",
        end: "center center",
        scrub: 1
    },
    scale: 1.2,
    opacity: 1,
    duration: 1
});

gsap.to(".circle-middle", {
    scrollTrigger: {
        trigger: ".circles-expand-section",
        start: "top center",
        end: "center center",
        scrub: 1
    },
    scale: 1.15,
    opacity: 0.8,
    duration: 1
});

gsap.to(".circle-inner", {
    scrollTrigger: {
        trigger: ".circles-expand-section",
        start: "top center",
        end: "center center",
        scrub: 1
    },
    scale: 1.1,
    opacity: 0.6,
    duration: 1
});
```

---

## 7. TEXT REVEAL ANIMATION

### **Location:** "BOOST YOUR MARKETING STRATEGY TODAY" section

### **HTML Structure:**
```html
<div class="boost-section">
  <div class="boost-text-wrapper">
    <h1 class="boost-heading">Boost Your</h1>
    <h1 class="boost-heading">Marketing</h1>
    <h1 class="boost-heading">Marketing</h1>
    <h1 class="boost-heading">Strategy Today</h1>
  </div>
</div>
```

### **GSAP + SplitText Animation:**
```javascript
gsap.registerPlugin(SplitText);

const split = new SplitText(".boost-heading", { type: "words" });

gsap.from(split.words, {
    scrollTrigger: {
        trigger: ".boost-section",
        start: "top 60%",
        once: true
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
});
```

---

## 8. LATERAL TEXT SCROLLING

### **Location:** Multiple "MARKETING" lines in CTA section

### **HTML Structure:**
```html
<div class="scrolling-text-section">
  <h2 class="marketing-text">MARKETING</h2>
  <h2 class="marketing-text">MARKETING</h2>
  <h2 class="marketing-text">MARKETING</h2>
  <!-- Repeated 8+ times -->
</div>
```

### **GSAP Animation:**
```javascript
gsap.to(".marketing-text", {
    scrollTrigger: {
        trigger: ".scrolling-text-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
    },
    x: -200,
    stagger: -0.2,
    ease: "none"
});
```

---

## 9. FOOTER LOGO ANIMATION

### **HTML Structure:**
```html
<footer>
  <div class="footer-logo-wrap">
    <img class="footer-logo" src="growik-logo.svg" alt="Growik"/>
  </div>
</footer>
```

### **CSS:**
```css
.footer-logo {
  height: 12rem;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.footer-logo-wrap {
  width: 100%;
  margin-bottom: 6rem;
}
```

### **GSAP Animation:**
```javascript
// Scroll-in effect
gsap.from(".footer-logo", {
    scrollTrigger: {
        trigger: ".footer-logo-wrap",
        start: "top 80%",
        once: true
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out"
});

// Hover effect
document.querySelector(".footer-logo").addEventListener("mouseenter", function() {
    gsap.to(this, {
        scale: 1.1,
        rotation: 2,
        duration: 0.3
    });
});

document.querySelector(".footer-logo").addEventListener("mouseleave", function() {
    gsap.to(this, {
        scale: 1,
        rotation: 0,
        duration: 0.3
    });
});
```

---

## 10. STACKING CARDS (NOT YET IMPLEMENTED)

### **Location:** Services section

### **Target:** `.service-wrapper` (4 cards)

### **Animation:** Cards pin at top and stack, previous cards scale down

### **GSAP Code (To Implement):**
```javascript
const cards = gsap.utils.toArray('.service-wrapper');

cards.forEach((card, index) => {
    // Pin each card
    ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true,
        pinSpacing: false,
        endTrigger: cards[cards.length - 1],
        end: "bottom bottom"
    });
    
    // Scale down previous cards
    if (index > 0) {
        gsap.to(cards[index - 1], {
            scale: 0.95 - (index * 0.025),
            opacity: 1 - (index * 0.1),
            scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "top top",
                scrub: true
            }
        });
    }
});
```

---

## 11. NUMBER ROLLING (NOT YET IMPLEMENTED)

### **Location:** Service card bottom right

### **Target:** `.roll-number-item`

### **Animation:** Vertical roll showing 00→01→02→03→04

### **HTML Structure (Needed):**
```html
<div class="roll-number-wrapper">
  <div class="roll-number-track">
    <div class="roll-number-item">00</div>
    <div class="roll-number-item">01</div>
    <div class="roll-number-item">02</div>
    <div class="roll-number-item">03</div>
    <div class="roll-number-item">04</div>
  </div>
</div>
```

### **GSAP Code (To Implement):**
```javascript
const cards = document.querySelectorAll('.service-wrapper');

cards.forEach((card, index) => {
    gsap.to(card.querySelector('.roll-number-track'), {
        y: `-${index * 100}%`,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: card,
            start: "top center",
            once: true
        }
    });
});
```

---

## 📊 ANIMATION SUMMARY TABLE

| # | Animation | Tool | Type | Trigger | Status |
|---|-----------|------|------|---------|--------|
| 1 | 3D Cubic Text (Hero) | GSAP + CSS | 3D rotation | Continuous | ✅ Implemented |
| 2 | 3D Cubic Text (Sections) | GSAP + CSS | 3D rotation | Scroll (scrub) | ✅ Implemented |
| 3 | Hero Marquee | GSAP | Horizontal scroll | Continuous | ✅ Implemented |
| 4 | Brand Marquee | GSAP | Horizontal scroll | Continuous | ✅ Implemented |
| 5 | Service Marquees | GSAP | Horizontal scroll | Scroll (scrub) | ✅ Implemented |
| 6 | Scroll Down Button | GSAP | Rotation + bounce | Continuous + scroll | ⚠️ Partial |
| 7 | Counter Numbers | GSAP | Count-up | Scroll-in-view | ❌ Not implemented |
| 8 | Expanding Circles | GSAP + SVG | Scale + opacity | Scroll (scrub) | ❌ Not implemented |
| 9 | Text Reveal | GSAP + SplitText | Staggered reveal | Scroll-in-view | ❌ Not implemented |
| 10 | Lateral Text | GSAP | Horizontal parallax | Scroll (scrub) | ❌ Not implemented |
| 11 | Footer Logo | GSAP + CSS | Fade + hover | Scroll + hover | ❌ Not implemented |
| 12 | Stacking Cards | GSAP + ScrollTrigger | Pin + scale | Scroll | ❌ Not implemented |
| 13 | Number Rolling | GSAP | Vertical slide | Scroll-in-view | ❌ Not implemented |
| 14 | Fade-in Cards | GSAP | Opacity + Y | Scroll-in-view | ✅ Implemented |

**Progress: 6/14 animations implemented (43%)**

---

## 🔧 REQUIRED LIBRARIES

```html
<!-- Core GSAP -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>

<!-- ScrollTrigger Plugin -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/ScrollTrigger.min.js"></script>

<!-- SplitText Plugin (Premium - requires license) -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/SplitText.min.js"></script>
```

---

## 📝 IMPLEMENTATION NOTES

### **Content Security Policy Issue:**
The exported HTML has CSP that blocks external scripts. Solution: Embed GSAP locally in the HTML.

### **Missing Elements:**
Some animations require HTML structure that doesn't exist in the export. These need to be added manually.

### **Webflow IX2:**
Some animations on the live site use Webflow's proprietary IX2 engine, which doesn't export. These need to be recreated with GSAP.

### **SplitText Plugin:**
This is a premium GSAP plugin. For text reveal animations, either:
1. Purchase GSAP Club GreenSock license
2. Use alternative text splitting library
3. Manually split text with JavaScript

---

## 🎯 NEXT STEPS

1. ✅ 3D cubic text - DONE
2. ✅ Marquees - DONE
3. ⚠️ Scroll button - ADD speed-up effect
4. ❌ Counter numbers - IMPLEMENT
5. ❌ Expanding circles - IMPLEMENT
6. ❌ Text reveal - IMPLEMENT (need SplitText)
7. ❌ Stacking cards - IMPLEMENT (complex)
8. ❌ Number rolling - IMPLEMENT

---

**End of Complete Animation Reference**
