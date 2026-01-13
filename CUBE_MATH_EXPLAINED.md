# 3D Cube Animation - Complete Math Explanation (From Claude)

## THE MAGIC: HOW THE CUBE EDGES CONNECT

### Container Setup:
```css
._3d-text-block {
  width: 60rem;
  height: 12rem;      /* KEY: This defines the "box height" */
  perspective: 5000px;
}

._3d-text-box {
  transform-style: preserve-3d;  /* KEY: Preserves 3D perspective for children */
  width: 100%;
  height: 100%;
}
```

### THE 4 FACES & THEIR POSITIONS:

```css
/* FACE 1: FRONT ("Strategy") */
._3d-text-front {
  width: 55rem;
  height: 12rem;
  transform: translate3d(0, 0, 6rem);  /* 6rem forward on Z-axis */
}

/* FACE 2: BACK ("Marketing") */
._3d-text-back {
  width: 55rem;
  height: 12rem;
  transform: translate3d(0, 0, -6rem) rotateX(180deg);  /* 6rem backward + flip */
}

/* FACE 3: TOP ("Consulting") */
._3d-text-top {
  width: 55rem;
  height: 12rem;
  transform: translate(0, -6rem) rotateX(90deg);  /* 6rem UP + tilt 90° */
}

/* FACE 4: BOTTOM ("Branding") */
._3d-text-bottom {
  width: 55rem;
  height: 12rem;
  transform: translate(0, 6rem) rotateX(-90deg);  /* 6rem DOWN + tilt -90° */
}
```

---

## **HOW THE EDGES CONNECT:**

The **key measurement is `12rem`** (the container height):

1. **FRONT face:** At `Z = 6rem`, positioned at origin
2. **BACK face:** At `Z = -6rem`, flipped 180° (so text faces backward)
3. **TOP face:** Shifted up by `6rem` (half the cube depth) AND rotated 90° forward
4. **BOTTOM face:** Shifted down by `6rem` AND rotated -90° backward

### **The math that makes edges connect:**
- Container height = `12rem`
- Each face is pushed/rotated by exactly `6rem` (half the height)
- Front face top edge at Y=0 connects to Top face near-edge
- Front face bottom edge at Y=12rem connects to Bottom face far-edge
- Same for Back face edges

### **Visual representation:**
```
         TOP (rotateX 90°)
         translate(0, -6rem)
              |
BACK ---- FRONT ---- 
(180°)   (Z: 6rem)
              |
        BOTTOM (rotateX -90°)
        translate(0, 6rem)
```

**Distance between Front-Top edge: 6rem (perfect fit)**
**Distance between Front-Bottom edge: 6rem (perfect fit)**

---

## THE ROTATION ANIMATION:

```css
._3d-text-box {
  animation: rotateX(0deg) → rotateX(90deg) → rotateX(180deg) → rotateX(270deg) → rotateX(360deg);
}
```

### What happens at each rotation step:

- **0°** → FRONT face visible (Strategy)
- **90°** → TOP face comes into view (Consulting)
- **180°** → BACK face visible (Marketing)
- **270°** → BOTTOM face comes into view (Branding)
- **360°** → Back to FRONT

---

## KEY PRINCIPLE:

All 4 faces have the same width (55rem) and height (12rem). They're positioned using:

1. **Z-axis (forward/backward):** ±6rem for front/back
2. **Y-axis (up/down):** ±6rem for top/bottom
3. **Rotation:** Aligned with their axis of rotation

---

## FOR SECTION TITLES:

Same principle applies, but with **5rem** instead of **6rem** (smaller cube):

```css
._3d-title-front { transform: translate3d(0, 0, 5rem); }
._3d-title-back { transform: translate3d(0, 0, -5rem) rotateX(180deg); }
._3d-title-top { transform: translate(0, -5rem) rotateX(90deg); }
._3d-title-bottom { transform: translate(0, 5rem) rotateX(-90deg); }
```

**Trigger:** Scroll-based instead of time-based
**Animation:** Same rotateX progression (0° → 90° → 180° → 270° → 360°)

---

## CRITICAL NOTES:

1. **Half-height rule:** Translate distance = container height / 2
2. **Rotation axis:** Always rotateX for vertical flipping
3. **Back face flip:** Must have rotateX(180deg) to face backward
4. **Top/Bottom tilt:** ±90deg to align perpendicular to front
5. **Seamless loop:** Use modulo operator to prevent value overflow



---

## EXACT MEASUREMENTS FROM LIVE SITE (Claude's Analysis)

### FRONT FACE:
- **Transform Origin:** 440px, 96px
- **Matrix:** `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 96, 1)`
- **Z Position:** +96px (forward)

### BACK FACE:
- **Transform Origin:** 440px, 96px  
- **Matrix:** `matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, -96, 1)`
- **Z Position:** -96px (backward)
- **Flip:** Both Y and Z axes inverted (backface rotated 180°)

### PARENT ROTATOR (cube container):
- **Transform Origin (pivot point):** 480px, 96px
- **Current rotation:** rotateX(variable)
  
### PERSPECTIVE CONTAINER:
- **Perspective:** 5000px
- **Perspective Origin:** 480px, 96px

### CUBE GEOMETRY:
- **Depth (Z-axis):** 192px total (96px front + 96px back)
- **Transform origin offset:** Front and back both pivot at 440px, 96px
- **Parent pivot:** 480px, 96px (where entire cube rotates)

---

## ANIMATION BEHAVIOR (GSAP-Driven)

### Technology:
- **GSAP 3.14.2** (GreenSock Animation Platform)
- **NOT CSS keyframes** - continuous requestAnimationFrame updates
- **transform-style: preserve-3d** on parent

### Actual Rotation Progression (Measured):
```
0ms:     81.45°     ← Starting mid-rotation
~500ms:  90.00°     ← HOLDS stable for ~700ms  
~2200ms: Starts moving again (90.03° → 100.82°)
~3500ms: 180.00°    ← HOLDS stable for ~1700ms
~5400ms: Starts moving again (180.10° → 261.29°)
~6000ms: Continues...
```

### KEY INSIGHT: PAUSE BEHAVIOR!
The animation **PAUSES** at each face:
- Rotates to 90° → **HOLD ~700ms**
- Rotates to 180° → **HOLD ~1700ms**
- Rotates to 270° → **HOLD**
- Rotates to 360° (0°) → **HOLD**

This creates the "resistance → release → pause" effect!

---

## IMPLEMENTATION REQUIREMENTS

### For Hero 3D Text:
```javascript
gsap.timeline({ repeat: -1 })
  .to('._3d-text-box', {
    rotateX: 90,
    duration: 1.5,
    ease: "power2.inOut"
  })
  .to('._3d-text-box', {
    rotateX: 90,
    duration: 0.7  // PAUSE
  })
  .to('._3d-text-box', {
    rotateX: 180,
    duration: 1.5,
    ease: "power2.inOut"
  })
  .to('._3d-text-box', {
    rotateX: 180,
    duration: 1.7  // PAUSE
  })
  .to('._3d-text-box', {
    rotateX: 270,
    duration: 1.5,
    ease: "power2.inOut"
  })
  .to('._3d-text-box', {
    rotateX: 270,
    duration: 0.7  // PAUSE
  })
  .to('._3d-text-box', {
    rotateX: 360,
    duration: 1.5,
    ease: "power2.inOut"
  })
  .to('._3d-text-box', {
    rotateX: 360,
    duration: 0.7  // PAUSE
  });
```

### CSS Requirements:
```css
._3d-text-front {
  transform: translate3d(0, 0, 96px) !important;
  transform-origin: 440px 96px;
}

._3d-text-back {
  transform: translate3d(0, 0, -96px) rotateX(180deg) !important;
  transform-origin: 440px 96px;
}

._3d-text-box {
  transform-style: preserve-3d !important;
  transform-origin: 480px 96px;
}

._3d-text-block {
  perspective: 5000px !important;
  perspective-origin: 480px 96px;
}
```

---

## FIXES THIS PROVIDES:

1. ✅ **Correct Z-offset:** 96px instead of 6rem
2. ✅ **Transform origins:** Exact pivot points
3. ✅ **Pause behavior:** Explains "resistance" effect
4. ✅ **GSAP timeline:** Proper animation sequencing
5. ✅ **Perspective distortion:** Real 3D effect

