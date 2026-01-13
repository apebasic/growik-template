# Growik Template - Complete Animation Library

## All Animations Documented

Based on user observations and code inspection, here are ALL the animations in the Growik template.

---

## 1. 3D Cubic Text Rotation 🎲

### **Locations:**
- **Hero Section:** Marketing/Strategy/Branding/Consulting (auto-rotating)
- **Section Titles:** Services, Projects, Reviews, Packages, FAQ (scroll-triggered)

### **HTML Structure:**
```html
<div class="_3d-wrapper">
  <div class="_3d-text-block" style="perspective: 5000px;">
    <div class="_3d-text-box" style="transform-style: preserve-3d;">
      <div class="_3d-text-front"><h1>Strategy</h1></div>
      <div class="_3d-text-back"><h2>Marketing</h2></div>
      <div class="_3d-text-top"><h2>Consulting</h2></div>
      <div class="_3d-text-bottom"><h2>Branding</h2></div>
    </div>
  </div>
</div>
```

### **GSAP Code:**
```javascript
// Hero - Auto-rotating
gsap.to("._3d-text-box", {
  rotateX: 360,
  duration: 8,
  repeat: -1,
  ease: "none"
});

// Section titles - Scroll-triggered
gsap.to("._3d-title-box", {
  rotateX: -360,
  z: -100,
  scrollTrigger: {
    trigger: "._3d-title-wrapper",
    start: "top 80%",
    end: "top 30%",
    scrub: 1.5
  }
});
```

---

## 2. Horizontal Marquee Scrolling 📜

### **Locations:**
1. **Hero Section Line 2:** "Made Simple" / "That Works" (alternating)
2. **Brand Logos Section:** Infinite horizontal scroll
3. **Service Names:** "Strategy ✺", "Branding ✺", "Advertising ✺", "Consulting ✺"
4. **CTA Section Bottom:** "Marketing" repeated

### **HTML Structure:**
```html
<div class="scroll-text-wrapper">
  <div class="scroll-text-block">
    <h2 class="scroll-text">Made Simple</h2>
  </div>
  <div class="scroll-text-block">
    <h2 class="scroll-text">That Works</h2>
  </div>
</div>
```

### **GSAP Code:**
```javascript
// Infinite horizontal scroll
gsap.to(".scroll-text-wrapper", {
  x: "-50%",
  duration: 20,
  repeat: -1,
  ease: "none"
});

// Service name marquees (scroll-triggered)
gsap.utils.toArray(".scrolling-text-wrapper").forEach((wrapper) => {
  gsap.to(wrapper.querySelector(".scroll-text-item"), {
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

## 3. Spinning Star/Badge (Scroll Down Button) ⭐

### **Location:**
- Hero section bottom (scroll indicator)

### **Behavior:**
- Continuous rotation
- **Enhancement:** Speed up on scroll (user suggestion)

### **HTML:**
```html
<div class="scroll-down-wrap">
  <img src="star-badge.svg" class="scroll-down-image" />
</div>
```

### **GSAP Code:**
```javascript
// Basic continuous rotation
gsap.to(".scroll-down-image", {
  rotation: 360,
  duration: 4,
  repeat: -1,
  ease: "none"
});

// Enhanced: Speed up on scroll (user suggestion)
let scrollSpeed = 4; // default duration

ScrollTrigger.create({
  trigger: "body",
  start: "top top",
  end: "100px top",
  onUpdate: (self) => {
    // Speed up rotation when scrolling
    const newSpeed = 4 - (self.progress * 3); // 4s to 1s
    gsap.to(".scroll-down-image", {
      duration: newSpeed,
      overwrite: true
    });
  }
});
```

---

## 4. Stacking Cards Animation 🃏

### **Location:**
- Services section (4 cards)

### **Behavior:**
- Cards stack on top of each other as you scroll
- Each card "sticks" until the next one pushes it up

### **HTML:**
```html
<section class="service-wrapper _01">
  <!-- Service 1: Strategy -->
</section>
<section class="service-wrapper _02">
  <!-- Service 2: Branding -->
</section>
<section class="service-wrapper _03">
  <!-- Service 3: Advertising -->
</section>
<section class="service-wrapper _04">
  <!-- Service 4: Consulting -->
</section>
```

### **GSAP Code:**
```javascript
gsap.registerPlugin(ScrollTrigger);

// Stacking cards effect
gsap.utils.toArray(".service-wrapper").forEach((card, index) => {
  ScrollTrigger.create({
    trigger: card,
    start: "top top",
    pin: true,
    pinSpacing: false,
    endTrigger: ".service-component",
    end: "bottom bottom"
  });
  
  // Scale down previous cards
  if (index > 0) {
    gsap.to(`.service-wrapper._0${index}`, {
      scale: 0.95,
      opacity: 0.8,
      scrollTrigger: {
        trigger: `.service-wrapper._0${index + 1}`,
        start: "top bottom",
        end: "top top",
        scrub: true
      }
    });
  }
});
```

---

## 5. Number Scrambling/Rolling Effect 🔢

### **Location:**
- Service cards (bottom right corner)
- Shows: 00 → 01, 00 → 01 → 02, 00 → 01 → 02 → 03, etc.

### **HTML:**
```html
<div class="roll-number-wrap">
  <div class="service-number">0</div>
  <div class="roll-number-item _01">
    <div class="service-number">0</div>
    <div class="service-number">1</div>
  </div>
</div>
```

### **GSAP Code:**
```javascript
// Number rolling animation
gsap.utils.toArray(".service-wrapper").forEach((card, index) => {
  const targetNumber = index + 1;
  
  ScrollTrigger.create({
    trigger: card,
    start: "top center",
    onEnter: () => {
      // Animate to target number
      gsap.to(card.querySelector(".roll-number-item"), {
        y: `-${targetNumber * 100}%`,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  });
});
```

---

## 6. Count-Up Animation (Stats) 📊

### **Location:**
- Stats section (after Projects)
- Numbers: 15+ years, 98% satisfaction, 200+ brands

### **HTML:**
```html
<div class="stat-number">15</div>
<div class="stat-number">98</div>
<div class="stat-number">200</div>
```

### **GSAP Code:**
```javascript
// Count-up animation
gsap.utils.toArray(".stat-number").forEach((stat) => {
  const target = parseInt(stat.textContent);
  
  ScrollTrigger.create({
    trigger: stat,
    start: "top 80%",
    onEnter: () => {
      gsap.from(stat, {
        textContent: 0,
        duration: 2,
        ease: "power1.out",
        snap: { textContent: 1 },
        onUpdate: function() {
          stat.textContent = Math.ceil(this.targets()[0].textContent);
        }
      });
    }
  });
});
```

---

## 7. Expanding Circles Animation ⭕

### **Location:**
- CTA section (with "Boost Your Marketing Strategy Today")

### **Behavior:**
- Circles expand from center on scroll
- Alternating orange and black circles
- Scale up effect

### **HTML:**
```html
<div class="cta-shape-wrapper">
  <div class="shape-wrapper">
    <!-- Circle shapes -->
  </div>
</div>
```

### **GSAP Code:**
```javascript
// Expanding circles on scroll
gsap.utils.toArray(".shape-wrapper").forEach((shape, index) => {
  const isOrange = index % 2 === 0;
  
  gsap.from(shape, {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".section-cta",
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onUpdate: (self) => {
        // Expand on scroll
        const progress = self.progress;
        gsap.to(shape, {
          scale: 1 + (progress * 0.5),
          duration: 0.1
        });
      }
    }
  });
});
```

---

## 8. Fade In on Scroll (General) 🌟

### **Locations:**
- Case study cards
- Testimonial cards
- Buttons
- Text blocks

### **GSAP Code:**
```javascript
// General fade-in animation
gsap.utils.toArray(".case-study-wrapper, .testimonial-content-wrap").forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    scrollTrigger: {
      trigger: element,
      start: "top 80%"
    }
  });
});
```

---

## Complete Implementation Script

### **Full GSAP Setup:**

```javascript
// Load GSAP and plugins
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Hero 3D text rotation
  gsap.to(".hero-section ._3d-text-box", {
    rotateX: 360,
    duration: 8,
    repeat: -1,
    ease: "none"
  });
  
  // 2. Section title 3D rotations
  gsap.utils.toArray("._3d-title-box").forEach((box) => {
    gsap.to(box, {
      rotateX: -360,
      z: -100,
      scrollTrigger: {
        trigger: box.closest("._3d-title-wrapper"),
        start: "top 80%",
        end: "top 30%",
        scrub: 1.5
      }
    });
  });
  
  // 3. Horizontal marquees
  gsap.to(".scroll-text-wrapper", {
    x: "-50%",
    duration: 20,
    repeat: -1,
    ease: "none"
  });
  
  gsap.utils.toArray(".scrolling-text-wrapper").forEach((wrapper) => {
    gsap.to(wrapper.querySelector(".scroll-text-item"), {
      x: "-50%",
      scrollTrigger: {
        trigger: wrapper,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
  });
  
  // 4. Spinning star
  gsap.to(".scroll-down-image", {
    rotation: 360,
    duration: 4,
    repeat: -1,
    ease: "none"
  });
  
  // 5. Stacking cards
  gsap.utils.toArray(".service-wrapper").forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      start: "top top",
      pin: true,
      pinSpacing: false,
      endTrigger: ".service-component",
      end: "bottom bottom"
    });
    
    if (index > 0) {
      gsap.to(`.service-wrapper._0${index}`, {
        scale: 0.95,
        opacity: 0.8,
        scrollTrigger: {
          trigger: `.service-wrapper._0${index + 1}`,
          start: "top bottom",
          end: "top top",
          scrub: true
        }
      });
    }
  });
  
  // 6. Number rolling
  gsap.utils.toArray(".service-wrapper").forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      start: "top center",
      onEnter: () => {
        gsap.to(card.querySelector(".roll-number-item"), {
          y: `-${(index + 1) * 100}%`,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    });
  });
  
  // 7. Count-up stats
  gsap.utils.toArray(".stat-number").forEach((stat) => {
    const target = parseInt(stat.textContent);
    ScrollTrigger.create({
      trigger: stat,
      start: "top 80%",
      onEnter: () => {
        gsap.from(stat, {
          textContent: 0,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 }
        });
      }
    });
  });
  
  // 8. Expanding circles
  gsap.utils.toArray(".shape-wrapper").forEach((shape, index) => {
    gsap.from(shape, {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".section-cta",
        start: "top center",
        scrub: 1
      }
    });
  });
  
  // 9. General fade-ins
  gsap.utils.toArray(".case-study-wrapper, .testimonial-content-wrap").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: el,
        start: "top 80%"
      }
    });
  });
  
});
```

---

## Required Libraries

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/ScrollTrigger.min.js"></script>
```

---

## Animation Summary

| Animation | Location | Type | Trigger |
|-----------|----------|------|---------|
| 3D Cubic Text | Hero + Sections | Rotation | Auto + Scroll |
| Horizontal Marquee | Hero + Services + CTA | Translation | Auto + Scroll |
| Spinning Star | Hero Bottom | Rotation | Auto |
| Stacking Cards | Services | Pin + Scale | Scroll |
| Number Rolling | Service Cards | Translation | Scroll |
| Count-Up | Stats | Number | Scroll |
| Expanding Circles | CTA | Scale | Scroll |
| Fade In | Cards/Text | Opacity + Y | Scroll |

---

## Notes

- All animations use GPU-accelerated properties (transform, opacity)
- ScrollTrigger `scrub` creates smooth scroll-linked animations
- `preserve-3d` is essential for 3D text effects
- Marquees use duplicated content for seamless loops
- Stacking cards use `pin: true` with `pinSpacing: false`
