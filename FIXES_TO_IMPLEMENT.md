# Growik Template - Fixes to Implement

## Issue Analysis

### ✅ CONFIRMED: All 4 faces exist in HTML
```json
{
  "faces": [
    { "className": "_3d-title-front", "textContent": "Services", "transform": "translate3d(0, 0, 80px)" },
    { "className": "_3d-title-back", "textContent": "Services", "transform": "rotateX(180deg) translate3d(0, 0, -80px)" },
    { "className": "_3d-title-top", "textContent": "Services", "transform": "rotateX(90deg) translate3d(0, -80px, 0)" },
    { "className": "_3d-title-bottom", "textContent": "Services", "transform": "rotateX(-90deg) translate3d(0, 80px, 0)" }
  ]
}
```

**The HTML structure is correct - the issue is the CSS/animation!**

---

## Fixes Required

### 1. Hero 3D Rotation (Line 1)
**Issue:** Easing is wrong (should be linear), speed too slow  
**Current:** `duration: 8, ease: "none"` but still easing  
**Fix:** Change to `duration: 4, ease: "linear"` and ensure continuous rotation

```javascript
gsap.to('._3d-text-box', {
    rotateX: 360,
    duration: 4,  // Faster
    repeat: -1,
    ease: "none"  // Linear, no easing
});
```

---

### 2. Hero Line 2 - Infinite Marquee with Videos
**Issue:** Not implemented as infinite scroll  
**Videos:** 
- `video-shape-2-transcode.mp4` (between phrases)
- Need to create marquee structure

**Fix:** Create infinite scrolling marquee with video shapes

```html
<div class="marquee-wrapper">
    <div class="marquee-content">
        <span>MADE SIMPLE</span>
        <video autoplay loop muted playsinline>
            <source src="assets/videos/video-shape-2-transcode.mp4" type="video/mp4">
        </video>
        <span>THAT WORKS</span>
        <video autoplay loop muted playsinline>
            <source src="assets/videos/video-shape-2-transcode.mp4" type="video/mp4">
        </video>
        <!-- Duplicate for seamless loop -->
    </div>
</div>
```

```javascript
gsap.to('.marquee-content', {
    x: '-50%',
    duration: 15,
    repeat: -1,
    ease: 'none'
});
```

---

### 3. Scroll Down Button - Group Animation
**Issue:** Shape, circle text, and arrow animate independently  
**Fix:** Group them and animate as one unit

```javascript
// Group all elements
const scrollButton = {
    container: document.querySelector('.scroll-down-wrapper'),
    shape: document.querySelector('.scroll-down-image'),
    circleText: document.querySelector('.circular-text'),
    arrow: document.querySelector('.arrow-video')
};

// Animate container (moves all together)
gsap.to(scrollButton.container, {
    y: 10,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

// Rotate only circle text
gsap.to(scrollButton.circleText, {
    rotation: 360,
    duration: 8,
    repeat: -1,
    ease: 'none'
});
```

---

### 4. Brand Logos - Infinite Marquee
**Issue:** Not animating  
**Fix:** Apply marquee animation

```javascript
const brandMarquee = document.querySelector('.brand-logos-wrapper');
gsap.to(brandMarquee, {
    x: '-50%',
    duration: 30,
    repeat: -1,
    ease: 'none'
});
```

---

### 5. SERVICES 3D Text - Show All 4 Faces
**Issue:** Only 1 face visible (CSS problem, not HTML)  
**Root Cause:** Missing `transform-style: preserve-3d` or wrong perspective

**Fix:** Ensure proper 3D CSS

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

---

### 6. Service Cards - Videos + Count-Up
**Issue:** Missing videos and count-up animation

**Videos to add:**
- Card 1: `video-shape-02-transcode.mp4`
- Card 2: `video-shape-2-transcode.mp4`
- Card 3: `video-shape-3-transcode.mp4`
- Card 4: (need to identify)

**Count-Up Logic:**
- Card 1: 00 → 01
- Card 2: 00 → 01 → 02
- Card 3: 00 → 01 → 02 → 03
- Card 4: 00 → 01 → 02 → 03 → 04

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
    }, 200); // 200ms per number
}

// Trigger on scroll
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

---

### 7. All Section Titles - 4-Sided 3D
**Sections to fix:**
- ✅ SERVICES (has structure, needs CSS fix)
- ✅ PROJECTS (has structure, needs animation)
- ❌ REVIEWS (needs structure + animation)
- ❌ PACKAGES (needs structure + animation)
- ❌ FAQ (needs structure + animation)

**All should have same structure as SERVICES**

---

## Implementation Priority

1. **HIGH:** Fix SERVICES 3D CSS (critical visual bug)
2. **HIGH:** Hero 3D rotation speed/easing
3. **HIGH:** All section titles 3D animation
4. **MEDIUM:** Hero line 2 infinite marquee with videos
5. **MEDIUM:** Service card count-up animation
6. **MEDIUM:** Brand logos marquee
7. **LOW:** Scroll button grouping
8. **LOW:** Service card videos

---

## Video Asset Mapping

| File Name | Usage |
|-----------|-------|
| `video-shape-02-transcode.mp4` | Service Card 1 |
| `video-shape-2-transcode.mp4` | Hero Line 2 separator, Service Card 2 |
| `video-shape-3-transcode.mp4` | Service Card 3 |

---

## Next Steps

1. Create fixed HTML with proper 3D CSS
2. Update animation script with all fixes
3. Test each animation individually
4. Verify all 4 faces visible on all sections
5. Deploy and test live

