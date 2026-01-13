# Growik Template - GSAP Animation Analysis

## Overview
The Growik template uses **GSAP (GreenSock Animation Platform)** embedded within the HTML file. The template contains **960 GSAP references** and uses CSS transforms extensively for animations.

---

## Key Findings

### 1. **Animation Technology Stack**
- **GSAP Library**: Embedded in the HTML (not as external CDN)
- **CSS Transforms**: 191 transform properties found
- **CSS Transitions**: 7 transition properties
- **Webflow Classes**: 32 Webflow-specific references
- **Scroll Animations**: 45 scroll-related references

### 2. **No React/Next.js Components**
❌ **React**: Not found
❌ **Next.js**: Not found  
❌ **Vue/Angular/Svelte**: Not found

This is a **pure HTML/CSS/JavaScript** template with GSAP for animations.

---

## Page Structure & Animated Sections

### Main Sections (4 total)

#### **Section 1: Service Wrapper 01**
- **Classes**: `service-wrapper _01`
- **Has Transforms**: ✓ Yes
- **Has Scroll Refs**: ✓ Yes
- **Purpose**: First service section with scroll-triggered animations

#### **Section 2: Service Wrapper 02**
- **Classes**: `service-wrapper _02`
- **Has Transforms**: ✓ Yes
- **Has Scroll Refs**: ✓ Yes
- **Purpose**: Second service section with video content

#### **Section 3: Service Wrapper 03**
- **Classes**: `service-wrapper _03`
- **Has Transforms**: ✓ Yes
- **Has Scroll Refs**: ✓ Yes
- **Purpose**: Third service section with video content

#### **Section 4: Service Wrapper 04**
- **Classes**: `service-wrapper _04`
- **Has Transforms**: ✓ Yes
- **Has Scroll Refs**: ✓ Yes
- **Purpose**: Fourth service section

---

## Animated Elements by Class

### **Frequently Animated Classes**

| Class Name | Element Type | Count | Animation Type |
|------------|--------------|-------|----------------|
| `.social-icon` | div | 6 | Transform (hover effects) |
| `.menu-line` | div | 2 | Transform (menu animation) |
| `.top` | h2, div | 2 | Transform (split text animation) |
| `.bottom` | h2, div | 2 | Transform (split text animation) |
| `.case-study-wrapper` | div | 3 | Transform (scroll animation) |
| `.arrow` | div | 8 | Transform (directional animations) |
| `.testimonial-content-wrap` | div | 8 | Transform (carousel/slider) |
| `.scroll-text-wrapper` | div | 1 | Horizontal scrolling text |

### **Scroll-Related Elements**
- **Class**: `.scroll-text-wrapper.cta-scrolling-text`
- **Purpose**: Infinite horizontal scrolling text animation (marquee effect)

---

## Transform Animation Patterns

### **Common Transform Style**
```css
transform: translate3d(0px, 0%, 0px) 
           scale3d(1, 1, 1) 
           rotateX(0deg) 
           rotateY(0deg) 
           rotateZ(0deg) 
           skew(0deg);
transform-style: preserve-3d;
```

This is the **initial state** for GSAP animations. GSAP animates from/to these values.

---

## Webflow-Specific Features

### **Webflow Classes Found**
- `w-inline-block` - Inline block wrapper
- `w-embed` - Embedded content (SVG, custom code)
- `w-layout-grid` - CSS Grid layouts
- `w-layout-hflex` - Horizontal flexbox
- `w-nav` - Navigation component
- `w-button` - Button component
- `w-dyn-list` - Dynamic list
- `w-background-video` - Background video component
- `w-mod-js` - JavaScript enabled state
- `w-mod-ix` - Webflow interactions enabled

### **Webflow Data Attributes**
- `data-wf-domain` - Domain configuration
- `data-wf-page` - Page ID
- `data-wf-site` - Site ID

---

## Animation Locations Map

### **Where to Look on the Live Page**

1. **Hero Section** (Top of page)
   - Animated heading with split text (`.top`, `.bottom`)
   - Menu button animation (`.menu-line`)

2. **Social Icons** (Footer/Header)
   - Hover animations on social media icons (`.social-icon`)
   - 6 icons total with transform effects

3. **Service Sections** (Main content area)
   - 4 service sections (`.service-wrapper._01` through `._04`)
   - Each has scroll-triggered animations
   - Video content in sections 2, 3, 4

4. **Case Studies** (Portfolio section)
   - 3 case study cards (`.case-study-wrapper`)
   - Scroll-triggered entrance animations

5. **Testimonials** (Reviews section)
   - 8 testimonial cards (`.testimonial-content-wrap`)
   - Likely carousel/slider animation

6. **Arrows/Navigation** (Throughout page)
   - 8 arrow elements (`.arrow._01`, `.arrow._02`, etc.)
   - Directional indicators with animations

7. **Scrolling Text Banner** (CTA section)
   - Infinite horizontal scroll (`.scroll-text-wrapper.cta-scrolling-text`)
   - Marquee-style animation

---

## Next Steps for Reverse Engineering

To identify the exact GSAP animation code, we need to:

1. **View the live page** at: https://8080-it4zcurlmkk9gdv7ned7f-d32d5549.us2.manus.computer

2. **Observe which animations occur**:
   - On page load
   - On scroll (scroll-triggered)
   - On hover
   - On click

3. **Note the animation properties**:
   - What moves? (translateX, translateY)
   - What scales? (scale)
   - What rotates? (rotate)
   - What fades? (opacity)
   - Duration and easing

4. **Extract the GSAP code** from the embedded JavaScript in the HTML

---

## Technical Notes

- **File Size**: 14MB (self-contained with all assets embedded)
- **Format**: Single HTML file with inline CSS and JavaScript
- **GSAP Version**: Embedded (need to extract to determine version)
- **Browser Compatibility**: Modern browsers with CSS3 transform support
- **Performance**: Uses `transform3d` and `preserve-3d` for GPU acceleration

