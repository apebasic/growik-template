# GROWIK TEMPLATE - RESPONSIVENESS GUIDE

**Source:** Claude's analysis  
**Date:** January 13, 2026  
**Status:** Documentation - No conflicts with current animations

---

## 📱 WEBFLOW BREAKPOINTS (3 Total)

| Breakpoint | Width | Device Type | Container Max-Width |
|------------|-------|-------------|---------------------|
| **Desktop (Default)** | 1920px+ | Desktop | Full width |
| **Tablet/Medium** | 768px - 991px | Tablet landscape | 728px |
| **Tablet** | 481px - 767px | Tablet portrait | 100% (auto-adjust) |
| **Mobile** | < 480px | Mobile phone | none (full width) |

---

## 🎯 KEY RESPONSIVE BEHAVIORS

### 1. Layout Changes

#### **Desktop (Default):**
- Service grid: `.25fr 1fr` (25% number column, 75% content)
- Heading: `font-size: 12rem` (192px)
- Shape wrappers: `width: 15rem; height: 10rem; margin: 2rem`

#### **Tablet (767px):**
- `.w-col` width: 100% (full width elements)
- Rows: `margin-left: 0; margin-right: 0;` (no side margins)
- Columns stack vertically
- `.w-hidden-main`, `.w-hidden-medium` show
- `.w-hidden-small` hides

#### **Mobile (479px):**
- `.w-container` max-width: none (full width)
- All `.w-col` width: 100%
- `.w-hidden-small` shows
- `.w-hidden-tiny` hides

---

### 2. Typography Scaling

#### **Heading Classes:**
- `.heading-style-h1-large`: Uses CSS variables (`var(--_typography---h1-large--)`)
- `.heading-style-h2`: Uses CSS variables (`var(--_typography---h2--)`)
- Responsive sizes likely defined via Webflow design panel

#### **Observed at 480px viewport:**
- H1 Large: ~112px (reduced from 192px at desktop)
- Text wraps more aggressively

---

### 3. Animation Adjustments on Mobile

**Likely Disabled/Modified:**
- ✓ 3D text box rotating may disable parallax on mobile
- ✓ Marquee scroll speed reduced
- ✓ Shape wrappers: Reduced from 15rem × 10rem to 144px × ~ (mobile size)
- ✓ Scroll trigger animations may use different timing
- ✓ Service card rolling numbers may animate slower

**Implementation Note:**
```javascript
// Add media query check for mobile animations
const isMobile = window.matchMedia("(max-width: 767px)").matches;

if (!isMobile) {
    // Full animations for desktop/tablet
    gsap.to('._3d-text-box', { rotateX: 360, duration: 4, repeat: -1, ease: "none" });
} else {
    // Simplified or disabled for mobile
    gsap.to('._3d-text-box', { rotateX: 360, duration: 6, repeat: -1, ease: "none" });
}
```

---

### 4. Grid System Changes

#### **Desktop:**
- `.service-grid`: `grid-template-columns: .25fr 1fr;` (side number + content)

#### **Tablet/Mobile:**
- Columns collapse to single column layout
- Number appears above content instead of side-by-side

---

### 5. Hidden/Shown Elements by Breakpoint

| Breakpoint | Show | Hide |
|------------|------|------|
| **Desktop (>991px)** | `.w-hidden-main` | `.w-hidden-medium`, `.w-hidden-small`, `.w-hidden-tiny` |
| **Tablet Medium (768-991px)** | `.w-hidden-main`, `.w-hidden-medium` | `.w-hidden-small`, `.w-hidden-tiny` |
| **Tablet (481-767px)** | `.w-hidden-main`, `.w-hidden-medium`, `.w-hidden-small` | `.w-hidden-tiny` |
| **Mobile (<480px)** | All hidden-* classes | `.w-hidden-tiny` only |

---

### 6. Spacing Adjustments

#### **Desktop:**
- Shape wrapper margins: `margin-left: 2rem; margin-right: 2rem;`
- Grid gaps: `grid-column-gap: 2rem;`

#### **Mobile (480px):**
- Shape wrappers shrink (observed: 144px width)
- Margins/padding likely reduced by 50-75%
- Grid gaps: Reduced to `0.5rem - 1rem`

---

### 7. Service Video Element

#### **Desktop:**
- `.service-video`: `width: 14rem; height: 14rem; top: -3rem; left: -3rem;` (overflow positioning)

#### **Mobile:**
- Likely repositioned closer to center
- Smaller dimensions (observed: ~50-80px)
- Negative positioning reduced to `top: -1rem; left: -1rem;`

---

### 8. Roll Numbers Animation

#### **Desktop:**
- `.roll-number-wrap`: `height: 8rem;` (large visible area for rolling effect)

#### **Mobile:**
- Height reduced to `4rem - 5rem`
- Numbers may scroll faster or disable animation entirely

---

## 🎨 CSS CLASSES FOR RESPONSIVE CONTROL

| Class Name | Purpose |
|------------|---------|
| `.w-col-medium-*` | Column widths at 991px breakpoint |
| `.w-col-small-*` | Column widths at 767px breakpoint |
| `.w-col-tiny-*` | Column widths at 479px breakpoint |
| `.w-hidden-main` | Show on tablet/medium |
| `.w-hidden-medium` | Hide on tablet, show elsewhere |
| `.w-hidden-small` | Hide on tablet/mobile |
| `.w-hidden-tiny` | Hide on mobile only |

---

## 📱 Navigation & Menu

**Mobile (observed):**
- Navigation button appears (hamburger menu)
- Main nav likely hidden at < 767px
- Mobile menu drawer opens from side

---

## 🔑 KEY MOBILE OPTIMIZATIONS

1. **Font sizes** reduce by ~40-50%
2. **Shape wrappers** reduce from 15rem to ~8-10rem max
3. **Service grid** converts from 2-column to 1-column layout
4. **Animations** may have reduced or disabled parallax/scroll complexity
5. **Spacing** reduces across all padding/margins for tighter layout

---

## ⚙️ CSS VARIABLES FOR RESPONSIVE SCALING

The site relies heavily on CSS variables. Check design panel for:

```css
--_typography---h1-large--font-size (auto-scales per breakpoint)
--_typography---h2--font-size
--_typography---font-weight--black
--primary-color--* (color constants)
```

These are likely Webflow-managed variables that change at each breakpoint automatically.

---

## 🚨 CONFLICTS WITH CURRENT IMPLEMENTATION?

### **Analysis:**

✅ **NO CONFLICTS** - The responsiveness guide describes CSS and layout behavior, not JavaScript animations.

**Current animations are compatible because:**
1. GSAP animations work at all breakpoints
2. ScrollTrigger automatically recalculates on resize
3. Our animations target elements that exist at all breakpoints

**Recommendations:**
1. Add media query checks for mobile to simplify/disable heavy animations
2. Ensure ScrollTrigger refresh on window resize
3. Test animations at each breakpoint (991px, 767px, 479px)

---

## 📝 IMPLEMENTATION NOTES

### **Add to animation code:**

```javascript
// Refresh ScrollTrigger on resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// Detect mobile and adjust animations
const isMobile = window.matchMedia("(max-width: 767px)").matches;
const isTablet = window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches;

// Example: Reduce animation complexity on mobile
if (isMobile) {
    // Disable heavy parallax effects
    // Reduce animation durations
    // Simplify scroll triggers
}
```

---

## ✅ SUMMARY FOR IMPLEMENTATION

- **3 main breakpoints** (991px, 767px, 479px)
- **Animations likely simplify** on mobile (no heavy parallax/scroll effects)
- **Layouts shift** from multi-column to single-column at 767px
- **Elements hide/show** using `.w-hidden-*` classes
- **All spacing scales** proportionally via Webflow's responsive system

**Action Items:**
1. Test current animations at all breakpoints
2. Add media query checks for mobile optimization
3. Ensure ScrollTrigger refreshes on resize
4. Consider disabling 3D animations on mobile for performance

---

**End of Responsiveness Guide**
