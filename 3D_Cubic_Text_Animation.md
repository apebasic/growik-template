# 3D Cubic Text Animation - Detailed Analysis

## Structure Discovered

The 3D cubic text effect uses a **4-sided cube** with text on each face. Here's the HTML structure:

### **HTML Structure**

```html
<div class="_3d-wrapper">
  <div class="_3d-text-block" style="perspective: 5000px;">
    <div class="_3d-text-box" style="transform-style: preserve-3d;">
      
      <!-- Front face -->
      <div class="_3d-text-front" style="transform-style: preserve-3d;">
        <h1 class="_3d-block-text">Strategy</h1>
      </div>
      
      <!-- Back face (rotated 180deg) -->
      <div class="_3d-text-back" style="transform-style: preserve-3d;">
        <h2 class="_3d-block-text">Marketing</h2>
      </div>
      
      <!-- Top face (rotated 90deg up) -->
      <div class="_3d-text-top" style="transform-style: preserve-3d;">
        <h2 class="_3d-block-text">Consulting</h2>
      </div>
      
      <!-- Bottom face (rotated 90deg down) -->
      <div class="_3d-text-bottom" style="transform-style: preserve-3d;">
        <h2 class="_3d-block-text">Branding</h2>
      </div>
      
    </div>
  </div>
</div>
```

---

## CSS Transform Values (from extracted styles)

### **From extracted_styles.css:**

```css
._3d-text-block {
  perspective: 5000px;
  transform-style: flat;
}

._3d-text-box {
  transform-style: preserve-3d;
}

._3d-text-front {
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 5rem);
}

._3d-text-back {
  transform-style: preserve-3d;
  transform: translate3d(0, 0, -7rem) rotateX(180deg) rotateY(0) rotateZ(0);
}

._3d-text-top {
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 5rem);
}

._3d-text-bottom {
  transform-style: preserve-3d;
  transform: translate(0, -5rem) rotateX(90deg) rotateY(0) rotateZ(0);
}
```

---

## Animation Behavior

### **Hero Section (Auto-rotating)**
- **Words:** Strategy → Marketing → Consulting → Branding
- **Animation:** Continuous rotation on X-axis
- **Trigger:** On page load (automatic)

### **Section Titles (Scroll-triggered)**
Found on these sections:
1. **Services** - rotates as you scroll down
2. **Projects** - rotates as you scroll down  
3. **Reviews** - rotates as you scroll down
4. **Packages** - rotates as you scroll down
5. **FAQ** - rotates as you scroll down

**Current transform state (when scrolled):**
```
transform: translate3d(0px, 0px, -100vw) scale3d(1, 1, 1) 
           rotateX(-360deg) rotateY(0deg) rotateZ(0deg)
```

---

## GSAP Animation Code

### **Pattern 1: Auto-Rotating (Hero Section)**

```javascript
// Continuous rotation for hero text
gsap.to("._3d-text-box", {
  rotateX: 360,
  duration: 8,
  repeat: -1,
  ease: "none"
});
```

### **Pattern 2: Scroll-Triggered Rotation**

```javascript
// Rotate on scroll (section titles)
gsap.to("._3d-title-box", {
  rotateX: -360,
  z: -100, // Move back in 3D space
  scrollTrigger: {
    trigger: "._3d-title-wrapper",
    start: "top bottom",
    end: "top center",
    scrub: 1, // Smooth scrubbing
  }
});
```

### **Complete Implementation:**

```javascript
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero section - auto-rotating words
const heroBox = document.querySelector('.hero-section ._3d-text-box');
if (heroBox) {
  gsap.to(heroBox, {
    rotateX: 360,
    duration: 8,
    repeat: -1,
    ease: "none"
  });
}

// Section titles - scroll-triggered rotation
const titleBoxes = gsap.utils.toArray('._3d-title-box');
titleBoxes.forEach((box) => {
  gsap.to(box, {
    rotateX: -360,
    z: -100,
    scrollTrigger: {
      trigger: box.closest('._3d-title-wrapper'),
      start: "top 80%",
      end: "top 30%",
      scrub: 1.5,
      // markers: true // Uncomment for debugging
    }
  });
});
```

---

## Key CSS Requirements

```css
/* Parent container needs perspective */
._3d-text-block,
._3d-title-block {
  perspective: 5000px;
}

/* Cube container needs preserve-3d */
._3d-text-box,
._3d-title-box {
  transform-style: preserve-3d;
}

/* Each face needs preserve-3d */
._3d-text-front,
._3d-text-back,
._3d-text-top,
._3d-text-bottom,
._3d-title-front,
._3d-title-back,
._3d-title-top,
._3d-title-bottom {
  transform-style: preserve-3d;
  position: absolute;
}
```

---

## Sections Using This Effect

### **Hero Section:**
- Class: `._3d-wrapper` (first one)
- Words: Strategy, Marketing, Consulting, Branding
- Behavior: Auto-rotate continuously

### **Services Section:**
- Class: `._3d-title-wrapper` (Services)
- Behavior: Rotate on scroll

### **Projects Section:**
- Class: `._3d-title-wrapper` (Projects)
- Behavior: Rotate on scroll

### **Reviews Section:**
- Class: `._3d-title-wrapper` (Reviews)
- Behavior: Rotate on scroll

### **Packages Section:**
- Class: `._3d-title-wrapper` (Packages)
- Behavior: Rotate on scroll

### **FAQ Section:**
- Class: `._3d-title-wrapper` (FAQ)
- Behavior: Rotate on scroll

---

## Notes

- The rotation is **counter to scroll direction** (rotateX: -360deg) which creates the illusion of the text "rolling" up the page
- Uses `translate3d(0, 0, -100vw)` to push the element back in 3D space as it rotates
- `scrub: 1.5` creates smooth, linked scrolling animation
- Perspective of 5000px creates subtle 3D depth
- Each face is positioned using `translate3d()` and `rotateX()` transforms
