# GROWIK TEMPLATE - MASTER ANIMATION REFERENCE
## Complete Guide: All Animations, Videos, CSS Classes & Implementation

**Source:** Combined analysis from Claude + Manus  
**Date:** January 13, 2026  
**Status:** Complete Documentation

---

## 📋 TABLE OF CONTENTS

1. [Hero Section](#1-hero-section)
2. [Hero Marquee Separator Shapes](#2-hero-marquee-separator-shapes)
3. [Services Section](#3-services-section)
4. [Statistics Section](#4-statistics-section)
5. [Packages/Pricing Section](#5-packagespricing-section)
6. [Transition Section](#6-transition-section)
7. [Footer](#7-footer)
8. [Video Assets Reference](#video-assets-reference)
9. [Animation Classes Quick Reference](#animation-classes-quick-reference)
10. [Implementation Checklist](#implementation-checklist)

---

## 1. HERO SECTION

### A. 3D Rotating Words (Line 1)

**Purpose:** Rotating text showing different service words  
**Words:** MARKETING → STRATEGY → CONSULTING → BRANDING

**CSS Classes:**
- `.roll-number-wrap` - Container (height: 8rem; overflow: hidden)
- `.roll-number-item` - Individual word elements
- `._3d-text-box` - 3D transform container

**Animation:**
```javascript
gsap.to('._3d-text-box', {
    rotateX: 360,
    duration: 4,  // User requested: less than 8s, linear
    repeat: -1,
    ease: "none"  // Linear, no easing
});
```

**Key Requirements:**
- ✅ Speed: 4 seconds (reduced from 8s)
- ✅ Easing: Linear (no acceleration/deceleration)
- ✅ Direction: Counter to scroll (emphasizes movement)

---

### B. Marquee Scroll (Line 2: "Made Simple / That Works")

**Purpose:** Infinite horizontal scrolling text with video separators

**CSS Classes:**
- `.scroll-text-wrapper` - Main container
- `.scroll-text-block` - Text block
- `.heading-style-h1-large` - Text styling

**Structure:**
```html
<div class="scroll-text-wrapper">
    <div class="scroll-text-block">
        <span>MADE SIMPLE</span>
        <div class="shape-wrapper">
            <video autoplay loop muted playsinline>
                <source src="assets/videos/video-shape-02-transcode.mp4">
            </video>
        </div>
        <span>THAT WORKS</span>
        <div class="shape-wrapper">
            <video autoplay loop muted playsinline>
                <source src="assets/videos/video-shape-2-transcode.mp4">
            </video>
        </div>
        <!-- Duplicate for seamless loop -->
    </div>
</div>
```

**Animation:**
```javascript
gsap.to('.scroll-text-wrapper', {
    x: "-50%",
    duration: 20,
    repeat: -1,
    ease: "none"
});
```

**Videos Between Phrases:** 4 shape wrappers with rotating icon videos

---

### C. Scroll Down Button

**Purpose:** Bouncing button with rotating circular text and arrow video

**CSS Classes:**
- `.scroll-down-wrap` - Main container
- `.scroll-down-link` - Clickable wrapper
- `.circular-text` - Rotating "SCROLL DOWN" text
- `.arrow-video` - Center arrow video
- `.scroll-down-block` - Video container

**Video Asset:**
- `690ccf02ab886dcdba89c25a_arrow-video-transcode.mp4`

**Animation:**
```javascript
// Group animation (all elements move together)
gsap.to('.scroll-down-link', {
    y: 10,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// Rotate circular text independently
gsap.to('.circular-text', {
    rotation: 360,
    duration: 8,
    repeat: -1,
    ease: "none"
});

// Speed up on scroll (user enhancement request)
ScrollTrigger.create({
    trigger: '.hero-section',
    start: 'top top',
    end: 'bottom top',
    onUpdate: (self) => {
        const speedMultiplier = 1 + (self.progress * 2);
        gsap.to('.circular-text', {
            timeScale: speedMultiplier,
            duration: 0.3
        });
    }
});
```

**Key Requirements:**
- ✅ Shape, text, and arrow move together as one unit
- ✅ Circular text rotates independently
- ⚠️ Enhancement: Speed up rotation on scroll

---

## 2. HERO MARQUEE SEPARATOR SHAPES

**Purpose:** Video shapes between marquee text phrases

**CSS:**
```css
.shape-wrapper {
    width: 15rem;
    height: 10rem;
    border-radius: 1000px;
    overflow: hidden;
    position: relative;
}

.video-wrapper {
    z-index: 2;
    width: 100%;
    height: 100%;
}
```

**Video Assets (4 shapes):**

| # | Filename | Local Path | Usage |
|---|----------|------------|-------|
| 1 | `video-shape-02-transcode.mp4` | `assets/videos/68f0dccd7b73932b134cae91_690c8d1baaa5b860bd73bf00_video-shape-02-transcode.mp4` | Hero separator 1 |
| 2 | `video-shape-2-transcode.mp4` | `assets/videos/68f0dccd7b73932b134cae91_690c901876e40dd190b13f07_video-shape-2-transcode.mp4` | Hero separator 2 |
| 3 | `video-shape-3-transcode.mp4` | `assets/videos/68f0dccd7b73932b134cae91_690c91bf2c1fc5732e9d0171_video-shape-3-transcode.mp4` | Hero separator 3 |
| 4 | `video-shape-4-transcode.mp4` | ❌ **MISSING - Need to download** | Hero separator 4 |

**Status:** ✅ 3/4 videos available, ❌ Shape-4 needs download

---

## 3. SERVICES SECTION

### A. Section Title - 3D Rotating "SERVICES"

**CSS Classes:**
- `._3d-title-box` - Container
- `._3d-title-front` - Front face
- `._3d-title-back` - Back face
- `._3d-title-top` - Top face
- `._3d-title-bottom` - Bottom face

**Critical CSS:**
```css
._3d-title-box {
    transform-style: preserve-3d;
    perspective: 5000px;
}

._3d-title-front { transform: translateZ(80px); }
._3d-title-back { transform: rotateX(180deg) translateZ(80px); }
._3d-title-top { transform: rotateX(90deg) translateZ(80px); }
._3d-title-bottom { transform: rotateX(-90deg) translateZ(80px); }
```

**Animation:**
```javascript
gsap.to('._3d-title-box', {
    rotateX: -360,
    scrollTrigger: {
        trigger: '.services-section',
        start: "top 80%",
        end: "top 20%",
        scrub: 1.5
    }
});
```

**User Issue:** Only 1 face visible instead of 4  
**Fix Applied:** Added `transform-style: preserve-3d` via JavaScript  
**Status:** ⚠️ NEEDS USER TESTING

---

### B. Card Count-Up Numbers

**Purpose:** Animated rolling numbers (00→01, 00→01→02, etc.)

**CSS Classes:**
- `.roll-number-wrap` - Container (overflow: hidden; height: 8rem)
- `.roll-number-item` - Individual number elements
- `.service-number` - Target element for animation

**Logic:**
- Card 1: 00 → 01
- Card 2: 00 → 01 → 02
- Card 3: 00 → 01 → 02 → 03
- Card 4: 00 → 01 → 02 → 03 → 04

**Animation:**
```javascript
function animateCounter(element, targetNumber) {
    const numbers = Array.from({length: targetNumber + 1}, (_, i) => 
        String(i).padStart(2, '0')
    );
    
    let currentIndex = 0;
    const interval = setInterval(() => {
        element.textContent = numbers[currentIndex];
        currentIndex++;
        if (currentIndex >= numbers.length) {
            clearInterval(interval);
        }
    }, 150); // 150ms per number
}

// Apply to each card
ScrollTrigger.create({
    trigger: '.service-wrapper._01',
    start: 'top 80%',
    onEnter: () => {
        const counter = document.querySelector('.service-wrapper._01 .service-number');
        animateCounter(counter, 1);
    },
    once: true
});
```

**Status:** ✅ IMPLEMENTED

---

### C. Card Heading Marquee

**Purpose:** Horizontal scrolling service names

**Text:** Strategy ✺, Branding ✺, Advertising ✺, Consulting ✺

**CSS Classes:**
- `.scrolling-text-wrapper` - Container
- `.scroll-text-item` - Scrolling text

**Animation:**
```javascript
const scrollingTexts = document.querySelectorAll('.scrolling-text-wrapper');
scrollingTexts.forEach((wrapper) => {
    const item = wrapper.querySelector('.scroll-text-item');
    gsap.to(item, {
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

**Status:** ✅ IMPLEMENTED

---

### D. Service Card Background Videos

**Purpose:** Animated background videos in each service card

**CSS Classes:**
- `.service-video` - Video element (position: absolute; top: -3rem; left: -3rem)
- `.service-wrapper._01` through `._04` - Card containers

**Video Mapping:**

| Card | Service | Video File | Status |
|------|---------|------------|--------|
| 1 | Strategy | `video-shape-02-transcode.mp4` | ✅ Available |
| 2 | Branding | `video-shape-2-transcode.mp4` | ✅ Available |
| 3 | Advertising | `video-shape-3-transcode.mp4` | ✅ Available |
| 4 | Consulting | `video-shape-4-transcode.mp4` | ❌ Need to download |

**Status:** ⚠️ 3/4 videos available, needs implementation

---

## 4. STATISTICS SECTION

**Purpose:** Count-up animation for statistics

**Numbers:**
- +15 (years of experience)
- 98% (customer satisfaction)
- 200+ (brands partnered)

**CSS Classes:**
- `.stat-number` - Number element

**Animation:**
```javascript
gsap.from('.stat-number', {
    textContent: 0,
    duration: 2.5,
    ease: "power1.out",
    snap: { textContent: 1 },
    scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 80%',
        once: true
    },
    onUpdate: function() {
        this.targets()[0].textContent = Math.ceil(this.targets()[0].textContent);
    }
});
```

**Status:** ❌ TODO

---

## 5. PACKAGES/PRICING SECTION

### A. Section Title - 3D Rotating "PACKAGES"

**Same structure as SERVICES section**

**CSS Classes:**
- `._3d-title-box`
- `._3d-title-front/back/top/bottom`

**Status:** ✅ Structure exists, ⚠️ Animation needs verification

---

### B. Plan Card Background Videos

**Purpose:** Animated backgrounds in pricing cards

**Video Mapping:**

| Plan | Video File | Status |
|------|------------|--------|
| Starter | `video-shape-02-transcode.mp4` | ✅ Available |
| Growth | `video-shape-4-transcode.mp4` | ❌ Need to download |
| Premium | `video-shape-2-transcode.mp4` | ✅ Available |

**CSS Classes:**
- `.plan-video-wrap` - Video container

**Status:** ❌ TODO - Videos need to be added

---

## 6. TRANSITION SECTION (After FAQ)

### A. Expanding Circles

**Purpose:** Circles that scale up on scroll

**CSS Classes:**
- `.circles-wrapper` - Container
- `.circle-element` - Individual circles

**Animation:**
```javascript
gsap.to('.circle-element', {
    scale: 1.5,
    opacity: 0.8,
    scrollTrigger: {
        trigger: '.transition-section',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    }
});
```

**User Description:** "Circles expand from center alternating between orange and black"

**Status:** ❌ TODO

---

### B. Text Reveal ("BOOST YOUR MARKETING STRATEGY TODAY")

**Purpose:** Staggered word reveal animation

**CSS Classes:**
- `.boost-heading` - Main heading

**Animation (Requires SplitText plugin):**
```javascript
const split = new SplitText('.boost-heading', { type: 'words' });

gsap.from(split.words, {
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 0.8,
    scrollTrigger: {
        trigger: '.boost-heading',
        start: 'top 80%',
        once: true
    }
});
```

**Status:** ❌ TODO - Requires SplitText plugin

---

### C. Lateral Text Scrolling

**Purpose:** Multiple "MARKETING" lines scrolling at different speeds

**CSS Classes:**
- `.marketing-text` - Text lines

**Animation:**
```javascript
gsap.utils.toArray('.marketing-text').forEach((text, i) => {
    gsap.to(text, {
        x: (i % 2 === 0) ? '-30%' : '30%',
        scrollTrigger: {
            trigger: text,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
});
```

**Status:** ❌ TODO

---

## 7. FOOTER

### Logo Animation

**Purpose:** Fade-in + hover effects

**CSS Classes:**
- `.footer-logo`

**Animation:**
```javascript
// Fade in on scroll
gsap.from('.footer-logo', {
    opacity: 0,
    y: 30,
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%',
        once: true
    }
});

// Hover effect
document.querySelector('.footer-logo').addEventListener('mouseenter', () => {
    gsap.to('.footer-logo', {
        scale: 1.1,
        rotation: 2,
        duration: 0.3
    });
});

document.querySelector('.footer-logo').addEventListener('mouseleave', () => {
    gsap.to('.footer-logo', {
        scale: 1,
        rotation: 0,
        duration: 0.3
    });
});
```

**Status:** ❌ TODO

---

## VIDEO ASSETS REFERENCE

### Complete List (5 Total)

| # | Filename | Local Path | Usage | Status |
|---|----------|------------|-------|--------|
| 1 | `video-shape-02-transcode.mp4` | `assets/videos/68f0dccd7b73932b134cae91_690c8d1baaa5b860bd73bf00_video-shape-02-transcode.mp4` | Hero marquee, Service card 1, Pricing Starter | ✅ Available |
| 2 | `video-shape-2-transcode.mp4` | `assets/videos/68f0dccd7b73932b134cae91_690c901876e40dd190b13f07_video-shape-2-transcode.mp4` | Hero marquee, Service card 2, Pricing Premium | ✅ Available |
| 3 | `video-shape-3-transcode.mp4` | `assets/videos/68f0dccd7b73932b134cae91_690c91bf2c1fc5732e9d0171_video-shape-3-transcode.mp4` | Hero marquee, Service card 3 | ✅ Available |
| 4 | `video-shape-4-transcode.mp4` | ❌ **NEED TO DOWNLOAD** | Hero marquee, Service card 4, Pricing Growth | ❌ Missing |
| 5 | `arrow-video-transcode.mp4` | ❌ **NEED TO DOWNLOAD** | Scroll down button | ❌ Missing |

**CDN URLs:**
```
Shape-02: https://cdn.prod.website-files.com/68f0dccd7b73932b134cae91/690c8d1baaa5b860bd73bf00_video-shape-02-transcode.mp4
Shape-2:  https://cdn.prod.website-files.com/68f0dccd7b73932b134cae91/690c901876e40dd190b13f07_video-shape-2-transcode.mp4
Shape-3:  https://cdn.prod.website-files.com/68f0dccd7b73932b134cae91/690c91bf2c1fc5732e9d0171_video-shape-3-transcode.mp4
Shape-4:  https://cdn.prod.website-files.com/68f0dccd7b73932b134cae91/690c9284f188dad16718ff0e_video-shape-4-transcode.mp4
Arrow:    https://cdn.prod.website-files.com/68f0dccd7b73932b134cae91/690ccf02ab886dcdba89c25a_arrow-video-transcode.mp4
```

**All videos:** Autoplay, Loop, Muted, Playsinline

---

## ANIMATION CLASSES QUICK REFERENCE

| Animation | CSS Class | GSAP Plugin | Trigger | Status |
|-----------|-----------|-------------|---------|--------|
| 3D Flip Words | `.roll-number-wrap` | ScrollTrigger | On scroll | ✅ Implemented |
| Marquee Scroll | `.scroll-text-wrapper` | ScrollTrigger | Continuous | ✅ Implemented |
| Scroll Arrow | `.arrow-video` | ScrollTrigger | Continuous bounce | ✅ Implemented |
| Card Numbers | `.roll-number-item` | ScrollTrigger + Transform | On scroll-in-view | ✅ Implemented |
| Count-Up Stats | `.stat-number` | ScrollTrigger + textContent | On scroll-in-view | ❌ TODO |
| Circles Expand | `.circles-wrapper` | ScrollTrigger (scrub) | On scroll | ❌ TODO |
| Text Reveal | `.boost-heading` | SplitText + ScrollTrigger | On scroll-in-view | ❌ TODO |
| Lateral Text | `.marketing-text` | ScrollTrigger (scrub) | On scroll | ❌ TODO |
| 3D Section Titles | `._3d-title-box` | ScrollTrigger | On scroll | ⚠️ Needs testing |
| Footer Logo | `.footer-logo` | Basic GSAP | On scroll + hover | ❌ TODO |

---

## IMPLEMENTATION CHECKLIST

### ✅ COMPLETED (7/14 - 50%)
- [x] Hero 3D text rotation (4s, linear)
- [x] Section titles 3D rotation (5 sections)
- [x] Brand logos marquee
- [x] Hero marquees (2)
- [x] Service scrolling text (4)
- [x] Service card counters
- [x] Scroll button grouped animation

### ⚠️ NEEDS TESTING (1/14)
- [ ] SERVICES 3D text (all 4 faces visible?)

### ❌ TODO - HIGH PRIORITY (3/14)
- [ ] Hero line 2 infinite marquee with video shapes
- [ ] Service card background videos
- [ ] Download missing videos (Shape-4, Arrow)

### ❌ TODO - MEDIUM PRIORITY (3/14)
- [ ] Statistics count-up animation
- [ ] Pricing card background videos
- [ ] Expanding circles animation

### ❌ TODO - LOW PRIORITY (2/14)
- [ ] Text reveal with SplitText
- [ ] Lateral text scrolling
- [ ] Footer logo animation

---

## CRITICAL ISSUES TO RESOLVE

1. **SERVICES 3D Text** - User reports only 1 face visible
   - Fix applied: Added `transform-style: preserve-3d` via JS
   - Status: Awaiting user confirmation

2. **Missing Video Assets** - Need to download:
   - `video-shape-4-transcode.mp4`
   - `arrow-video-transcode.mp4`

3. **Hero Line 2 Marquee** - Not yet implemented with video shapes

---

**End of Master Reference**
