# Growik Template - Component Map

**Purpose:** Component-based architecture conversion reference  
**Source:** Live site analysis (growik.webflow.io) + HTML structure  
**Date:** January 13, 2026

---

## 📋 Page Structure Overview

### **Layout Hierarchy**
```
App
├── Header (Navigation)
├── Hero Section
├── Brand Marquee
├── About Section
├── Services Section (Stacking Cards)
├── Projects Section (Case Studies)
├── Reviews Section (Testimonials)
├── Stats Section (Counter Numbers)
├── Packages Section (Pricing)
├── FAQ Section (Accordion)
├── CTA Section (Call to Action)
└── Footer
```

---

## 🧩 Component Breakdown

### **1. Header / Navigation**
**Component Name:** `<Header>`

**Props:**
- `logo` (string/image)
- `navItems` (array of links)
- `socialLinks` (array)
- `menuOpen` (boolean state)

**Structure:**
- Logo (left)
- Nav links (center): HOME, ABOUT US, CONTACT, CASE STUDIES
- Social icons (right): Twitter, Instagram, YouTube
- Mobile menu button

**Animations:**
- None (static)

**CSS Classes:**
- `.header`, `.nav-link`, `.social-icon`

---

### **2. Hero Section**
**Component Name:** `<HeroSection>`

**Props:**
- `line1Words` (array): ["MARKETING", "STRATEGY", "CONSULTING", "BRANDING"]
- `line2Phrases` (array): ["MADE SIMPLE", "THAT WORKS"]
- `videoShapes` (array of video URLs)
- `tagline` (string): "marketing Agency"
- `subtitle` (string): "Partners in Growth"

**Sub-components:**
- `<CubicText3D>` (line 1)
- `<MarqueeText>` (line 2 with video shapes)
- `<ScrollButton>` (floating badge)

**Animations:**
- 3D cubic text rotation with pauses
- Infinite horizontal marquee
- Spinning scroll badge

**CSS Classes:**
- `.hero-section`, `._3d-text-box`, `.scroll-text-wrapper`

---

### **3. Brand Marquee**
**Component Name:** `<BrandMarquee>`

**Props:**
- `brands` (array of logo images/names)
- `speed` (number): 30s
- `direction` (string): "left"

**Structure:**
- Infinite scrolling logo strip
- "PARTNERS IN GROWTH" label

**Animations:**
- Seamless infinite horizontal scroll

**CSS Classes:**
- `.brand-marquee`, `.logo-strip`

---

### **4. About Section**
**Component Name:** `<AboutSection>`

**Props:**
- `title` (string): "Marketing Meets Creativity"
- `description` (string)
- `ctaText` (string): "ABOUT US"
- `ctaLink` (string)

**Sub-components:**
- `<ShapeDecoration>` (animated shapes)

**Animations:**
- Fade in on scroll
- Shape scale/rotation

**CSS Classes:**
- `.about-section`, `.shape-wrapper`

---

### **5. Services Section**
**Component Name:** `<ServicesSection>`

**Props:**
- `services` (array of 4 service objects)
- `sectionTitle` (string): "SERVICES"

**Sub-components:**
- `<CubicText3D>` (section title)
- `<ServiceCard>` × 4 (stacking cards)

**Service Card Props:**
- `number` (string): "01", "02", "03", "04"
- `title` (string): "Strategy", "Branding", etc.
- `description` (string)
- `features` (array of strings)
- `videoUrl` (string): background video
- `scrollingText` (string): "Strategy ✺"

**Animations:**
- Section title: 3D rotation on scroll
- Cards: Stacking with pin effect
- Numbers: Count-up animation (00→01, 00→02, etc.)
- Scrolling text: Horizontal marquee (stops when pinned)
- Background video: Autoplay, muted

**CSS Classes:**
- `.services-section`, `.service-wrapper`, `.service-card`, `._3d-title-box`

---

### **6. Projects Section**
**Component Name:** `<ProjectsSection>`

**Props:**
- `projects` (array of 4 project objects)
- `sectionTitle` (string): "PROJECTS"

**Sub-components:**
- `<CubicText3D>` (section title)
- `<ProjectCard>` × 4

**Project Card Props:**
- `image` (string): project thumbnail
- `title` (string): "Involve", "Botify", etc.
- `year` (string): "2025", "2024", etc.
- `link` (string): "VIEW"

**Animations:**
- Section title: 3D rotation on scroll
- Cards: Fade in + slide up

**CSS Classes:**
- `.projects-section`, `.case-study-wrapper`, `._3d-title-box`

---

### **7. Reviews Section**
**Component Name:** `<ReviewsSection>`

**Props:**
- `reviews` (array of 6+ testimonial objects)
- `sectionTitle` (string): "REVIEWS"

**Sub-components:**
- `<CubicText3D>` (section title)
- `<TestimonialCard>` × 6+

**Testimonial Card Props:**
- `rating` (string): "5/5", "4.8/5", etc.
- `quote` (string)
- `authorName` (string)
- `authorTitle` (string)

**Animations:**
- Section title: 3D rotation on scroll
- Cards: Horizontal carousel/slider
- Fade in on scroll

**CSS Classes:**
- `.reviews-section`, `.testimonial-content-wrap`, `._3d-title-box`

---

### **8. Stats Section**
**Component Name:** `<StatsSection>`

**Props:**
- `stats` (array of 3 stat objects)

**Stat Object:**
- `value` (number): 15, 98, 200
- `suffix` (string): "+", "%", "+"
- `label` (string): "Of creative marketing experience", etc.

**Animations:**
- Count-up animation (0 → target number)
- Trigger: On scroll into view

**CSS Classes:**
- `.stats-section`, `.stat-counter`

---

### **9. Packages Section**
**Component Name:** `<PackagesSection>`

**Props:**
- `packages` (array of 3 pricing objects)
- `sectionTitle` (string): "PACKAGES"

**Sub-components:**
- `<CubicText3D>` (section title)
- `<PricingCard>` × 3

**Pricing Card Props:**
- `name` (string): "STARTER", "GROWTH", "PREMIUM"
- `price` (string): "$499 / month"
- `description` (string)
- `features` (array of strings)
- `videoUrl` (string): background video
- `guarantee` (string): "7-day money-back guarantee"

**Animations:**
- Section title: 3D rotation on scroll
- Cards: Fade in + slide up
- Background video: Autoplay, muted
- Tab switching animation

**CSS Classes:**
- `.packages-section`, `.pricing-card`, `._3d-title-box`

---

### **10. FAQ Section**
**Component Name:** `<FAQSection>`

**Props:**
- `faqs` (array of 6 FAQ objects)
- `sectionTitle` (string): "FAQ"

**Sub-components:**
- `<CubicText3D>` (section title)
- `<AccordionItem>` × 6

**Accordion Item Props:**
- `number` (string): "1", "2", etc.
- `question` (string)
- `answer` (string)
- `isOpen` (boolean state)

**Animations:**
- Section title: 3D rotation on scroll
- Accordion: Expand/collapse
- Fade in on scroll

**CSS Classes:**
- `.faq-section`, `.accordion-item`, `._3d-title-box`

---

### **11. CTA Section**
**Component Name:** `<CTASection>`

**Props:**
- `title` (string): "Boost Your Marketing Strategy Today"
- `scrollingText` (string): "Marketing"
- `ctaText` (string): "GET STARTED"
- `ctaLink` (string)

**Sub-components:**
- `<MarqueeText>` (infinite scroll)
- `<ExpandingCircles>` (animated background)

**Animations:**
- Infinite horizontal text scroll
- Expanding circles on scroll (alternating orange/black)
- CTA button hover effect

**CSS Classes:**
- `.cta-section`, `.scroll-text-wrapper`, `.circle-wrapper`

---

### **12. Footer**
**Component Name:** `<Footer>`

**Props:**
- `logo` (string/image)
- `contactInfo` (object): phone, email
- `navLinks` (array)
- `socialLinks` (array)
- `legalLinks` (array)

**Structure:**
- Logo + tagline
- Contact information
- Navigation columns
- Social icons
- Legal links (Flowaze, Webflow, Style Guide, Licenses, Changelog)

**Animations:**
- Logo rotation on scroll (optional)

**CSS Classes:**
- `.footer`, `.footer-logo`, `.footer-nav`

---

## 🎨 Reusable UI Components

### **A. CubicText3D**
**Used in:** Hero, Services, Projects, Reviews, Packages, FAQ

**Props:**
- `words` (array): Text for each face
- `size` (string): "hero" (6rem depth) or "section" (5rem depth)
- `autoRotate` (boolean): true for hero, false for sections
- `scrollTrigger` (object): for section titles

**Behavior:**
- Hero: Auto-rotates with pauses (90°, 180°, 270°, 360°)
- Sections: Scroll-triggered rotation

---

### **B. MarqueeText**
**Used in:** Hero line 2, Brand logos, Service cards, CTA

**Props:**
- `content` (string/array)
- `speed` (number): seconds per loop
- `direction` (string): "left" or "right"
- `videoShapes` (array): optional video elements between text
- `pauseOnPin` (boolean): for service cards

---

### **C. VideoShape**
**Used in:** Hero, Service cards, Pricing cards

**Props:**
- `src` (string): video URL
- `autoplay` (boolean): true
- `muted` (boolean): true
- `loop` (boolean): true
- `size` (string): dimensions

---

### **D. CounterNumber**
**Used in:** Service cards, Stats section

**Props:**
- `start` (number): 0 or 00
- `end` (number): target value
- `duration` (number): animation time
- `format` (string): "00" or "###"
- `trigger` (string): "scroll" or "immediate"

---

### **E. ScrollButton**
**Used in:** Hero section

**Props:**
- `text` (string): "SCROLL DOWN"
- `icon` (component): arrow video
- `speedUpOnScroll` (boolean): true

**Behavior:**
- Rotates continuously
- Speeds up when user scrolls

---

## 📊 Animation Summary

| Component | Animation Type | Trigger | Library |
|-----------|---------------|---------|---------|
| Hero 3D Text | Cubic rotation with pauses | Auto | GSAP Timeline |
| Section Titles | Cubic rotation | Scroll | GSAP ScrollTrigger |
| Marquees | Infinite horizontal scroll | Auto | GSAP |
| Service Cards | Stacking + pin | Scroll | GSAP ScrollTrigger |
| Counter Numbers | Count-up | Scroll | GSAP |
| Stats | Count-up | Scroll | GSAP |
| Expanding Circles | Scale from center | Scroll | GSAP |
| Fade-ins | Opacity + translate | Scroll | GSAP ScrollTrigger |

---

## 🎯 Component Architecture Recommendations

### **Folder Structure:**
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ReviewsSection.jsx
│   │   ├── StatsSection.jsx
│   │   ├── PackagesSection.jsx
│   │   ├── FAQSection.jsx
│   │   └── CTASection.jsx
│   ├── ui/
│   │   ├── CubicText3D.jsx
│   │   ├── MarqueeText.jsx
│   │   ├── VideoShape.jsx
│   │   ├── CounterNumber.jsx
│   │   ├── ScrollButton.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   └── PricingCard.jsx
│   └── animations/
│       ├── useGSAPAnimation.js
│       └── animationConfigs.js
├── assets/
│   └── videos/
└── styles/
    └── globals.css
```

### **State Management:**
- Use React Context for global state (menu open, active section)
- Local state for interactive components (accordion, tabs)

### **Animation Hooks:**
- `useGSAPAnimation()` - Custom hook for GSAP setup
- `useScrollTrigger()` - Scroll-based animations
- `useCountUp()` - Counter animations

---

## 📦 Dependencies

**Required Libraries:**
- GSAP 3.14.2
- ScrollTrigger plugin
- React (or Vue/Svelte)
- CSS Modules or Styled Components

**Video Assets:** 5 files (2.6MB total)
**Animation Code:** `claude_exact_animations.js` (ready to convert)

---

**Total Components:** 12 sections + 8 reusable UI components = **20 components**

